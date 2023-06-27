const Session = require('../models/session');

const addSession = async (req, res) => {
  try {
    const {
      allDay,
      start,
      end,
      slotDuration,
      title,
      url,
      interactive,
      extendedProps: {
        description,
        status,
        priority,
        tutors,
        student
      }
    } = req.body;

    const session = await Session.create({
      allDay,
      start,
      end,
      slotDuration,
      title,
      url,
      interactive,
      extendedProps: {
        description,
        status,
        priority,
        tutors,
        student
      }
    });

    return res.status(201).json({ message: 'Session added successfully', session });
  } catch (error) {
    console.error('Error adding session:', error);
    return res.status(500).json({ message: 'Error adding session' });
  }
};


const getSession = async (req, res) => {
  const { extendedProps:{student}} = req.body;
  try {
    const sessions = await Session.find({ 'extendedProps.student': student});
    if (!sessions) {
      return res.status(404).json({ error: 'Session not found' });
    }
    // Ajoutez d'autres propriétés nécessaires pour votre modèle de session
    const userSession = sessions.map((session) => {
      const ID = session.id;
      const allDay = session.allDay;
      const start = session.start;
      const end = session.end;
      const slotDuration = session.slotDuration;
      const title = session.title;
      const url = session.url;
      const interactive = session.interactive;
      const description = session.extendedProps.description;
      const status = session.extendedProps.status;
      const priority = session.extendedProps.priority;
      const tutors = session.extendedProps.tutors;
      const students = session.extendedProps.student;
      return { ID, allDay, start, end, slotDuration, title, url, interactive, description, status, priority,tutors,students};
    });

    console.log(userSession);
    return res.json(userSession);
  } catch (error) {
    console.error('Error retrieving session:', error);
    return res.status(500).json({ error: 'Error retrieving session', detailedError: error.message });
  }
};
const getSessionByID = async (req, res) => {
  const { ID } = req.body;

  try {
    const session = await Session.findById(ID);

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    const sessionData = {
      ID: session.id,
      allDay: session.allDay,
      start: session.start,
      end: session.end,
      slotDuration: session.slotDuration,
      title: session.title,
      url: session.url,
      interactive: session.interactive,
      description: session.extendedProps.description,
      status: session.extendedProps.status,
      priority: session.extendedProps.priority,
      tutors: session.extendedProps.tutors,
      student: session.extendedProps.student
    };

    return res.json(sessionData);
  } catch (error) {
    console.error('Error retrieving session:', error);
    return res.status(500).json({ error: 'Error retrieving session', detailedError: error.message });
  }
};
const updateSession = async (req, res) => {
  const { ID } = req.params;
  const { fieldToUpdate, updatedValue } = req.body;

  try {
    const session = await Session.findByIdAndUpdate(ID, { [fieldToUpdate]: updatedValue }, { new: true });

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    return res.json({ message: 'Session updated successfully', session });
  } catch (error) {
    console.error('Error updating session:', error);
    return res.status(500).json({ error: 'Error updating session', detailedError: error.message });
  }
};

const deleteSession = async (req, res) => {
  const { ID, title } = req.body;

  try {
    let session;

    if (ID) {
      session = await Session.findById(ID);
    } else if (title) {
      session = await Session.findOne({ title: title });
    }

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Supprimer la session de la base de données
    await session.deleteOne();

    return res.json({ message: 'Session deleted successfully' });
  } catch (error) {
    console.error('Error deleting session:', error);
    return res.status(500).json({ error: 'Error deleting session', detailedError: error.message });
  }
};

module.exports = {getSession, addSession, deleteSession, getSessionByID,updateSession};
  
  
  
  
