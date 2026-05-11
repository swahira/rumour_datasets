#!/bin/bash

BASE_DIR="data/master_suite/transmission"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/transmission"
EOF

# 1. Gzip Test
cat > "$BASE_DIR/1_gzip_fetch.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/gzip"

[headers]
Accept-Encoding = "gzip"
EOF

# 2. Streaming Test
cat > "$BASE_DIR/2_stream_fetch.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/stream"
EOF

echo "✅ Transmission Dataset Generated in $BASE_DIR"
