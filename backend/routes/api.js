const express = require('express');
const router = express.Router();

// GET /api/test - Health check route
router.get('/test', (req, res) => {
    res.send({
        status: "ok",
        message: "server API working fine",
        timestamp: new Date().toISOString(),
    });
});

// POST /api/login - Handle login request
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: "error",
            message: "Email and password are required"
        });
    }
    console.log("Received login request for:", email);

    if (password.length < 6) {
        return res.status(401).json({
            status: "error",
            message: "Password must be at least 6 characters"
        });
    }

    // 3. Return success response
    return res.status(200).json({
        status: "success",
        message: "Login successful!",
        user: {
            email: email,
            password: password
        }
    });
});

module.exports = router;
