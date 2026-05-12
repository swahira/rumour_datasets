#!/bin/bash

BASE_DIR="../../master_suite/advanced_stress"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/advanced-stress"
EOF

# 1. Race Test (Needs parallel run to trigger)
for i in {1..2}; do
  cat > "$BASE_DIR/1_race_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/race"
EOF
done

# 2. Backoff Sequence (Repeat 3 times to succeed)
for i in {1..3}; do
  cat > "$BASE_DIR/2_backoff_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/retry-backoff?id=stress-run-1"
EOF
done

# 3. Quota Exhaustion
for i in {1..6}; do
  cat > "$BASE_DIR/3_quota_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
EOF
done

echo "Advanced-Stress Dataset Generated in $BASE_DIR"
