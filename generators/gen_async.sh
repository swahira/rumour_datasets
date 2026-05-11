#!/bin/bash

BASE_DIR="data/master_suite/async"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/async"
EOF

# 1. Start Task
cat > "$BASE_DIR/1_start_task.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/task"

[extract]
taskId = "task_id"
pollUrl = "header.Location"
EOF

# 2. Poll (Step 1)
cat > "$BASE_DIR/2_poll_status.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/status/{{taskId}}"
EOF

echo "✅ Async Dataset Generated in $BASE_DIR"
