# QR Studio — Phased Roadmap
<!-- Generated 2026-10-04 | Awaiting approval before implementation begins -->

---

## Guiding Principles

1. **Ship working software in every phase** — no phase ends with half-built features.
2. **Quality gates are non-negotiable** — Lighthouse ≥ 95 mobile, a11y CI green, test coverage ≥ 80% before each phase ships.
3. **Feature flags everywhere** — unfinished work is dark-launched; users never see broken UI.
4. **P0 before P1 before P2** — no P2 feature starts until all P0s in its phase are stable.
5. **Ask before adding paid services** — every third-party integration gets explicit approval.

---

## Phase Overview

| Phase | Name | Duration | Focus |
|---|---|---|---|
| **0** | Foundation & Migration | 2 weeks | Repo setup, stack migration, infra, CI/CD |
| **1** | MVP Core | 8 weeks | QR generator, design engine, export, scanner, auth, billing |
| **2** | Dynamic QR & Analytics | 6 weeks | Dynamic QR, redirect engine, analytics, link management |
| **3** | Landing Pages & Forms | 6 weeks | Page builder, forms/leads, bio-links |
| **4** | Teams & Organization | 4 weeks | Workspaces, roles, projects, collaboration |
| **5** | Bulk & Automation | 4 weeks | Bulk tools, barcode generator, API v1 |
| **6** | AI & Templates | 6 weeks | AI features, template library, brand kit |
| **7** | Commerce & Verticals | 8 weeks | Payments, restaurant suite, events |
| **8** | SEO & Content | 6 weeks | 500+ SEO pages, content hub, technical SEO |
| **9** | Scale & Polish | 4 weeks | Performance, PWA, i18n, accessibility audit |
| **10** | Mobile Apps & Ecosystem | 8 weeks | React Native app, integrations, developer platform |

**Total estimated duration: ~62 weeks (≈ 15 months) with a team of 4–6 engineers.**

---

## PHASE 0 — Foundation & Migration
**Duration:** 2 weeks  
**Goal:** Move from Vite/React SPA to Next.js App Router; wire up infrastructure; green CI.

### Deliverables
- [ ] Next.js 14 App Router project scaffolded from existing Vite codebase
- [ ] Tailwind CSS + shadcn/ui ported over; existing components verified
- [ ] Supabase project created; initial DB schema (users, workspaces, qr_codes)
- [ ] Vercel deployment pipeline live (preview + production)
- [ ] GitHub Actions CI: lint → typecheck → vitest → Lighthouse CI
- [ ] Environment variables management (Vercel env + local `.env.local`)
- [ ] Redis instance provisioned (Upstash) for rate limiting
- [ ] S3-compatible storage bucket (Supabase Storage or Cloudflare R2) configured
- [ ] Feature flag system bootstrapped (simple DB-backed flags table)
- [ ] Sentry error tracking wired up
- [ ] Basic robots.txt and sitemap.xml

### Feature IDs shipped
F-1241, F-1250, F-1251, F-1258, F-1261, F-1571, F-1572, F-1573, F-1574,
F-1575, F-1578, F-1580, F-1583, F-1585, F-1586, F-1587, F-1590, F-1591,
F-1592, F-1599, F-1043, F-1341, F-1363, F-1391, F-1392, F-1393, F-1394,
F-1398, F-1408, F-1409

### Quality Gates
- TypeScript strict mode zero errors
- ESLint zero warnings
- CI green on main branch

---

## PHASE 1 — MVP Core
**Duration:** 8 weeks  
**Goal:** A fully functional, polished QR generator that replaces the existing app and is ready for public launch on the existing domain.

### Week 1–2: QR Types + Design Engine
**Features:** F-0001 to F-0060 (all 50 QR types), F-0061 to F-0110 (design engine)

- All 50+ QR type forms with validation (F-0001–F-0060)
- 15 dot styles, 5 eye frame + ball variants (F-0061–F-0084)
- Solid + linear + radial gradient fills (F-0085–F-0088)
- Background color + image (F-0089–F-0091)
- Logo placement with shape + border (F-0092–F-0096)
- Frames: none, simple, banner top/bottom, balloon, ticket (F-0097–F-0102)
- Drop shadow (F-0103)
- Error correction level + quiet zone (F-0107–F-0108)
- Live animated preview (F-0109)
- Smart type detection from pasted content (F-0164)

### Week 3: Export Formats
**Features:** F-0201 to F-0250 (core exports)

