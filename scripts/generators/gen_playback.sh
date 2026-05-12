#!/bin/bash

BASE_DIR="../../master_suite/playback"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/playback"
EOF

# 1. Replay Get User 1
cat > "$BASE_DIR/1_replay_user_1.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/v1/user/1"
EOF

# 2. Replay Get User 2
cat > "$BASE_DIR/2_replay_user_2.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/v1/user/2"
EOF

# 3. Replay Post Event
cat > "$BASE_DIR/3_replay_event.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/v1/event"
EOF

echo "Playback Dataset Generated in $BASE_DIR"
