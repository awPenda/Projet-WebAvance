const express = require('express');
const connectDB = require('./config/database'); // import database.js
const notifRoutes = require('./routes/notifRoutes');
const cors = require('cors');

const app = express();  

app.use(express.json({ extended: true }));
app.use(cors());
connectDB(); // call connectDB to establish connection with database

app.use('/api', notifRoutes);
app.listen(8070, () => {
  console.log('Serveur démarré sur le port 8070');
});

