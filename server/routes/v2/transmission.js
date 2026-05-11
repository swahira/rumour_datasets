const express = require('express');
const router = express.Router();
const zlib = require('zlib');

// 1. Gzip Compression
router.get('/gzip', (req, res) => {
    const payload = JSON.stringify({ message: "This was compressed with Gzip", data: "X".repeat(1000) });
    zlib.gzip(payload, (err, buffer) => {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/json');
        res.send(buffer);
    });
});

// 2. Chunked Streaming Response
router.get('/stream', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.set('Transfer-Encoding', 'chunked');
    
    let count = 0;
    const interval = setInterval(() => {
        res.write(`Chunk ${count}\n`);
        count++;
        if (count > 5) {
            clearInterval(interval);
            res.end("Stream Finished");
        }
    }, 200);
});

module.exports = router;
