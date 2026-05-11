#!/bin/bash

ROOT="data"

echo "Rebuilding rumour dataset..."

rm -rf "$ROOT"

# ----------------------------
# SUCCESS CASES
# ----------------------------

# 1. BASIC + MULTI REQUESTS
mkdir -p "$ROOT/success/basic/workspaces/auth/collections/user"

cat > "$ROOT/success/basic/workspaces/auth/workspace.env.toml" <<EOF
base_url = "http://localhost:3000"
user_id = "42"
EOF

cat > "$ROOT/success/basic/workspaces/auth/collections/user/collection.env.toml" <<EOF
token = "collection_token"
EOF

# Multiple requests
cat > "$ROOT/success/basic/workspaces/auth/collections/user/login.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/login"
EOF

cat > "$ROOT/success/basic/workspaces/auth/collections/user/profile.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/user/{{user_id}}"
EOF


# ----------------------------
# 2. COLLECTION OVERRIDE
# ----------------------------
mkdir -p "$ROOT/success/override/workspaces/auth/collections/user"

cat > "$ROOT/success/override/workspaces/auth/workspace.env.toml" <<EOF
base_url = "https://prod.com"
token = "workspace_token"
EOF

cat > "$ROOT/success/override/workspaces/auth/collections/user/collection.env.toml" <<EOF
token = "collection_token"
EOF

cat > "$ROOT/success/override/workspaces/auth/collections/user/test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/test"
EOF


# ----------------------------
# 3. FULL REQUEST (HEADERS + BODY)
# ----------------------------
mkdir -p "$ROOT/success/full/workspaces/auth/collections/user"

cat > "$ROOT/success/full/workspaces/auth/workspace.env.toml" <<EOF
base_url = "http://localhost:3000"
token = "workspace_token"
EOF

cat > "$ROOT/success/full/workspaces/auth/collections/user/collection.env.toml" <<EOF
token = "collection_token"
EOF

cat > "$ROOT/success/full/workspaces/auth/collections/user/login.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[headers]
Content-Type = "application/json"
Authorization = "Bearer {{token}}"

[body]
type = "json"
raw = """
{
  "email": "test@example.com",
  "password": "123456"
}
"""
EOF

# second request in same collection
cat > "$ROOT/success/full/workspaces/auth/collections/user/logout.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/logout"

[headers]
Authorization = "Bearer {{token}}"
EOF


# ----------------------------
# 4. NO ENV (DIRECT URL)
# ----------------------------
mkdir -p "$ROOT/success/no_env/workspaces/auth/collections/user"

cat > "$ROOT/success/no_env/workspaces/auth/collections/user/direct.toml" <<EOF
[request]
method = "GET"
url = "https://public.api.com/ping"
EOF


# ----------------------------
# ERROR CASES
# ----------------------------

# 5. MISSING VARIABLE
mkdir -p "$ROOT/error/missing_variable/workspaces/auth/collections/user"

cat > "$ROOT/error/missing_variable/workspaces/auth/collections/user/test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/fail"
EOF


# ----------------------------
# 6. HEADER VARIABLE MISSING
# ----------------------------
mkdir -p "$ROOT/error/header_missing/workspaces/auth/collections/user"

cat > "$ROOT/error/header_missing/workspaces/auth/workspace.env.toml" <<EOF
base_url = "https://api.com"
EOF

cat > "$ROOT/error/header_missing/workspaces/auth/collections/user/test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/secure"

[headers]
Authorization = "Bearer {{token}}"
EOF


# ----------------------------
# 7. INVALID VARIABLE SYNTAX
# ----------------------------
mkdir -p "$ROOT/error/invalid_syntax/workspaces/auth/collections/user"

cat > "$ROOT/error/invalid_syntax/workspaces/auth/workspace.env.toml" <<EOF
base_url = "https://api.com"
EOF

cat > "$ROOT/error/invalid_syntax/workspaces/auth/collections/user/test.toml" <<EOF
[request]
method = "GET"
url = "{{base_url/test"
EOF


