# PsychoJourney - Psychological Profiling Application

A sophisticated psychological profiling web application that explores Jungian archetypes through interactive projection tests. The application provides deep psychological insights by revealing complex personality patterns and relationship dynamics.

## Features

- **Archetype Discovery**: 40-question projection test revealing Jungian archetypes
- **Multiple Assessment Types**: 
  - Toxicity Compass
  - Relationship Patterns
  - Integration Guide
  - Intelligence Mapping
  - Attachment Styles
  - Identity Compass
  - Inner Driver Analysis
- **Interactive UI**: Modern React interface with animations
- **Result Persistence**: LocalStorage for result history
- **Responsive Design**: Mobile-optimized experience

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js 20
- **Build**: Vite, ESBuild
- **Deployment**: Docker, Coolify-ready

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Deployment

This application is ready for deployment on Coolify or any Docker-based platform.

### Files Created:
- `Dockerfile` - Optimized container configuration
- `docker-compose.yml` - Service orchestration
- `.dockerignore` - Build optimization
- `DEPLOYMENT.md` - Complete deployment guide

### Environment Variables:
```env
NODE_ENV=production
PORT=5000
HOST=0.0.0.0
SESSION_SECRET=your-secure-secret
```

### Health Check:
- Endpoint: `/api/health`
- Returns JSON status and environment info

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Application pages
│   │   ├── data/           # Test questions and logic
│   │   └── lib/            # Utility functions
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data persistence
├── shared/                 # Shared types and schemas
└── Dockerfile             # Container configuration
```

## Psychological Tests

1. **Archetype Test**: Core personality archetype discovery
2. **Toxicity Compass**: Relationship health assessment
3. **Integration Guide**: Personal growth evaluation
4. **Intelligence Map**: Cognitive strengths mapping
5. **Attachment Styles**: Relationship pattern analysis
6. **Identity Compass**: Core identity exploration
7. **Inner Driver**: Motivation and drive assessment

## API Endpoints

- `GET /api/health` - Health check and status
- `GET /*` - React SPA (catch-all route)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details