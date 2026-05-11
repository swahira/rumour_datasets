const express = require('express');
const router = express.Router();

// 1. gRPC-Web Mock (Base64 Framed)
router.post('/service/Method', (req, res) => {
    res.set('Content-Type', 'application/grpc-web-text');
    
    // Constructing a gRPC-Web frame:
    // 0x00 (Data) + 4 bytes length + payload
    const payload = Buffer.from("grpc-web-success");
    const frame = Buffer.alloc(5 + payload.length);
    frame[0] = 0x00;
    frame.writeUInt32BE(payload.length, 1);
    payload.copy(frame, 5);
    
    res.send(frame.toString('base64'));
});

module.exports = router;
