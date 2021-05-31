const Comment = require('../models/comments');

module.exports = (app) => {
    const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  content: { type: String, required: true },
}, { timestamps: true });

module.exports = model('Comment', commentSchema);
};