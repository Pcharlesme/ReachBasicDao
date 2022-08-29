import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BasicDaoImg from './b-dao.png';
import Deployer from './DeployerScreen';
import Voter1 from './Voter1';
import Voter2 from './Voter2';
import Voter3 from './Voter3';  


function App() {
  const navigateTo = (page) => {
    setPresentPage(page);
  }
  let [presentPage, setPresentPage] = useState(<Deployer navigateTo ={navigateTo}></Deployer>);
  
  return (
    <div>
        {presentPage}
    </div>

  );
}

export default App;
