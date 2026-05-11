const express = require('express');
const router = express.Router();

const FULL_RESOURCE = "VERSION_1_DATA_" + "X".repeat(1000);

// 1. Suffix Range Requests (Fetching last N bytes)
router.get('/suffix-range', (req, res) => {
    const range = req.headers.range;
    if (range && range.startsWith('bytes=-')) {
        const suffixLen = parseInt(range.replace('bytes=-', ""));
        const start = Math.max(0, FULL_RESOURCE.length - suffixLen);
        const chunk = FULL_RESOURCE.slice(start);
        
        return res.status(206).set({
            'Content-Range': `bytes ${start}-${FULL_RESOURCE.length - 1}/${FULL_RESOURCE.length}`,
            'Content-Length': chunk.length
        }).send(chunk);
    }
    res.status(200).send(FULL_RESOURCE);
});

// 2. Binary Diff Simulation
router.get('/delta', (req, res) => {
    const v1_hash = "abc";
    const ifNoneMatch = req.headers['if-none-match'];

    if (ifNoneMatch === v1_hash) {
        // Return only the delta
        res.set('X-Patch-Type', 'binary-delta');
        return res.json({ delta: "DIFF_CHUNK_001", base: v1_hash });
    }
    res.set('ETag', v1_hash).json({ full: FULL_RESOURCE });
});

module.exports = router;
