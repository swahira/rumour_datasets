const express = require('express');
const router = express.Router();
const zlib = require('zlib');

// 1. Brotli Encoded Response
router.get('/brotli', (req, res) => {
    const payload = JSON.stringify({
        message: "High density compression",
        content: "X".repeat(5000), // Highly compressible
        timestamp: new Date().toISOString()
    });

    zlib.brotliCompress(payload, (err, buffer) => {
        if (err) return res.status(500).send("Brotli Compression Failed");
        res.set({
            'Content-Encoding': 'br',
            'Content-Type': 'application/json'
        });
        res.send(buffer);
    });
});

module.exports = router;
