import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationPage() {
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
        window.alert('Your user have been created :D');
        // Traitement de la réponse du backend (si nécessaire)
        console.log(response.data);
      })
      .catch((error) => {
        // Traitement de l'erreur en cas d'échec
        window.alert('There have been an error in the registration :c');
        console.error(error);
      });
  };

  return (
    <div id="RegistrationPage" className="RegistrationPage">
      <form onSubmit={handleRegistration} className="card_form">
        <h2 className="page_title">Register</h2>

        <input id="input-user-name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <select id="input-user-student" name="student" value={student} onChange={(e) => setStudent(e.target.value === 'true')}>
          <option value="true">Student</option>
          <option value="false">Tutor</option>
        </select>
        <input id="input-user-email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required />
        <input id="input-user-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />


        <button type="submit" className="main_color_btn">
          Registration
        </button>

        <div className="switchConnectRegister">
          Already have an account?
          <a href="/connection" className="button-link-main">Connect here</a>
        </div>
      </form>
    </div>
  );
}
