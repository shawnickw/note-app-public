const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: {
        type: String,
    }
}) // Creates Note Schema

const NoteModel = mongoose.model('Note', NoteSchema); // Creates Note Model

module.exports = NoteModel;