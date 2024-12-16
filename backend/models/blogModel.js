const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true }, // Extracted content from the Word file
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    uploadedFilePath: { type: String, required: true }, // Path to the uploaded Word file
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
module.exports = Blog;
