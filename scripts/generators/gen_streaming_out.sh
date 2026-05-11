#!/bin/bash

BASE_DIR="../../master_suite/streaming_out"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/streaming-out"
EOF

# 1. Server-Sent Events
cat > "$BASE_DIR/1_fetch_sse.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/events"

[headers]
Accept = "text/event-stream"
EOF

# 2. Range Request (Bytes 0-99)
cat > "$BASE_DIR/2_fetch_range.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/download-range"

[headers]
Range = "bytes=0-99"
EOF

echo "✅ Streaming-Out Dataset Generated in $BASE_DIR"
