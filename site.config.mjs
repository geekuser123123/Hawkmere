/**
 * ============================================================================
 *  HAWKMERE — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://hawkmere.kevin-c4h.workers.dev', // no trailing slash — confirm after first Cloudflare deploy
    googleSiteVerification: 'MPb7wlg5sLMlW-5_QfAiw2gDRsS6L051fbQgbHwPlHU', // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Hawkmere',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed name certificate is filed (county clerk, or NY Department of State for an LLC/corporation)
    owner: null, // optional
    foundingYear: null,

    phone: '(332) 286-3417',
    phoneE164: '+13322863417',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '2801 Emmons Ave', // real, staffed office — add suite if any
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11235',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Brooklyn, NY', 'New York, NY'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  /**
   * Contact form — submissions are POSTed to an n8n Webhook (production URL,
   * https://…/webhook/…). The n8n workflow routes them (email, sheet, CRM) and
   * should answer with a redirect to `redirect_to` (the /thank-you/ page).
   * Until webhookUrl is set, the form shows a "not connected yet" notice and won't send.
   * See docs/N8N-FORM-SETUP.md.
   */
  form: { name: 'consultation', provider: 'n8n', webhookUrl: null },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Slow-zoom photo hero (no verified New York video matched the brand).
    // Pexels photo 14426200 — aerial view of Central Park and the reservoir (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      lake: { src: '/assets/media/lake.webp', pos: '40% 60%', alt: 'Autumn trees around the Lake in Central Park, with Upper West Side towers beyond' },
      park: { src: '/assets/media/park.webp', pos: '50% 55%', alt: 'Central Park and the Upper West Side seen from above, with the Hudson River beyond' },
      reservoir: { src: '/assets/media/reservoir.webp', pos: '50% 70%', alt: 'Central Park reservoir and the city stretching north' },
    },
  },
};
