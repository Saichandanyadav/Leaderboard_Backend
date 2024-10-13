const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    claimPoints,
    getClaimHistory,
    getAllPointHistories
} = require('../controllers/userController');

const router = express.Router();

// User management routes
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Claim points routes
router.post('/:id/claim', claimPoints);
router.get('/:id/claim-history', getClaimHistory);

// Point history route
router.get('/point-history', getAllPointHistories);

module.exports = router;
