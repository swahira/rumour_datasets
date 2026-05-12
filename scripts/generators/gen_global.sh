#!/bin/bash

BASE_DIR="../../master_suite/global"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/global"
EOF

# 1. Finance US
cat > "$BASE_DIR/1_finance_us.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/finance?locale=en-US"

[extract]
usBalance = "balance"
EOF

# 2. Finance German (Dot separator)
cat > "$BASE_DIR/2_finance_de.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/finance?locale=de-DE"

[extract]
deBalance = "balance"
EOF

# 3. RTL Meta
cat > "$BASE_DIR/3_rtl_meta.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/rtl-meta"

[extract]
arabicTitle = "content.title"
EOF

echo "Global Dataset Generated in $BASE_DIR"
