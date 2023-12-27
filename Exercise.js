// models/Exercise.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  language: String,
  difficulty: Number,
  question: String,
  answer: String,
});

module.exports = mongoose.model('Exercise', exerciseSchema);
