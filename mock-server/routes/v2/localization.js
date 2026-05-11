const express = require('express');
const router = express.Router();

// 1. Unicode Response
router.get('/unicode', (req, res) => {
    res.json({
        message: "Global Rumour Support",
        arabic: "مرحبا بالعالم",
        chinese: "你好世界",
        emoji: "🚀🔥🌍",
        complex: "𠜎 𠜱 𠝹 𠱓"
    });
});

// 2. Accept-Language Header Logic
router.get('/i18n', (req, res) => {
    const lang = req.headers['accept-language'] || 'en';
    if (lang.startsWith('es')) {
        return res.json({ greeting: "Hola", lang: "es" });
    }
    if (lang.startsWith('fr')) {
        return res.json({ greeting: "Bonjour", lang: "fr" });
    }
    res.json({ greeting: "Hello", lang: "en" });
});

module.exports = router;
