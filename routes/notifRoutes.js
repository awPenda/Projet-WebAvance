const express = require('express');
const notif = require('../models/notif');

const router = express.Router();
const notifController = require('../controllers/notifController');

// Research all available routes
router.post('/createnotif', notifController.createNotif);
router.get('/getAllNotif/:id', notifController.getAllNotif);
router.get('/getOneNotif/:id', notifController.getOneNotif);
router.put('/updateNotif/:id', notifController.updateNotif);
router.delete('/deleteNotif/:id', notifController.deleteNotif);


module.exports = { createNotif, getAllNotif, getOneNotif, updateNotif, deleteNotif };

module.exports = router;