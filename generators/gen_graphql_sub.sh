#!/bin/bash

BASE_DIR="data/master_suite/graphql_sub"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/graphql-sub"
EOF

# 1. Subscribe to updates
cat > "$BASE_DIR/1_fetch_updates.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/subscribe"

[extract]
lastUpdateId = "data.monitorUpdates.id"
EOF

echo "✅ GraphQL-Sub Dataset Generated in $BASE_DIR"
