#!/bin/bash

BASE_DIR="../../master_suite/stateful"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/stateful"
EOF

# 1. Reset
cat > "$BASE_DIR/0_reset.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/reset"
EOF

# 2. Step 1
cat > "$BASE_DIR/1_step_1.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/progress"

[body]
type = "json"
raw = """
{
  "step": 1
}
"""

[extract]
stateful_step_1_status = "status"
EOF

# 3. Step 2
cat > "$BASE_DIR/2_step_2.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/progress"

[body]
type = "json"
raw = """
{
  "step": 2
}
"""
EOF

# 4. Check Resumption
cat > "$BASE_DIR/3_verify_resume.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/resume"

[extract]
stateful_final_step = "last_successful_step"
EOF

echo "Synchronized Stateful Generator."
