#!/bin/bash

BASE_DIR="../../master_suite/performance"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/performance"
EOF

# 1. Retry Logic (Force Rumour to handle 429)
cat > "$BASE_DIR/1_retry_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/retry-after"
retries = 3
EOF

# 2. Assertions Stress (Verifying deep paths)
# Note: Assertions are in the [assertions] block in Rumour
cat > "$BASE_DIR/2_assertion_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/assertion-stress"

[extract]
memUsed = "metrics.memory.used"
tagFirst = "tags.0"
EOF

echo "Performance Dataset Generated in $BASE_DIR"
