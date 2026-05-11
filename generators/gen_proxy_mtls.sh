#!/bin/bash

BASE_DIR="data/master_suite/proxy_mtls"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/proxy-mtls"
EOF

# 1. Proxy Auth Test
cat > "$BASE_DIR/1_proxy_handshake.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/behind-proxy"

[headers]
Proxy-Authorization = "Basic cnVtb3VyOnNlY3JldA=="
EOF

# 2. mTLS Identity Test
cat > "$BASE_DIR/2_mtls_request.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/mtls-protected"

[headers]
x-client-cert-dn = "CN=Rumour-Client, O=Rumour-Audit"
EOF

echo "✅ Proxy-mTLS Dataset Generated in $BASE_DIR"
