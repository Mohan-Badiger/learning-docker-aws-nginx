const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send({
        message: "working fine"
    });
});

module.exports = router;