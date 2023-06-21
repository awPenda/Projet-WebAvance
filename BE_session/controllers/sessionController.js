const Session = require('../models/session');

// Recherche de toutes les sessions disponibles
exports.getSessions = async (req, res) => {
    try {
      const sessions = await Session.find();
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la recherche des sessions' });
    }
  };
  
