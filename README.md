# [BAKERY NAME] homepage

A responsive Next.js App Router homepage with an editorial cream, caramel, chocolate, and strawberry palette. Desktop uses a scroll-pinned GSAP story; mobile and reduced-motion preferences use a lightweight image hero and normal page scrolling.

## Run locally

Run `npm install`, then `npm run dev`. Add verified business details and order destinations in `config/business.ts` before launch. With ordering URLs unset, order and cake buttons lead to the on-page visit details rather than a fabricated external destination.

## Assets and production dependencies

`public/*-cutout.png` contains separate transparent PNG product cutouts for donuts, croissants, artisan bread, and custom cakes. The hero scroll story switches between the donut, croissant, and bread cutouts. These are generated campaign artwork, not photos of actual menu items; replace them with approved product imagery before representing actual inventory.

A properly licensed, optimized desktop GLB donut is not present; the hero currently uses the transparent donut PNG on desktop and mobile. Business name, location, address, hours, email, menu URL, order URL, and cake enquiry URL are placeholders in `config/business.ts`.
