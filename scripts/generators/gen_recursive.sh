#!/bin/bash

BASE_DIR="../../master_suite/recursive"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/recursive"
EOF

# 1. Linked List Extraction
cat > "$BASE_DIR/1_linked_list.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/linked-list"

[extract]
tailValue = "next.next.value"
EOF

# 2. Tree Extraction
cat > "$BASE_DIR/2_tree_structure.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/tree"

[extract]
grandChildName = "children.0.children.0.name"
EOF

echo "✅ Recursive Dataset Generated in $BASE_DIR"
