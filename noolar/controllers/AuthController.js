const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

function generateAuthToken(user) {
  // Génère un jeton JWT avec l'ID de l'utilisateur comme payload
  const authToken = jwt.sign({ userId: user.id }, 'secret-key');

  return authToken;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userId = user.userId;
    next();
  });
}

async function register(req, res) {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, password: hashedPassword });

    // Générer le jeton d'authentification
    const authToken = generateAuthToken(newUser);

    // Mettre à jour le champ 'token' de l'utilisateur avec le jeton d'authentification
    await User.update({ token: authToken }, { where: { id: newUser.id } });

    return res.json({ message: 'User registered successfully', user: newUser, authToken });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Error registering user', detailedError: error.message });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Vérifie si l'utilisateur existe dans la base de données
    const existingUser = await User.findOne({ where: { username } });
    if (!existingUser) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Vérifie si le mot de passe est correct
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // L'utilisateur est authentifié, génère un jeton d'authentification (ex: JWT) pour la session
    const authToken = generateAuthToken(existingUser);

    // Mettre à jour le champ 'token' de l'utilisateur avec le jeton d'authentification
    await User.update({ token: authToken }, { where: { id: existingUser.id } });

    return res.json({ message: 'User logged in successfully', authToken });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ error: 'Error logging in user', detailedError: error.message });
  }
}

async function logout(req, res) {
  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.token) {
      return res.status(400).json({ error: 'User is already logged out' });
    }

    // Supprimer complètement le champ 'token' de l'utilisateur
    await User.update({ token: null }, { where: { id: req.userId } });

    return res.json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    return res.status(500).json({ error: 'Error logging out user', detailedError: error.message });
  }
}
async function updateUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (username) {
      user.username = username;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    return res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Error updating user', detailedError: error.message });
  }
}
async function getUser(req, res) {
  try {
    const user = await User.findByPk(req.userId, { attributes: ['username'] });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ error: 'Error retrieving user', detailedError: error.message });
  }
}



module.exports = { register, login, logout, authenticateToken, updateUser,getUser };
