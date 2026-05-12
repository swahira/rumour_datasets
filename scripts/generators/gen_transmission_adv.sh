#!/bin/bash

BASE_DIR="../../master_suite/transmission_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/transmission-adv"
EOF

# 1. Brotli Fetch
cat > "$BASE_DIR/1_fetch_brotli.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/brotli"

[headers]
Accept-Encoding = "br"
EOF

echo "Transmission-Adv Dataset Generated in $BASE_DIR"
