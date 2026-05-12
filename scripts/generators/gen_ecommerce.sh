#!/bin/bash

BASE_DIR="../../master_suite/ecommerce"
mkdir -p "$BASE_DIR"

# 1. Collection Level Env
cat > "$BASE_DIR/workspace.env.toml" <<EOF
base_url = "http://localhost:3000/api/v2"
EOF

# 2. Folder Level Env
cat > "$BASE_DIR/folder.env.toml" <<EOF
eco_category = "electronics"
EOF

# 3. Synchronized Scenarios
cat > "$BASE_DIR/1_list_products.toml" <<EOF
[request]
method = "GET"
url = "{{base_url}}/ecommerce/products?page=1&limit=2"
EOF

cat > "$BASE_DIR/2_create_product.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/ecommerce/products"

[body]
type = "json"
raw = """
{
  "name": "Super Fluid CPU",
  "price": 899
}
"""

[extract]
eco_new_product_id = "id"
EOF

cat > "$BASE_DIR/3_place_order.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/ecommerce/orders"

[headers]
X-Idempotency-Key = "key-{{eco_new_product_id}}"

[body]
type = "json"
raw = """
{
  "product_id": "{{eco_new_product_id}}",
  "qty": 1
}
"""

[extract]
eco_order_id = "id"
EOF

cat > "$BASE_DIR/4_invalid_data.toml" <<EOF
[request]
method = "POST"
url = "{{base_url}}/ecommerce/validate"

[body]
type = "json"
raw = """
{
  "email": "bad-email",
  "quantity": 0
}
"""
EOF

echo "Synchronized Ecommerce Generator."
