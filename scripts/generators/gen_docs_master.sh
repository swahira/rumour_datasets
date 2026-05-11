#!/bin/bash

BASE_DIR="../../master_suite/docs_master"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/docs-master"
EOF

# 1. Fetch Dynamic Spec
cat > "$BASE_DIR/1_fetch_dynamic_spec.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/swagger.json"

[extract]
totalPaths = "paths.length"
# We expect many paths because it scans the whole directory
EOF

# 2. Verify UI loads
cat > "$BASE_DIR/2_verify_ui.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/"

[assert]
status = 200
body_contains = "Rumour Master Playground"
EOF

echo "✅ Docs-Master Generator Created."
