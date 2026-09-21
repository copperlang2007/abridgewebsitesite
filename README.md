# siteBRIDGE by artificialBRIDGE

Production source for the artificialBRIDGE website-building site.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npx tsc --noEmit
npm run build
```

## Deployment

The production target is Vercel. The `main` branch is the production branch and is connected through Vercel Git Integration for automatic production deployments.

Production: https://abridgewebsitesite.vercel.app/

## CI

GitHub Actions runs TypeScript validation and a production Vite build on every push to `main` and on pull requests.
