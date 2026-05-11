#!/bin/bash

BASE_DIR="data/master_suite/patch"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/patch"
EOF

# 1. Atomic Patch
cat > "$BASE_DIR/1_apply_patch.toml" <<EOF
[request]
method = "PATCH"
url = "{{base_url}}/resource"

[body]
type = "json"
raw = """
[
  { "op": "test", "path": "/id", "value": "p-100" },
  { "op": "replace", "path": "/name", "value": "Rumour Patched Name" },
  { "op": "add", "path": "/tags/-", "value": "beta" }
]
"""
EOF

echo "✅ Patch Dataset Generated in $BASE_DIR"
