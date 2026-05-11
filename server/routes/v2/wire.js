const express = require('express');
const router = express.Router();

// 1. Protobuf-style binary simulation
router.post('/proto', (req, res) => {
    // Expecting binary body
    const body = req.body;
    res.set('Content-Type', 'application/x-protobuf');
    
    // Returning a dummy "Packed" response
    // Magic: \x0A (field 1, string) + length + content
    const packed = Buffer.from([0x0A, 0x0E, 0x72, 0x75, 0x6D, 0x6F, 0x75, 0x72, 0x2D, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73]);
    res.send(packed);
});

module.exports = router;
