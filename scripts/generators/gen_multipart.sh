#!/bin/bash

BASE_DIR="../../master_suite/multipart"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/files"
EOF

# 1. Batch Upload
cat > "$BASE_DIR/1_batch_upload.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/upload"

[body]
type = "form-data"
raw = "file=@../../generators/gen_multipart.sh"

[extract]
multipart_upload_id = "file_id"
EOF

echo "Synchronized Multipart Generator."
