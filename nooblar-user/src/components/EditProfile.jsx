import React, { useState } from 'react';
import { displayEditProfile } from '../Global';
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
      if (image) {
        formData.append('image', image);
      }

      const response = await axios.put(`http://localhost:8000/updateUser`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        fetchUserData();
        const data = response.data;
        console.log(data.message);
        console.log(name, email, password, newPassword, student, image);
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.log(name, email, password, newPassword, student, image);
      console.error('Error updating user:', error.message);
    }
  }

  const fetchUserData = () => {
    axios
      .get('http://localhost:8000/getUser', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        const userData = response.data;
        const { username, imageBuffer, student, email } = userData;

        // Stocker les informations de l'utilisateur dans le localStorage
        localStorage.setItem('name', JSON.stringify(username));
        localStorage.setItem('image', imageBuffer);
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('student', JSON.stringify(student));

        console.log(username, imageBuffer, email, student);
        console.log('Successfully fetched user data');
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  }

  const handleStudentChange = (event) => {
    setStudent(event.target.value === 'true');
  }

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
  }



  /**
   * ATTENTION might be BROKEN 
   */
  function uploadPP(e) {
    console.log(e.target.files[0].size);
    if (e.target.files[0].size > 524288) {
      alert("File is too big! It should be 500Ko max");
      const dt = new DataTransfer();
      for (let i = 0; i < dt.items.length; i++) {
        dt.items.remove(i);
      }
      e.target.files = dt.files;
    }
    else {
      handleProfilePicChange(e);
    }
  }

  return (
    <div id="EditProfile" className="EditProfile" style={{ display: "none" }}>
      <form action="editprofile" className="editProfile-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="edit-profilepic">Profile picture</label>
        <input type="file" accept="image/*" name="edit-profilepic" id="edit-profilepic" /*onChange={handleProfilePicChange}*/ onChange={(e) => uploadPP(e)} />
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
