#!/bin/bash

BASE_DIR="../../master_suite/idempotency"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/idempotency"
EOF

# 1. First Attempt
cat > "$BASE_DIR/1_initial_charge.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/charge"

[headers]
Idempotency-Key = "key-{{random}}"

[body]
type = "json"
raw = """
{
  "amount": 100.00
}
"""

[extract]
firstTxnId = "transaction_id"
EOF

# 2. Retry (Should match firstTxnId)
cat > "$BASE_DIR/2_retry_charge.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/charge"

[headers]
Idempotency-Key = "key-{{random}}"

[body]
type = "json"
raw = """
{
  "amount": 100.00
}
"""
EOF

echo "Idempotency Dataset Generated in $BASE_DIR"
# Note: I'll use a fixed key in the actual run to test the 'same key' logic.
