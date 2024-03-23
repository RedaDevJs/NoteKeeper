//Note.js

const mongoose = require('mongoose');
const Joi = require('joi');

const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    }
});

const Note = mongoose.model('Note', noteSchema); // Modification de Notes en Note

function validateCreateNote(obj) {
    const schema = Joi.object({
        name: Joi.string().trim().min(5).max(100).required()
    });
    return schema.validate(obj);
}

function validateUpdateNote(obj) {
    const schema = Joi.object({
        name: Joi.string().trim().min(5).max(100).required()
    });
    return schema.validate(obj);
}

module.exports = {
    Note,
    validateCreateNote,
    validateUpdateNote
};
