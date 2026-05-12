#!/bin/bash

BASE_DIR="../../master_suite/chaos"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/chaos"
EOF

# 1. Rate Limiting
cat > "$BASE_DIR/1_rate_limit.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
EOF

# 2. Timeout / Latency
cat > "$BASE_DIR/2_timeout.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/timeout?ms=1000"
EOF

# 3. Flakey Endpoint
for i in {1..5}; do
  cat > "$BASE_DIR/3_flakey_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/flakey"
EOF
done

# 4. Binary Stream
cat > "$BASE_DIR/4_binary.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/binary"
EOF

# 5. Bloated Payload
cat > "$BASE_DIR/5_bloat.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/bloat?kb=10"
EOF

echo "Synchronized Chaos Generator."
