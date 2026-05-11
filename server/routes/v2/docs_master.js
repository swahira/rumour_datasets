const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// 1. Function to build the spec dynamically
function buildDynamicSpec() {
    const spec = {
        openapi: "3.0.0",
        info: {
            title: "Infinite API Playground - Master Suite",
            version: "2.0.0",
            description: "A live-crawled testing laboratory with 146+ API scenarios. Any new files or routes added to server/routes/v2/ will appear here automatically on refresh."
        },
        servers: [{ url: "http://localhost:3000/api/v2" }],
        paths: {}
    };

    const routesDir = path.join(__dirname);
    const files = fs.readdirSync(routesDir);

    files.forEach(file => {
        if (file === 'docs_master.js' || !file.endsWith('.js')) return;

        const moduleName = file.replace('.js', '');
        const filePath = path.join(routesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Extracting router calls: router.get('/path', ...)
        const routeRegex = /router\.(get|post|put|patch|delete)\(['"]([^'"]+)['"]/g;
        let match;

        while ((match = routeRegex.exec(content)) !== null) {
            const method = match[1];
            const routePath = match[2];
            // Format path: /module-name/path
            const fullPath = `/${moduleName.replace(/_/g, '-')}${routePath === '/' ? '' : routePath}`;

            if (!spec.paths[fullPath]) {
                spec.paths[fullPath] = {};
            }

            spec.paths[fullPath][method] = {
                tags: [moduleName.replace(/_/g, ' ').toUpperCase()],
                summary: `${method.toUpperCase()} ${routePath}`,
                responses: { 
                    200: { description: "Successful Operation" }
                }
            };
        }
    });
    return spec;
}

// 2. Serve Swagger UI with LIVE REFRESH
router.use('/', swaggerUi.serve);
router.get('/', (req, res) => {
    const dynamicSpec = buildDynamicSpec();
    res.send(swaggerUi.generateHTML(dynamicSpec, {
        customSiteTitle: "Rumour Master Playground",
        swaggerOptions: { persistAuthorization: true }
    }));
});

// 3. Raw JSON for automation (also LIVE)
router.get('/swagger.json', (req, res) => {
    res.json(buildDynamicSpec());
});

module.exports = router;
