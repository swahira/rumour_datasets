#!/bin/bash

BASE_DIR="../../master_suite/data_diff"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/data-diff"
EOF

# 1. Fetch Last 50 Bytes
cat > "$BASE_DIR/1_fetch_suffix.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/suffix-range"

[headers]
Range = "bytes=-50"
EOF

# 2. Fetch Binary Delta
cat > "$BASE_DIR/2_fetch_delta.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/delta"

[headers]
If-None-Match = "abc"
EOF

echo "✅ Data-Diff Dataset Generated in $BASE_DIR"
