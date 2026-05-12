#!/bin/bash

BASE_DIR="../../master_suite/network"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/network"
EOF

# 1. Timeout Stress (Engine should wait 5s)
cat > "$BASE_DIR/1_slow_read.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/slow-read"
timeout = 5000
EOF

# 2. Proxy Header Injection
cat > "$BASE_DIR/2_proxy_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/proxy-check"

[headers]
X-Forwarded-For = "10.0.0.1"
X-Forwarded-Proto = "https"
EOF

echo "Network Dataset Generated in $BASE_DIR"
