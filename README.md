# [BAKERY NAME] homepage

A responsive Next.js App Router homepage with an editorial cream, caramel, chocolate, and strawberry palette. Desktop uses a scroll-pinned GSAP story; mobile and reduced-motion preferences use a lightweight image hero and normal page scrolling.

## Run locally

Run `npm install`, then `npm run dev`. Add verified business details and order destinations in `config/business.ts` before launch. With ordering URLs unset, order and cake buttons lead to the on-page visit details rather than a fabricated external destination.

## Assets and production dependencies

`public/*-cutout.png` contains separate transparent PNG product cutouts for donuts, croissants, artisan bread, and custom cakes. The hero scroll story switches between the donut, croissant, and bread cutouts. These are generated campaign artwork, not photos of actual menu items; replace them with approved product imagery before representing actual inventory.

A properly licensed, optimized desktop GLB donut is not present; the hero currently uses the transparent donut PNG on desktop and mobile. Business name, location, address, hours, email, menu URL, order URL, and cake enquiry URL are placeholders in `config/business.ts`.

## Vercel CI/CD

The GitHub Actions workflow at `.github/workflows/vercel.yml` builds every pull request and deploys a Preview for pull requests from this repository. A push to `main` builds and deploys Production. Forked pull requests run the build check only; deployment secrets are not exposed to them.

Before the first deployment:

1. Create or import this project in Vercel and link it locally with `vercel link`.
2. Add these repository Actions secrets under **Settings → Secrets and variables → Actions**:
   - `VERCEL_TOKEN`: a Vercel account token.
   - `VERCEL_ORG_ID`: the `orgId` from `.vercel/project.json`.
   - `VERCEL_PROJECT_ID`: the `projectId` from `.vercel/project.json`.
3. Commit and push this workflow to GitHub. Pull requests then get Preview deployments, and pushes to `main` deploy to Production.

The `.vercel` directory is ignored; do not commit its local project configuration.
