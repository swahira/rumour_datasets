const express = require('express');
const router = express.Router();

const RESOURCE_ETAG = '"rumour-cache-v1"';
const RESOURCE_DATA = { id: "cached-001", value: "Static Gold" };

router.get('/data', (req, res) => {
    const clientEtag = req.headers['if-none-match'];
    
    res.set('Cache-Control', 'public, max-age=3600');
    res.set('ETag', RESOURCE_ETAG);

    if (clientEtag === RESOURCE_ETAG) {
        console.log("💾 Cache Hit: Returning 304");
        return res.status(304).end();
    }

    console.log("🔥 Cache Miss: Returning 200");
    res.json(RESOURCE_DATA);
});

module.exports = router;
