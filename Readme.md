# Simple example about microservices

index.js (gateway) // http://localhost:3000
<br>|__ auth.js // http://localhost:3001
<br>|__ chat.js // http://localhost:3003
<br>|__ user.js // http://localhost:3002

# Run servers in this order
* node apis/auth.js
* node apis/chat.js
* node apis/user.js
* node index.js