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
    role: zod.string(),
    createdAt: zod.date()
})

router.post("/signup", async(req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body);
    if (!success) {
        return res.json({
            message: "email already taken/incorrect inputs"
        })
    }
    //using the db name it can find wheater this similar signup already exist
    const user = await User.findOne({
        name: body.name
    });
    if (user._id) {
        return res.json({
            message: "email already taken/incorrect inputs"
        })
    }
    const dbuser = await User.create(body);

    res.json({
        message: "user ceated successfully"
    })
})

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