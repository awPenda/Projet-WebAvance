const express = require('express');
const Session = require('../models/session');

const router = express.Router();
const sessionController = require('../controllers/sessionController');


// Recherche de toutes les sessions disponibles
router.post('/booksession', sessionController.addSession);
router.get('/getSessionStudent', sessionController.getSessionStudent);
router.get('/getSessionTutors', sessionController.getSessionTutors);
router.get('/getSessionByID', sessionController.getSessionByID);
router.delete('/deleteSession', sessionController.deleteSession);
router.put('/updateSession/:ID', sessionController.updateSession);


module.exports = router;