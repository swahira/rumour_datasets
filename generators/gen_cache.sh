#!/bin/bash

BASE_DIR="data/master_suite/cache"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/cache"
EOF

# 1. Fetch and Extract ETag
cat > "$BASE_DIR/1_initial_fetch.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[extract]
etag = "header.ETag"
EOF

# 2. Conditional Fetch (Expect 304)
cat > "$BASE_DIR/2_conditional_fetch.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
If-None-Match = "{{etag}}"
EOF

echo "✅ Cache Dataset Generated in $BASE_DIR"
