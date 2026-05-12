#!/bin/bash

BASE_DIR="../../master_suite/streaming_in"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/streaming-in"
EOF

# 1. Stream Upload
cat > "$BASE_DIR/1_post_stream.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/upload-stream"

[body]
type = "text"
raw = "START_OF_STREAM_$(printf 'DATA_%.0s' {1..500})_END_OF_STREAM"
EOF

echo "Streaming-In Dataset Generated in $BASE_DIR"
