#!/bin/bash

BASE_DIR="data/master_suite/batch"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/batch"
EOF

# 1. Bulk Post
cat > "$BASE_DIR/1_bulk_operations.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/bulk"

[body]
type = "json"
raw = """
[
  { "action": "create", "name": "Bulk_1" },
  { "action": "fail", "name": "Bulk_Fail" },
  { "action": "create", "name": "Bulk_2" }
]
"""

[extract]
firstBulkId = "results.0.id"
lastBulkId = "results.2.id"
EOF

echo "✅ Batch Dataset Generated in $BASE_DIR"
