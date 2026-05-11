#!/bin/bash

BASE_DIR="../../master_suite/realtime"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/realtime"
EOF

# 1. Success Handshake
cat > "$BASE_DIR/1_ws_handshake.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/handshake"

[headers]
Upgrade = "websocket"
Connection = "Upgrade"
Sec-WebSocket-Key = "dGhlIHNhbXBsZSBub25jZQ=="
EOF

# 2. Failed Handshake (Missing Headers)
cat > "$BASE_DIR/2_fail_handshake.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/handshake"
EOF

echo "✅ Realtime Dataset Generated in $BASE_DIR"
