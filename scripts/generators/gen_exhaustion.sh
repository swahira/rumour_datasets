#!/bin/bash

BASE_DIR="../../master_suite/exhaustion"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/exhaustion"
EOF

# 1. Parallel Load Stress (10 nodes)
for i in {1..10}; do
  cat > "$BASE_DIR/1_load_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
EOF
done

# 2. GC Spike Test
for i in {1..5}; do
  cat > "$BASE_DIR/2_spike_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
EOF
done

echo "✅ Exhaustion Dataset Generated in $BASE_DIR"
