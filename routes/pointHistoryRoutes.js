const express = require('express');
const router = express.Router();
const {
    createPointHistory,
    getPointHistory,
    getPointHistoryByUserId,
    updatePointHistory,
    deletePointHistory
} = require('../controllers/pointHistoryController');

// Routes
router.post('/', createPointHistory); // Create a new point history entry
router.get('/', getPointHistory); // Get all point history
router.get('/user/:userId', getPointHistoryByUserId); // Get point history for a specific user
router.put('/:id', updatePointHistory); // Update a point history entry
router.delete('/:id', deletePointHistory); // Delete a point history entry

module.exports = router;
