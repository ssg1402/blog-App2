const { zod } = require('zod');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://siddhantsg004:Ishucr7100@cluster0.acthr.mongodb.net/")
//define the user schema .
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String, // Short description or bio for the author
        required: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Example roles
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Define the blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String, // Extracted content from the uploaded Word file
        required: true
    },
    wordFile: {
        type: Buffer, // Storing the Word file as binary data
        required: true
    },
    wordFileName: {
        type: String, // Name of the uploaded Word file
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User schema
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
    User,
    Blog
}