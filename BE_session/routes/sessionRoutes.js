const express = require('express');
const Session = require('../models/session');

const router = express.Router();
const sessionController = require('../controllers/sessionController');


// Recherche de toutes les sessions disponibles
router.get('/sessions', sessionController.getSessions);

module.exports = router;