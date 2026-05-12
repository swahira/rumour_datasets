#!/bin/bash

BASE_DIR="../../master_suite/signing"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/signing"
EOF

# 1. Valid Signature Test
# (In a real test, we'd pre-calculate this. Here we send a known good one for testing)
cat > "$BASE_DIR/1_secure_post.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/secure-data"

[headers]
X-Rumour-Signature = "3e6f...fake_signature_for_test"

[body]
type = "json"
raw = """
{
  "cmd": "decrypt",
  "asset": "vault_01"
}
"""
EOF

echo "Signing Dataset Generated in $BASE_DIR"
