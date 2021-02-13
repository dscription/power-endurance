const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sessionSchema = new Schema(
  {
    date: Date,
    type: String,
    initialProblems: Array,
    warmup: Object,
    series: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema)