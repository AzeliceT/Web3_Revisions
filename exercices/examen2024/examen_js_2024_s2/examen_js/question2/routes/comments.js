const express = require('express');
const Comment = require('../models/comment');
const Book = require('../models/book');
const router = express.Router();

// Add a comment to a book
router.post('/book/:bookId/comment', async (req, res) => {
  const { bookId } = req.params;
  const { username, content } = req.body;

  // Validate input
  if (content.length <= 5) {
    return res.status(400).json({ error: 'Comment must be more than 5 characters' });
  }
  if (username.length <= 3) {
    return res.status(400).json({ error: 'Username must be more than 3 characters' });
  }

  // Check if book exists
  let book;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid book ID format' });
  }

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Check if user has already commented on this book
  const existingComment = await Comment.findOne({ book: bookId, username });
  if (existingComment) {
    return res.status(409).json({ error: 'User has already commented on this book' });
  }

  // Create and save the comment
  const newComment = new Comment({ content, username, book: bookId });
  await newComment.save();

  // Add comment to book
  book.comments.push(newComment);
  await book.save();

  res.status(201).json({
    bookId: book._id,
    username: newComment.username,
    content: newComment.content
  });
});

module.exports = router;