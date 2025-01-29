const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    note_id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: false,
      unique: false,
    },
    classInfo: {
      type: String,
      required: false,
      unique: false,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    isPublic: {
      type: Boolean,
      required: false,
      unique: false,
    },
    uploader: {
      type: String,
      required: false,
      unique: false,
    },
    file_id: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);

