# projecthood.org

Source for Project H.O.O.D.'s website — a Chicago nonprofit helping youth, young adults, and families in the Woodlawn / Greater Grand Crossing neighborhoods find pathways out of poverty and violence through entrepreneurship, vocational training, and mentorship.

**Live site:** projecthood.org *(pending DNS cutover — currently served by Squarespace)*
**Preview:** enable GitHub Pages in repo Settings → Pages → Deploy from `main` branch → `/ (root)`

## What's here

Static HTML site. No build step required for viewing — every `.html` file renders on its own. A small Python generator (`_build.py`) templates shared nav/footer across all pages; run it after editing the generator to regenerate.

```
index.html              Home
about.html              About / mission / team
programs.html           Programs hub
program.html            Program detail (Violence Prevention — used as template)
impact.html             Impact numbers
leo-center.html         LEO Center capital campaign
campaigns.html          Walk Across America (WAA)
get-involved.html       Give / Volunteer / Partner hub
donate.html             Donate (routes to NetworkForGood)
volunteer.html          Volunteer (Google Form)
events.html             Events (Eventbrite widget + manual cards)
partner.html            Partner inquiries
news.html               News / stories
contact.html            Contact
404.html                Not-found page
css/styles.css          Design system (brand colors, typography, components)
js/main.js              Mobile nav + external link safety + active nav
img/                    Logo + acronym marks
_build.py               Regenerates all pages from shared HEAD / FOOTER
```

## Documentation

- **[TEAM_REVIEW.md](TEAM_REVIEW.md)** — QA instructions for the current team review pass (preview URL, page list, feedback format)
- **[SITEMAP.md](SITEMAP.md)** — Page-by-page purpose, audience, primary CTA, integrations, photo slots, content owners
- **[CONTENT_UPDATES.md](CONTENT_UPDATES.md)** — Plain-English guide for non-technical staff to update content after launch
- **[LAUNCH_RUNBOOK.md](LAUNCH_RUNBOOK.md)** — Cutover-day procedure: DNS, redirects, analytics, SEO, accessibility, rollback

## Editing

- Content edits: open the relevant `.html` file, edit the page body inside the `<main>` tag, commit.
- Nav, footer, or any change that should ripple across every page: edit the corresponding template string in `_build.py`, then run `python3 _build.py` and commit the regenerated pages.
- Brand assets (colors, fonts, components): edit `css/styles.css`. All tokens live in `:root` at the top of the file.

## Form + calendar integrations

External by design — not self-hosted on this site:

- **Donate** — routes to NetworkForGood (`projecthood.networkforgood.com`)
- **Walk Across America** — routes to Tiltify (`tiltify.com/project-hood/walk-across-america-2025`)
- **Program intake** — Apricot
- **Volunteer / Contact / Partner** — Google Forms → Google Sheet
- **Events** — Eventbrite organization account (team-managed; RSVP, flyer upload, sharing built in). Widget embed slot in `events_body`; manual card fallback active until org is set up. See `CONTENT_UPDATES.md` → "Updating events."
- **Newsletter** — NetworkForGood embed

## Brand

Colors and type derived from *PH Visual Identity Guide V1 (09/30/2021)*. Font stack uses Google Fonts substitutes (Oswald for Akkordeon Nine, Zilla Slab for Freight Micro, Montserrat for body) since original faces aren't self-hostable.
