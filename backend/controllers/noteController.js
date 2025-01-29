const Note = require('../models/noteModel')
const mongoose = require('mongoose')

const getNotes = async (req, res) => {
    const noteSchema = await Notes.find({}).sort({createdAt: -1})
  
    res.status(200).json(notes)
  }

const createNote = async (req, res) => {
    const { note_id, title, classInfo, description, isPublic, uploader, file_id } = req.body;
  
    if (!note_id) {
      return res.status(400).json({ error: 'Note ID is required' });
    }
  
    try {
      // Using the create method directly
      const newNote = await Note.create({
        note_id,
        title,
        classInfo,
        description,
        isPublic,
        uploader,
        file_id,
      });
  
      res.status(200).json({ success: true, data: newNote });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };
  

module.exports = {
    createNote
}


// // Search Notes Endpoint
// app.get('/search', async (req, res) => {
//     try {
//       // Get the search query from the request query string
//       const { query } = req.query;
  
//       if (!query) {
//         return res.status(400).send("Search query is required.");
//       }
  
//       // Use MongoDB's text search functionality to search across title, classInfo, and description
//       const notes = await Note.find(
//         { $text: { $search: query } },
//         { score: { $meta: "textScore" } } // Include text score for ranking
//       ).sort({ score: { $meta: "textScore" } }); // Sort by relevance
  
//       return res.status(200).json(notes);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send("An error occurred during the search.");
//     }
//   });
  