const express = require('express');
const router = express.Router();

// Simple XML simulation without heavy deps
router.post('/soap', (req, res) => {
    const body = req.body.toString();
    res.set('Content-Type', 'application/xml');
    
    if (body.includes('GetStockPrice')) {
        return res.send(`
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
                <soap:Body>
                    <GetStockPriceResponse>
                        <Price>150.25</Price>
                        <Currency>USD</Currency>
                    </GetStockPriceResponse>
                </soap:Body>
            </soap:Envelope>
        `);
    }

    res.status(400).send('<Error>Invalid SOAP Action</Error>');
});

router.get('/xml-data', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send('<User><Id>xml-999</Id><Name>Legacy System</Name></User>');
});

module.exports = router;
