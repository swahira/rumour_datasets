const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '../assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.status(201).json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    originalName: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
    path: `/assets/${req.file.filename}`
  });
};

exports.listFiles = (req, res) => {
  try {
    const files = fs.readdirSync(ASSETS_DIR).filter(f => f !== '.keep');
    res.json(files.map(filename => ({
      filename,
      url: `/assets/${filename}`
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.downloadFile = (req, res) => {
  const filePath = path.join(ASSETS_DIR, req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
};

exports.deleteFile = (req, res) => {
  const filePath = path.join(ASSETS_DIR, req.params.filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'File not found' });
  }
};
