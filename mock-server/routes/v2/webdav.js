const express = require('express');
const router = express.Router();

// 1. PROPFIND Simulation
router.all('/resource', (req, res) => {
    if (req.method === 'PROPFIND') {
        res.set('Content-Type', 'application/xml');
        return res.status(207).send(`
            <D:multistatus xmlns:D="DAV:">
                <D:response>
                    <D:href>/api/v2/webdav/resource</D:href>
                    <D:propstat>
                        <D:prop>
                            <D:displayname>Test Asset</D:displayname>
                            <D:getcontentlength>2048</D:getcontentlength>
                        </D:prop>
                        <D:status>HTTP/1.1 200 OK</D:status>
                    </D:propstat>
                </D:response>
            </D:multistatus>
        `);
    }

    if (req.method === 'MKCOL') {
        return res.status(201).json({ message: "Collection created" });
    }

    res.status(405).json({ error: "Method Not Allowed", supported: ["PROPFIND", "MKCOL"] });
});

module.exports = router;
