const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  published: Number,
  genres: [String],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

bookSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;