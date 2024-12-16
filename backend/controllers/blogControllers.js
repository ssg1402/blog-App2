const Blog = require('../models/blogModel');
const mammoth = require('mammoth');
const fs = require('fs');

// POST: Upload a Word file and create a blog
exports.uploadBlog = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Read file as binary data (Buffer)
        const wordFileBuffer = fs.readFileSync(req.file.path);

        // Extract text from the Word file
        const { value: extractedContent } = await mammoth.extractRawText({ buffer: wordFileBuffer });

        // Create a new blog entry
        const newBlog = await Blog.create({
            title,
            description,
            content: extractedContent,
            wordFile: wordFileBuffer,
            wordFileName: req.file.originalname,
            author,
        });

        // Remove the file from the local disk after processing
        fs.unlinkSync(req.file.path);

        res.status(201).json({ message: "Blog uploaded successfully", blog: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// GET: Retrieve all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name email'); // Populate author details
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
