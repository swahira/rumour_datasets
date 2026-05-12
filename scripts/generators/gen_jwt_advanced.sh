#!/bin/bash

BASE_DIR="../../master_suite/jwt_advanced"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/jwt-advanced"
EOF

# 1. Issue Token
cat > "$BASE_DIR/1_issue_token.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/issue"

[extract]
complexToken = "token"
EOF

# 2. Verify with Claims
cat > "$BASE_DIR/2_verify_strict.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/verify"

[headers]
Authorization = "Bearer {{complexToken}}"
EOF

echo "JWT Advanced Dataset Generated in $BASE_DIR"
