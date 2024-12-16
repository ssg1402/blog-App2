// BlogView.jsx (JavaScript version)
import React from 'react';

export function Heading({ label }) {
    return (
        <div className="font-bold text-4xl pt-6">
            {label}
        </div>
    );
}

export function BlogView({ blog }) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Blog Title */}
            <Heading label={blog.title} />

            {/* Blog Author and Date */}
            <div className="text-gray-600 text-sm mt-2">
                <span>By {blog.author}</span> | <span>{blog.date}</span>
            </div>

            {/* Blog Content */}
            <div className="mt-6 text-lg text-gray-800">
                <p>{blog.content}</p>
            </div>

            {/* Read More Button */}
            <div className="mt-8 text-center">
                <a 
                    href="#"
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}
