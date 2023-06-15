import React, { useState } from 'react';
import axios from 'axios';

import Icons from './Icons';
import { makeBubbles, toggleSideBarNotifs, toggleSideBarProfile, displayElement, displayConnectionPage } from '../Global';

export default function RegistrationPage({ hidden }) {
  const [name, setName] = useState('');
  const [student, setStudent] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    // Envoie des données d'enregistrement au backend
    axios
      .post('http://localhost:8000/register', { name, student, email, password })
      .then((response) => {
        // Traitement de la réponse du backend (si nécessaire)
        console.log(response.data);
      })
      .catch((error) => {
        // Traitement de l'erreur en cas d'échec
        console.error(error);
      });
  };

  return (
    <div id="RegistrationPage" className="RegistrationPage" style={{ display: hidden ? 'none' : 'block' }}>
      <form onSubmit={handleRegistration} className="card_form">
        <h2 className="page_title">Registration</h2>

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <select name="student" id="student" value={student} onChange={(e) => setStudent(e.target.value === 'true')}>
          <option value="true">Student</option>
          <option value="false">Tutor</option>
        </select>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" size="8" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="main_color_btn">
          Registration
        </button>

        <div className="switchConnectRegister">
          Already have an account?
          <input type="button" value="Connect here" className="button-link-main" onClick={displayConnectionPage} />
        </div>
      </form>
    </div>
  );
}
