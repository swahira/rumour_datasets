#!/bin/bash

BASE_DIR="data/master_suite/protocols_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/protocols-adv"
EOF

# 1. WebSub Subscribe
cat > "$BASE_DIR/1_websub_subscribe.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/hub"

[body]
type = "form"
raw = "hub.mode=subscribe&hub.topic=http://example.com/topic&hub.callback=http://localhost:4000/callback"
EOF

# 2. Server Push Discovery
cat > "$BASE_DIR/2_detect_push.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/index"

[extract]
pushedResources = "header.Link"
EOF

# 3. HTTP/3 Alt-Svc
cat > "$BASE_DIR/3_quic_discovery.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/quic-discovery"

[extract]
h3_support = "header.Alt-Svc"
EOF

echo "✅ Protocols-Adv Dataset Generated in $BASE_DIR"
