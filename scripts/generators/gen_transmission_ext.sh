#!/bin/bash

BASE_DIR="../../master_suite/transmission_ext"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/transmission-ext"
EOF

# 1. Brotli Stream Fetch
cat > "$BASE_DIR/1_fetch_brotli_stream.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/brotli-stream"

[headers]
Accept-Encoding = "br"
EOF

# 2. Multipart Range Fetch
cat > "$BASE_DIR/2_fetch_multi_range.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/multi-range"

[headers]
Range = "bytes=0-4,10-14"
EOF

echo "Transmission-Ext Dataset Generated in $BASE_DIR"
