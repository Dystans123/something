import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Check for built client files in multiple locations
  const possibleDistPaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "dist"),
    path.resolve(process.cwd(), "build"),
    path.resolve(process.cwd(), "client", "dist")
  ];

  let distPath: string | null = null;
  
  for (const testPath of possibleDistPaths) {
    const indexPath = path.join(testPath, "index.html");
    if (fs.existsSync(indexPath)) {
      distPath = testPath;
      console.log(`[production] Serving static files from: ${distPath}`);
      break;
    }
  }

  if (!distPath) {
    console.log(`[production] No client build found, searched: ${possibleDistPaths.join(", ")}`);
    app.use("*", (_req, res) => {
      res.status(503).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Build Required</title></head>
          <body>
            <h1>Application Not Built</h1>
            <p>Please run: <code>npm run build</code></p>
          </body>
        </html>
      `);
    });
    return;
  }

  // Add logging middleware for debugging
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api/')) {
      console.log(`[static] ${req.method} ${req.path}`);
    }
    next();
  });

  // Serve static files first, with proper configuration
  app.use(express.static(distPath, {
    maxAge: '1d',
    etag: true,
    index: false,
    dotfiles: 'deny',
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath);
      if (ext === '.js') {
        res.setHeader('Content-Type', 'application/javascript');
      } else if (ext === '.css') {
        res.setHeader('Content-Type', 'text/css');
      } else if (ext === '.html') {
        res.setHeader('Content-Type', 'text/html');
      }
    }
  }));

  // Handle specific asset routes with better error handling
  app.get('/assets/*', (req, res) => {
    const assetPath = path.join(distPath!, req.path);
    if (fs.existsSync(assetPath)) {
      res.sendFile(assetPath);
    } else {
      console.log(`[static] Asset not found: ${assetPath}`);
      res.status(404).send('Asset not found');
    }
  });

  // SPA fallback - serve index.html for navigation routes only
  app.get('*', (req, res) => {
    // Skip if this looks like an asset request
    const ext = path.extname(req.path);
    if (ext && ext !== '.html') {
      console.log(`[static] Unknown asset requested: ${req.path}`);
      return res.status(404).send('File not found');
    }
    
    // Serve index.html for all SPA routes
    const indexPath = path.resolve(distPath!, "index.html");
    console.log(`[static] Serving SPA route: ${req.path} -> index.html`);
    res.sendFile(indexPath);
  });
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}