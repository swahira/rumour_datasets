const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/ping:
 *   get:
 *     summary: Health check
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: pong
 */
router.get('/ping', (req, res) => res.json({ message: 'pong' }));

/**
 * @swagger
 * /api/echo:
 *   post:
 *     summary: Echo back the request
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Request data
 */
router.all('/echo', (req, res) => {
  res.json({
    method: req.method,
    headers: req.headers,
    query: req.query,
    body: req.body,
    timestamp: new Date().toISOString()
  });
});

/**
 * @swagger
 * /api/error/{code}:
 *   get:
 *     summary: Simulate an error
 *     tags: [Misc]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       default:
 *         description: Error response
 */
router.get('/error/:code', (req, res) => {
  const code = parseInt(req.params.code) || 500;
  res.status(code).json({
    error: `Simulated ${code} error`,
    code
  });
});

/**
 * @swagger
 * /api/timeout:
 *   get:
 *     summary: Simulate a timeout (delays response by 10s)
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Delayed response
 */
router.get('/timeout', (req, res) => {
  const delay = parseInt(req.query.ms) || 10000;
  setTimeout(() => {
    res.json({ message: `Delayed by ${delay}ms` });
  }, delay);
});

module.exports = router;
