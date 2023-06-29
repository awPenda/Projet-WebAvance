const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  allDay: {
    type: Boolean,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  slotDuration: {
    type: String,
    default: '01:00'
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  interactive: {
    type: Boolean,
    required: true
  },
  extendedProps: {
    description: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    tutors: 
      {
        type: Number,
        required: true
      },
    student: 
      {
        type: Number,
        required: true
      }
  }
});

// Définissez le modèle de session à partir du schéma
const Session = mongoose.model('Session', sessionSchema);

// Exportez le modèle de session pour une utilisation ultérieure
module.exports = Session;
