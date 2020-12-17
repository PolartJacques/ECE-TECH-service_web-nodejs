const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  sujet: {
    type: String,
    required: true
  },
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('todo', TodoSchema);