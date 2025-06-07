import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Try multiple possible build output directories
  const possibleDistPaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "dist", "client"),
    path.resolve(process.cwd(), "build"),
    path.resolve(process.cwd(), "client", "dist")
  ];

  let distPath: string | null = null;
  
  for (const testPath of possibleDistPaths) {
    if (fs.existsSync(testPath)) {
      distPath = testPath;
      break;
    }
  }

  if (!distPath) {
    // If no build directory exists, serve a simple fallback
    app.use("*", (_req, res) => {
      res.status(503).json({ 
        error: "Application not built for production. Please run 'npm run build' first.",
        searchedPaths: possibleDistPaths
      });
    });
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath!, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).json({ error: "Application files not found" });
    }
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