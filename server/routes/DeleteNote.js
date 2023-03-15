const NoteModel = require('../models/NoteModel');

module.exports = async (req, res) => {
    const {id} = req.params; // Gets note id from the request
    const note = await NoteModel.findById(id); // Gets the note item represented by the unique id
    await note.remove(); // Deletes the note item
    res.status(204).json(note); // Sends a status response as well as the deleted item
}