const jwt = require('jsonwebtoken');

// Middleware to authenticate requests
const authMiddleware = (req, res, next) => {
    // Get the token from the headers
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // If no token is provided, return a 401 Unauthorized response
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret
        req.user = decoded; // Attach the decoded user information to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ success: false, message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
