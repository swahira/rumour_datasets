const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

// We need cookie-parser for this module
router.use(cookieParser());

// 1. Set Session Cookie
router.post('/login', (req, res) => {
    res.cookie('rumour_session', 'sess-999-abc', { httpOnly: true, maxAge: 3600000 });
    res.json({ message: "Cookie set successfully" });
});

// 2. Verify Session Cookie
router.get('/profile', (req, res) => {
    const session = req.cookies.rumour_session;
    if (session === 'sess-999-abc') {
        res.json({ user: "CookieUser", status: "Authenticated" });
    } else {
        res.status(401).json({ error: "Unauthorized: Missing or invalid session cookie" });
    }
});

// 3. Clear Cookie (Logout)
router.post('/logout', (req, res) => {
    res.clearCookie('rumour_session');
    res.json({ message: "Logged out" });
});

module.exports = router;
