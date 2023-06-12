import React from 'react';
import axios from 'axios';
import { displayRegisterPage } from '../Global';

export default function ConnectionPage({ hidden }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Envoie des données de connexion au backend
    axios
      .post('http://localhost:8000/login', { email, password })
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
    <div id="ConnectionPage" className="ConnectionPage" style={{ display: hidden ? 'none' : 'flex' }}>
      <form onSubmit={handleLogin} className="card_form">
        <h2 className="page_title">Connection</h2>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="main_color_btn">
          Connection
        </button>

        <div className="switchConnectRegister">
          No account ?
          <input type="button" value="Register here" className="button-link-main" onClick={displayRegisterPage} />
        </div>
      </form>
    </div>
  );
}
