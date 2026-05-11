#!/bin/bash

# Create demo directory
mkdir -p data/healing_demo

# 1. SOFT HEALING DEMO (Mutation)
# Request with an 'email' field set to null which the server rejects
cat <<EOF > data/healing_demo/1_soft_healing_null.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/users/profile"

[body]
raw = """
{
  "username": "healer_test",
  "email": null
}
"""

[assert]
status = 200
EOF

# 2. HARD HEALING DEMO (Reconstruction)
# Node 2: Create a user
cat <<EOF > data/healing_demo/2_create_user.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/users"

[body]
raw = '{"username": "ghost_user", "role": "tester"}'

[extract]
user_id = "id"
EOF

# Node 3: Delete the user (breaks the state)
cat <<EOF > data/healing_demo/3_break_state.toml
[request]
method = "DELETE"
url = "{{base_url}}/api/v2/users/{{user_id}}"
EOF

# Node 4: Try to get the user (will 404, should trigger hard heal of node 2)
cat <<EOF > data/healing_demo/4_get_user_needs_heal.toml
[request]
method = "GET"
url = "{{base_url}}/api/v2/users/{{user_id}}"

[assert]
status = 200
EOF

# Workspace environment
cat <<EOF > data/healing_demo/workspace.env.toml
base_url = "http://localhost:3000"
EOF

echo "Healing demo dataset generated in data/healing_demo"
