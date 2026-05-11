#!/bin/bash

BASE_DIR="data/master_suite/iam"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/iam"
EOF

# 1. OAuth Authorize (PKCE)
cat > "$BASE_DIR/1_oauth_authorize.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/oauth/authorize"

[body]
type = "json"
raw = """
{
  "response_type": "code",
  "client_id": "rumour-app",
  "code_challenge": "sha256-challenge-123",
  "state": "random-state"
}
"""

[extract]
iam_auth_code = "code"
EOF

# 2. OAuth Token Exchange (PKCE)
cat > "$BASE_DIR/2_oauth_token.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/oauth/token"

[body]
type = "json"
raw = """
{
  "grant_type": "authorization_code",
  "code": "{{iam_auth_code}}",
  "code_verifier": "verifier-123"
}
"""

[extract]
iam_access_token = "access_token"
EOF

# 3. OIDC Userinfo
cat > "$BASE_DIR/3_oidc_userinfo.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/oidc/userinfo"

[headers]
Authorization = "Bearer {{iam_access_token}}"
EOF

echo "✅ IAM Dataset Generated with Namespacing."
