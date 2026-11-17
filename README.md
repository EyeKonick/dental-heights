# Dental Heights website

One-page static site for Dental Heights, a dental clinic at Iconique Center, Colon St., Cebu City.
Built with [Astro](https://astro.build). There is no JavaScript framework; the only client script is a
small scroll-reveal in the layout.

## Structure

The project root is the Astro site.

```
src/
  assets/images/      photos (Astro optimises them to WebP at build time)
    brand/            logo
    cases/            before / after photos, cropped from the clinic's own posts
    clinic/           clinic-in-action photo
    team/             team photos
  components/
    sections/         Header, Hero, Services, About, Gallery, Location, Footer
    ui/               Button, SectionHeading, ServiceCard (one service group), CallBar (phone action bar), Icon, Wave
  data/
    site.ts           every clinic detail: name, tagline, address, phone, email, links
    services.json     the 12 services and their categories (name, icon, summary)
    cases.ts          the before/after cases shown in the results section
  layouts/
    BaseLayout.astro  <head>: meta, canonical, Open Graph / Twitter tags, schema.org Dentist markup
  pages/
    index.astro       the page, assembling the sections in order
  styles/
    tokens.css        design tokens: colours, type scale, spacing, radii, motion
    global.css        fonts, base styles and the few shared classes
public/               served as-is: favicon, apple-touch-icon, og-image.jpg (share preview), robots.txt

PRODUCT.md            product facts and brand rules
DESIGN.md             the design system notes
```

Only `src/` and `public/` end up on the website. To use a new photo, put a web copy into `src/assets/images/<folder>/` with a lowercase,
hyphenated name and import it where it is shown.

## Editing content

- **Clinic details** (address, phone, email, Facebook, Messenger, Maps link, where Book Now goes):
  `src/data/site.ts`. Every component reads from this file.
- **Services**: `src/data/services.json`. Each service has a `name`, a `category` (one of the category
  `id`s at the top of the file) and a short `description`. Add a category by adding it to `categories`.
  There is no price field.
- **Before/after cases**: `src/data/cases.ts` (title, treatments, a one-line note, the photos).
- **Photos**: replace a file in `src/assets/images/` with one of the same name, or add a new one and
  import it in the component that shows it.

### Values to fill in before launch

In `src/data/site.ts`, replace:

| Key | Placeholder | Put in |
|---|---|---|
| `url` | `https://REPLACE-WITH-YOUR-DOMAIN.com` | the live domain, e.g. `https://dentalheights.ph` (used for the canonical URL, share tags and schema) |
| `facebookUrl` | `https://www.facebook.com/REPLACE-WITH-PAGE-USERNAME` | the clinic's Facebook page URL |
| `messengerUrl` | `https://m.me/REPLACE-WITH-PAGE-USERNAME` | `https://m.me/` + the same page username |

`bookingUrl` is `#book` (it scrolls to the booking options). Point it at `messengerUrl` or a booking
form later if you prefer.

## Run locally

Needs Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # builds the static site into dist/
npm run preview   # serves dist/ to check the production build
```

## Deploy

`npm run build` produces a plain static site in `dist/`. Any static host works:

- **Netlify**: new site from Git, build command `npm run build`, publish directory `dist`.
- **Vercel**: import the repo; it detects Astro (build `npm run build`, output `dist`).
- **Cloudflare Pages**: framework preset Astro, build `npm run build`, output `dist`.
- **GitHub Pages**: use the official `withastro/action` GitHub Action. If the site lives at
  `https://<user>.github.io/<repo>/`, also set `base: '/<repo>'` in `astro.config.mjs`.

After deploying, set `url` in `src/data/site.ts` to the real domain and rebuild, so the canonical URL
and Facebook previews point to the right place. Check the preview with Facebook's Sharing Debugger.
