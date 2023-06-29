// import { createContext, useContext, useState } from 'react';
// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './assets/img/VectorLogoNooblar.svg';
import fakepp from './assets/img/fakePP.png';
import fakeppdidi from './assets/img/fakeppdidiane.jpeg'
import defaultPP from './assets/img/defaultPP.png'
import './App.css';
import { toggleSideBarNotifs, toggleSideBarProfile, postnotif } from './Global'
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
import LandingPage from './components/LandingPage'
import Sources from './components/Sources'
import BookSession from './components/BookSession';

// let user_data = {
//   name: "Rémy Covillon",}

const username = localStorage.getItem('name');
const useremail = localStorage.getItem('email');
const userstudent = localStorage.getItem('student');
const userimage = localStorage.getItem('imagesource');
const description = localStorage.getItem('description');
const user_data = {
  name: username,
  description: description,
  email: useremail,
  student: userstudent,
  pp: `data:image/png;base64,${localStorage.getItem('image')}`,
  pp2: fakeppdidi
}

function App() {
  let isHidden = true; // "hidden" or "visible"
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <a href='/landing'><img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">Nooblar</h1>
        </div>

        {localStorage.getItem('name') ? (
          <a href="/">
            <Icons type="home_ico" />
          </a>
        ) : (
          <div>
          </div>
        )}

        {localStorage.getItem('name') ? (
          <div className='App-buttons-container'>
            <button onClick={toggleSideBarNotifs} className='button-transparent'>
              <Icons type="notif_ico" />
            </button>
            <button onClick={toggleSideBarProfile} className='button-transparent'>
              <img src={(user_data.pp).substring(22, 26) == 'null' ? defaultPP : user_data.pp} className="User-pp" alt="ProfilPic" />
            </button>
          </div>
        ) : (
          <input type="button" value="Sign Up Now" className='main_color_btn' onClick={() => { window.location.href = "/registration" }} />
        )}



      </header>

      <div className='App-element'>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route index element={<CalendarPage />} />
              <Route path="/findsession/:date?" element={<ListUsers isStudent={user_data.student} />} />
              <Route path="/session/:id" element={<SessionPage />} />
              <Route path="/booksession/:date/:askedUser/:isbooked?/:id?" element={<BookSession />} />
            </Route>
            <Route path="/login" element={<ConnectionPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/sources' element={<Sources />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>

      </div>

      {localStorage.getItem('name') ? (<>
        <SideBarProfile user_data={user_data} hidden={isHidden} />
        <SideBarNotifs user_data={user_data} hidden={isHidden} />
      </>) : (
        ''
      )}









    </div>
  );
}

export default App;