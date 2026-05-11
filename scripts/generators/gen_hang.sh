#!/bin/bash

BASE_DIR="../../master_suite/hang"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/hang"
EOF

# 1. Never Respond
cat > "$BASE_DIR/1_blackhole_request.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/never-respond"
EOF

echo "✅ Hang Dataset Generated in $BASE_DIR"
