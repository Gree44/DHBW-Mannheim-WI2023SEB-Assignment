- install docker extension in vs code

- npm init -y
- npm install express amqplib cors


# 1. Start RabbitMQ
docker-compose up -d

# 2. Start backend server
node backend/server.js
(consumer & producer are started in the server script)

# 4. Open in browser
http://localhost:3000

(Visit RabbitMQ UI at: http://localhost:15672 (user: guest, pass: guest))