- PNG/JPEG/WebP export with quality slider (F-0201–F-0203, F-0226)
- SVG export with vector cleanup (F-0205, F-0213)
- PDF export, A4/Letter/business card templates (F-0206, F-0215–F-0217)
- DPI selector 72/150/300/600 (F-0208)
- Custom canvas size + transparent bg (F-0210–F-0211)
- Retina 2× export (F-0247)
- Copy to clipboard (F-0237)
- Browser print (F-0235)
- Print preview modal (F-0241)

### Week 4: Scanner
**Features:** F-0251 to F-0300 (core scanner)

- Camera scanner with front/back switch (F-0251, F-0293)
- Image upload + drag-drop + clipboard scan (F-0252–F-0254)
- Scan history (F-0257)
- Safety URL check with warning (F-0262)
- Scan result preview + copy + open (F-0263–F-0265)
- Torch + zoom controls (F-0258–F-0259)
- EAN/UPC/Code128 support (F-0267–F-0269)

### Week 5: Auth + Account
**Features:** F-0801 to F-0850 (core auth)

- Email + password registration/login (F-0801)
- Google OAuth (F-0802)
- Email verification + password reset (F-0839–F-0840)
- TOTP two-factor auth (F-0806)
- Account settings: name, email, password, avatar (F-0808–F-0809)
- Session management + login history (F-0835–F-0836)
- Account data export + deletion (F-0837–F-0838)
- Onboarding checklist (F-0845)
- Brute force protection (F-1405)

### Week 6: QR Library + Projects
**Features:** F-0851 to F-0900 (projects/organization)

- QR library with grid/list view, search, filters, sort (F-0851, F-0857–F-0860)
- Folders + drag-to-folder (F-0852, F-0854)
- Tag system + filter (F-0855–F-0856)
- Bulk select + move + delete + archive (F-0861–F-0865)
- Trash + restore (F-0868)
- QR duplicate + rename + notes (F-0872–F-0874)
- Starred + recent QRs (F-0881–F-0882)
- QR status badge (active/paused/expired) (F-0880)
- Scan count badge on card (F-0888)

### Week 7: Billing
**Features:** F-1001 to F-1035 (billing)

- Free / Pro / Business plans (F-1001–F-1003)
- Monthly + annual billing via Stripe (F-1005–F-1006)
- Invoice generation + history (F-1007–F-1008)
- 14-day Pro trial (F-1012–F-1013)
- In-app upgrade flow (F-1014)
- Downgrade/cancel + reactivate (F-1015–F-1016)
- Plan comparison page (F-1017)
- Payment method update (F-1023)
- Failed payment recovery + dunning emails (F-1024, F-1031)
- Usage meters + limit enforcement (F-1009, F-1033)
- Usage dashboard (F-1034)

### Week 8: UX Core + Accessibility + Performance
**Features:** F-1066–F-1100, F-1156–F-1185, F-1241–F-1270 (core)

- Undo/redo + autosave (F-1068–F-1069)
- Step-by-step wizard on mobile (F-1066)
- Bottom sheet preview mobile (F-1067)
- Onboarding tour (F-1073)
- Toast notifications + confirmation dialogs (F-1077–F-1078)
- Loading skeletons (F-1079)
- Dark/light/auto theme (F-1131–F-1134)
- Full keyboard navigation + ARIA labels (F-1156–F-1157)
- Skip link + focus management (F-1159–F-1160)
- 320px layout through 4K (F-1101–F-1102)
- Tablet split view (F-1103)
- Core Web Vitals ≥ 95 Lighthouse mobile (F-1262)

### Phase 1 Quality Gates
- Lighthouse mobile ≥ 95 on all core pages
- axe-core zero critical violations
- Vitest coverage ≥ 80% on business logic
- 2 Playwright E2E journeys: "create QR → download" and "register → create QR"
- All P0 security headers (Mozilla Observatory A+)
- GDPR: consent banner + privacy policy live

---

## PHASE 2 — Dynamic QR & Analytics
**Duration:** 6 weeks  
**Goal:** Launch dynamic QR (the primary monetization driver) and real scan analytics.

### Week 9–10: Dynamic QR Engine
**Features:** F-0401 to F-0450

