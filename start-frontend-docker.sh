#!/bin/bash

echo "🌐 Starting Frontend Docker Compose..."

# Stop any existing containers
docker-compose down

# Build and start frontend service
docker-compose up --build

echo "✅ Frontend service is running!"
echo "🌐 Frontend: http://localhost:3000"
