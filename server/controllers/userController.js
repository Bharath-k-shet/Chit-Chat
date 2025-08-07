import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

// SIGNUP CONTROLLER
export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        // Check for missing fields
        if (!fullName || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing details" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Account already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword, // only hashed password is stored
            bio
        });

        // Generate JWT token
        const token = generateToken(newUser._id);

        res.json({
            success: true,
            userData: newUser,
            token,
            message: "Account created successfully"
        });

    } catch (error) {
        console.error("Signup error:", error.message);
        res.json({ success: false, message: error.message });
    }
};



// LOGIN CONTROLLER
export const login = async (req, res) => {
    try {
        const { email, password } = req.body || {};

        // Validate input
        if (!email || !password) {
            return res.json({ success: false, message: "Missing email or password" });
        }

        // Find user
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(password, userData.password);
        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = generateToken(userData._id);

        res.json({
            success: true,
            userData,
            token,
            message: "Login successful"
        });

    } catch (error) {
        console.error("Login error:", error.message);
        res.json({ success: false, message: error.message });
    }
};


// AUTH CHECK CONTROLLER
export const checkAuth = (req, res) => {
    res.json({ success: true, user: req.user });
};


//  UPDATE PROFILE CONTROLLER
export const updateProfile = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;
        const userId = req.user._id;
        let updatedUser;

        if (!fullName || !bio) {
            return res.json({ success: false, message: "Full name and bio are required" });
        }

        // If profile picture is not updated
        if (!profilePic) {
            updatedUser = await User.findByIdAndUpdate(
                userId,
                { fullName, bio },
                { new: true }
            );
        } else {
            // Upload new image to cloudinary
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                    profilePic: upload.secure_url,
                    fullName,
                    bio
                },
                { new: true }
            );
        }

        res.json({ success: true, user: updatedUser });

    } catch (error) {
        console.error("Update profile error:", error.message);
        res.json({ success: false, message: error.message });
    }
};