- Dynamic QR create/edit/delete (F-0401–F-0402)
- Edge-function redirect engine < 50ms (F-0403, F-1265)
- Custom short slug (F-0433)
- UTM auto-append (F-0416)
- Pause/resume + expiry + scan limits (F-0411–F-0413, F-0417)
- Password gate (F-0414)
- Fallback URL (F-0415)
- A/B split redirect 50/50 (F-0404)
- Time-based routing by hour/day (F-0406)
- Device-based routing iOS/Android/Desktop (F-0408)
- Dynamic QR dashboard (F-0421)
- Destination history + rollback (F-0422–F-0423)
- QR lifecycle alerts (F-0444)
- Redirect health monitor (F-0450)
- Smart app-store routing (F-0424)

### Week 11–12: Analytics Core
**Features:** F-0451 to F-0500

- Total + unique scans over time (F-0451–F-0452)
- Device / OS / browser breakdowns (F-0453–F-0455)
- Country heatmap + city breakdown (F-0456–F-0457)
- Date range picker (F-0459)
- UTM tracking (F-0472)
- Bot filtering (F-0468)
- Privacy-friendly mode (F-0467)
- CSV + PDF export reports (F-0464–F-0465)
- Scan notification on first scan (F-0426)
- Real-time scan counter (F-0427)
- Scan velocity alert + zero-scan alert (F-0477–F-0478)
- Google Analytics integration (F-0481)
- Meta Pixel integration (F-0482)

### Week 13–14: Link Management
**Features:** F-0501 to F-0550

- Short link creation + custom slug (F-0501–F-0502)
- Custom domain setup + verification (F-0503–F-0504)
- Link click analytics (F-0509)
- Link health monitor + broken-link alert (F-0510–F-0511)
- UTM builder + presets (F-0517–F-0518)
- Link expiry + password gate (F-0513–F-0514)
- Bio-link page builder (F-0506) ← minimal version for Phase 2
- Bulk short links + CSV import (F-0519–F-0520)
- Link search + archive + trash (F-0526–F-0528)
- Link safety score (F-0532)
- Deep link + app store smart link (F-0523–F-0524)

### Phase 2 Quality Gates
- Dynamic QR redirect p95 latency ≤ 50ms (measured in staging)
- Analytics data accuracy test: 100 synthetic scans → verify counts
- 4 Playwright E2E journeys covering dynamic QR create/edit/redirect/analytics
- Lighthouse maintained ≥ 95

---

## PHASE 3 — Landing Pages & Forms
**Duration:** 6 weeks  
**Goal:** Enable QR destinations with no-code hosted pages; add lead capture.

### Week 15–17: Page Builder
**Features:** F-0551 to F-0600

- Drag-drop canvas + core blocks (hero, button, text, image, video, social links) (F-0551–F-0557)
- Block: contact form, PDF viewer, gallery, menu, countdown, map, reviews, pricing, FAQ (F-0558–F-0566)
- Page hosting on CDN subdomain (F-0570)
- Custom URL slug (F-0571)
- 20+ page themes (F-0573)
- Custom CSS injection (F-0574)
- Page SEO fields + OG image (F-0576)
- Page analytics (F-0581)
- Page version history + clone (F-0582–F-0583)
- 50+ page templates by use case (F-0584)
- Mobile/desktop preview toggle (F-0585)
- Page font selector + color theme (F-0596–F-0597)
- Page expiry + password gate (F-0579–F-0580)

### Week 18–19: Forms & Leads
**Features:** F-0601 to F-0650

- Form builder with all field types (F-0601–F-0615)
- Conditional logic (F-0616)
- Multi-page form + progress bar (F-0617–F-0618)
- Spam protection: CAPTCHA + honeypot (F-0620–F-0621)
- Lead export CSV (F-0622)
- Email notification + auto-reply (F-0625–F-0626)
- Form analytics (F-0630)
- GDPR consent field (F-0638)
- Form embed in page builder (F-0645)
- Quiz mode + survey branching (F-0635–F-0636)
- Response dashboard (F-0642)
- HubSpot + Mailchimp integration (F-0627–F-0628)
- Zapier webhook (F-0629)

### Week 20: Bio-Link + Vertical Pages
**Features:** F-0506 (full), F-0057, F-0033–F-0039

- Full bio-link page builder polished (F-0506)
- PDF QR with hosted PDF (F-0033)
- Digital business card (F-0037)
- Review link QR (F-0036)
- Coupon/offer QR (F-0039)
- Lead form QR (F-0040)
- Gallery QR (F-0034)
- Linktree-style bio QR (F-0057)

