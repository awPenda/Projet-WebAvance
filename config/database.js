const mongoose = require('mongoose');
const Session = require('../models/notif'); // Importez le modèle de session

const mongoDBUrl = 'mongodb://localhost:27017/notif';

const connectDB = () => {
  mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connexion à la base de données réussie');
      
      // Importez le modèle de session ici
      const Session = require('../models/notif');
    })
    .catch((error) => {
      console.error('Erreur de connexion à la base de données:', error);
    });
};


module.exports = connectDB;
