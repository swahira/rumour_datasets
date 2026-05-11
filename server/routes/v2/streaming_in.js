const express = require('express');
const router = express.Router();

router.post('/upload-stream', (req, res) => {
    let totalBytes = 0;
    
    req.on('data', (chunk) => {
        totalBytes += chunk.length;
        console.log(`📥 Received chunk: ${chunk.length} bytes (Total: ${totalBytes})`);
    });

    req.on('end', () => {
        res.json({
            status: "Complete",
            bytes_received: totalBytes,
            message: "Stream successfully consumed by server"
        });
    });
    
    req.on('error', (err) => {
        res.status(500).json({ error: "Stream interrupted", detail: err.message });
    });
});

module.exports = router;
