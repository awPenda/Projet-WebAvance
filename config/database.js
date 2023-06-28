const mongoose = require('mongoose');
const Notif = require('../models/notif'); // Import notif model

const mongoDBUrl = 'mongodb://localhost:27017/notif';

const connectDB = () => {
  mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connexion à la base de données réussie');

      // import notif model here
      const Notif = require('../models/notif');
    })
    .catch((error) => {
      console.error('Erreur de connexion à la base de données:', error);
    });
};


module.exports = connectDB;
