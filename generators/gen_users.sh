#!/bin/bash

BASE_DIR="data/master_suite/users"
mkdir -p "$BASE_DIR"

# 1. Collection Level Env
cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2"
EOF

# 2. Folder Level Env
cat > "$BASE_DIR/folder.env.toml" <<EOF
test_team = "alpha"
user_status = "active"
EOF

# 3. Synchronized Scenarios
cat > "$BASE_DIR/1_search_users.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/users?team={{test_team}}&role=intern"
EOF

cat > "$BASE_DIR/2_register_user.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/users/register"

[body]
type = "json"
raw = """
{
  "username": "dev_lead"
}
"""
EOF

cat > "$BASE_DIR/3_create_new.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/users"

[body]
type = "json"
raw = """
{
  "username": "new_user_{{random}}",
  "role": "editor"
}
"""

[extract]
user_id_new = "id"
EOF

echo "✅ Synchronized Users Generator."
