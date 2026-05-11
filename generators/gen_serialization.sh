#!/bin/bash

BASE_DIR="data/master_suite/serialization"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/serialization"
EOF

# 1. YAML Test
cat > "$BASE_DIR/1_fetch_yaml.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/yaml"

[extract]
yamlSkill = "user.profile.skills.0"
EOF

# 2. Custom Pipe Test
cat > "$BASE_DIR/2_fetch_pipe.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/pipe-delimited"
EOF

echo "✅ Serialization Dataset Generated in $BASE_DIR"
