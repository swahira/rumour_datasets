#!/bin/bash

BASE_DIR="../../master_suite/graphql"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/graphql"
EOF

# 1. Query
cat > "$BASE_DIR/1_get_user.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}"

[body]
type = "json"
raw = """
{
  "query": "query { user(id: \\\\\\"1\\\\\\") { id name email } }"
}
"""

[extract]
gql_user_id = "data.user.id"
EOF

# 2. Mutation
cat > "$BASE_DIR/2_create_post.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}"

[body]
type = "json"
raw = """
{
  "query": "mutation { createPost(title: \\\\\\"New Post {{random}}\\\\\\") { id title } }"
}
"""
EOF

echo "✅ Synchronized GraphQL Generator."
