import logo from './logo.svg';
import './App.css';
import BasicDaoImg from './b-dao.png';
import Voter1 from './Voter1';
import Voter2 from './Voter2';
import Voter3 from './Voter3'; 
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import { useState } from 'react';
import * as backend from './backend.mjs';

function Deployer(props) {

    const [account, setAccount] = useState(null);
    const [idea1, setIdea1]  = useState("");
    const [idea2, setIdea2] = useState("");
    const [idea1FundAddress, setIdea1FundAddress] = useState("");
    const [idea2FundAddress, setIdea2FundAddress] = useState("");
    const [validVoterAddress1, setValidVoterAddress1] = useState("");
    const [validVoterAddress2, setValidVoterAddress2] = useState("");
    const [validVoterAddress3, setValidVoterAddress3] = useState("");
    const [stdlib, setStdLib] = useState(undefined);
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [contractId, setContractId] = useState("");

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
        const ctcDeployer = account.contract(backend);
        ctcDeployer.getInfo().then((info) => {
            setContractId(info);
            console.log(info);
        });
        await ctcDeployer.p.Deployer({
            setIdeaAndAddresses: async() => [{addr: idea1FundAddress, project: idea1}, {addr: idea2FundAddress, project: idea2}],
            setVoterAddresses: async() => [validVoterAddress1, validVoterAddress2, validVoterAddress3],
            setAmountToVoteOn: async() => stdlib.parseCurrency(amount),
            seeOutcome: async(vote1, vote2, vote3) => {alert(`${vote1} ${vote2} ${vote3}`)}
        });
        setLoading(false);
        //stop loader
    }
    const copyContractId = async() => {
        if(contractId){
            navigator.clipboard.writeText(`${contractId.toNumber()}`);
            const cId = contractId;
            setContractId({toNumber: () => "copied"});
            setTimeout(() => {
                setContractId(cId)
            }, 500)
        }
    }
  return (
    <div className="App">
      <div className='container'>
        { loading ? <div className='loader'></div> : null}
        <div className='content'>
            <button className='connect-btn' onClick={connectToWallet}> { account ?  account.networkAccount.addr : "Connect"}</button>
            <button className='voter-btn'  onClick={() => props.navigateTo(<Voter1 navigateTo ={props.navigateTo}></Voter1>)}>Voter1</button>
            <button className='voter-btn' onClick={() => props.navigateTo(<Voter2 navigateTo ={props.navigateTo}></Voter2>)}>Voter2</button>
            <button className='voter-btn' onClick={() => props.navigateTo(<Voter3 navigateTo ={props.navigateTo}></Voter3>)}>Voter3</button>
            { contractId ? <button className='voter-btn' style={{position: "absolute", right: "35%"}} onClick={copyContractId}>Contract Id :{`${contractId.toNumber()}`}</button>: null}
            <input className='idea1' maxLength="10" placeholder='10 character idea' value={idea1} onChange= {(event) => setIdea1(event.target.value)}></input>
            <input className='idea2' maxLength="10" placeholder='10 character idea' value={idea2} onChange= {(event) => setIdea2(event.target.value)}></input>
            <input className='address-f-fi' placeholder='First ideas fund address' value={idea1FundAddress} onChange= {(event) => setIdea1FundAddress(event.target.value)}></input>
            <input className='address-f-fii' placeholder='Second ideas fund address'  value={idea2FundAddress} onChange= {(event) => setIdea2FundAddress(event.target.value)}></input>
            <input className='address-v-i' placeholder='Valid voter address'  value={validVoterAddress1} onChange= {(event) => setValidVoterAddress1(event.target.value)}></input>
            <input className='address-v-ii' placeholder='Valid voter address' value={validVoterAddress2} onChange= {(event) => setValidVoterAddress2(event.target.value)}></input>
            <input className='address-v-ii' placeholder='Valid voter address' value={validVoterAddress3} onChange= {(event) => setValidVoterAddress3(event.target.value)}></input>
            <input className='amount' placeholder='Amount to fund the project' type={"number"} value={amount} onChange= {(event) => setAmount(event.target.value)}></input>

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

export default Deployer;
