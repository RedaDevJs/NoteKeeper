// Controller.test.js

const NoteModel = require('../model/Note'); // Modification de NoteModel
const DataController = require('../controller/NoteController');


jest.mock('../model/Note', () => ({
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn()
}));

describe('DataController', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should get all notes', async () => {
        const mockNotes = [{ id: 1, name: 'Note 1' }, { id: 2, name: 'Note 2' }];
        NoteModel.find.mockResolvedValue(mockNotes);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await DataController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockNotes);
    });

    it('should create a note', async () => {
        const req = { body: { name: 'New Note' } };
        const createdNote = { id: 1, name: 'New Note' };
        NoteModel.create.mockResolvedValue(createdNote);

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        await DataController.postData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(createdNote);
    });

    it('should update a note', async () => {
        const req = { params: { id: 1 }, body: { name: 'Updated Note' } };
        const updatedNote = { id: 1, name: 'Updated Note' };
        NoteModel.findByIdAndUpdate.mockResolvedValue(updatedNote);

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await DataController.updateData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(updatedNote);
    });

    it('should delete a note', async () => {
        const req = { params: { id: 1 } };
        const deletedNote = { id: 1, name: 'Note to delete' };
        NoteModel.findByIdAndDelete.mockResolvedValue(deletedNote);

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await DataController.deleteData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(deletedNote);
    });
});
