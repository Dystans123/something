#!/bin/bash

echo "Preparing psychological profiling app for production deployment..."

# Clean any previous builds
rm -rf dist

# Build client assets
echo "Building client..."
npm run build

# Check if client build succeeded
if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
    echo "Client build failed - missing dist directory or index.html"
    exit 1
fi

# Build production server
echo "Building production server..."
node esbuild.config.js

# Verify production build
if [ ! -f "dist/index.js" ]; then
    echo "Production server build failed"
    exit 1
fi

echo "Build verification:"
echo "- Client files: $(find dist -name "*.html" -o -name "*.js" -o -name "*.css" | wc -l)"
echo "- Server bundle: $(du -h dist/index.js | cut -f1)"

# Test production server startup
echo "Testing production server..."
NODE_ENV=production timeout 5s node dist/index.js &
SERVER_PID=$!

sleep 2

if kill -0 $SERVER_PID 2>/dev/null; then
    echo "✓ Production server starts successfully"
    kill $SERVER_PID
else
    echo "✗ Production server failed to start"
    exit 1
fi

echo "Deployment build completed successfully!"
echo "Ready for Docker/Coolify deployment"