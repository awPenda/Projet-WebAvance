const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database'); // Importez le fichier database.js
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

connectDB(); // Appelez la fonction connectDB pour établir la connexion à la base de données

app.use('/api', sessionRoutes);
app.listen(8080, () => {
  console.log('Serveur démarré sur le port 8080');
});

