const mongoose = require('mongoose');

const questionTagMapSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  question_id: { type: Number, required: true },
  tag_id: { type: Number, required: true },
  is_mandatory: { type: Number, required: true },
  created_by: { type: String, required: true },
  created_at: { type: Date, required: true },
  modified_by: { type: String, required: true },
  modified_at: { type: Date, required: true }
});

module.exports = mongoose.model('QuestionTagMap', questionTagMapSchema);
