#!/bin/bash

BASE_DIR="data/master_suite/cookies"
mkdir -p "$BASE_DIR"

# 1. Collection Level Env
cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2"
EOF

# 2. Folder Level Env
cat > "$BASE_DIR/folder.env.toml" <<EOF
test_session_id = "sess-888"
EOF

# 3. Synchronized Scenarios
cat > "$BASE_DIR/1_login_cookie.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/cookies/login"

[body]
type = "json"
raw = """
{"user": "cookie_monster"}
"""

[headers]
X-Session-ID = "{{test_session_id}}"
EOF

cat > "$BASE_DIR/2_check_profile.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/cookies/profile"
EOF

cat > "$BASE_DIR/3_logout.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/cookies/logout"
EOF

echo "✅ Synchronized Cookies Generator."
