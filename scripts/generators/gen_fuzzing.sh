#!/bin/bash

BASE_DIR="../../master_suite/fuzzing"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/fuzzing"
EOF

# 1. Synthetic Large Array
cat > "$BASE_DIR/1_fetch_synthetic.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/synthetic?count=50"
EOF

# 2. Spike Stress (Generate 15 files to fire in parallel)
for i in {1..15}; do
  cat > "$BASE_DIR/2_spike_node_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/spike"
EOF
done

# 3. Fuzz (Send random schema)
cat > "$BASE_DIR/3_fuzz_node.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/fuzz"

[body]
type = "json"
raw = """
{
  "random_str": "{{random}}",
  "nested": {
    "val": {{random}}
  }
}
"""
EOF

echo "✅ Fuzzing Dataset Generated in $BASE_DIR"
