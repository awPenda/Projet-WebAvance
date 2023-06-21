const express = require('express');
const connectDB = require('./config/database'); // Importez le fichier database.js
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
connectDB(); // Appelez la fonction connectDB pour établir la connexion à la base de données

app.use('/api', sessionRoutes);
app.listen(8080, () => {
  console.log('Serveur démarré sur le port 8080');
});

