const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fileController = require('../controllers/fileController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../assets'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: Upload a file
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 */
router.post('/upload', upload.single('file'), fileController.uploadFile);

/**
 * @swagger
 * /api/files:
 *   get:
 *     summary: List all uploaded files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: List of files
 */
router.get('/', fileController.listFiles);

/**
 * @swagger
 * /api/files/{filename}:
 *   get:
 *     summary: Download a file
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The file content
 *       404:
 *         description: File not found
 */
router.get('/:filename', fileController.downloadFile);

/**
 * @swagger
 * /api/files/{filename}:
 *   delete:
 *     summary: Delete a file
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: File deleted
 *       404:
 *         description: File not found
 */
router.delete('/:filename', fileController.deleteFile);

module.exports = router;
