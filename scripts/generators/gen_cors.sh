#!/bin/bash

BASE_DIR="../../master_suite/cors"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/cors"
EOF

# 1. CORS Pre-flight (OPTIONS)
cat > "$BASE_DIR/1_cors_preflight.toml" <<EOF
[request]
method = "OPTIONS"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://trusted-rumour.com"
Access-Control-Request-Method = "GET"
EOF

# 2. CORS Valid Origin
cat > "$BASE_DIR/2_cors_valid.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://trusted-rumour.com"
EOF

# 3. CORS Violation (Untrusted Origin)
cat > "$BASE_DIR/3_cors_violation.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://malicious-site.com"
EOF

echo "Synchronized CORS Generator."
