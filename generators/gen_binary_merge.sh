#!/bin/bash

BASE_DIR="data/master_suite/binary_merge"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/binary-merge"
EOF

# 1. Fetch Composite
cat > "$BASE_DIR/1_fetch_composite.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/composite"
EOF

echo "✅ Binary-Merge Dataset Generated in $BASE_DIR"
