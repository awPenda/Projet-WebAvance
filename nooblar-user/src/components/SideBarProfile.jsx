import React, { useState, useEffect } from 'react';
import Icons from './Icons';
import EditProfile from './EditProfile';
import { toggleSideBarProfile, displayEditProfile } from '../Global';
import axios from 'axios';

export default function SideBarProfile({ user_data, hidden }) {
  const userDataImage = localStorage.getItem('image');
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    if (userDataImage) {
      const base64Image = "data:image/png;base64," + userDataImage;
      setImageSource(base64Image);
    }
  }, [userDataImage]);

  localStorage.setItem('imagesource', imageSource);

  const handleLogout = () => {
    axios
      .post('http://localhost:8000/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        console.log(response.data.message);
        // Supprimer les informations de l'utilisateur du localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('image');
        localStorage.removeItem('email');
        localStorage.removeItem('student');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

        localStorage.clear();
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div id="SideBarProfile" className="SideBar SideBar-profile" style={{ visibility: hidden ? "hidden" : "visible" }}>
      <button onClick={toggleSideBarProfile} className='button-close'>
        <Icons type="close_ico" />
        Close
      </button>

      <div className='Profile-box' id="Profile-box">
        <img src={imageSource} className="User-pp" alt="user profile pic" />

        <button className='button-logout' onClick={handleLogout}>
          Log out
          <Icons type={"logout_ico"} />
        </button>

        <div className='profile-text'>
          <b>{user_data.name}</b>
          <b>{user_data.email}</b>
          <div>
            {user_data.description}
          </div>
          <input type="button" value="Edit Profile" className="button-link-accent" onClick={displayEditProfile} />
        </div>
      </div>

      <EditProfile />
    </div>
  );
}
