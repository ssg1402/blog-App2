const express = require('express')
const { Blog } = require('../db')
const { mongoose } = require('mongoose')
const multer = require('multer');
const { uploadBlog, getBlogs } = require('../controllers/blogController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Store uploaded files in the `uploads` directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Create unique file names
    },
});
const upload = multer({ storage });

// Route to upload a blog
router.post('/upload', upload.single('file'), uploadBlog);

// Route to get all blogs
router.get('/', getBlogs);

module.exports = router;