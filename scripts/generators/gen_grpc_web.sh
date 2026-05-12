#!/bin/bash

BASE_DIR="../../master_suite/grpc_web"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/grpc-web"
EOF

# 1. gRPC-Web Handshake
cat > "$BASE_DIR/1_service_call.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/service/Method"

[headers]
Content-Type = "application/grpc-web-text"
Accept = "application/grpc-web-text"

[body]
type = "text"
raw = "AAAAAAIKCghIdW1hbiAxMA=="
EOF

echo "gRPC-Web Dataset Generated in $BASE_DIR"
