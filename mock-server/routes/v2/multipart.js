const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// 1. Multi-file + Multi-field Upload
router.post('/batch', upload.array('attachments', 5), (req, res) => {
    const { category, priority, description } = req.body;
    
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files provided in batch" });
    }
    
    res.json({
        message: "Batch upload successful",
        meta: { category, priority, description },
        files_count: req.files.length,
        file_ids: req.files.map(f => f.filename)
    });
});

// 2. Form Data Array Simulation
router.post('/form-arrays', (req, res) => {
    // Simulating how some APIs handle multiple fields with same name
    res.json({ received_body: req.body });
});

module.exports = router;
