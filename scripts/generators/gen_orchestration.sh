#!/bin/bash

BASE_DIR="../../master_suite/orchestration"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/orchestration"
EOF

# 1. Parent A
cat > "$BASE_DIR/1_create_engine.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/engines"

[extract]
engineId = "engine_id"
EOF

# 2. Parent B
cat > "$BASE_DIR/2_create_chassis.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/chassis"

[extract]
chassisId = "chassis_id"
EOF

# 3. Final Assembly (Consumes A and B)
cat > "$BASE_DIR/3_assemble_car.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/assemble"

[body]
type = "json"
raw = """
{
  "engine_id": "{{engineId}}",
  "chassis_id": "{{chassisId}}"
}
"""

[extract]
vehicleId = "vehicle_id"
EOF

echo "✅ Orchestration Dataset Generated in $BASE_DIR"
