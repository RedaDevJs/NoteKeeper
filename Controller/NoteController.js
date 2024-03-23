//NoteController.js

const NoteModel = require('../model/Note'); // Modification de NoteModel
const DataController = {

    getAll: async (req, res) => {
        try {
            const fetchedNotes = await NoteModel.find(); // Modification de Notes en NoteModel
            res.status(200).json(fetchedNotes);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },

    postData: async (req, res) => {
        try {
            const { name } = req.body;
            const createNote = await NoteModel.create({ name }); // Modification de Notes en NoteModel
            res.status(200).send(createNote);
        } catch (err) {
            console.log(`Error getting data ${err}`);
        }
    },

    updateData: async (req, res) => {
        try {
            const { id } = req.params;
            const updateNote = await NoteModel.findByIdAndUpdate(id, req.body); // Modification de Notes en NoteModel
            res.status(200).json(updateNote);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },

    deleteData: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedNote = await NoteModel.findByIdAndDelete(id); // Modification de Notes en NoteModel
            res.status(200).json(deletedNote);
        } catch (error) {
            res.status(400).json({ message: error }); // Correction de la faute de frappe
        }
    }
};

module.exports = DataController;