# ----------------------------
# 8. BROKEN TOML
# ----------------------------
mkdir -p "$ROOT/error/broken_toml/workspaces/auth/collections/user"

cat > "$ROOT/error/broken_toml/workspaces/auth/collections/user/test.toml" <<EOF
[request
method = "GET"
url = "https://api.com"
EOF


# ----------------------------
# 9. BODY VARIABLE (FUTURE EDGE)
# ----------------------------
mkdir -p "$ROOT/error/body_variable/workspaces/auth/collections/user"

cat > "$ROOT/error/body_variable/workspaces/auth/workspace.env.toml" <<EOF
base_url = "https://api.com"
EOF

cat > "$ROOT/error/body_variable/workspaces/auth/collections/user/test.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/login"

[body]
type = "json"
raw = """
{
  "email": "{{email}}"
}
"""
EOF

# ----------------------------
# SERVER INTEGRATION SCENARIOS (Targeting server/)
# ----------------------------

# 1. PRODUCT LIFECYCLE (Stateful Chain)
mkdir -p "$ROOT/server/product-flow"

cat > "$ROOT/server/product-flow/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api"
EOF

cat > "$ROOT/server/product-flow/1_create_product.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/products"

[body]
type = "json"
raw = """
{
  "name": "Gaming Laptop",
  "price": 1499.99,
  "category": "electronics",
  "description": "High-performance gaming machine"
}
"""

[extract]
productId = "id"
EOF

cat > "$ROOT/server/product-flow/2_get_product.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/products/{{productId}}"
EOF

cat > "$ROOT/server/product-flow/3_update_product.toml" <<EOF
[request]
method = "PUT"
url = "{{base_url}}/products/{{productId}}"

[body]
type = "json"
raw = """
{
  "name": "Gaming Laptop Pro",
  "price": 1699.99
}
"""
EOF

cat > "$ROOT/server/product-flow/4_delete_product.toml" <<EOF
[request]
method = "DELETE"
url = "{{base_url}}/products/{{productId}}"
EOF

# 2. AUTHENTICATED FLOW (Bearer Token Chain)
mkdir -p "$ROOT/server/auth-flow"

cat > "$ROOT/server/auth-flow/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api"
EOF

cat > "$ROOT/server/auth-flow/1_login.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{
  "email": "admin@example.com",
  "password": "password123"
}
"""

[extract]
token = "token"
EOF

cat > "$ROOT/server/auth-flow/2_get_profile.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/auth/profile"

[headers]
Authorization = "Bearer {{token}}"
EOF

cat > "$ROOT/server/auth-flow/3_logout.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/auth/logout"

[headers]
Authorization = "Bearer {{token}}"
EOF

# ----------------------------
# BATTLE ARENA (STRESS & LOGIC)
# ----------------------------

# 1. THE HYPER-CHAIN (500-node chain)
DEPTH_PATH="$ROOT/battle/depth"
mkdir -p "$DEPTH_PATH"
echo "base_url = \"http://localhost:3000/api/battle\"" > "$DEPTH_PATH/workspace.env.toml"

echo "Generating 500-node Hyper-Chain..."
for i in $(seq 0 499); do
    next_idx=$((i + 1))
    cat > "$DEPTH_PATH/step_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/chain/$i"

$( [ $i -lt 499 ] && echo "[extract]
next_val_$next_idx = \"next\"" )

$( [ $i -gt 0 ] && echo "[headers]
X-Chain-Val = \"{{next_val_$i}}\"" )
EOF
done

# 2. THE SUPER-THUNDERBOLT (500-node parallel stress)
GOREST_PATH="$ROOT/battle/gorest-stress"
mkdir -p "$GOREST_PATH"
echo "base_url = \"http://localhost:3000/api/battle/proxy\"" > "$GOREST_PATH/workspace.env.toml"

echo "Generating 500-node Super-Thunderbolt..."
for i in $(seq 1 500); do
    cat > "$GOREST_PATH/user_$i.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/users/$i"
EOF
done

echo "Dataset ready under '$ROOT'"
echo "Battle Arena ready in $ROOT/battle/"
echo "Server integration tests generated in $ROOT/server/"
