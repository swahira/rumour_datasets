#!/bin/bash

BASE_DIR="../../master_suite/data_adv"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/data-adv"
EOF

# 1. GeoJSON Extraction
cat > "$BASE_DIR/1_fetch_geo.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/geo"

[extract]
firstPointLong = "features.0.geometry.coordinates.0"
firstPointLat = "features.0.geometry.coordinates.1"
EOF

# 2. MessagePack Binary Fetch
cat > "$BASE_DIR/2_fetch_msgpack.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/msgpack"
EOF

echo "Data-Adv Dataset Generated in $BASE_DIR"
