import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import Navbar from './Components/Navbar'
//import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Getstarted from './Components/Getstarted';
import Sidebar from './Components/pages/Sidebar';
import Home from './Components/pages/Home';
import Analytics from './Components/pages/Analytics';
import Digitalcore from './Components/pages/Digitalcore';
import Architecture from './Components/pages/Architecture';
import Documentation from './Components/pages/Documentation';
import Team from './Components/pages/Team';
import Search from './Components/pages/Search';

const App = () => {
  return (
    <div className="App">
      
      <Router>
      {/* <Navbar/> */}
        <Routes>
        {/* <Route path="/" element={<Homepage/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/getstarted" element={<Getstarted/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/" element={<Digitalcore/>} />
        <Route path="/architecture" element={<Architecture/>} />
        <Route path="/documentation" element={<Documentation/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/search" element={<Search/>} />
        

        </Routes>
      </Router>

    </div>
  )
}

export default App