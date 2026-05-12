#!/bin/bash

BASE_DIR="../../master_suite/resilience"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/resilience"
EOF

# 1. Burst Rate Limit (Call 12 times to exceed 10 token bucket)
for i in {1..12}; do
  cat > "$BASE_DIR/1_burst_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
EOF
done

# 2. Trip Circuit Breaker (Call 3 failures)
for i in {1..4}; do
  cat > "$BASE_DIR/2_trip_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/stable-resource?fail=true"
EOF
done

echo "Synchronized Resilience Generator."
