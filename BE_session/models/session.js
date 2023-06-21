const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  tutorID: [
    {
      type: Number,
      required: true
    }
  ],
  studentID: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  // Ajoutez d'autres propriétés nécessaires pour votre modèle de session
});

// Définissez le modèle de session à partir du schéma
const Session = mongoose.model('Session', sessionSchema);

// Exportez le modèle de session pour une utilisation ultérieure
module.exports = Session;
