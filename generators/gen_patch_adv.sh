#!/bin/bash

BASE_DIR="data/master_suite/patch_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/patch-adv"
EOF

# 1. Advanced Move & Copy
cat > "$BASE_DIR/1_restructure_data.toml" <<EOF
[request]
method = "PATCH"
url = "{{base_url}}/resource"

[body]
type = "json"
raw = """
[
  { "op": "copy", "from": "/data/title", "path": "/archive/-" },
  { "op": "move", "from": "/data/tags/0", "path": "/data/version" }
]
"""
EOF

echo "✅ Patch-Adv Dataset Generated in $BASE_DIR"
# This verifies that Rumour can handle multi-path operations in a single atomic request.
