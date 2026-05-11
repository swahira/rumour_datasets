const express = require('express');
const router = express.Router();

// 1. Advanced Binary Framing (Nested Frames)
router.get('/framed-data', (req, res) => {
    // Frame 1: [Type: 0x01][Len: 4][Data: 0xAABBCCDD][Checksum: 0xFF]
    const innerFrame = Buffer.from([0x01, 0x00, 0x00, 0x00, 0x04, 0xAA, 0xBB, 0xCC, 0xDD, 0xFF]);
    // Outer Frame: [Type: 0xFE][Len: 10][InnerFrame]
    const outerFrame = Buffer.alloc(5 + innerFrame.length);
    outerFrame[0] = 0xFE;
    outerFrame.writeUInt32BE(innerFrame.length, 1);
    innerFrame.copy(outerFrame, 5);

    res.set('Content-Type', 'application/x-rumour-framed');
    res.send(outerFrame);
});

// 2. Multipart-Related (RFC 2387)
router.get('/related', (req, res) => {
    const boundary = "content_boundary";
    res.set('Content-Type', `multipart/related; boundary=${boundary}; type="application/json"`);
    
    res.write(`--${boundary}\r\nContent-Type: application/json\r\nContent-ID: <root>\r\n\r\n{"msg": "See attachment", "ref": "cid:attachment-1"}\r\n`);
    res.write(`--${boundary}\r\nContent-Type: text/plain\r\nContent-ID: <attachment-1>\r\n\r\nThis is the related attachment data.\r\n--${boundary}--`);
    res.end();
});

module.exports = router;
