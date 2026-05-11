const express = require('express');
const router = express.Router();

let workspaceState = {
    current_step: 0,
    last_resumed_at: null
};

// 1. Progress Tracker
router.post('/progress', (req, res) => {
    const { step } = req.body;
    if (step === workspaceState.current_step + 1) {
        workspaceState.current_step = step;
        res.json({ status: "In Progress", step: workspaceState.current_step });
    } else {
        res.status(409).json({ 
            error: "Step Mismatch", 
            expected: workspaceState.current_step + 1,
            actual: step 
        });
    }
});

// 2. Resumption Verification
router.get('/resume', (req, res) => {
    workspaceState.last_resumed_at = Date.now();
    res.json({ 
        message: "Resumption point established", 
        last_successful_step: workspaceState.current_step 
    });
});

// 3. Reset (For fresh test runs)
router.post('/reset', (req, res) => {
    workspaceState.current_step = 0;
    res.json({ message: "Workspace state reset" });
});

module.exports = router;
