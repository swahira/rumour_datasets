const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url} - Content-Type: ${req.headers['content-type']}`);
  next();
});

// 1. Dynamic Topic Module Loader
const v2Dir = path.join(__dirname, 'routes', 'v2');
if (!fs.existsSync(v2Dir)) fs.mkdirSync(v2Dir, { recursive: true });

fs.readdirSync(v2Dir).forEach(file => {
  if (file.endsWith('.js')) {
    const routeName = file.replace('.js', '');
    const hyphenatedName = routeName.replace(/_/g, '-');
    const route = require(`./routes/v2/${file}`);
    
    // PRODUCTION: Mount at topic prefix ONLY to prevent root collisions
    app.use(`/${routeName}`, route);
    if (routeName !== hyphenatedName) {
      app.use(`/${hyphenatedName}`, route);
      console.log(`Loaded Topic Module: ${routeName} (aliased to ${hyphenatedName})`);
    } else {
      console.log(`Loaded Topic Module: ${routeName}`);
    }
  }
});

// Swagger Setup
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rumour Mock API',
      version: '2.0.0',
      description: 'API Documentation for the Rumour Testing Environment',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ['./routes/**/*.js', './server.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Legacy routes
app.use('/api/battle', require('./routes/battle'));
app.use('/api', require('./routes/misc'));
app.use('/api/files', require('./routes/files'));

// Root Status
app.get('/', (req, res) => {
  res.json({
    status: "Rumour Master Test Server Active",
    version: "2.0.0",
    modules_loaded: fs.readdirSync(v2Dir).filter(f => f.endsWith('.js'))
  });
});

app.listen(PORT, () => {
  console.log(`\x1b[35m[MASTER]\x1b[0m Server initialized at http://localhost:${PORT}`);
});