#!/bin/bash

echo "🛑 Stopping Frontend Docker services..."

# Stop all containers
docker-compose down

echo "✅ Frontend services stopped!"
