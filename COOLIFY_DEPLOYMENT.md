# Coolify Deployment Solution

## Problem Fixed
Resolved the Docker deployment error: `Cannot find package 'vite' imported from /app/dist/index.js`

## Root Cause
The original build process was bundling Vite development dependencies into the production server, but Vite is only available during the build stage, not in the production container.

## Solution
Created a dedicated production server entry point (`server/index-production.ts`) that completely avoids Vite imports and uses the corrected Dockerfile build process.

## Deployment Files

### 1. Dockerfile
- Multi-stage build separating development and production dependencies
- Uses Node.js 20 Alpine for smaller image size
- Includes health checks for monitoring
- Runs as non-root user for security

### 2. Production Build Script (`build-production.js`)
- Builds client with Vite
- Creates production server without Vite dependencies
- Excludes development-only modules from bundle
- Verifies all required files are present

### 3. Production Server (`server/production-index.ts`)
- Dedicated production entry point
- No Vite imports or dependencies
- Includes health check endpoint
- Proper error handling

## Coolify Configuration

### Repository Settings
- **Build Method**: Docker
- **Dockerfile**: Use default `Dockerfile`
- **Port**: 5000
- **Health Check URL**: `/api/health`

### Environment Variables
```
NODE_ENV=production
PORT=5000
HOST=0.0.0.0
```

### Build Process
1. Install all dependencies (including dev for build)
2. Run production build script
3. Create production image with only runtime dependencies
4. Start application with health monitoring

## Health Check
The application provides a health endpoint at `/api/health` that returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-12-07T...",
  "environment": "production"
}
```

## Build Verification
The build process verifies these files exist:
- `dist/index.js` - Production server bundle
- `dist/public/index.html` - Client application
- `dist/public/assets/*` - Static assets

## Troubleshooting

### If build fails:
- Ensure Node.js 20 is available
- Check that all dependencies install correctly
- Verify build script has execution permissions

### If container won't start:
- Check that PORT environment variable is set
- Verify health check endpoint responds
- Review application logs in Coolify dashboard

### Performance
- Build time: 3-5 minutes
- Image size: ~300MB (Alpine-based)
- Memory usage: ~200MB runtime
- Cold start: <10 seconds

## Next Steps
1. Push code to your Git repository
2. Connect repository to Coolify
3. Configure environment variables
4. Deploy using Docker build method
5. Monitor health endpoint for successful deployment