const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    bodytext: {
        type: String,
        required: false,

    },
    url: {
        type: String,
        required: false,
    },
    user_id: {
        type: Number,
        required: true,
    }

});

// Define model from scheme
const Notif = mongoose.model('Notif', notifSchema);

// export notif model for external usage
module.exports = Notif;
