const express = require('express');
const connectDB = require('./config/database'); // Importez le fichier database.js
const notifRoutes = require('./routes/notifRoutes');

const app = express();
connectDB(); // Appelez la fonction connectDB pour établir la connexion à la base de données

app.use('/api', notifRoutes);
app.listen(8070, () => {
  console.log('Serveur démarré sur le port 8070');
});

