
import './App.css';
import BasicDaoImg from './b-dao.png';
import Voter2 from './Voter2';
import Voter1 from './Voter1'; 
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import { useState } from 'react';
import * as backend from './backend.mjs';
function Voter3(props) {

    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [contractId, setContractId] = useState("");
    const [votedIdea, setVotedIdea] = useState("")
    const [stdlib, setStdLib] = useState(undefined);
    const [idea1, setIdea1]  = useState("");
    const [idea2, setIdea2] = useState("");
    const viewIdeas = async() => {
        setLoading(true);
        const ctc = account.contract(backend, contractId);
        const get = ctc.v.State;
        console.log(get)
        let state = await get.ideaAndAdddress();
        const idea1 = state[1][0].project
        const idea2 = state[1][1].project
        setIdea1(`1. ${idea1}`);
        setIdea2(`2. ${idea2}`);
        setLoading(false);
    }

    const connectToWallet = async() => {
        if(account){
            navigator.clipboard.writeText(account.networkAccount.addr);
            const address = account.networkAccount.addr;
            const newAcc = {networkAccount: {addr:"copied"}}
            setAccount(newAcc);
            setTimeout(()=> {
                account.networkAccount.addr = address
                setAccount(account);
            }, 500)
            return;
        }
        const stdlib = loadStdlib("ALGO");
        stdlib.setWalletFallback(
            stdlib.walletFallback({
            providerEnv: 'TestNet', MyAlgoConnect 
            })
        );
        const lAccount = await stdlib.getDefaultAccount();
        setAccount(lAccount);
        setStdLib(stdlib);
        return{account, stdlib};
        }
        const handleProceedButton = async() => {
            //start loader
            setLoading(true);
            const ctcVoter3 = account.contract(backend, contractId);
            await ctcVoter3.p.Voter3({
              vote: async() =>  votedIdea,
              seeOutcome: async(vote1, vote2, vote3) => {alert(`${vote1} ${vote2} ${vote3}`)}
            });
            setLoading(false);
            //stop loader
        }

  return (
    <div className="App">
      <div className='container'>
      { loading ? <div className='loader'></div> : null}
        <div className='content'>
             <button className='connect-btn' onClick={connectToWallet}> { account ?  account.networkAccount.addr : "Connect"}</button>
            <button className='voter-btn' onClick={() => props.navigateTo(<Voter1 navigateTo ={props.navigateTo}></Voter1>)}>Voter1</button>
            <button className='voter-btn' onClick={() => props.navigateTo(<Voter2 navigateTo ={props.navigateTo}></Voter2>)}>Voter2</button>
            <button className='voter-btn' onClick={() => props.navigateTo(<Voter3 navigateTo ={props.navigateTo}></Voter3>)}>Voter3</button>
            <input className='idea1' placeholder='Contract id' value={contractId} onChange={(event)=> setContractId(event.target.value)}></input>
            <button className='proceed' onClick={viewIdeas}>Fetch ideas</button>
            <p className='c-bd-txt' style={{marginTop: "10px"}}>{idea1}</p>
            <p className='c-bd-txt' style={{marginTop: "10px"}}>{idea2}</p>
            <input className='idea1' placeholder='10 character idea' value={votedIdea} onChange={(event)=> setVotedIdea(event.target.value)}></input>
            <button className='proceed' onClick={handleProceedButton}>Proceed</button>

        </div>

        <div className='disp-img'> 
        <p className='c-bd-txt'> Charles BasicDao</p>
        <img className='b-d-img' src={BasicDaoImg} alt="horse" />
        </div>

      </div>
    </div>
  );
}

export default Voter3;


