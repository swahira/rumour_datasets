#!/bin/bash

BASE_DIR="../../master_suite/schema"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/schema"
EOF

# 1. Valid Request
cat > "$BASE_DIR/1_valid_schema.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "id": "schema-{{random}}",
  "name": "Validator",
  "age": 30
}
"""

[extract]
schema_valid_id = "id"
EOF

# 2. Invalid Request (Missing ID)
cat > "$BASE_DIR/2_invalid_schema.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "name": "Invalid"
}
"""
EOF

echo "✅ Synchronized Schema Generator."
