const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tag_id: { type: Number, required: true, unique: true },
  tag: { type: String, required: true },
  level: { type: String, required: true },
  created_by: { type: String, required: true },
  created_at: { type: Date, required: true },
  modified_by: { type: String, required: true },
  modified_at: { type: Date, required: true }
});

module.exports = mongoose.model('Tag', tagSchema);
