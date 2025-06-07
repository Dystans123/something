import { build } from 'esbuild';

// Build production server
await build({
  entryPoints: ['server/index-production.ts'],
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
    js: `import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);`
  }
});

console.log('Production server built successfully!');