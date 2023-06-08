import { createContext, useContext, useState } from 'react';
import React from 'react';
import logo from './assets/img/logoNooblar.png';
import fakepp from './assets/img/fakePP.png';
import './App.css';
import toggleSideBar from './Global'
import {makeBubbles} from './Global'


import SideBar from './components/SideBar';

const user_data = {
  name: "Rémy Covillon",
  description: "Student at CESI, need help for",
  email: "rcovillon@gmail.com",
  student: 1,
  pp: fakepp

}

function App() {
  makeBubbles();

  let sideBarHidden = true; // "hidden" or "visible"

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nooblar</h1>
        </div>
        <button onClick={toggleSideBar} className='button-pp'>
          <img src={user_data.pp} className="User-pp" alt="user profile pic" />
        </button>        
      </header>


      <div className='App-element'>

      </div>

      <SideBar user_data={user_data} hidden={sideBarHidden} />
    </div>
  );
}

export default App;