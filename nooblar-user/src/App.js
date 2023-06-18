import { createContext, useContext, useState } from 'react';
import React from 'react';
import logo from './assets/img/VectorLogoNooblar.svg';
import fakepp from './assets/img/fakePP.png';
import './App.css';
import { makeBubbles, toggleSideBarNotifs, toggleSideBarProfile } from './Global'
import Icons from './components/Icons';
import SideBarProfile from './components/SideBarProfile';
import SideBarNotifs from './components/SideBarNotifs';
import ConnectionPage from './components/ConnectionPage';
import RegistrationPage from './components/RegistrationPage';
import ListUsers from './components/ListUsers';

let user_data = {
  name: "Rémy Covillon",
  description: "Student, need help for maths...",
  email: "rcovillon@gmail.com",
  student: 1,
  pp: fakepp

}

function App() {
  let isHidden = true; // "hidden" or "visible"

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nooblar</h1>
        </div>

        <div className='App-buttons-container'>
          <button onClick={toggleSideBarNotifs} className='button-transparent'>
            <Icons type="notif_ico" />
          </button>
          <button onClick={toggleSideBarProfile} className='button-transparent'>
            <img src={user_data.pp} className="User-pp" alt="user profile pic" />
          </button>
        </div>
      </header>

      <div className='App-element'>
        <ConnectionPage />
        <RegistrationPage hidden={isHidden} />
        <ListUsers isStudent={user_data.student} date={"date"} />
      </div>

      <SideBarProfile user_data={user_data} hidden={isHidden} />
      <SideBarNotifs user_data={user_data} hidden={isHidden} />
    </div>
  );
}

export default App;