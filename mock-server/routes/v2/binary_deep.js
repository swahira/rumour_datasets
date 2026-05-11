const express = require('express');
const router = express.Router();

// 1. PDF Simulation (Magic: %PDF-)
router.get('/pdf', (req, res) => {
    const pdfMagic = Buffer.from('%PDF-1.4\n1 0 obj\n<< /Title (Rumour Test) >>\nendobj');
    res.set('Content-Type', 'application/pdf');
    res.send(pdfMagic);
});

// 2. PNG Simulation (Magic: \x89PNG\r\n\x1a\n)
router.get('/image', (req, res) => {
    const pngMagic = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52]);
    res.set('Content-Type', 'image/png');
    res.send(pngMagic);
});

module.exports = router;
