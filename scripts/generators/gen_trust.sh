#!/bin/bash

BASE_DIR="../../master_suite/trust"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/trust"
EOF

# 1. IP Whitelist Test
cat > "$BASE_DIR/1_internal_portal.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/internal-portal"

[headers]
X-Forwarded-For = "127.0.0.1"
EOF

# 2. Key Rotation (Success with new key)
cat > "$BASE_DIR/2_rotated_key_success.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
x-api-key = "key-new-2026"
EOF

# 3. SAML Handshake
cat > "$BASE_DIR/3_saml_acs.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/saml/acs"

[body]
type = "form"
raw = "SAMLResponse=PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiPi4uLjwvc2FtbHA6UmVzcG9uc2U+"

[extract]
samlSubject = "samlp:Response.saml:Assertion.saml:Subject"
EOF

echo "✅ Trust Dataset Generated in $BASE_DIR"
