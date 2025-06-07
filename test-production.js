#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import http from 'http';

console.log('Testing production build for Docker deployment...');

// Test 1: Verify production server builds without Vite imports
console.log('1. Building production server...');
try {
  execSync('npx esbuild server/index-production.ts --platform=node --packages=external --bundle --format=esm --outfile=test-dist/index.js --external:vite --external:@vitejs/* --external:@replit/* --external:nanoid', 
    { stdio: 'pipe' });
  console.log('✓ Production server builds successfully');
} catch (error) {
  console.error('✗ Production server build failed:', error.message);
  process.exit(1);
}

// Test 2: Check that Vite is not in the bundle
const bundleContent = fs.readFileSync('test-dist/index.js', 'utf8');
if (bundleContent.includes('from "vite"') || bundleContent.includes("from 'vite'")) {
  console.error('✗ Production bundle still contains Vite imports');
  process.exit(1);
}
console.log('✓ Production bundle excludes Vite imports');

// Test 3: Test server startup
console.log('2. Testing server startup...');
try {
  const child = execSync('timeout 3s node test-dist/index.js', 
    { stdio: 'pipe', env: { ...process.env, NODE_ENV: 'production', PORT: '5001' } });
} catch (error) {
  // Timeout is expected - we just want to verify no immediate import errors
  if (error.status === 124) { // timeout exit code
    console.log('✓ Server starts without import errors');
  } else {
    console.error('✗ Server failed to start:', error.stderr?.toString());
    process.exit(1);
  }
}

// Clean up
fs.rmSync('test-dist', { recursive: true, force: true });

console.log('🎉 Production build test passed!');
console.log('Ready for Docker/Coolify deployment');