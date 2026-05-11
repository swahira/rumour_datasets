const express = require('express');
const router = express.Router();

// 1. Proxy Authentication Simulation
router.get('/behind-proxy', (req, res) => {
    const proxyAuth = req.headers['proxy-authorization'];
    if (!proxyAuth || proxyAuth !== 'Basic cnVtb3VyOnNlY3JldA==') { // rumour:secret
        return res.status(407).set('Proxy-Authenticate', 'Basic realm="Rumour Proxy"').json({ error: "Proxy Authentication Required" });
    }
    res.json({ status: "Success", access: "Granted via Proxy" });
});

// 2. Mutual TLS (mTLS) Header Simulation
router.get('/mtls-protected', (req, res) => {
    const clientCertHeader = req.headers['x-client-cert-dn'];
    if (!clientCertHeader || !clientCertHeader.includes('CN=Rumour-Client')) {
        return res.status(403).json({ 
            error: "Mutual TLS Required", 
            message: "Client certificate not verified by gateway" 
        });
    }
    res.json({ 
        status: "Secure", 
        identity: clientCertHeader,
        message: "Mutual TLS verified" 
    });
});

module.exports = router;
