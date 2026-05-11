#!/bin/bash

BASE_DIR="data/master_suite/legacy"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/legacy"
EOF

# 1. XML GET
cat > "$BASE_DIR/1_get_xml_user.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/xml-data"

[extract]
xmlUserId = "User.Id"
EOF

# 2. SOAP POST (Simulating Envelope)
cat > "$BASE_DIR/2_soap_request.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/soap"

[headers]
Content-Type = "application/xml"

[body]
type = "text"
raw = """
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
        <GetStockPrice>
            <Symbol>RUMR</Symbol>
        </GetStockPrice>
    </soap:Body>
</soap:Envelope>
"""

[extract]
stockPrice = "soap:Envelope.soap:Body.GetStockPriceResponse.Price"
EOF

echo "✅ Legacy Dataset Generated in $BASE_DIR"
