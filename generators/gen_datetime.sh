#!/bin/bash

BASE_DIR="data/master_suite/datetime"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/datetime"
EOF

# 1. Fetch Now
cat > "$BASE_DIR/1_get_timestamps.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/now"

[extract]
isoNow = "iso"
unixNow = "unix"
EOF

# 2. Validate
cat > "$BASE_DIR/2_validate_date.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "deadline": "{{isoNow}}"
}
"""
EOF

echo "✅ DateTime Dataset Generated in $BASE_DIR"
