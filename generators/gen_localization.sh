#!/bin/bash

BASE_DIR="data/master_suite/localization"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/localization"
EOF

# 1. Fetch Unicode
cat > "$BASE_DIR/1_fetch_unicode.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/unicode"

[extract]
msgEmoji = "emoji"
msgArabic = "arabic"
EOF

# 2. i18n Headers
cat > "$BASE_DIR/2_check_spanish.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/i18n"

[headers]
Accept-Language = "es-ES"
EOF

echo "✅ Localization Dataset Generated in $BASE_DIR"
