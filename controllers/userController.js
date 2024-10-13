const User = require('../models/User'); // Adjust the path as needed
const ClaimHistory = require('../models/ClaimHistory'); // Adjust the path as needed

// Create User
const createUser = async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email, points: 0 });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
};

// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get User by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

// Claim Points
const claimPoints = async (req, res) => {
    const randomPoints = Math.floor(Math.random() * 10) + 1; // Random points between 1 and 10

    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.points += randomPoints;
        await user.save();

        // Record claim history
        const claimHistory = new ClaimHistory({
            userId: user._id,
            pointsAwarded: randomPoints,
            date: new Date()
        });
        await claimHistory.save();

        res.json({
            message: 'Points claimed successfully',
            pointsAwarded: randomPoints,
            totalPoints: user.points
        });
    } catch (error) {
        res.status(500).json({ message: 'Error claiming points', error: error.message });
    }
};

// Get Claim History
const getClaimHistory = async (req, res) => {
    try {
        const history = await ClaimHistory.find({ userId: req.params.id });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching claim history', error: error.message });
    }
};

// Get All Point Histories
const getAllPointHistories = async (req, res) => {
    try {
        const histories = await ClaimHistory.find();
        res.json(histories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching point histories', error: error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    claimPoints,
    getClaimHistory,
    getAllPointHistories
};
