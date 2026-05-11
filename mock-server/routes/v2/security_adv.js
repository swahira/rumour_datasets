const express = require('express');
const router = express.Router();
router.post('/echo', (req, res) => res.json(req.body));
router.get('/headers', (req, res) => res.json(req.headers));
module.exports = router;
