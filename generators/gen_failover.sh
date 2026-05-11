#!/bin/bash

BASE_DIR="data/master_suite/failover"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/failover"
EOF

# 1. Trigger Regional Failover
cat > "$BASE_DIR/1_trigger_failover.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/service?simulate_fail=true"
EOF

# 2. Multiplexed Mixed Fetch
cat > "$BASE_DIR/2_fetch_multiplexed.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/multiplex"

[headers]
Accept = "multipart/mixed"
EOF

echo "✅ Failover Dataset Generated in $BASE_DIR"
