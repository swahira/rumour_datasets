#!/bin/bash

BASE_DIR="../../master_suite/lifecycle"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/lifecycle"
EOF

# 1. Detect Deprecation
cat > "$BASE_DIR/1_deprecated_api.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/v1/legacy-data"

[extract]
isDeprecated = "header.Deprecation"
sunsetDate = "header.Sunset"
EOF

# 2. CORS Preflight
cat > "$BASE_DIR/2_cors_preflight.toml" <<EOF
[request]
method = "OPTIONS"
url = "{{base_url}}/secure-resource"

[headers]
Access-Control-Request-Method = "POST"
Access-Control-Request-Headers = "X-Rumour-Custom"
EOF

echo "Lifecycle Dataset Generated in $BASE_DIR"
