// server/routes/notes.js
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// POST new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: "Title and content are required." });

  const newNote = new Note({ title, content });
  const savedNote = await newNote.save();
  res.status(201).json(savedNote);
});

// DELETE a note
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;
