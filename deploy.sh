#!/bin/bash

echo "Building psychological profiling application for production..."

# Clean previous builds
rm -rf dist

# Build the client
echo "Building client..."
npm run build 2>&1 | grep -v "Browserslist"

# Check if client build succeeded
if [ ! -d "dist/public" ]; then
    echo "Client build failed - no dist/public directory found"
    exit 1
fi

# Build the server
echo "Building server..."
npx esbuild server/index.ts server/production.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# Check if server build succeeded
if [ ! -f "dist/index.js" ]; then
    echo "Server build failed - no dist/index.js found"
    exit 1
fi

echo "Build completed successfully!"
echo "Client assets: $(ls -la dist/public | wc -l) files"
echo "Server bundle: dist/index.js ($(du -h dist/index.js | cut -f1))"

# Test production server
echo "Testing production configuration..."
NODE_ENV=production timeout 10s node dist/index.js &
PID=$!

sleep 3

# Check if server is running
if kill -0 $PID 2>/dev/null; then
    echo "✓ Production server started successfully"
    kill $PID
else
    echo "✗ Production server failed to start"
    exit 1
fi

echo "Deployment build ready!"
echo "To deploy: NODE_ENV=production node dist/index.js"