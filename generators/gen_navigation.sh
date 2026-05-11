#!/bin/bash

BASE_DIR="data/master_suite/navigation"
mkdir -p "$BASE_DIR"

# 1. Collection Level Env
cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2"
EOF

# 2. Folder Level Env
cat > "$BASE_DIR/folder.env.toml" <<EOF
nav_version = "v2"
EOF

# 3. Synchronized Scenarios
cat > "$BASE_DIR/1_redirect_check.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/navigation/redirect"
EOF

cat > "$BASE_DIR/2_version_v1.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/navigation/version"

[headers]
X-API-Version = "v1"
EOF

cat > "$BASE_DIR/3_version_v2.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/navigation/version"

[headers]
X-API-Version = "{{nav_version}}"
EOF

cat > "$BASE_DIR/4_loop_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/navigation/loop"
EOF

echo "✅ Synchronized Navigation Generator."
