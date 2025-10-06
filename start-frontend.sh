#!/bin/bash

echo "🌐 Starting Frontend Server..."

# Kill any existing frontend process
pkill -f "npm run dev" || true

# Start frontend server
cd /Users/theo/git2/daongchulai
npm run dev
