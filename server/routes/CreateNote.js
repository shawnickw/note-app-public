const NoteModel = require('../models/NoteModel')

module.exports = async (req, res) => {
    const {text} = req.body; // Gets text from request
    const note = new NoteModel({
        text,
    }) // Instantiates Mongoose Model 
    const newNote = await note.save(); // Saves Mongoose Model
    res.json(newNote); // Sends back newly created Mongoose Model
};