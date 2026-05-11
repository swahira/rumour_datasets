#!/bin/bash

BASE_DIR="../../master_suite/binary_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/binary-adv"
EOF

# 1. Fetch Framed Data
cat > "$BASE_DIR/1_fetch_framed.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/framed-data"

[headers]
Accept = "application/x-rumour-framed"
EOF

# 2. Fetch Multipart Related
cat > "$BASE_DIR/2_fetch_related.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/related"

[headers]
Accept = "multipart/related"
EOF

echo "✅ Binary-Adv Dataset Generated in $BASE_DIR"
# This verifies Rumour's ability to handle deeply nested binary and related groupings.
