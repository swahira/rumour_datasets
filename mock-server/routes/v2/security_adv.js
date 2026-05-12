const express = require('express');
const router = express.Router();
router.post('/echo', (req, res) => res.json(req.body));
router.get('/headers', (req, res) => res.json(req.headers));

router.get('/csrf-token', (req, res) => {
    res.json({
        csrf_token: "mock-csrf-" + Math.random().toString(36).substring(7),
        session_id: "sess-" + Date.now()
    });
});

router.post('/protected-action', (req, res) => {
    const { session_id, csrf_token } = req.body;
    if (!session_id || !csrf_token) {
        return res.status(403).json({ error: "Missing Security Context" });
    }
    res.json({ status: "Action Authorized", ref: "SEC-" + Date.now() });
});
module.exports = router;