### Phase 3 Quality Gates
- Page builder renders correctly on 320px, 768px, 1440px, 2560px
- Form submission E2E: fill → submit → verify in response dashboard
- Page Lighthouse ≥ 95 on generated landing pages
- Schema markup validates (FAQ, HowTo) on generated pages

---

## PHASE 4 — Teams & Organization
**Duration:** 4 weeks  
**Goal:** Unlock team collaboration features enabling B2B sales.

### Week 21–22: Workspaces + Roles
**Features:** F-0810 to F-0850 (teams)

- Workspace create/switch (F-0810–F-0811)
- Team invite + roles (Owner/Admin/Editor/Viewer/Billing) (F-0813–F-0818)
- Audit log + export (F-0820–F-0821)
- Activity feed (F-0824)
- Member remove + ownership transfer (F-0830–F-0832)
- 2FA enforcement for admin (F-1423)
- SSO/SAML groundwork (F-0822 — feature-flagged)

### Week 23: Collaboration
**Features:** F-0901 to F-0930

- Share-for-review link + reviewer role (F-0901–F-0902)
- Approval workflow + notifications (F-0903–F-0905)
- Comment threads + resolve (F-0906–F-0907)
- Edit lock (F-0911)
- Presentation mode (F-0912)
- QR proposal PDF export (F-0913)

### Week 24: Brand Kit
**Features:** F-0931 to F-0950

- Brand kit create with logo/colors/fonts (F-0931–F-0934)
- Default QR style per brand (F-0935)
- One-click apply (F-0936)
- Multiple brand kits + switcher (F-0937–F-0938)
- Color accessibility check (F-0943)
- Logo background removal (F-0944)
- OG image template (F-0946)
- Brand kit on landing pages (F-0947)

### Phase 4 Quality Gates
- E2E: invite → accept → create QR → review → approve
- Role permission matrix unit tests (all 5 roles × all actions)
- Audit log captures all tested events

---

## PHASE 5 — Bulk Tools & Barcode & API
**Duration:** 4 weeks  
**Goal:** Enable power users and developer integrations.

### Week 25–26: Bulk Tools
**Features:** F-0351 to F-0400

- CSV + Excel import with column mapping (F-0351–F-0354)
- Variable templates with {placeholders} (F-0355)
- 5,000-row batch with background jobs + progress (F-0356–F-0358)
- ZIP export + individual file naming (F-0359–F-0360)
- Batch PDF sheet (F-0361)
- Batch design apply (F-0362)
- Batch preview first-10 + error row report + retry (F-0364–F-0366)
- Batch job history (F-0367)
- Dynamic QR batch create (F-0369)
- Batch notification email (F-0398)
- Google Sheets import (F-0353) — feature-flagged

### Week 27: Barcode Generator
**Features:** F-0301 to F-0350

- EAN-13/8, UPC-A/E, Code128/39/93 (F-0301–F-0307)
- ITF-14, GS1-128, PDF417, DataMatrix, Aztec (F-0308–F-0314)
- ISBN/ISSN barcodes (F-0316–F-0317)
- Checksum validation (F-0320)
- Height/width controls + HRT toggle (F-0321–F-0323)
- PNG/SVG/PDF export (F-0325–F-0327)
- Barcode sheet layout + batch (F-0328–F-0329)
- Barcode API endpoint (F-0331)

### Week 28: API v1
**Features:** F-0951 to F-1000

- API key management with scopes (F-0951)
- REST API: QR CRUD, dynamic QR, links, analytics (F-0951)
- OpenAPI 3.1 docs + interactive playground (F-0952, F-0955)
- Rate limit headers (F-0954)
- Webhook system + HMAC signing + retry + log (F-0956–F-0959)
- JS/TS SDK (F-0960)
- Python SDK (F-0961)
- Zapier + Make integrations (F-0964–F-0965)
- Developer dashboard (F-0970)
- API versioning (F-0972)
- Edge API endpoints (F-0980)
- Bulk API (F-0981)
- Postman collection (F-0977)

### Phase 5 Quality Gates
- Bulk: process 1,000-row CSV in < 60s in staging
- API contract tests against OpenAPI spec
- SDK smoke tests in CI
- Barcode: generated code verified scannable in test scan

---

## PHASE 6 — AI & Templates
**Duration:** 6 weeks  
**Goal:** Differentiate with AI-powered generation; build the template library.

