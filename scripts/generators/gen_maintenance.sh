#!/bin/bash

BASE_DIR="../../master_suite/maintenance"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/maintenance"
EOF

# 1. Connection Draining
cat > "$BASE_DIR/1_fetch_drain.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/drain"

[extract]
retryAfter = "header.Retry-After"
EOF

# 2. Protocol Downgrade (Failure)
cat > "$BASE_DIR/2_protocol_failure.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/secure-gate"

[headers]
x-protocol-version = "1.0"
EOF

# 3. Protocol Success
cat > "$BASE_DIR/3_protocol_success.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/secure-gate"

[headers]
x-protocol-version = "2.0"
EOF

echo "✅ Maintenance Dataset Generated in $BASE_DIR"
# This verifies Rumour's ability to interpret 426 and draining headers.
