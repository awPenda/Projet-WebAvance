const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
 
});

// Définissez le modèle de session à partir du schéma
const Session = mongoose.model('Notif', notifSchema);

// Exportez le modèle de session pour une utilisation ultérieure
module.exports = Session;
