#!/bin/bash

BASE_DIR="data/master_suite/realtime_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/realtime-adv"
EOF

# 1. Advanced SSE
cat > "$BASE_DIR/1_sse_heartbeat.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/sse-multi"

[headers]
Accept = "text/event-stream"
EOF

# 2. Long Polling
cat > "$BASE_DIR/2_long_polling.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/long-poll"
EOF

# 3. MQTT Binary Sim
cat > "$BASE_DIR/3_mqtt_binary.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/mqtt-sim"
EOF

echo "✅ Realtime-Adv Dataset Generated in $BASE_DIR"
