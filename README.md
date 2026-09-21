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

The production target is Vercel. The `main` branch is the production branch and should remain continuously deployable.

## CI

GitHub Actions runs TypeScript validation and a production Vite build on every push to `main` and on pull requests.
