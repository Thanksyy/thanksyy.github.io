# Yuyu Luo (骆昱宇) — Academic Homepage

Personal academic homepage of **Yuyu Luo (骆昱宇)**, Assistant Professor at HKUST(GZ), directing the Data Intelligence and Analytics Lab (DIAL). Built with **Vite + React + Tailwind**, deployed to **GitHub Pages** via GitHub Actions.

🌐 Live: https://luoyuyu.vip

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 4
- Deployed to GitHub Pages (GitHub Actions, see `.github/workflows/deploy.yml`)

## Local Development

```bash
pnpm install
pnpm dev          # local dev server
pnpm build:pages  # production build for GitHub Pages → dist/public
```

## Updating Content

All content is data-driven. Edit these files and push to `master` — the site rebuilds and redeploys automatically:

| Update | File |
|---|---|
| Publications (with tags) | `client/src/data/publications.ts` |
| Profile / bio / links / recruitment | `client/src/data/profile.ts` |
| Featured projects | `client/src/data/projects.ts` |
| Awards / students / services | `client/src/data/misc.ts` |

See `MIGRATION_GUIDE.md` for deployment details and `MAINTENANCE_GUIDE.md` for maintenance notes.

## Deployment

Push to `master` → GitHub Actions builds and deploys to GitHub Pages automatically. The custom domain `luoyuyu.vip` is preserved via the `CNAME` file.

To roll back to the previous Jekyll site, use the `legacy-jekyll-backup` branch.