> ⚠️ **Requires approval for:** OpenAI / Anthropic API key usage, ML background-removal service.

### Week 29–30: Template Library
**Features:** F-0111 to F-0160

- 200+ templates across all industry/season/occasion categories (F-0111–F-0144)
- Template search + tags (F-0145)
- Favorites + preview modal (F-0146, F-0148)
- Template collections + featured (F-0152–F-0153)
- Template from project (F-0151)
- AI-suggested templates (F-0149) — feature-flagged

### Week 31–33: AI Features
**Features:** F-0161 to F-0200

- Smart type detection (F-0164) ← already in Phase 1; extend
- AI design from text prompt (F-0161) — requires LLM API approval
- CTA text writer (F-0163)
- Scannability predictor (F-0165)
- Alt-text generator (F-0166)
- SEO copy generator (F-0167)
- AI color palette suggester (F-0170)
- Content safety check (F-0172)
- AI bio writer (F-0175)
- AI data validator (F-0196)
- AI logo background remover (F-0186) — requires ML service approval
- Chat assistant (F-0168) — feature-flagged, requires LLM approval
- Auto-translate landing pages (F-0169) — feature-flagged

### Week 34: Style Presets + Design Power Features
**Features:** F-1601 to F-1630

- Style presets save/apply (F-1607)
- Copy design settings between QRs (F-1606)
- Smart defaults by QR type (F-1610)
- Color picker eyedropper (F-1625)
- Custom eye color + gradient angle snap (F-1626–F-1627)
- QR reliability scorer + print size recommender (F-1602–F-1603)
- Overlay mode (F-1622)
- 3D/embossed effect (F-0104)
- Color harmony generator (F-0105)

### Phase 6 Quality Gates
- AI features behind feature flags; degraded gracefully without API key
- Template library loads first-paint in < 300ms (virtualized grid)
- All AI calls have timeout + fallback UX
- LLM cost per operation documented before approval request

---

## PHASE 7 — Commerce & Verticals
**Duration:** 8 weeks  
**Goal:** Launch restaurant suite, events, and payment QRs as vertical product lines.

> ⚠️ **Requires approval for:** Stripe live keys, PayPal API, Apple Wallet API, Google Wallet API.

### Week 35–37: Ecommerce & Payments
**Features:** F-0651 to F-0700

- Stripe checkout + payment link (F-0652, F-0665)
- Donation page + tip jar (F-0655–F-0656)
- Invoice QR (F-0657)
- Coupon code generator + redemption (F-0658–F-0659, F-0692)
- Apple Wallet + Google Wallet pass (F-0661–F-0662)
- Digital loyalty card (F-0660)
- Revenue analytics (F-0696)
- Payment confirmation page (F-0694)

### Week 38–40: Restaurant Suite
**Features:** F-0701 to F-0750

- Digital menu builder with categories/items/photos/allergens (F-0701–F-0706)
- Multi-language menu (F-0707)
- Menu scheduling + item availability (F-0708, F-0715)
- Table QR codes + tent template (F-0709, F-0719)
- Table ordering + order dashboard + status push (F-0710–F-0712)
- Review prompt QR (F-0713)
- Dietary filter (F-0714)
- Menu analytics (F-0718)
- Menu SEO page (F-0723)
- Menu branding kit (F-0744)

### Week 41–42: Events
**Features:** F-0751 to F-0800

- Event creator + QR (F-0751–F-0752)
- RSVP form + guest list (F-0753–F-0754)
- Ticket generator + email delivery (F-0755–F-0756)
- Check-in scanner (F-0757–F-0758)
- Badge generator (F-0759)
- Event schedule + map + countdown (F-0760–F-0763)
- Event reminders (F-0764)
- Analytics dashboard (F-0774)
- Ticket purchase (F-0683)
- Waitlist + group tickets (F-0770–F-0771)

### Phase 7 Quality Gates
- Stripe payment flow tested in test mode with 100% E2E coverage
- Restaurant: menu renders correctly at 320px with 50+ items
- Events: ticket QR scans correctly in check-in scanner
- Apple/Google Wallet passes validated before live deployment

---

## PHASE 8 — SEO & Content
**Duration:** 6 weeks  
**Goal:** Build the organic acquisition engine — 500+ indexed pages before Google.

### Week 43–45: Programmatic SEO
**Features:** F-1271 to F-1310

