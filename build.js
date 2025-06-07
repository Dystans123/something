#!/usr/bin/env node
import { build } from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🏗️  Building psychological profiling application...');

// Step 1: Build the client
console.log('📦 Building client...');
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('✅ Client built successfully');
} catch (error) {
  console.error('❌ Client build failed');
  process.exit(1);
}

// Step 2: Build the server with proper externals
console.log('🔧 Building server...');
try {
  await build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outdir: 'dist',
    packages: 'external',
    external: [
      'vite',
      '@vitejs/*',
      '@replit/*'
    ],
    define: {
      'import.meta.dirname': '__dirname',
    },
    banner: {
      js: `
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
      `.trim()
    }
  });
  console.log('✅ Server built successfully');
} catch (error) {
  console.error('❌ Server build failed:', error);
  process.exit(1);
}

// Step 3: Copy production static server
console.log('📋 Setting up production configuration...');
try {
  await build({
    entryPoints: ['server/production.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: 'dist/production.js',
    packages: 'external',
    define: {
      'import.meta.dirname': '__dirname',
    },
    banner: {
      js: `
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
      `.trim()
    }
  });
  console.log('✅ Production server configured');
} catch (error) {
  console.error('❌ Production setup failed:', error);
  process.exit(1);
}

// Step 4: Verify build
const requiredFiles = [
  'dist/index.js',
  'dist/production.js',
  'dist/public/index.html'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log('🎉 Build completed successfully!');
console.log('📊 Build summary:');
console.log(`   Client: ${fs.readdirSync('dist/public').length} files`);
console.log(`   Server: ${Math.round(fs.statSync('dist/index.js').size / 1024)}KB`);
console.log('🚀 Ready for production deployment');