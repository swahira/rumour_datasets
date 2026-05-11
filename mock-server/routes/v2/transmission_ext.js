const express = require('express');
const router = express.Router();
const zlib = require('zlib');

// 1. Brotli Streaming Out
router.get('/brotli-stream', (req, res) => {
    res.set({ 'Content-Encoding': 'br', 'Content-Type': 'text/plain' });
    const brotli = zlib.createBrotliCompress();
    brotli.pipe(res);
    
    brotli.write("Chunk 1: Initializing compression...\n");
    setTimeout(() => {
        brotli.write("Chunk 2: Streaming high-density data...\n");
        brotli.end("Chunk 3: Stream complete.");
    }, 500);
});

// 2. Multi-Part Range Requests (Multiple chunks in one)
router.get('/multi-range', (req, res) => {
    const fullData = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const range = req.headers.range;

    if (range && range.includes(',')) {
        res.set('Content-Type', 'multipart/byteranges; boundary=range_boundary');
        
        // Simulating two ranges: 0-4 and 10-14
        res.write(`--range_boundary\r\nContent-Type: text/plain\r\nContent-Range: bytes 0-4/36\r\n\r\n${fullData.slice(0, 5)}\r\n`);
        res.write(`--range_boundary\r\nContent-Type: text/plain\r\nContent-Range: bytes 10-14/36\r\n\r\n${fullData.slice(10, 15)}\r\n--range_boundary--`);
        return res.end();
    }
    
    res.status(200).send(fullData);
});

module.exports = router;
