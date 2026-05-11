const express = require('express');
const router = express.Router();

const VALID_IPS = ['127.0.0.1', '192.168.1.1'];
const ACTIVE_KEYS = { 'key-new-2026': true, 'key-old-2025': false };

// 1. IP Whitelisting Simulation
router.get('/internal-portal', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.ip;
    if (!VALID_IPS.includes(clientIp)) {
        return res.status(403).json({ error: "Access Denied", message: `IP ${clientIp} is not whitelisted` });
    }
    res.json({ status: "Success", zone: "Internal" });
});

// 2. API Key Rotation
router.get('/data', (req, res) => {
    const key = req.headers['x-api-key'];
    if (!(key in ACTIVE_KEYS)) return res.status(401).json({ error: "Invalid API Key" });
    if (!ACTIVE_KEYS[key]) return res.status(403).json({ error: "Key Expired", message: "Please rotate to a 2026 key" });
    
    res.json({ status: "Active", data: "Confidential Info" });
});

// 3. SAML XML Assertion Simulation
router.post('/saml/acs', (req, res) => {
    const samlResponse = req.body.SAMLResponse;
    if (!samlResponse) return res.status(400).json({ error: "SAMLResponse missing" });

    // Simulate XML success
    res.set('Content-Type', 'application/xml');
    res.send(`
        <samlp:Response xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
            <saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">
                <saml:Subject>Enterprise_User</saml:Subject>
                <saml:AuthnStatement AuthnInstant="${new Date().toISOString()}"/>
            </saml:Assertion>
        </samlp:Response>
    `);
});

module.exports = router;
