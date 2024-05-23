const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  question_id: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  created_by: { type: String, required: true },
  created_at: { type: Date, required: true },
  modified_by: { type: String, required: true },
  modified_at: { type: Date, required: true }
}
);

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;

