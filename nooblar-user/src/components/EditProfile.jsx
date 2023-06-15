import React, { useState } from 'react';
import fakepp from '../assets/img/fakePP.png';
import Icons from './Icons';
import { makeBubbles, toggleSideBarNotifs, displayEditProfile, toggleSideBarProfile } from '../Global';
import axios from 'axios';

export default function SideBarProfile({ hidden }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [student, setStudent] = useState(true);
  const [image, setProfilePic] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('newPassword', newPassword);
      formData.append('student', student);
      formData.append('edit-profilepic', image);

      const response = await axios.put(`http://localhost:8000/updateUser`, formData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });

      if (response.status === 200) {
        const data = response.data;
        console.log(data.message);
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.log(name, email, password, newPassword, student, image);
      console.error('Error updating user:', error.message);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleStudentChange = (event) => {
    setStudent(event.target.value === 'true');
  };

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  return (
    <div id="EditProfile" className="EditProfile" style={{ display: "none" }}>
      <form action="editprofile" className="editProfile-form" onSubmit={handleSubmit}>
        <label htmlFor="edit-profilepic">Profile picture</label>
        <input type="file" name="edit-profilepic" id="edit-profilepic" onChange={handleProfilePicChange} />
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <select name="student" id="student" value={student} onChange={handleStudentChange}>
          <option value="true">Student</option>
          <option value="false">Tutor</option>
        </select>
        <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="password" name="" id="" placeholder="Password" size="8" value={password} onChange={handlePasswordChange} />
        <input type="password" name="" id="" placeholder="New password" size="8" value={newPassword} onChange={handleNewPasswordChange} />

        <div className="buttons-box">
          <button type="submit" className="main_color_btn">Save</button>
          <input type="button" value="Cancel" className="accent_color_btn" onClick={displayEditProfile} />
        </div>
      </form>
    </div>
  );
}
