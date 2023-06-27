import React from 'react';
import axios from 'axios';
import { displayRegisterPage } from '../Global';
import { createContext, useContext, useState, useEffect } from 'react';

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
        const refreshToken = response.data.refreshToken;
        // Stocker le token dans le localStorage
        localStorage.setItem('token', authToken);
        localStorage.setItem('refreshToken', refreshToken);
        // Récupérer les informations de l'utilisateur
        fetchUserData();
        alert('connecté');
        window.location.href = '/';
      })
      .catch((error) => {
        // Traitement de l'erreur en cas d'échec
        console.error(error);
        window.alert('login in failed T-T');
      });
  };

  const fetchUserData = () => {
    axios
      .get('http://localhost:8000/getUser', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        const userData = response.data;
        const { username, imageBuffer, student, email, description } = userData;

        // Stocker les informations de l'utilisateur dans le localStorage
        localStorage.setItem('name', JSON.stringify(username));
        localStorage.setItem('image', imageBuffer);
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('student', JSON.stringify(student));
        localStorage.setItem('description', JSON.stringify(description));
        console.log(username, imageBuffer, email, student, description);
        console.log('Successfully fetched user data');
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };
  const refreshToken = () => {
    const refreshToken = localStorage.getItem('refreshToken');

    axios
      .post('http://localhost:8000/refreshToken', { refreshToken })
      .then((response) => {
        const authToken = response.data.authToken;
        const newRefreshToken = response.data.refreshToken;

        localStorage.setItem('token', authToken);
        localStorage.setItem('refreshToken', newRefreshToken);
      })
      .catch((error) => {
        console.error('Error refreshing token:', error);
      });
  };
  useEffect(() => {
    // Configuration de l'intervalle de rafraîchissement du token
    const interval = setInterval(refreshToken, 1200000); // Rafraîchir le token toutes les 60 secondes

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="ConnectionPage" className="ConnectionPage">
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
          <a href="/registration" className="button-link-main">Register here</a>
        </div>
      </form>
    </div>
  );
}
