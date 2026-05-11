const DB = require('../utils/db');
const modulesDb = new DB('modules');

exports.create = async (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newModule = {
    id: Date.now(),
    title,
    content: content || '',
    ownerId: req.userId,
    status: 'DRAFT',
    createdAt: new Date().toISOString()
  };

  const saved = await modulesDb.insert(newModule);
  res.status(201).json(saved);
};

exports.getAll = async (req, res) => {
  const modules = await modulesDb.findAll();
  res.json(modules);
};

exports.getById = async (req, res) => {
  const module = await modulesDb.findById(req.params.id);
  if (!module) return res.status(404).json({ error: 'Module not found' });
  res.json(module);
};

exports.update = async (req, res) => {
  const module = await modulesDb.findById(req.params.id);
  if (!module) return res.status(404).json({ error: 'Module not found' });
  
  if (module.ownerId !== req.userId && req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: You do not own this module' });
  }

  const updated = { ...module, ...req.body, id: module.id };
  await modulesDb.update(req.params.id, updated);
  res.json(updated);
};

exports.submitForReview = async (req, res) => {
  const module = await modulesDb.findById(req.params.id);
  if (!module) return res.status(404).json({ error: 'Module not found' });
  
  if (module.ownerId != req.userId) {
    return res.status(403).json({ error: 'Only owner can submit for review' });
  }

  module.status = 'IN_REVIEW';
  await modulesDb.update(req.params.id, module);
  res.json({ message: 'Submitted for review', module });
};

exports.publish = async (req, res) => {
  const module = await modulesDb.findById(req.params.id);
  if (!module) return res.status(404).json({ error: 'Module not found' });

  module.status = 'PUBLISHED';
  await modulesDb.update(req.params.id, module);
  res.json({ message: 'Module published', module });
};

exports.delete = async (req, res) => {
  const module = await modulesDb.findById(req.params.id);
  if (!module) return res.status(404).json({ error: 'Module not found' });

  if (module.ownerId !== req.userId && req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  await modulesDb.delete(req.params.id);
  res.json({ message: 'Module deleted' });
};
