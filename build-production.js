#!/usr/bin/env node
import { build } from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';

console.log('Building for production deployment...');

// Clean previous builds
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}

// Build client
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

// Build production server (without Vite dependencies)
console.log('Building production server...');
await build({
  entryPoints: ['server/production-index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: 'dist/index.js',
  packages: 'external',
  external: [
    'vite',
    '@vitejs/*',
    '@replit/*',
    'nanoid'
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

// Verify build files exist
const requiredFiles = [
  'dist/index.js',
  'dist/public/index.html'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log('Production build completed successfully!');
console.log(`Client files: ${fs.readdirSync('dist/public').length}`);
console.log(`Server bundle: ${Math.round(fs.statSync('dist/index.js').size / 1024)}KB`);