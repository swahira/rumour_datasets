#!/bin/bash

BASE_DIR="../../master_suite/compatibility"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/compatibility"
postman_env = "prod"
bruno_var = "bruno-secret-123"
EOF

# 1. Postman Header Mock
cat > "$BASE_DIR/1_postman_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/postman-env"

[headers]
Postman-Token = "token-uuid-123"
x-postman-env-var = "{{postman_env}}"
EOF

# 2. Bruno Variable Mock
cat > "$BASE_DIR/2_bruno_test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/bruno-vars"

[headers]
x-bruno-var = "{{bruno_var}}"
EOF

echo "✅ Compatibility Dataset Generated in $BASE_DIR"
