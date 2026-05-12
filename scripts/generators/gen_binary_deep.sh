#!/bin/bash

BASE_DIR="../../master_suite/binary_deep"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/binary-deep"
EOF

# 1. Get PDF
cat > "$BASE_DIR/1_fetch_pdf.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/pdf"
EOF

# 2. Get Image
cat > "$BASE_DIR/2_fetch_image.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/image"
EOF

echo "Binary Deep Dataset Generated in $BASE_DIR"
