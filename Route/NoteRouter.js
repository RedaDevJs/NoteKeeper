//NoteRouter.js

const express = require("express");
const NoteController = require('../controller/NoteController');
const router = express.Router();

router.get('/getnote', NoteController.getAll);
router.post('/postnote', NoteController.postData);
router.put('/updatenote/:id', NoteController.updateData);
router.delete('/deletenote/:id', NoteController.deleteData);

module.exports = router;
