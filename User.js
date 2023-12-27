// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  language: String,
  progress: {
    type: Map,
    of: Number,
  },
});

module.exports = mongoose.model('User', userSchema);