- QR type landing pages (50+) with unique copy (F-1271, F-1276)
- Industry use case pages (F-1272)
- Programmatic page generator from data templates (F-1275)
- FAQ schema + HowTo schema on all pages (F-1277–F-1278)
- Internal linking engine (F-1279)
- Pillar pages: QR guide, Dynamic QR, Analytics (F-1280–F-1282)
- Comparison pages vs top competitors (F-1283)
- Homepage SEO + features page (F-1287–F-1288)
- OG image auto-generation (F-1297)
- Full JSON-LD schema suite (F-1298–F-1308)

### Week 46–47: Technical SEO
**Features:** F-1361 to F-1390

- XML sitemap index + dynamic generation (F-1361–F-1362)
- hreflang for EN + 5 initial languages (F-1365)
- Canonical rules (F-1364)
- Structured data validator (F-1366)
- OG + Twitter Card tags (F-1368–F-1369)
- Redirect manager (F-1372)
- 404 monitor (F-1373)
- IndexNow (F-1371)
- CDN cache purge on publish (F-1390)
- Core Web Vitals monitoring live (F-1377)
- Lighthouse CI page-speed gate (F-1388)

### Week 48: Content Hub v1
**Features:** F-1311 to F-1360

- Blog platform with MDX (F-1311)
- Blog categories, search, RSS, author profiles (F-1312–F-1318)
- Help center with article search (F-1320–F-1323)
- Getting started guides (F-1324)
- Glossary 100+ terms (F-1326)
- Template gallery hub (F-1327)
- Changelog public page (F-1331)
- Legal pages: privacy, terms, cookies, accessibility (F-1346–F-1349)
- Status page (F-1345)

### Phase 8 Quality Gates
- 500+ pages indexed on staging by phase end
- Zero duplicate-content warnings across pages
- All structured data validates in Google Rich Results Test
- Lighthouse SEO score 100 on all pillar pages

---

## PHASE 9 — Scale & Polish
**Duration:** 4 weeks  
**Goal:** Harden performance, internationalize, audit accessibility, ship PWA.

### Week 49–50: Performance & PWA
**Features:** F-1241 to F-1270, F-1216 to F-1240

- Web worker for QR generation (F-1245)
- Virtualized lists (F-1246)
- Link prefetching (F-1247)
- Font subsetting (F-1252)
- PWA manifest + service worker + offline QR gen (F-1216–F-1219)
- Install prompt + app shortcuts (F-1218, F-1224)
- Push notifications opt-in (F-1222–F-1223)
- Background sync (F-1221)
- Share target (F-1225)
- Workbox integration (F-1240)
- Load testing with k6 (F-1576)

### Week 51: i18n (Top 10 Languages)
**Features:** F-1186 to F-1215

- next-intl framework + EN + ES + FR + DE + PT-BR + JA + ZH-CN + HI + AR + IT (F-1186–F-1201)
- RTL layout for Arabic (F-1205)
- Language switcher + auto-detect (F-1209–F-1210)
- Locale-aware numbers/dates (F-1206–F-1207)
- hreflang for all 10 languages (F-1212)
- Localized sitemaps (F-1213)

### Week 52: Accessibility Audit + Theming
**Features:** F-1156 to F-1185, F-1131 to F-1155

- Full keyboard navigation audit (F-1156)
- Screen reader testing (NVDA + VoiceOver) (F-1157–F-1158)
- Accessible charts (table fallback) (F-1181)
- Accessible date picker + color picker (F-1175, F-1180)
- Accessibility statement page (F-1184)
- 10 accent themes (F-1135–F-1144)
- High-contrast mode (F-1145)
- Dyslexia font option (F-1146)
- Font size controls (F-1147)
- axe-core CI gate (F-1185, F-1559)

### Phase 9 Quality Gates
- Lighthouse mobile ≥ 95 across all 10 most-visited pages
- axe-core zero violations on all pages
- PWA installable + offline QR gen verified on Android + iOS
- RTL layout verified on Arabic locale

---

## PHASE 10 — Mobile Apps & Ecosystem
**Duration:** 8 weeks  
**Goal:** Native mobile app + full integrations ecosystem + enterprise features.

### Week 53–56: React Native App
**Features:** F-1521 to F-1555

- Expo app: QR generator + scanner + library + analytics (F-1521–F-1525)
- Dynamic QR edit in app (F-1526)
- Offline mode (F-1527)
- Push notifications (F-1528)
- Biometric auth (F-1529)
- Share extension (F-1531)
- Home screen widget (F-1532)
- Event check-in mode (F-1544)
- TestFlight + Play Store beta (F-1554–F-1555)

