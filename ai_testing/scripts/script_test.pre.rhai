// Rhai Pre-request Script
let timestamp = 123456789;
let body = json(request.body);
body.timestamp = timestamp;
body.signature = "ai_signed_" + timestamp;
request.body = body.to_json();
