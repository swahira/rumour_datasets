const express = require('express');
const router = express.Router();

let activeWorkId = null;

// 1. Start Heavy Work
router.post('/start', (req, res) => {
    const workId = `work-${Date.now()}`;
    activeWorkId = workId;
    
    // Simulate work that takes 2 seconds
    setTimeout(() => {
        activeWorkId = null;
        console.log(`✅ Work ${workId} finished`);
    }, 2000);

    res.json({ status: "Accepted", work_id: workId });
});

// 2. Sequential Check (Blocks if work is active)
router.get('/check', (req, res) => {
    if (activeWorkId) {
        // HOL Blocking Simulation
        return res.status(423).json({ 
            error: "Resource Locked", 
            active_work: activeWorkId,
            message: "Head-of-Line blocking: Please wait for previous work to finish" 
        });
    }
    res.json({ status: "Ready", message: "Pipe is clear" });
});

module.exports = router;
