const express = require('express');
const router = express.Router();
router.post('/validate', (req, res) => {
    if (!req.body.id) return res.status(422).json({ error: "Missing required field: id" });
    res.json({ status: "Schema is valid" });
});
module.exports = router;
