const express = require('express');
const router = express.Router();

let attempts = 0;

// 1. Smart Rate Limit (Success on 3rd try)
router.get('/retry-after', (req, res) => {
    attempts++;
    if (attempts < 3) {
        res.set('Retry-After', '2');
        return res.status(429).json({ 
            error: "Too Many Requests", 
            attempt: attempts,
            message: "Retry after 2 seconds" 
        });
    }
    attempts = 0; // Reset for next test
    res.json({ message: "Success after retries", status: "stable" });
});

// 2. Complex Assertions Test
router.get('/assertion-stress', (req, res) => {
    res.json({
        metrics: {
            cpu: 45,
            memory: { used: 80, free: 20 },
            uptime: Date.now()
        },
        tags: ["prod", "edge", "active"],
        config: { enabled: true, debug: false }
    });
});

module.exports = router;
