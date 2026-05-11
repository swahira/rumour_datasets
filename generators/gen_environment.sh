#!/bin/bash

BASE_DIR="data/master_suite/environment"
mkdir -p "$BASE_DIR"

cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2/environment"
EOF

# 1. Fetch from Vault
cat > "$BASE_DIR/1_fetch_vault_secret.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/vault/secret"

[extract]
vaultSecret = "secret"
EOF

# 2. Validate
cat > "$BASE_DIR/2_validate_vault.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/validate-secret"

[body]
type = "json"
raw = """
{
  "secret": "{{vaultSecret}}"
}
"""
EOF

# 3. Tenant Isolation
cat > "$BASE_DIR/3_tenant_check.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/tenant/tenant-ABC-123/config"
EOF

echo "✅ Environment Dataset Generated in $BASE_DIR"
