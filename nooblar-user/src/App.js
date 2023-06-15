import { createContext, useContext, useState } from 'react';
import React from 'react';
import logo from './assets/img/VectorLogoNooblar.svg';
import fakepp from './assets/img/fakePP.png';
import fakeppdidi from './assets/img/fakeppdidiane.jpeg';
import fakeppalex from './assets/img/fakeppalex.jpeg';
import fakepplundy from './assets/img/fakepplunndy.jpeg';
import './App.css';
import { makeBubbles, toggleSideBarNotifs, toggleSideBarProfile } from './Global'
import Icons from './components/Icons';
import SideBarProfile from './components/SideBarProfile';
import SideBarNotifs from './components/SideBarNotifs';
import ConnectionPage from './components/ConnectionPage';
import RegistrationPage from './components/RegistrationPage';
import ListUsers from './components/ListUsers';

const user_data = {
  name: "Rémy Covillon",
  description: "Student, need help for maths...",
  email: "rcovillon@gmail.com",
  student: 1,
  pp: fakepp

}

const other_users_data = [
  {
    name: "Didiane Brunelle",
    description: "Excellent German teacher ;)",
    email: "dbrunelle@gmail.com",
    student: 0,
    pp: fakeppdidi
  },
  {
    name: "Alexandre Chalifour",
    description: "Math expert",
    email: "alexmath@gmail.com",
    student: 0,
    pp: fakeppalex
  },
  {
    name: "Lundy Lépicier",
    description: "Stoupid",
    email: "lundyyyy@gmail.com",
    student: 1,
    pp: fakepplundy
  },

]

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
        <ListUsers other_users_data={other_users_data} isTutor={user_data.student} date={"date"} />
      </div>

      <SideBarProfile user_data={user_data} hidden={isHidden} />
      <SideBarNotifs user_data={user_data} hidden={isHidden} />
    </div>
  );
}

export default App;