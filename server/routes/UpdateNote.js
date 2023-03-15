const NoteModel = require('../models/NoteModel');

module.exports = async (req, res) => {
    const {id} = req.params; // Gets note id from the request
    const note = await NoteModel.findById(id); // Gets the note item represented by the unique id
    note.text = req.body.text; // Changes old text to new text
    await note.save(); // Saves note 
    res.json(note); // Sends note as response
}