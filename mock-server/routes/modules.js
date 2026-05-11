const express = require('express');
const router = express.Router();
const modulesController = require('../controllers/modulesController');
const authController = require('../controllers/authController');

router.use(authController.verifyToken);

/**
 * @swagger
 * /api/modules:
 *   get:
 *     summary: List all modules
 *     tags: [Modules]
 *     responses:
 *       200:
 *         description: List of modules
 */
router.get('/', modulesController.getAll);

/**
 * @swagger
 * /api/modules:
 *   post:
 *     summary: Create a new module
 *     tags: [Modules]
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', modulesController.create);

/**
 * @swagger
 * /api/modules/{id}:
 *   get:
 *     summary: Get module by ID
 *     tags: [Modules]
 */
router.get('/:id', modulesController.getById);

/**
 * @swagger
 * /api/modules/{id}:
 *   patch:
 *     summary: Update module
 *     tags: [Modules]
 */
router.patch('/:id', modulesController.update);

/**
 * @swagger
 * /api/modules/{id}/submit:
 *   post:
 *     summary: Submit module for review
 *     tags: [Modules]
 */
router.post('/:id/submit', modulesController.submitForReview);

/**
 * @swagger
 * /api/modules/{id}/publish:
 *   post:
 *     summary: Publish module (Admin Only)
 *     tags: [Modules]
 */
router.post('/:id/publish', authController.isAdmin, modulesController.publish);

/**
 * @swagger
 * /api/modules/{id}:
 *   delete:
 *     summary: Delete module
 *     tags: [Modules]
 */
router.delete('/:id', modulesController.delete);

module.exports = router;
