Deploying this Vite + React project to Vercel

Quick steps (recommended):

1. Push your project to a Git provider (GitHub/GitLab/Bitbucket).
2. Go to https://vercel.com and import the repository.
3. Vercel will detect a static build (Vite). If prompted, set the following:
   - Framework Preset: Other (or Vite)
   - Build Command: `pnpm build` (or `npm run build` / `yarn build`)
   - Output Directory: `dist`
   - Install Command: `pnpm install` (if using pnpm)

4. Environment notes:
   - There are no environment variables required by default.
   - If you add any secrets (API keys, etc.) configure them in the Vercel dashboard.

Local build/test:

```powershell
pnpm install
pnpm build
pnpm preview
```

Notes and tips:
- This project uses `import.meta.glob` to import local images from `src/assets/images`. Vite resolves these at build time, so simply adding images to that folder will include them.
- The `vercel.json` in the repo ensures Vercel runs the `build` script in `package.json` and serves the `dist/` output.
- If you prefer the gallery to be wider than the centered card, move `MasonryContainer` outside the `.max-w-lg` wrapper in `src/App.tsx`.

If you want, I can:
- Add a GitHub Actions workflow to automatically build and push a preview, or
- Add a Vercel Git integration guide tailored to this repo.
