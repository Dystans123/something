import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Check for built client files in multiple locations
  const possibleDistPaths = [
    path.resolve(process.cwd(), "dist"),
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "build"),
    path.resolve(process.cwd(), "client", "dist")
  ];

  let distPath: string | null = null;
  
  for (const testPath of possibleDistPaths) {
    const indexPath = path.join(testPath, "index.html");
    if (fs.existsSync(indexPath)) {
      distPath = testPath;
      console.log(`[production] Found client files at: ${distPath}`);
      break;
    }
  }

  if (!distPath) {
    console.log(`[production] No client build found, searched: ${possibleDistPaths.join(", ")}`);
    // Serve a development-like fallback
    app.use("*", (_req, res) => {
      res.status(503).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Build Required</title></head>
          <body>
            <h1>Application Not Built</h1>
            <p>Please run: <code>npm run build</code></p>
            <p>Searched paths: ${possibleDistPaths.join(", ")}</p>
          </body>
        </html>
      `);
    });
    return;
  }

  // Serve static files with proper headers
  app.use(express.static(distPath, {
    maxAge: '1d',
    etag: true
  }));

  // SPA fallback - serve index.html for all non-API routes
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath!, "index.html");
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