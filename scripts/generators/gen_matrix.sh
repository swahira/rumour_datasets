#!/bin/bash

BASE_DIR="../../master_suite/matrix"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/matrix"
EOF

# 1. Multi-Version Matrix
for v in "1.0" "2.0" "3.0"; do
  cat > "$BASE_DIR/1_fetch_v${v//./_}.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
X-API-Version = "$v"
EOF
done

# 2. Run Summary Extraction
cat > "$BASE_DIR/2_fetch_summary.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/summary"

[extract]
passedCount = "stats.passed"
failedCount = "stats.failed"
EOF

echo "Matrix Dataset Generated in $BASE_DIR"
# This concludes the 100-topic generator suite.
