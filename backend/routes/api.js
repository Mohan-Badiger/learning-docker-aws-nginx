const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send({
        status: "ok",
        message: "server API working fine",
        timestamp: new Date().toISOString(),
    });
});

module.exports = router;