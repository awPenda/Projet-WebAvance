const express = require('express');
const app = express();
const User = require('./models/User');
const sequelize = require('./config/database');
const AuthController = require('./controllers/AuthController');
const cors = require('cors');
const multer = require('multer');

// Configuration de Multer pour le téléchargement des fichiers d'image
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de taille du fichier à 5 Mo
  },
});

app.use(express.json({ extended: true }));
app.use(cors());

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/register', AuthController.register);
app.post('/login', AuthController.login);
app.post('/logout', AuthController.authenticateToken, AuthController.logout);
app.put('/updateuser', AuthController.authenticateToken, upload.single('edit-profilepic'), AuthController.updateUser);
app.get('/read', AuthController.authenticateToken, AuthController.getUser);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
