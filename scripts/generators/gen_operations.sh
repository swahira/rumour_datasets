#!/bin/bash

BASE_DIR="../../master_suite/operations"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/operations"
EOF

# 1. Idempotent Delete (Repeat twice)
for i in {1..2}; do
  cat > "$BASE_DIR/1_delete_item_$i.toml" <<EOF
[request]
method = "DELETE"
url = "{{base_url}}/resource/item-unique"
EOF
done

# 2. Bulk Patching
cat > "$BASE_DIR/2_bulk_update.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/bulk-patch"

[body]
type = "json"
raw = """
{
  "item-1": "Updated_Value_X",
  "item-2": "Updated_Value_Y"
}
"""
EOF

# 3. Cascading Delete
cat > "$BASE_DIR/3_cascade_dept.toml" <<EOF
[request]
method = "DELETE"
url = "{{base_url}}/department/dept-1"
EOF

echo "Operations Dataset Generated in $BASE_DIR"
