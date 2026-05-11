#!/bin/bash

BASE_DIR="../../master_suite/scripting"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/scripting"
EOF

# 1. Pre-Request Verification (Simulating script logic)
cat > "$BASE_DIR/1_pre_script.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/validate-pre"

[headers]
X-Rumour-Computed = "6f0622607137f867491f2e14a1c5d0b4"

[body]
type = "json"
raw = """
{"id": 100}
"""
EOF

# 2. Global Propagation (Set)
cat > "$BASE_DIR/2_set_global.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/set-global"

[body]
type = "json"
raw = """
{"key": "shared_token", "val": "xyz-789"}
"""
EOF

# 3. Global Propagation (Get)
cat > "$BASE_DIR/3_get_global.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/get-global/shared_token"

[extract]
propagatedVal = "val"
EOF

echo "✅ Scripting Dataset Generated in $BASE_DIR"