### Week 57–58: Integrations Ecosystem
**Features:** F-0964–F-0999

- Zapier official app (F-0964)
- Make official module (F-0965)
- Google Sheets add-on (F-0994)
- WordPress plugin (F-0966)
- Shopify app (F-0967)
- Embeddable widget (F-0968)
- HubSpot integration (F-0995)
- Slack notifications (F-0829)

### Week 59–60: Enterprise + Admin
**Features:** F-0822, F-1036 to F-1065, F-1850+

- SSO/SAML (F-0822)
- SCIM provisioning groundwork (F-0823)
- Full admin dashboard (F-1036–F-1065)
- Advanced analytics export (F-0465)
- Scheduled email reports (F-0466)
- White-label mode (F-0950)
- Enterprise workspace + custom quote (F-0850, F-1035)
- SOC 2 control documentation (F-1417)

### Phase 10 Quality Gates
- Mobile app passes App Store + Play Store review criteria
- SSO verified with Okta and Azure AD in staging
- Admin panel: all role-based access controls tested
- Integrations: Zapier + Make apps pass marketplace review

---

## Feature Flag Strategy

All unfinished or experimental features ship behind flags in the `feature_flags` table:

```sql
CREATE TABLE feature_flags (
  id        text PRIMARY KEY,         -- e.g. 'ai_design_prompt'
  enabled   boolean DEFAULT false,
  user_ids  uuid[],                   -- per-user override
  plan_ids  text[],                   -- per-plan override
  created_at timestamptz DEFAULT now()
);
```

Flags are read server-side at request time. Client receives only the flags relevant to the authenticated user. No flag state is baked into the build.

---

## Dependency Map (Third-Party Services)

| Service | Phase Needed | Approval Required |
|---|---|---|
| Supabase (Postgres + Auth + Storage) | Phase 0 | No — free tier |
| Upstash Redis | Phase 0 | No — free tier |
| Vercel | Phase 0 | No — free tier |
| Sentry | Phase 0 | No — free tier |
| Stripe (test mode) | Phase 1 | Yes — before live keys |
| hCaptcha / Cloudflare Turnstile | Phase 1 | Yes |
| Google Safe Browsing API | Phase 1 | Yes |
| Cloudflare R2 (S3 storage) | Phase 0 | No — pay as you go |
| Stripe (live mode) | Phase 7 | **Yes — explicit approval** |
| PayPal API | Phase 7 | **Yes — explicit approval** |
| Apple Wallet API | Phase 7 | **Yes — explicit approval** |
| Google Wallet API | Phase 7 | **Yes — explicit approval** |
| OpenAI / Anthropic API | Phase 6 | **Yes — explicit approval** |
| ML Background Removal | Phase 6 | **Yes — explicit approval** |
| GeoIP Service (MaxMind) | Phase 2 | Yes |
| Intercom / Crisp (chat) | Phase 8 | Yes |
| Postmark / Resend (email) | Phase 1 | Yes |

---

## Team & Velocity Assumptions

| Role | Count | Notes |
|---|---|---|
| Full-Stack Engineers | 3–4 | Next.js + Postgres + edge functions |
| Frontend Engineer | 1 | Design system, accessibility specialist |
| DevOps / Platform | 0.5 | CI/CD, infra (shared with above) |

- Each phase assumes ~40 story-points/week team velocity.
- Phases can be parallelized once the team grows.
- P2 features are explicitly out of scope for all phases; they feed into a post-launch backlog.

---

## Post-Launch Backlog (Phase 11+)

The following are P2 features not included in any phase above, prioritized for after initial public launch based on usage data:

- Real-time co-editing (F-0909)
- Mobile apps: Watch, Dynamic Island, Siri shortcuts (F-1534–F-1551)
- Foldable device support (F-1104)
- 20+ additional language translations (F-1193–F-1204)
- Chaos engineering (F-1596)
- Multi-region deployment (F-1594)
- QR + NFC combo assets (F-1619)
- Custom barcode symbology (F-0340)
- 3D model export (F-0240)
- Community templates platform (F-0147)
- Full restaurant ordering + POS integration (F-0711)
- Event exhibitor portal (F-0782)

---

*Roadmap status: **DRAFT — awaiting your approval before Phase 0 begins.***  
*Last updated: 2026-10-04*
