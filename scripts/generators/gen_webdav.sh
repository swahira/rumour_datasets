#!/bin/bash

BASE_DIR="../../master_suite/webdav"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/webdav"
EOF

# 1. PROPFIND Metadata
cat > "$BASE_DIR/1_propfind_resource.toml" <<EOF
[request]
method = "PROPFIND"
url = "{{base_url}}/resource"

[extract]
assetSize = "D:multistatus.D:response.D:propstat.D:prop.D:getcontentlength"
EOF

# 2. MKCOL Creation
cat > "$BASE_DIR/2_mkcol_folder.toml" <<EOF
[request]
method = "MKCOL"
url = "{{base_url}}/resource/new_folder"
EOF

echo "WebDAV Dataset Generated in $BASE_DIR"
# Note: This is a deep test for XML extraction from custom-method responses.
