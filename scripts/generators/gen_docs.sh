#!/bin/bash

BASE_DIR="../../master_suite/docs"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/docs"
EOF

# 1. Fetch Swagger
cat > "$BASE_DIR/1_fetch_swagger.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/swagger.json"

[extract]
apiTitle = "info.title"
apiVersion = "info.version"
EOF

# 2. Validate Schema
cat > "$BASE_DIR/2_validate_schema.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/validate-schema"
EOF

echo "Docs Dataset Generated in $BASE_DIR"
