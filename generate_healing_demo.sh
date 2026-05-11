#!/bin/bash

# Create demo directory
mkdir -p data/healing_demo

# ---------------------------------------------------------
# 1. SOFT HEALING DEMO (Mutation)
# ---------------------------------------------------------
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

# ---------------------------------------------------------
# 2. HARD HEALING DEMO (Simple Reconstruction)
# ---------------------------------------------------------
cat <<EOF > data/healing_demo/2_create_user.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/users"

[body]
raw = '{"username": "ghost_user", "role": "tester"}'

[extract]
user_id = "id"
EOF

cat <<EOF > data/healing_demo/3_break_state.toml
[request]
method = "DELETE"
url = "{{base_url}}/api/v2/users/{{user_id}}"
EOF

cat <<EOF > data/healing_demo/4_get_user_needs_heal.toml
[request]
method = "GET"
url = "{{base_url}}/api/v2/users/{{user_id}}"

[assert]
status = 200
EOF

# ---------------------------------------------------------
# 3. ADVANCED HARD HEALING (Cross-Resource Reconstruction)
# ---------------------------------------------------------
cat <<EOF > data/healing_demo/5_create_product.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/products"

[body]
raw = '{"name": "Healing Potion", "price": 50}'

[extract]
product_id = "id"
EOF

cat <<EOF > data/healing_demo/6_delete_product.toml
[request]
method = "DELETE"
url = "{{base_url}}/api/v2/products/{{product_id}}"
EOF

cat <<EOF > data/healing_demo/7_get_product_hard_heal.toml
[request]
method = "GET"
url = "{{base_url}}/api/v2/products/{{product_id}}"

[assert]
status = 200
EOF

# ---------------------------------------------------------
# 4. EXTREME HARD HEALING (Recursive Dependency Chain)
# ---------------------------------------------------------
# Scenario: A -> B -> C (A=Project, B=Issue)
# If Issue is gone, rebuild B.
# If Project is ALSO gone, B fails, which triggers rebuild of A.

cat <<EOF > data/healing_demo/8_create_project.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/users"
# We'll use users route as project for simplicity
[body]
raw = '{"username": "Project-X"}'
[extract]
project_id = "id"
EOF

cat <<EOF > data/healing_demo/9_create_issue.toml
[request]
method = "POST"
url = "{{base_url}}/api/v2/users"
[body]
raw = '{"username": "Issue-1", "project": "{{project_id}}"}'
[extract]
issue_id = "id"
EOF

cat <<EOF > data/healing_demo/10_wipe_everything.toml
[request]
method = "DELETE"
url = "{{base_url}}/api/v2/users/{{issue_id}}"
# Also delete the parent
[body]
raw = '{"also_delete_parent": "{{project_id}}"}'
EOF

# This will fail with 404. 
# Rumour sees 'issue_id' comes from Node 9.
# It runs Node 9.
# Node 9 fails because 'project_id' (from Node 8) is ALSO gone on server.
# Node 9 triggers Hard Heal for Node 8.
# Node 8 runs (Success).
# Node 9 retries (Success).
# Node 11 finally succeeds.
cat <<EOF > data/healing_demo/11_recursive_heal_test.toml
[request]
method = "GET"
url = "{{base_url}}/api/v2/users/{{issue_id}}"

[assert]
status = 200
EOF

# Workspace environment
cat <<EOF > data/healing_demo/workspace.env.toml
base_url = "http://localhost:3000"
EOF

echo "Advanced Healing demo dataset expanded in data/healing_demo"
