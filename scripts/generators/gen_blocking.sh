#!/bin/bash

BASE_DIR="../../master_suite/blocking"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/blocking"
EOF

# 1. Start Work
cat > "$BASE_DIR/1_start_heavy_work.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/start"

[extract]
activeWorkId = "work_id"
EOF

# 2. Immediate Check (Likely to hit HOL blocking)
cat > "$BASE_DIR/2_check_lock.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/check"
EOF

echo "✅ Blocking Dataset Generated in $BASE_DIR"
