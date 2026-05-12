#!/bin/bash

BASE_DIR="../../master_suite/auth"
mkdir -p "$BASE_DIR"

# 1. Collection Level Env (Global)
cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2"
EOF

# 2. Folder Level Env (Auth Specific)
cat > "$BASE_DIR/folder.env.toml" <<EOF
auth_prefix = "Bearer"
EOF

# 3. Synchronized Scenarios
cat > "$BASE_DIR/1_login.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"email": "admin", "password": "password123"}
"""

[extract]
# Namespaced variable
auth_token = "token"
EOF

cat > "$BASE_DIR/2_validate.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/auth/validate"

[headers]
# Using namespaced variable
Authorization = "{{auth_prefix}} {{auth_token}}"
EOF

# Admin Login
cat > "$BASE_DIR/1_admin_login.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"email": "superadmin", "password": "admin-secret-99", "role": "admin"}
"""

[extract]
auth_admin_token = "token"
EOF

# Fail Case
cat > "$BASE_DIR/3_fail_login.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"email": "hacker", "password": "fail"}
"""
EOF

cat > "$BASE_DIR/4_expired_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/auth/expired-token"
EOF

echo "Synchronized Auth Generator."
