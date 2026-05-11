#!/bin/bash

BASE_DIR="data/master_suite/massive"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/massive"
EOF

# 1. Medium Stress (1,000 items)
cat > "$BASE_DIR/1_massive_standard.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data?count=1000"
EOF

# 2. High Stress (5,000 items - Approx 5MB+)
cat > "$BASE_DIR/2_massive_heavy.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data?count=5000"

[extract]
lastItemId = "items.4999.id"
EOF

echo "✅ Massive Dataset Generated in $BASE_DIR"
