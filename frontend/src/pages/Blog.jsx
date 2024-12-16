import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Heading } from "../components/Heading"; // Import Heading component
import { SubHeading } from "../components/SubHeading"; // Import SubHeading component
import { Button } from "../components/Button"; // Import Button component

export function BlogView() {
    const { blogId } = useParams(); // Get the blogId from the URL
    const [blog, setBlog] = useState(null);

    // Fetch the blog data from the backend
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:2000/api/v1/blog/${blogId}`);
                setBlog(response.data); // Set the blog data
            } catch (error) {
                console.error("Error fetching the blog:", error);
            }
        };
        fetchBlog();
    }, [blogId]); // The effect will re-run whenever the blogId changes

    // If the blog is still loading, show a loading message
    if (!blog) {
        return (
            <div className="text-center py-20">
                <p className="text-xl">Loading blog...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Blog Title */}
            <Heading label={blog.title} />

            {/* Blog Description */}
            <SubHeading label={blog.description} />

            {/* Blog Author and Date */}
            <div className="text-gray-600 text-sm mt-2">
                <span>By {blog.author.name}</span> | <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>

            {/* Blog Content */}
            <div className="mt-6 text-lg text-gray-800">
                <p>{blog.content}</p>
            </div>

            {/* Go Back Button */}
            <div className="mt-8 text-center">
                <Button
                    onClick={() => window.history.back()} // Go back to the previous page
                    label="Go Back"
                />
            </div>
        </div>
    );
}
