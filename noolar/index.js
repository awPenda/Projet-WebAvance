const express = require('express');
const app = express();
const User = require('./models/User');
const sequelize = require('./config/database');
const AuthController = require('./controllers/AuthController');
const cors = require('cors');

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

// Utilisez le middleware authenticateToken ici pour toutes les routes nécessitant une authentification
app.post('/logout', AuthController.authenticateToken, AuthController.logout);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
app.put('/updateuser', AuthController.authenticateToken, AuthController.updateUser);
app.get('/read', AuthController.authenticateToken, AuthController.getUser);
