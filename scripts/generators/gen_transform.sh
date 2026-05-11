#!/bin/bash

BASE_DIR="../../master_suite/transform"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/transform"
EOF

# 1. Fetch JSON
cat > "$BASE_DIR/1_fetch_json.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
Accept = "application/json"

[extract]
transform_first_id = "[0].id"
EOF

# 2. Fetch CSV
cat > "$BASE_DIR/2_fetch_csv.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
Accept = "text/csv"
EOF

echo "✅ Synchronized Transform Generator."
