#!/bin/bash

BASE_DIR="data/master_suite/formats_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/formats-adv"
EOF

# 1. Fetch CBOR (Binary)
cat > "$BASE_DIR/1_fetch_cbor.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/cbor"

[headers]
Accept = "application/cbor"
EOF

# 2. Fetch BSON (Binary)
cat > "$BASE_DIR/2_fetch_bson.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/bson"

[headers]
Accept = "application/bson"
EOF

# 3. Secure Content (Digest Check)
cat > "$BASE_DIR/3_fetch_secure.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/secure-content"

[extract]
contentDigest = "header.Digest"
EOF

echo "✅ Formats-Adv Dataset Generated in $BASE_DIR"
