const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { buffer } = require('browserify/lib/builtins');

//function => generateAuthToken = we generate the authentification token 
const generateAuthToken = (user) => {
  const token = jwt.sign({ id: user.id }, 'secret-key');
  return token;
};
//function => generateRefreshToken = we generate the refresh token 
const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign({ id: user.id }, 'refresh-secret-key', { expiresIn: '20m' });
  return refreshToken;
};
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
    req.userId = user.id;
    next();
  });
}
async function refreshToken(req, res) {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: 'Refresh token not provided' });
  }

  try {
    // Vérifier la validité du token de rafraîchissement
    const decoded = jwt.verify(refreshToken, 'refresh-secret-key');
    
    // Rechercher l'utilisateur correspondant au token de rafraîchissement
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Générer un nouveau token d'accès
    const newAuthToken = user.refreshToken;

    // Générer un nouveau token de rafraîchissement
    const newRefreshToken = jwt.sign({ id: user.id }, 'refresh-secret-key', { expiresIn: '7d' });

    // Mettre à jour le token de rafraîchissement de l'utilisateur
    user.refreshToken = newRefreshToken;
    user.token= newAuthToken;
    await user.save();

    return res.json({ authToken: newAuthToken, refreshToken: newRefreshToken });
  } catch (error) {
    console.error('Error refreshing token:', error);
    return res.status(500).json({ error: 'Error refreshing token' });
  }
}
const register = async (req, res) => {
  try {
    const { name, student, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      student,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Error registering user' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateAuthToken(user);
    const refreshToken = generateRefreshToken(user);

    user.token = token;
    user.refreshToken = refreshToken;
    await user.save();

    return res.status(200).json({ authToken: token, refreshToken: refreshToken });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ message: 'Error logging in user' });
  }
};

async function logout(req, res) {
  try {
    const { email, password } = req.body;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const user = await User.findOne({ where: { token } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.token) {
      return res.status(400).json({ error: 'User is already logged out' });
    }

    await user.update({ token: null });
    await user.update({refreshToken: null});
    return res.json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    return res.status(500).json({ error: 'Error logging out user', detailedError: error.message });
  }
}
async function updateUser(req, res) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const { name, student, email, password, newPassword} = req.body;

  try {
    const user = await User.findOne({ where: { token } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (name) {
      user.name = name;
    }

    if (password && newPassword) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }
    if (req.file) {
      const imageBuffer = req.file.buffer;
      const imageBase64 = imageBuffer.toString('base64');
      user.image = imageBase64;      
    }
    if (student) {
      user.student = student;
    }
    if (email) {
      user.email = email;
    }

    await user.save();

    return res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Error updating user', detailedError: error.message });
  }
}

async function getUser(req, res) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  try {
    const user = await User.findOne({ where: { token } });
    const username = user.name;
    const imageBuffer = user.image;
    //const imageData = Buffer.from(imageBuffer).toString('base64');
    const student = user.student;
    const email = user.email;

    if (!username && !imageBuffer && !student && email) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(username, imageBuffer, student, email);
    return res.json({ username, imageBuffer, student, email });
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ error: 'Error retrieving user', detailedError: error.message });
  }
}

async function getAllUser(req, res) {
  const { student } = req.query;
  try {
    const users = await User.findAll({ where: { student } });

    if (users.length === 0) {
      return res.status(404).json({ error: 'No users found' });
    }

    const userData = users.map((user) => {
      const id = user.id;
      const username = user.name;
      const imageBuffer = user.image;
      const isstudent = user.student;
      const email = user.email;
      return { id, username, imageBuffer, isstudent, email };
    });

    console.log(userData);
    return res.json(userData);
  } catch (error) {
    console.error('Error retrieving users:', error);
    return res.status(500).json({ error: 'Error retrieving users', detailedError: error.message });
  }
}

module.exports = { register, login, logout, authenticateToken, updateUser, getUser, refreshToken, getAllUser};
