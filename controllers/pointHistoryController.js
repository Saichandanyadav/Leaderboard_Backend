const PointHistory = require('../models/PointHistory');

// Create a new point history entry
exports.createPointHistory = async (req, res) => {
    const { userId, pointsClaimed } = req.body;

    try {
        const newPointHistory = new PointHistory({
            userId,
            pointsClaimed,
            date: new Date()
        });

        await newPointHistory.save();
        res.status(201).json(newPointHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error creating point history', error });
    }
};

// Get all point history
exports.getPointHistory = async (req, res) => {
    try {
        const history = await PointHistory.find()
            .populate('userId', 'name email') // Populate user information
            .sort({ date: -1 }); // Sort by date in descending order

        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching point history', error });
    }
};

// Get point history for a specific user
exports.getPointHistoryByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const history = await PointHistory.find({ userId })
            .populate('userId', 'name email')
            .sort({ date: -1 });

        if (history.length === 0) {
            return res.status(404).json({ message: 'No point history found for this user' });
        }

        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching point history for user', error });
    }
};

// Update a point history entry
exports.updatePointHistory = async (req, res) => {
    const { id } = req.params;
    const { pointsClaimed } = req.body;

    try {
        const updatedHistory = await PointHistory.findByIdAndUpdate(
            id,
            { pointsClaimed },
            { new: true, runValidators: true }
        );

        if (!updatedHistory) {
            return res.status(404).json({ message: 'Point history not found' });
        }

        res.json(updatedHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating point history', error });
    }
};

// Delete a point history entry
exports.deletePointHistory = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedHistory = await PointHistory.findByIdAndDelete(id);

        if (!deletedHistory) {
            return res.status(404).json({ message: 'Point history not found' });
        }

        res.json({ message: 'Point history deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting point history', error });
    }
};
