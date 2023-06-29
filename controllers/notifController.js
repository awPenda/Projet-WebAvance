const Notif = require('../models/notif');

/**
 * Create a notif
 * @param {*} req request, must include title, bodytext and url
 * @param {*} res response
 * @returns 
 */
const createNotif = async (req, res) => {
    try {
        const {
            title,
            bodytext,
            url,
            user_id
        } = req.body;

        const notif = await Notif.create({

            title,
            bodytext,
            url,
            user_id

        });

        return res.status(201).json({ message: 'Notif added successfully', notif });
    } catch (error) {
        console.error('Error adding notif:', error);
        return res.status(500).json({ message: 'Error adding notif' });
    }

}

/**
 * Get all notifs for one user, user_id passed in parameters
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAllNotif = async (req, res) => {
    const { user_id } = req.query;
    try {
        //see after, but it would be great to be ordered by date, latest first.
        const notifs = await Notif.find({ 'user_id': user_id });
        if (!notifs) {
            return res.status(404).json({ error: 'Notif not found' });
        }

        // Add more properties, necessary for the model
        const userNotif = notifs.map((notif) => {
            const id = notif.id;
            const title = notif.title;
            const bodytext = notif.bodytext;
            const url = notif.url;
            const user_id = notif.user_id;

            return { id, title, bodytext, url, user_id };
        });

        console.log(userNotif);
        return res.json(userNotif);
    } catch (error) {
        console.error('Error retrieving notif:', error);
        return res.status(500).json({ error: 'Error retrieving notif', detailedError: error.message });
    }


}

/** i dont think it will be used */
const getOneNotif = async (req, res) => {

}

/**
 * Update one notif with its id passed in parameters
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateNotif = async (req, res) => {
    const { id } = req.params;
    const { fieldToUpdate, updatedValue } = req.body;

    try {
        const notif = await Notif.findByIdAndUpdate(id, { [fieldToUpdate]: updatedValue }, { new: true });

        if (!notif) {
            return res.status(404).json({ error: 'Notif not found' });
        }

        return res.json({ message: 'Notif updated successfully', notif });
    } catch (error) {
        console.error('Error updating notif:', error);
        return res.status(500).json({ error: 'Error updating notif', detailedError: error.message });
    }

}

/**
 * Delete a notif with its id passed in parameters
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteNotif = async (req, res) => {
    const { id } = req.params;

    try {
        let notif;

        if (id) {
            notif = await Notif.findById(ID);
        }
        if (!notif) {
            return res.status(404).json({ error: 'notif not found' });
        }

        // Delete notif from db
        await notif.deleteOne();

        return res.json({ message: 'notif deleted successfully' });
    } catch (error) {
        console.error('Error deleting notif:', error);
        return res.status(500).json({ error: 'Error deleting notif', detailedError: error.message });
    }

}

module.exports = { createNotif, getAllNotif, getOneNotif, updateNotif, deleteNotif };




