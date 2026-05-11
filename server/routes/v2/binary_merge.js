const express = require('express');
const router = express.Router();

// 1. Binary Stream Merge
router.get('/composite', (req, res) => {
    // Merging two 4-byte markers into one 8-byte response
    const part1 = Buffer.from([0xAA, 0xBB, 0xCC, 0xDD]);
    const part2 = Buffer.from([0x11, 0x22, 0x33, 0x44]);
    
    res.set('Content-Type', 'application/octet-stream');
    res.set('X-Stream-Parts', '2');
    
    // Send in chunks to test merging logic
    res.write(part1);
    setTimeout(() => {
        res.write(part2);
        res.end();
    }, 500);
});

module.exports = router;
