'reach 0.1';

const IdeaAndAddressType = Object({
    addr: Address,
    project: Bytes(10)
});
const DeployerInteract = {
    setIdeaAndAddresses: Fun([], Array(IdeaAndAddressType, 2)),
    setVoterAddresses: Fun([], Array(Address, 3)),
    setAmountToVoteOn: Fun([], UInt),
    seeOutcome: Fun([Bytes(10), Bytes(10), Bytes(10)], Null)
}

const VoterInteract = {
    vote: Fun([Array(IdeaAndAddressType, 2)], Bytes(10)),
    seeOutcome: Fun([Bytes(10), Bytes(10), Bytes(10)], Null)
}

export const main = Reach.App(() => {
    const Deployer = Participant("Deployer", {
        ...DeployerInteract
    });

    const Voter1 = Participant("Voter1", {
        ...VoterInteract
    });
    const Voter2 = Participant("Voter2", {
        ...VoterInteract
    });
    const Voter3 = Participant("Voter3", {
        ...VoterInteract
    });
    const State = View("State", {
        ideaAndAdddress: Array(IdeaAndAddressType, 2)
    })
    init();

    const seeOutcome = (vote1, vote2, vote3) => {
        each([Deployer, Voter1, Voter2, Voter3], ()=> {  //should have user 3
          interact.seeOutcome(vote1, vote2, vote3);
        })
      };

   
    Deployer.only(() => {
        const ideaAndAddresses = declassify(interact.setIdeaAndAddresses());
        const voterAddresses = declassify(interact.setVoterAddresses());
        const amountToVoteOn = declassify(interact.setAmountToVoteOn());
    });
    Deployer.publish(ideaAndAddresses, voterAddresses, amountToVoteOn);
    State.ideaAndAdddress.set(ideaAndAddresses);
    commit();
    Deployer.pay(amountToVoteOn);
    commit();


    Voter1.only(() => {
        const vote1 = declassify(interact.vote(ideaAndAddresses));
        assume(vote1 == ideaAndAddresses[0].project || vote1 ==ideaAndAddresses[1].project)
        check(voterAddresses.count((el)=> el == this) >=1, "not a valid voter" )
    });
    Voter1.publish(vote1);
    check(voterAddresses.count((el)=> el == Voter1) >=1, "not a valid voter" )
    require(vote1 == ideaAndAddresses[0].project || vote1 ==ideaAndAddresses[1].project)
    commit();
    
    Voter2.only(() => {
        const vote2 = declassify(interact.vote(ideaAndAddresses));
        assume(vote2 == ideaAndAddresses[0].project || vote2 ==ideaAndAddresses[1].project)
        check(voterAddresses.count((el)=> el == this) >=1, "not a valid voter" )
    });
    Voter2.publish(vote2);
    check(voterAddresses.count((el)=> el == Voter2) >=1, "not a valid voter" );
    require(vote2 == ideaAndAddresses[0].project || vote2 ==ideaAndAddresses[1].project)
    commit();
    
    Voter3.only(() => {
        const vote3 = declassify(interact.vote(ideaAndAddresses));
        assume(vote3 == ideaAndAddresses[0].project || vote3 ==ideaAndAddresses[1].project)
        check(voterAddresses.count((el)=> el == this) >=1, "not a valid voter" )
    });
    Voter3.publish(vote3);
    check(voterAddresses.count((el)=> el == Voter3) >=1, "not a valid voter" );
    require(vote3 == ideaAndAddresses[0].project || vote3 ==ideaAndAddresses[1].project)

    if(vote1 == ideaAndAddresses[0].project && vote2 == ideaAndAddresses[0].project){transfer( amountToVoteOn).to(ideaAndAddresses[0].addr)} 
    else if(vote1 == ideaAndAddresses[1].project && vote2 ==ideaAndAddresses[1].project){transfer(amountToVoteOn).to(ideaAndAddresses[1].addr)}
    else if(vote1 == ideaAndAddresses[0].project && vote3 == ideaAndAddresses[0].project){transfer(amountToVoteOn).to(ideaAndAddresses[0].addr)} 
    else if(vote1 ==ideaAndAddresses[1].project && vote3 ==ideaAndAddresses[1].project){transfer(amountToVoteOn).to(ideaAndAddresses[1].addr)}
    else if(vote2 ==ideaAndAddresses[1].project && vote3 ==ideaAndAddresses[1].project){transfer(amountToVoteOn).to(ideaAndAddresses[1].addr)}
    else if(vote2 == ideaAndAddresses[0].project && vote3 == ideaAndAddresses[0].project){transfer(amountToVoteOn).to(ideaAndAddresses[0].addr)}

    seeOutcome(vote1, vote2, vote3);
    commit();
    exit();
});