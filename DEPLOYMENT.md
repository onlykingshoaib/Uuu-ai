# Deployment Guide

## Environment Preparation

### Variables Needed
Create `.env.local` with:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
OPENAI_API_KEY=your_key_here  # Optional
```

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Method 1: CLI
```bash
npm i -g vercel
vercel
```

### Method 2: Git Integration
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Environment Variables on Vercel
1. Go to Project Settings
2. Add Environment Variables
3. Add `OPENAI_API_KEY` if using real AI

## Deploy to Other Platforms

### Docker (any platform)
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t social-media-planner .
docker run -p 3000:3000 social-media-planner
```

### Railway.app
1. Connect GitHub repo
2. Add environment variables
3. Deploy

### Netlify
1. Connect GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

## Performance Monitoring

Monitor Vercel Analytics:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Troubleshooting

**Build fails**: Run `npm run build` locally to test

**Page 404**: Check routes in `app/` directory

**Styles missing**: Clear `.next/` and rebuild

**API not working**: Check environment variables and API routes

---

For more help, see the main README.md
