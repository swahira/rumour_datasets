#!/bin/bash

BASE_DIR="data/master_suite/security_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/security-adv"
EOF

# 1. Fetch CSRF Token
cat > "$BASE_DIR/1_get_csrf.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/csrf-token"

[extract]
csrfToken = "csrf_token"
sessionId = "session_id"
EOF

# 2. Use CSRF Token
cat > "$BASE_DIR/2_post_protected.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/protected-action"

[body]
type = "json"
raw = """
{
  "session_id": "{{sessionId}}",
  "csrf_token": "{{csrfToken}}"
}
"""
EOF

# 3. Security Reflection (SQLi/XSS Test)
cat > "$BASE_DIR/3_reflection_test.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/echo"

[body]
type = "json"
raw = """
{
  "input": "'; DROP TABLE users; -- <script>alert(1)</script>"
}
"""
EOF

echo "✅ Security-Adv Dataset Generated in $BASE_DIR"
