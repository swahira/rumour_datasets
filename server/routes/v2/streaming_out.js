const express = require('express');
const router = express.Router();

// 1. Server-Sent Events (SSE)
router.get('/events', (req, res) => {
    res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    res.flushHeaders();

    let count = 0;
    const timer = setInterval(() => {
        count++;
        res.write(`event: update\ndata: {"status": "processing", "tick": ${count}}\n\n`);
        if (count >= 5) {
            res.write(`event: complete\ndata: {"message": "Stream finished"}\n\n`);
            clearInterval(timer);
            res.end();
        }
    }, 500);
});

// 2. Range Requests (206 Partial Content)
router.get('/download-range', (req, res) => {
    const fullData = "X".repeat(1000); // 1000 bytes
    const range = req.headers.range;
    
    if (!range) {
        return res.status(200).send(fullData);
    }

    const [start, end] = range.replace(/bytes=/, "").split("-");
    const s = parseInt(start);
    const e = end ? parseInt(end) : fullData.length - 1;
    
    const chunk = fullData.slice(s, e + 1);
    res.status(206).set({
        'Content-Range': `bytes ${s}-${e}/${fullData.length}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunk.length
    }).send(chunk);
});

module.exports = router;
