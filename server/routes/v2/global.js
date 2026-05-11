const express = require('express');
const router = express.Router();

// 1. Currency Formatting
router.get('/finance', (req, res) => {
    const locale = req.query.locale || 'en-US';
    
    const data = {
        'en-US': { balance: "$1,250.50", code: "USD", symbol: "$" },
        'de-DE': { balance: "1.250,50 €", code: "EUR", symbol: "€" },
        'in-IN': { balance: "₹1,250.50", code: "INR", symbol: "₹" }
    };

    res.json(data[locale] || data['en-US']);
});

// 2. Complex RTL Structure
router.get('/rtl-meta', (req, res) => {
    res.json({
        dir: "rtl",
        content: {
            title: "قاعدة البيانات",
            meta: "تحليلات متقدمة",
            tags: ["بحث", "بيانات"]
        }
    });
});

module.exports = router;
