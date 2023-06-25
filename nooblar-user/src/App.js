// import { createContext, useContext, useState } from 'react';
// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './assets/img/VectorLogoNooblar.svg';
import fakepp from './assets/img/fakePP.png';
import fakeppdidi from './assets/img/fakeppdidiane.jpeg'
import defaultPP from './assets/img/defaultPP.png'
import './App.css';
import { toggleSideBarNotifs, toggleSideBarProfile } from './Global'
import Icons from './components/Icons';
import SideBarProfile from './components/SideBarProfile';
import SideBarNotifs from './components/SideBarNotifs';
import ConnectionPage from './components/ConnectionPage';
import RegistrationPage from './components/RegistrationPage';
import ListUsers from './components/ListUsers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionPage from './components/SessionPage'
import CalendarPage from "./components/CalendarPage";
import { PrivateRoutes } from './components/PrivateRoutes'
// let user_data = {
//   name: "Rémy Covillon",}

const username = localStorage.getItem('name');
const useremail = localStorage.getItem('email');
const userstudent = localStorage.getItem('student');
const userimage = localStorage.getItem('imagesource');
const user_data = {
  name: username,
  description: "Student, need help for maths...",
  email: useremail,
  student: userstudent,
  pp: userimage,
  pp2: fakeppdidi
}

function App() {
  let isHidden = true; // "hidden" or "visible"

  const userDataImage = localStorage.getItem('image');
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    if (userDataImage) {
      const base64Image = "data:image/png;base64," + userDataImage;
      setImageSource(base64Image);
    }
  }, [userDataImage]);


  console.log(localStorage);

  if (localStorage.getItem('name')) {
    console.log('exists');
  } else {
    console.log('dont exists');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nooblar</h1>
        </div>

        {localStorage.getItem('name') ? (
          <a href="/">
            <Icons type="home_ico" />
          </a>
        ) : ('')}

        {localStorage.getItem('name') ? (
          <div className='App-buttons-container'>
            <button onClick={toggleSideBarNotifs} className='button-transparent'>
              <Icons type="notif_ico" />
            </button>
            <button onClick={toggleSideBarProfile} className='button-transparent'>
              <img src={user_data.pp || (user_data.pp).substring(22, 26) == 'null' ? defaultPP : user_data.pp} className="User-pp" alt="ProfilPic" />
            </button>
          </div>
        ) : ('')}




      </header>

      <div className='App-element'>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route index element={<CalendarPage />} />
              <Route path="/findsession/:date?" element={<ListUsers isStudent={user_data.student} />} />
              <Route path="/session/:id" element={<SessionPage />} />
            </Route>
            <Route path="/login" element={<ConnectionPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>

      </div>


      <SideBarProfile user_data={user_data} hidden={isHidden} />
      <SideBarNotifs user_data={user_data} hidden={isHidden} />









    </div>
  );
}

export default App;