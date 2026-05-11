#!/bin/bash

BASE_DIR="../../master_suite/wire"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/wire"
EOF

# 1. Post Protobuf
cat > "$BASE_DIR/1_post_proto.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/proto"

[headers]
Content-Type = "application/x-protobuf"

[body]
type = "text"
raw = "RAW_PROTO_BINARY_DATA"
EOF

echo "✅ Wire Dataset Generated in $BASE_DIR"
