#!/bin/bash

BASE="http://localhost:3000/api"

PASS=0
FAIL=0

print_result () {
  if [ $1 -eq 0 ]; then
    echo "PASS: $2"
    ((PASS++))
  else
    echo "FAIL: $2"
    ((FAIL++))
  fi
}

echo "Running Rumour Mock Server Tests..."
echo "-----------------------------------"

# 1. Health check
res=$(curl -s -o /dev/null -w "%{http_code}" $BASE/ping)
[ "$res" = "200" ]
print_result $? "GET /ping"

# 2. Login
echo "Testing Auth..."
LOGIN_RES=$(curl -s -X POST $BASE/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}')
TOKEN=$(echo $LOGIN_RES | grep -oP '(?<="token":")[^"]+')

if [ -n "$TOKEN" ]; then
  print_result 0 "POST /auth/login"
else
  print_result 1 "POST /auth/login (Token not found)"
fi

# 3. Profile
res=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $TOKEN" \
  $BASE/auth/profile)
[ "$res" = "200" ]
print_result $? "GET /auth/profile"

# 4. Products CRUD
echo "Testing Products..."
res=$(curl -s -o /dev/null -w "%{http_code}" $BASE/products)
[ "$res" = "200" ]
print_result $? "GET /products"

# Create product
CREATE_RES=$(curl -s -X POST $BASE/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":99,"category":"test"}')
PRODUCT_ID=$(echo $CREATE_RES | grep -oP '(?<="id":)[^,}]*')

if [ -n "$PRODUCT_ID" ]; then
  print_result 0 "POST /products (create)"
else
  print_result 1 "POST /products (create failed)"
fi

# Get product
res=$(curl -s -o /dev/null -w "%{http_code}" $BASE/products/$PRODUCT_ID)
[ "$res" = "200" ]
print_result $? "GET /products/:id"

# Delete product
res=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE $BASE/products/$PRODUCT_ID)
[ "$res" = "204" ]
print_result $? "DELETE /products/:id"

# 5. File Upload
echo "Testing Files..."
echo "hello world" > test.txt
res=$(curl -s -o /dev/null -w "%{http_code}" -X POST $BASE/files/upload \
  -F "file=@test.txt")
[ "$res" = "201" ]
print_result $? "POST /files/upload"
rm test.txt

# 6. Misc
echo "Testing Misc..."
res=$(curl -s -o /dev/null -w "%{http_code}" $BASE/error/500)
[ "$res" = "500" ]
print_result $? "GET /error/500"

echo "-----------------------------------"
echo "Total Passed: $PASS"
echo "Total Failed: $FAIL"

if [ $FAIL -eq 0 ]; then
  exit 0
else
  exit 1
fi