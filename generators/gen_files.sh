#!/bin/bash

BASE_DIR="data/master_suite/files"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/files"
EOF

# 1. Upload
cat > "$BASE_DIR/1_upload_file.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/upload"

[body]
type = "form-data"
raw = "file=@generators/gen_files.sh"

[extract]
file_asset_id = "file_id"
EOF

# 2. Binary Validation
cat > "$BASE_DIR/2_binary_raw.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/binary-validate"

[body]
type = "binary"
raw = "BINARY_PAYLOAD_v3_{{random}}"
EOF

# 3. Download
cat > "$BASE_DIR/3_download_asset.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/download/{{file_asset_id}}"
EOF

echo "✅ Synchronized Files Generator."
