const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");


//signup and signin routes

const signupSchema = zod.object({
    name: zod.string(),
    email: zod.string(),
    password: zod.string(),
    bio: zod.string(),
    role: zod.string()
})

<<<<<<< HEAD
router.post("/signup", async(req, res) => {
=======
router.post("/signup", async (req, res) => {
>>>>>>> 8236e8d2ddb9126a7f1588447406bcc6229a29e9
    try {
        const body = req.body;

        // Validate input with Zod schema
        const parseResult = signupSchema.safeParse(body);
        if (!parseResult.success) {
            return res.status(400).json({
                message: "Invalid input format",
                errors: parseResult.error.issues, // Provide validation errors for better debugging
            });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already taken",
            });
        }

        // Create the new user in the database
        const dbuser = await User.create(body);

        // Respond with success
        res.status(201).json({
            message: "User created successfully",
            user: { name: dbuser.name, email: dbuser.email }, // Return only non-sensitive data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error. Please try again later.",
        });
    }
});

router.post("/signin", async(req, res) => {
    const { email, password } = req.body;

    //validate input using zod schema
    const signinSchema = zod.object({
        email: zod.string(),
        password: zod.string()
    });

    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            message: "invalid input format"
        })
    }
    //check if while login in wheather user exists in the data base
    const user = await User.findOne({
        email: email
    });
    if (!user) {
        return res.json({
            message: "user not found"
        });
    }
    //check if the password matches
    if (user.password !== password) {
        return res.json({
            message: "incorrect password"
        });
    }

    //send response
    res.json({
        message: "Login successful",
        token: token
    })

})

module.exports = router;