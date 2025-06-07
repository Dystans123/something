# Coolify Deployment Guide for PsychoJourney

This psychological profiling application is ready for deployment on Coolify with optimized Docker configuration.

## Quick Start

1. Connect your Git repository to Coolify
2. Set deployment type to "Docker"
3. Configure environment variables (see below)
4. Deploy using the provided Dockerfile

## Deployment Files Created

- `Dockerfile` - Optimized single-stage build
- `docker-compose.yml` - Service configuration with health checks
- `.dockerignore` - Build optimization
- `.env.example` - Environment template

## Environment Variables

### Required for Production
```
NODE_ENV=production
PORT=5000
HOST=0.0.0.0
```

### Optional
```
SESSION_SECRET=your-secure-random-string
DATABASE_URL=postgresql://user:pass@host:port/db
OPENAI_API_KEY=sk-your-openai-key
```

## Health Check Endpoint

The application includes `/api/health` endpoint for monitoring:
- Returns JSON with status, timestamp, and environment
- Used by Docker health checks
- Accessible at: `https://your-domain.com/api/health`

## Build Process

1. Installs Node.js 20 dependencies
2. Builds React frontend to `dist/public`
3. Bundles Express server to `dist/index.js`
4. Removes dev dependencies for smaller image
5. Runs as non-root user for security

## Coolify Configuration

### Repository Settings
- Build Command: Automatic (uses Dockerfile)
- Port: 5000
- Health Check: `/api/health`

### Deployment Features
- Automatic SSL certificates
- Rolling deployments
- Health monitoring
- Log aggregation

## Application Architecture

- **Frontend**: React SPA with psychological tests
- **Backend**: Express server with API endpoints
- **Storage**: In-memory (expandable to PostgreSQL)
- **Port**: 5000 (serves both API and static files)

## Troubleshooting

### Build Issues
- Ensure sufficient memory (2GB+ recommended)
- Check build logs for dependency errors
- Verify Node.js version compatibility

### Runtime Issues
- Check health endpoint: `/api/health`
- Verify environment variables are set
- Review application logs in Coolify dashboard

### Performance
- Build time: 3-5 minutes
- Memory usage: ~200MB
- Cold start: <10 seconds

## Security Features

- Non-root container user
- Environment variable secrets
- Health check monitoring
- Session security (when configured)

## Post-Deployment

1. Test health endpoint
2. Verify all psychological tests load correctly
3. Check static assets serve properly
4. Monitor logs for any errors

The application will be available at your Coolify-assigned domain with automatic HTTPS.