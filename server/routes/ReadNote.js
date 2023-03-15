const NoteModel = require('../models/NoteModel');

module.exports = async (req, res) => {
    const notes = await NoteModel.find(); // Gets every note document in the database
    res.json(notes); // Sends back every note document in the database
}