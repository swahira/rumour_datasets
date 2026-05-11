const express = require('express');
const router = express.Router();

let tasks = {};

// 1. Initiate Async Task
router.post('/task', (req, res) => {
    const taskId = `task-${Date.now()}`;
    tasks[taskId] = { status: "pending", progress: 0 };
    
    // Simulate background work
    let progress = 0;
    const interval = setInterval(() => {
        progress += 25;
        tasks[taskId].progress = progress;
        if (progress >= 100) {
            tasks[taskId].status = "completed";
            clearInterval(interval);
        }
    }, 1000);

    res.status(202).set('Location', `/api/v2/async/status/${taskId}`).json({
        task_id: taskId,
        message: "Task accepted and running in background"
    });
});

// 2. Poll Status
router.get('/status/:id', (req, res) => {
    const task = tasks[req.params.id];
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
});

module.exports = router;
