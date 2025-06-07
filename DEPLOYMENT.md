# Deployment Guide for PsychoJourney

This application is ready for deployment on Coolify or any Docker-based hosting platform.

## Prerequisites

- Docker-enabled hosting environment
- Node.js 20+ support
- Port 5000 available

## Deployment Files

The following files have been created for deployment:

- `Dockerfile` - Multi-stage Docker build configuration
- `.dockerignore` - Optimized build context
- `.env.example` - Environment variables template

## Environment Variables

Configure these environment variables in your deployment platform:

### Required
- `NODE_ENV=production`
- `PORT=5000`
- `HOST=0.0.0.0`

### Optional
- `SESSION_SECRET` - For session security (recommended)
- `DATABASE_URL` - If using PostgreSQL database
- `OPENAI_API_KEY` - For enhanced AI insights

## Build Process

The application uses a multi-stage Docker build:

1. **Dependencies Stage**: Installs production dependencies
2. **Builder Stage**: Installs all dependencies and builds the application
3. **Runner Stage**: Creates optimized production image

## Build Commands

The following npm scripts are configured:

- `npm run build` - Builds both frontend and backend
- `npm start` - Starts the production server
- `npm run dev` - Development server (not used in production)

## Port Configuration

The application serves on port 5000 and includes:
- API endpoints under `/api`
- Static frontend files
- Fallback to React router for SPA

## Health Check

The server will log "serving on port 5000" when successfully started.

## Troubleshooting

If deployment fails:

1. Ensure all environment variables are set
2. Check that port 5000 is available
3. Verify Docker build logs for any missing dependencies
4. Confirm NODE_ENV is set to "production"

## Security Notes

- Session secret should be a secure random string
- Database credentials should be stored securely
- API keys should never be committed to version control