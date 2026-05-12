#!/bin/bash

BASE_DIR="../../master_suite/webhooks"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/webhooks"
# Simulating a callback to another module
callback_url = "http://localhost:3000/api/v2/navigation/new-path"
EOF

# 1. Register
cat > "$BASE_DIR/1_register_webhook.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/register"

[body]
type = "json"
raw = """
{
  "target_url": "{{callback_url}}",
  "events": ["resource.created"]
}
"""
EOF

# 2. Trigger
cat > "$BASE_DIR/2_trigger_event.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/trigger"
EOF

echo "Webhooks Dataset Generated in $BASE_DIR"
