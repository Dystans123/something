# Deployment Guide - Psychological Profiling App

## Quick Fix for Current Deployment Issue

The error you encountered (`Cannot find package 'vite'`) has been resolved. The production server no longer imports vite dependencies at runtime.

## Production Build Process

### 1. Build the Application
```bash
# Build client assets
npm run build

# Or use the deployment script for a complete build
./deploy.sh
```

### 2. Start Production Server
```bash
NODE_ENV=production node dist/index.js
```

## Deployment Architecture

### Development Mode
- Uses Vite dev server with HMR
- Serves React app directly from source
- Full debugging capabilities

### Production Mode
- Serves pre-built static assets
- No Vite dependencies at runtime
- Optimized bundle sizes

## Directory Structure After Build
```
dist/
├── index.js          # Server bundle
├── production.js     # Production utilities
└── public/           # Client assets
    ├── index.html
    ├── assets/
    └── ...
```

## Deployment Platforms

### Replit Deployments
1. Ensure build completes successfully
2. Set `NODE_ENV=production`
3. Deploy using `node dist/index.js`

### Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 5000
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
```

### Cloud Platforms (Heroku, Railway, etc.)
1. Add build script to package.json
2. Set environment variables
3. Configure start command: `node dist/index.js`

## Environment Variables

### Required for Production
- `NODE_ENV=production`

### Optional
- `PORT` (defaults to 5000)
- Database credentials (if using PostgreSQL)

## Troubleshooting

### Build Issues
- **Large bundle size**: Normal due to psychological test data
- **Build timeout**: Use the deployment script for optimized builds
- **Memory issues**: Ensure 2GB+ RAM available

### Runtime Issues
- **Static files not found**: Ensure `dist/public` directory exists
- **Port conflicts**: Use different port or stop other services
- **Module errors**: Verify all dependencies are built correctly

## Health Check

Test your deployment:
```bash
curl http://localhost:5000/api/health
```

Expected response: `{"status":"ok"}`

## Performance Optimization

### Client Bundle
- Uses Vite for optimized builds
- Tree-shaking eliminates unused code
- Compressed assets for faster loading

### Server Bundle
- ESBuild for fast compilation
- External packages reduce bundle size
- No development dependencies in production

## Monitoring

### Application Logs
```bash
# View server logs
tail -f /path/to/app/logs

# Check process status
ps aux | grep node
```

### Resource Usage
- Memory: ~200MB typical usage
- CPU: Low usage, spikes during test processing
- Disk: Minimal writes (uses in-memory storage)

## Security Considerations

- No database credentials in code
- Environment-based configuration
- Static file serving with proper headers
- Session security (when configured)

## Scaling

### Horizontal Scaling
- Stateless design allows multiple instances
- Load balancer required for session stickiness
- Shared storage needed for persistent data

### Vertical Scaling
- Increase memory for larger user loads
- CPU scaling for concurrent test processing

## Backup Strategy

### Code
- Git repository with tagged releases
- Automated deployment pipelines

### Data
- Export user results periodically
- Database backups (if using persistent storage)

## Deployment Checklist

- [ ] Build completes without errors
- [ ] Static assets generated correctly
- [ ] Server starts in production mode
- [ ] Health endpoint responds
- [ ] All psychological tests load properly
- [ ] Results are calculated correctly
- [ ] Performance meets requirements

Your psychological profiling application is now ready for production deployment!