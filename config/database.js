const mongoose = require('mongoose');
const Notif = require('../models/notif'); // Import notif model

const mongoDBUrl = 'mongodb://localhost:27017/notif';

const connectDB = () => {
  mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('db connection succeed');

      // import notif model here
      const Notif = require('../models/notif');
    })
    .catch((error) => {
      console.error('rror db connection:', error);
    });
};


module.exports = connectDB;
