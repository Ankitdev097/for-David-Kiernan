# GitHub Deployment Instructions

Before pushing any changes to GitHub, always ensure `package.json` and `package-lock.json` are fully synchronized and verify that `npm ci` succeeds. If dependencies change, automatically regenerate and commit the updated lockfile. Do not output code that would fail Cloudflare deployment (e.g. do not use bun lockfiles if deploying to Cloudflare via npm).
