import React from 'react';
import axios from 'axios';
import { displayRegisterPage } from '../Global';

/**TODO
 * 
 * @param {*} param0 
 * @returns 
 */
export default function ConnectionPage({ hidden }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Envoie des données de connexion au backend
    axios
      .post('http://localhost:8000/login', { email, password })
      .then((response) => {
        // Récupérer le token de la réponse du backend
        const authToken = response.data.authToken;

        // Stocker le token dans le localStorage
        localStorage.setItem('token', authToken);

        // Effectuer d'autres actions après la connexion réussie

        window.alert('Successfully logged in');
        console.log('Successfully logged in ;)');
      })
      .catch((error) => {
        // Traitement de l'erreur en cas d'échec
        console.error(error);
        window.alert('login in failed T-T');
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
