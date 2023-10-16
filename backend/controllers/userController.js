// to limit use of try and catch methods
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js';

// @description     Auth user/set token
// route            POST /api/users/auth
// @access          Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        // from utils
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    // res.status(200).json({ message: 'Auth User' })
});

// @description     Register a new user
// route            POST /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({ name, email, password })

    if (user) {
        // from utils 
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

    // res.status(200).json({ message: 'Register User' })
});
// @description     Logout user
// route            POST /api/users/logout
// @access          Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ message: 'User logged out' })
});

// @description     GET user profile
// route            POST /api/users/profile
// @access          Private/ have to have a valid token
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email
        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
    res.status(200).json(user)
});

// @description     UPDATE user profile
// route            PUT /api/users/profile
// @access          Private/ have to have a valid token
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.phone = req.body.phone || user.phone;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            phone: updatedUser.phone,
            email: updatedUser.email,
        })
    } else {
        res.status(404);
        throw new Error('User not found')
    }
    // res.status(200).json({ message: 'User Profile Updated' })
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};