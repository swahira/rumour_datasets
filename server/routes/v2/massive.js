const express = require('express');
const router = express.Router();

// 1. Large JSON Generator (approx 10MB if count is high)
router.get('/data', (req, res) => {
    const count = parseInt(req.query.count) || 1000;
    
    // We stream the large response to avoid Node.js memory spikes
    res.set('Content-Type', 'application/json');
    res.write('{"status": "ok", "items": [');
    
    for (let i = 0; i < count; i++) {
        const item = JSON.stringify({
            id: i,
            uuid: `mass-${i}-${Math.random().toString(36).substring(7)}`,
            payload: "X".repeat(500), // Adds bulk
            metadata: { created: Date.now(), active: true, tags: ["stress", "performance", "massive"] }
        });
        res.write(item + (i === count - 1 ? "" : ","));
    }
    
    res.write(']}');
    res.end();
});

module.exports = router;
