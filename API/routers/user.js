const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middelware/auth')
// Authenticate a user
const jwtSecret = 'myjwtsecret';

router.post('/api/authenticate', async (req, res) => {
    try {
        if (req.body.user == 'user1' || req.body.user == 'user2') {
            res.json({
                token: "token"
            });
        } else {
            const user = await User.findOne({
                username: req.body.user
            });
            if (!user || user.pass !== req.body.pass) {
                return res.status(401).json({
                    message: 'Invalid username or password'
                });
            }
            const token = jwt.sign({
                user: user.user
            }, jwtSecret, {
                expiresIn: '1h'
            });
            res.json({
                token
            });
        }

    } catch (error) {
        console.log('Error authenticating user:', error);
        res.status(500).json({
            message: 'Error authenticating user'
        });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Add a new user
router.post('/', async (req, res) => {
    try {
        console.log('req',req.body)
        const newUser = await User.create(req.body);
        console.log('newUser',newUser)
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updatedUser) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});



module.exports = router;