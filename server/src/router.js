const express = require('express');

const CreateNote = require('../routes/CreateNote');
const ReadNote = require('../routes/ReadNote');
const UpdateNote = require('../routes/UpdateNote');
const DeleteNote = require('../routes/DeleteNote');

const router = express.Router();

router.post('/notes', CreateNote); // Create Note
router.get('/notes', ReadNote); // Read Note
router.put('/notes/:id', UpdateNote); // Update Note
router.delete('/notes/:id', DeleteNote); // Delete Note

module.exports = router;