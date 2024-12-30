const express = require('express');
const Book = require('../models/book');
const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find().populate('comments');
  res.json(books);
});

// Create a new book
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
});

// Update a book
router.put('/:id', async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;