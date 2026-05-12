#!/bin/bash

BASE_DIR="../../master_suite/traffic"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/traffic"
EOF

# 1. Throttled Traffic
for i in {1..5}; do
  cat > "$BASE_DIR/1_throttle_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/throttle"
EOF
done

# 2. Burst Traffic
for i in {1..5}; do
  cat > "$BASE_DIR/2_burst_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/burst"
EOF
done

echo "Synchronized Traffic Generator."
