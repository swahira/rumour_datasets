#!/bin/bash

BASE_DIR="../../master_suite/security"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/security"
client_id = "rumour_client"
client_secret = "rumour_secret"
EOF

# 1. OAuth Token Exchange
cat > "$BASE_DIR/1_oauth_token.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/oauth/token"

[body]
type = "json"
raw = """
{
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "grant_type": "client_credentials"
}
"""

[extract]
security_bearer_token = "access_token"
EOF

# 2. Access Secure Resource
cat > "$BASE_DIR/2_get_secure_data.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/secure-resource"

[headers]
Authorization = "Bearer {{security_bearer_token}}"
EOF

# 3. HMAC Validation (Positive)
cat > "$BASE_DIR/3_hmac_valid.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/hmac-verify"

[headers]
X-Rumour-Signature = "d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7"

[body]
type = "json"
raw = """
{"test":"hmac"}
"""
EOF

# 4. HMAC Validation (Negative - Data Tampering)
cat > "$BASE_DIR/4_hmac_tampered.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/hmac-verify"

[headers]
X-Rumour-Signature = "d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7"

[body]
type = "json"
raw = """
{"test":"tampered"}
"""
EOF

echo "Synchronized Security Generator."
