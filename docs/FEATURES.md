# QR Studio — Feature Catalog
<!-- F-0001 to F-1000+ | 40 Modules | Generated 2026-10-04 -->
<!-- Priority: P0=MVP P1=Phase2 P2=Future | Complexity: S=<1d M=2-4d L=1-2wk -->

---

## Legend
| Field | Values |
|---|---|
| Priority | P0 = MVP / must-ship, P1 = Phase 2, P2 = Future |
| Complexity | S = < 1 day, M = 2–4 days, L = 1–2 weeks |
| Dependencies | Feature IDs or services required first |

---

## MODULE 01 — QR TYPES (F-0001 – F-0060)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0001 | URL QR Code | Encode any website link into a scannable QR | P0 | S | — |
| F-0002 | Plain Text QR | Encode arbitrary text, notes, codes | P0 | S | — |
| F-0003 | Email QR | Pre-fill To/Subject/Body; one-tap compose | P0 | S | — |
| F-0004 | Phone QR | Dial a number instantly on scan | P0 | S | — |
| F-0005 | SMS QR | Pre-fill recipient + message body | P0 | S | — |
| F-0006 | WiFi QR | Share network SSID + password without typing | P0 | S | — |
| F-0007 | vCard QR | Full contact card (name, org, photo, social) | P0 | M | — |
| F-0008 | MeCard QR | Lightweight Japanese contact card format | P1 | S | — |
| F-0009 | Calendar Event QR | Encode VEVENT; adds to device calendar on scan | P0 | M | — |
| F-0010 | Geo Location QR | Latitude/longitude; opens maps on scan | P0 | S | — |
| F-0011 | WhatsApp QR | Deep-link to WhatsApp chat with pre-filled text | P0 | S | — |
| F-0012 | Telegram QR | Deep-link to Telegram user/channel/bot | P0 | S | — |
| F-0013 | Signal QR | Signal protocol deep-link | P1 | S | — |
| F-0014 | Zoom Meeting QR | Encode Zoom meeting URL with passcode | P0 | S | — |
| F-0015 | Google Meet QR | Encode Meet URL for quick join | P0 | S | — |
| F-0016 | Microsoft Teams QR | Encode Teams meeting or channel link | P0 | S | — |
| F-0017 | Facebook QR | Profile / Page / Event link | P1 | S | — |
| F-0018 | Instagram QR | Profile / Post / Reel link | P1 | S | — |
| F-0019 | Twitter / X QR | Profile / Tweet link | P1 | S | — |
| F-0020 | LinkedIn QR | Profile / Company / Job link | P1 | S | — |
| F-0021 | TikTok QR | Profile / Video link | P1 | S | — |
| F-0022 | YouTube QR | Channel / Video link | P1 | S | — |
| F-0023 | Snapchat QR | Snapcode-style deep-link | P1 | S | — |
| F-0024 | Pinterest QR | Board / Pin link | P2 | S | — |
| F-0025 | Spotify QR | Artist / Track / Playlist link | P1 | S | — |
| F-0026 | App Store Smart Link | Single URL routes to App Store or Google Play | P0 | M | F-0001 |
| F-0027 | PayPal.me QR | Encode PayPal payment link | P1 | S | — |
| F-0028 | UPI QR | Indian UPI payment string (pa/pn/am/tn) | P1 | M | — |
| F-0029 | Bitcoin QR | BIP-21 bitcoin: URI with amount + label | P1 | S | — |
| F-0030 | Ethereum QR | ERC-681 ethereum: URI | P1 | S | — |
| F-0031 | Solana QR | Solana Pay URL spec | P2 | S | — |
| F-0032 | SEPA / EPC QR | European SEPA Credit Transfer QR standard | P1 | M | — |
| F-0033 | PDF QR | Upload PDF → hosted link → QR | P0 | M | S3 storage |
| F-0034 | Image Gallery QR | Upload images → hosted gallery page → QR | P1 | M | F-0033, F-0570 |
| F-0035 | Digital Menu QR | Restaurant menu data → styled landing page | P0 | L | F-0570 |
| F-0036 | Review Link QR | Google / Yelp / TripAdvisor review deep-link | P0 | S | — |
| F-0037 | Digital Business Card QR | vCard+ with landing page and social links | P0 | M | F-0570 |
| F-0038 | Event Ticket QR | Encode ticket ID + attendee for check-in | P0 | M | F-0751 |
| F-0039 | Coupon / Offer QR | Encode discount code or offer landing page | P0 | M | F-0570 |
| F-0040 | Lead Form QR | Scan → embedded lead capture form | P0 | M | F-0601 |
| F-0041 | Survey QR | Scan → survey / quiz | P1 | M | F-0601 |
| F-0042 | Feedback QR | Scan → NPS or star rating widget | P1 | S | — |
| F-0043 | Appointment Booking QR | Scan → Calendly-style booking page | P1 | L | F-0570 |
| F-0044 | Product Authenticity QR | Unique serial QR → verify genuine product | P1 | M | DB |
| F-0045 | Pet Tag QR | Owner contact + vet info on scan | P1 | S | F-0570 |
| F-0046 | Medical ID QR | Emergency contact + allergies + conditions | P1 | M | F-0570 |
| F-0047 | Lost & Found QR | Stick on valuables; scan shows contact form | P1 | M | F-0570 |
| F-0048 | Parking QR | License plate + space + payment link | P2 | M | — |
| F-0049 | EV Charging QR | Charger ID + payment + status | P2 | M | — |
| F-0050 | Wi-Fi Guest Portal QR | Captive-portal style with time-limited pass | P2 | L | — |
| F-0051 | Slack Channel QR | Deep-link to Slack workspace channel | P1 | S | — |
| F-0052 | Discord Server QR | Encode Discord invite link | P1 | S | — |
| F-0053 | Skype QR | Skype call / chat deep-link | P2 | S | — |
| F-0054 | FaceTime QR | Apple FaceTime link | P2 | S | — |
| F-0055 | GitHub QR | Repo / Profile / PR link | P2 | S | — |
| F-0056 | Notion Page QR | Encode public Notion page URL | P2 | S | — |
| F-0057 | Linktree-style Bio QR | Multi-link hub page → QR | P0 | M | F-0570 |
| F-0058 | Amazon Product QR | ASIN-based product deep-link | P2 | S | — |
| F-0059 | Podcast QR | Episode / show link across platforms | P2 | S | — |
| F-0060 | Loyalty Card QR | Stamp-card encoded QR for offline loyalty | P1 | M | F-0650 |

---

## MODULE 02 — DESIGN ENGINE (F-0061 – F-0110)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0061 | Dot Style: Square | Classic square modules | P0 | S | — |
| F-0062 | Dot Style: Rounded | Soft rounded corners | P0 | S | — |
| F-0063 | Dot Style: Dots | Circular modules | P0 | S | — |
| F-0064 | Dot Style: Classy | Rounded diagonal ends | P0 | S | — |
| F-0065 | Dot Style: Classy Rounded | Combined classy + rounded | P0 | S | — |
| F-0066 | Dot Style: Extra Rounded | Maximum border-radius modules | P0 | S | — |
| F-0067 | Dot Style: Fluid | Organic blob-like connected modules | P1 | M | — |
| F-0068 | Dot Style: Star | Star-shaped modules | P1 | M | — |
| F-0069 | Dot Style: Diamond | Diamond-shaped modules | P1 | M | — |
| F-0070 | Dot Style: Heart | Heart-shaped modules | P1 | M | — |
| F-0071 | Dot Style: Cross | Cross/plus shaped modules | P2 | M | — |
| F-0072 | Dot Style: Leaf | Leaf-shaped modules | P2 | M | — |
| F-0073 | Dot Style: Mosaic | Varied-size square mosaic | P2 | M | — |
| F-0074 | Dot Style: Zigzag | Zigzag module lines | P2 | M | — |
| F-0075 | Dot Style: Hexagon | Hexagonal modules | P2 | M | — |
| F-0076 | Eye Frame: Square | Standard square finder pattern frame | P0 | S | — |
| F-0077 | Eye Frame: Rounded | Rounded finder pattern | P0 | S | — |
| F-0078 | Eye Frame: Extra Rounded | Full-circle eye frame | P0 | S | — |
| F-0079 | Eye Frame: Dot | Circular dot eye frame | P0 | S | — |
| F-0080 | Eye Frame: Leaf | Leaf-shaped eye frame | P1 | S | — |
| F-0081 | Eye Ball: Square | Classic square inner dot | P0 | S | — |
| F-0082 | Eye Ball: Rounded | Rounded inner dot | P0 | S | — |
| F-0083 | Eye Ball: Dot | Circle inner dot | P0 | S | — |
| F-0084 | Eye Ball: Star | Star inner dot | P1 | S | — |
| F-0085 | Solid Color Fill | Single foreground color | P0 | S | — |
| F-0086 | Linear Gradient Fill | Two-stop linear gradient on modules | P0 | S | — |
| F-0087 | Radial Gradient Fill | Radial gradient on modules | P0 | S | — |
| F-0088 | Angular Gradient Fill | Conic/angular gradient | P1 | M | — |
| F-0089 | Background Color | Solid background color with transparency | P0 | S | — |
| F-0090 | Background Image | Upload image as QR background | P1 | M | — |
| F-0091 | Background Pattern | Geometric tile patterns behind QR | P1 | M | — |
| F-0092 | Logo Placement Center | Embed logo in center quiet zone | P0 | M | — |
| F-0093 | Logo Shape: Square | Square logo cutout | P0 | S | — |
| F-0094 | Logo Shape: Circle | Circle logo cutout | P0 | S | — |
| F-0095 | Logo Shape: Rounded Rect | Rounded rect logo cutout | P0 | S | — |
| F-0096 | Logo Border / Padding | White border around logo for readability | P0 | S | — |
| F-0097 | Frame: None | Clean frameless QR | P0 | S | — |
| F-0098 | Frame: Simple Border | Thin border frame | P0 | S | — |
| F-0099 | Frame: Banner Bottom | CTA text below QR in frame | P0 | S | — |
| F-0100 | Frame: Banner Top | CTA text above QR | P0 | S | — |
| F-0101 | Frame: Balloon | Speech-bubble style frame | P1 | M | — |
| F-0102 | Frame: Ticket | Ticket-perforated edge frame | P1 | M | — |
| F-0103 | Drop Shadow | Soft or hard drop shadow on QR | P1 | S | — |
| F-0104 | 3D / Embossed Effect | Simulated 3D depth render | P1 | M | — |
| F-0105 | Color Harmony Generator | Suggest complementary color schemes | P1 | M | — |
| F-0106 | Brand-Kit Auto-Theme | Apply saved brand colors/logo in one click | P1 | M | F-0901 |
| F-0107 | Error Correction Level | L/M/Q/H selector with capacity info | P0 | S | — |
| F-0108 | Quiet Zone Control | Adjust margin/quiet zone size | P0 | S | — |
| F-0109 | Animated Preview | Live animated QR preview in editor | P0 | S | — |
| F-0110 | Scannability Overlay | Visual heat-map showing scan-risk areas | P1 | M | F-0201 |

---

## MODULE 03 — TEMPLATE LIBRARY (F-0111 – F-0160)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0111 | Template: Retail / E-commerce | Product-focused QR templates | P0 | M | F-0061–F-0110 |
| F-0112 | Template: Restaurant & Food | Food/beverage themed templates | P0 | M | — |
| F-0113 | Template: Real Estate | Property listing templates | P1 | M | — |
| F-0114 | Template: Healthcare | Medical / clinic templates | P1 | M | — |
| F-0115 | Template: Education | School / university templates | P1 | M | — |
| F-0116 | Template: Events & Conferences | Event ticket / badge templates | P0 | M | — |
| F-0117 | Template: Travel & Tourism | Hotel / destination templates | P1 | M | — |
| F-0118 | Template: Finance & Banking | Professional financial templates | P1 | M | — |
| F-0119 | Template: Non-profit | Donation / charity templates | P1 | M | — |
| F-0120 | Template: Government | Official / civic templates | P2 | M | — |
| F-0121 | Template: Fitness & Wellness | Gym / yoga / wellness templates | P1 | M | — |
| F-0122 | Template: Beauty & Fashion | Salon / fashion templates | P1 | M | — |
| F-0123 | Template: Automotive | Car dealership / service templates | P1 | M | — |
| F-0124 | Template: Tech & SaaS | App / software launch templates | P0 | M | — |
| F-0125 | Template: Music & Entertainment | Band / artist / concert templates | P1 | M | — |
| F-0126 | Template: Holiday: Christmas | Seasonal Christmas templates | P1 | S | — |
| F-0127 | Template: Holiday: New Year | New Year countdown templates | P1 | S | — |
| F-0128 | Template: Holiday: Halloween | Halloween spooky templates | P2 | S | — |
| F-0129 | Template: Holiday: Diwali | Diwali festival templates | P2 | S | — |
| F-0130 | Template: Holiday: Eid | Eid Mubarak templates | P2 | S | — |
| F-0131 | Template: Wedding | Wedding RSVP / gift registry templates | P1 | M | — |
| F-0132 | Template: Birthday | Birthday party invitation templates | P1 | M | — |
| F-0133 | Template: Graduation | Graduation announcement templates | P2 | M | — |
| F-0134 | Template: Baby Shower | Baby shower invitation templates | P2 | M | — |
| F-0135 | Template: Valentine's Day | Valentine's romance templates | P2 | S | — |
| F-0136 | Template: Black Friday | Sale / discount promo templates | P1 | S | — |
| F-0137 | Template: Minimal / Clean | Minimalist style pack | P0 | M | — |
| F-0138 | Template: Bold / Vibrant | High-contrast colorful pack | P0 | M | — |
| F-0139 | Template: Dark / Night | Dark mode template pack | P1 | M | — |
| F-0140 | Template: Pastel / Soft | Soft pastel aesthetic pack | P1 | M | — |
| F-0141 | Template: Neon / Cyberpunk | Neon glow template pack | P2 | M | — |
| F-0142 | Template: Retro / Vintage | Retro 80s/90s style pack | P2 | M | — |
| F-0143 | Template: Nature / Organic | Earth tones organic pack | P1 | M | — |
| F-0144 | Template: Luxury / Gold | Premium gold foil style pack | P1 | M | — |
| F-0145 | Template Search by Tag | Filter templates by keyword or tag | P0 | S | DB |
| F-0146 | Template Favorites | Save and pin favorite templates | P0 | S | Auth |
| F-0147 | Community Templates | Browse and use community-submitted designs | P2 | L | Auth |
| F-0148 | Template Preview Modal | Full-screen preview before applying | P0 | S | — |
| F-0149 | AI-Suggested Templates | AI picks best templates for your content type | P1 | L | F-0201 |
| F-0150 | Template Rating & Review | Rate and comment on templates | P2 | M | Auth |
| F-0151 | Template from Project | Save any project as a reusable template | P1 | M | F-0801 |
| F-0152 | Template Collections | Curated themed bundles | P1 | M | — |
| F-0153 | Featured Templates | Editorial picks on homepage | P1 | S | — |
| F-0154 | Template Import (JSON) | Import custom template via JSON | P2 | M | — |
| F-0155 | Template Export (JSON) | Export template to JSON for sharing | P2 | M | — |
| F-0156 | Template Usage Analytics | See how often a template is used | P2 | S | DB |
| F-0157 | Template Versioning | Track changes to saved templates | P2 | M | DB |
| F-0158 | New This Week Badge | Highlight recently added templates | P1 | S | — |
| F-0159 | Template A/B Preview | Side-by-side comparison of two templates | P2 | M | — |
| F-0160 | Seasonal Auto-Suggest | Suggest templates based on current date | P2 | S | F-0149 |

---

## MODULE 04 — AI FEATURES (F-0161 – F-0220)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0161 | AI Design from Text Prompt | Describe look; AI generates full QR design | P1 | L | LLM API |
| F-0162 | AI Logo-Blend QR | AI merges brand logo seamlessly into QR pattern | P1 | L | LLM API |
| F-0163 | CTA Text Writer | AI writes scan-worthy call-to-action text | P1 | M | LLM API |
| F-0164 | Smart Type Detection | Paste content → AI picks best QR type | P0 | M | LLM API |
| F-0165 | Scannability Predictor | AI scores QR scan probability before export | P1 | M | F-0110 |
| F-0166 | Alt-Text Generator | AI writes descriptive alt text for QR images | P1 | S | LLM API |
| F-0167 | SEO Copy Generator | AI writes title/description for landing pages | P1 | M | LLM API, F-0570 |
| F-0168 | Chat Assistant | In-app AI assistant for help and generation | P1 | L | LLM API |
| F-0169 | Auto-Translate Landing Pages | AI translates page content to 30+ languages | P1 | L | LLM API, F-0570 |
| F-0170 | AI Color Palette Suggester | Generate palettes from brand description | P1 | M | LLM API |
| F-0171 | AI QR from Image | Upload brand image → AI-styled QR | P2 | L | LLM API |
| F-0172 | Content Safety Check | AI flags potentially harmful URLs/content | P0 | M | LLM API |
| F-0173 | AI Industry Detector | Detect industry from URL and pre-fill form | P1 | S | LLM API |
| F-0174 | AI Hashtag Suggester | Suggest social hashtags for social QR types | P2 | S | LLM API |
| F-0175 | AI Bio Writer | Write professional bio for digital card QR | P1 | M | LLM API |
| F-0176 | AI Menu Descriptor | Generate dish descriptions for menu QR | P2 | M | LLM API, F-0035 |
| F-0177 | AI Event Summary | Generate event description from date/title | P2 | S | LLM API |
| F-0178 | AI Bulk Content Generator | Generate varied content for bulk QR batches | P1 | L | LLM API, F-0381 |
| F-0179 | AI Template Remixer | Remix existing template with new style prompt | P2 | L | LLM API, F-0111 |
| F-0180 | AI Accessibility Describer | Auto-describe QR purpose for screen readers | P1 | M | LLM API |
| F-0181 | AI Analytics Insights | Natural language summary of scan analytics | P1 | M | LLM API, F-0451 |
| F-0182 | AI Keyword Extractor | Extract SEO keywords from landing page content | P2 | M | LLM API |
| F-0183 | AI Fraud Detector | Detect suspicious patterns in dynamic QR scans | P2 | L | LLM API, F-0451 |
| F-0184 | AI Content Rephraser | Rephrase CTA text for different tones | P2 | S | LLM API |
| F-0185 | AI Form Builder | Describe form fields in plain English → auto-generate form | P2 | L | LLM API, F-0601 |
| F-0186 | AI Image Background Remover | Remove background from logo uploads | P1 | M | ML service |
| F-0187 | AI QR Reconstruction | Enhance low-res or damaged QR for re-encode | P2 | L | ML service |
| F-0188 | AI Chatbot for QR Helpdesk | Domain-specific RAG assistant for support | P2 | L | LLM API |
| F-0189 | Smart Shortlink Slug | AI suggests memorable slug for dynamic QR | P1 | S | LLM API, F-0501 |
| F-0190 | AI Design Variation Pack | Generate 5 design variants from one prompt | P2 | L | LLM API |
| F-0191 | AI Print Optimizer | Suggest DPI / error-correction for print size | P1 | S | LLM API |
| F-0192 | AI QR Naming | Auto-name QR based on content type | P1 | S | LLM API |
| F-0193 | AI Scan Goal Predictor | Predict likely scan-to-conversion rate | P2 | L | LLM API, F-0451 |
| F-0194 | AI Campaign Briefer | Generate full campaign brief from one sentence | P2 | L | LLM API |
| F-0195 | AI Competitor Analyzer | Analyze scanned competitor QR codes | P2 | L | LLM API |
| F-0196 | AI Data Validator | Validate form/contact/event data before encode | P0 | S | LLM API |
| F-0197 | AI Redirect Suggester | Suggest redirect destination for dynamic QR | P2 | S | LLM API |
| F-0198 | AI Expiry Recommender | Suggest QR expiry date from campaign context | P2 | S | LLM API |
| F-0199 | AI Print Proof Reviewer | Review print-ready file for quality issues | P2 | L | LLM API |
| F-0200 | AI Changelog Summarizer | Summarize recent changes to a dynamic QR | P2 | S | LLM API |

---

## MODULE 05 — EXPORT FORMATS (F-0201 – F-0250)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0201 | PNG Export | Standard raster export | P0 | S | — |
| F-0202 | JPEG Export | Compressed raster export | P0 | S | — |
| F-0203 | WebP Export | Modern compressed format | P0 | S | — |
| F-0204 | AVIF Export | Next-gen image format for web | P1 | S | — |
| F-0205 | SVG Export | Infinitely scalable vector export | P0 | M | — |
| F-0206 | PDF Export | Print-ready PDF single page | P0 | M | — |
| F-0207 | EPS Export | Professional print EPS vector | P1 | M | — |
| F-0208 | DPI Selector | Choose 72/150/300/600 DPI for export | P0 | S | — |
| F-0209 | Bleed / Crop Marks | Add print bleed + crop marks for press | P1 | M | — |
| F-0210 | Custom Canvas Size | Set exact pixel or mm dimensions | P0 | S | — |
| F-0211 | Transparent Background | Export with alpha channel | P0 | S | — |
| F-0212 | CMYK Color Profile | Convert RGB to CMYK for offset printing | P1 | L | — |
| F-0213 | Vector Cleanup | Remove redundant nodes in SVG output | P1 | M | F-0205 |
| F-0214 | Multi-Size Pack | Export 5 preset sizes in one ZIP | P1 | M | — |
| F-0215 | Print Template: A4 | QR centered on A4 sheet | P0 | S | F-0206 |
| F-0216 | Print Template: US Letter | QR centered on US Letter sheet | P0 | S | F-0206 |
| F-0217 | Print Template: Business Card | 85×54mm business card layout | P0 | S | F-0206 |
| F-0218 | Print Template: Sticker 5×5cm | Square sticker sheet layout | P1 | M | — |
| F-0219 | Print Template: Roll Label | Continuous roll label layout | P1 | M | — |
| F-0220 | Avery Label Support | 50+ Avery label sheet templates | P1 | L | — |
| F-0221 | Dymo Label Support | Dymo label size templates | P1 | M | — |
| F-0222 | Sticker Sheet Layout | Multiple QRs on one printable sheet | P1 | M | — |
| F-0223 | Custom Label Brand Profiles | Define own label size/margin profiles | P2 | M | — |
| F-0224 | Batch Export ZIP | Download all QRs in a batch as ZIP | P0 | M | F-0381 |
| F-0225 | Watermark Option | Add "Powered by QR Studio" watermark toggle | P1 | S | — |
| F-0226 | Export Quality Slider | JPEG/WebP quality 1–100 | P1 | S | — |
| F-0227 | Embed Metadata | Embed XMP/EXIF metadata in exported images | P2 | M | — |
| F-0228 | Cloud Auto-Save Export | Auto-save every export to connected storage | P1 | M | S3, Auth |
| F-0229 | Export History | List of past exports with re-download | P1 | M | DB |
| F-0230 | Share via Link after Export | Generate temporary CDN URL for exported file | P1 | M | S3 |
| F-0231 | Figma Export | Export as Figma-compatible SVG frame | P2 | M | — |
| F-0232 | Canva Export | Send design to Canva as image | P2 | M | Canva API |
| F-0233 | Google Drive Export | Export directly to Google Drive folder | P2 | M | Google API |
| F-0234 | Dropbox Export | Export directly to Dropbox folder | P2 | M | Dropbox API |
| F-0235 | Print-via-Browser | Browser print dialog with optimal scaling | P0 | S | — |
| F-0236 | Email Export | Email QR image directly from app | P1 | M | Email service |
| F-0237 | Copy to Clipboard | One-click copy PNG to clipboard | P0 | S | — |
| F-0238 | QR Embed Code | HTML/CSS embed snippet generator | P1 | M | — |
| F-0239 | Animated GIF Export | Animated scanning loop GIF | P2 | L | — |
| F-0240 | 3D Model Export (GLB) | 3D QR model for AR/3D printing | P2 | L | — |
| F-0241 | Print Preview Modal | Full-screen print preview before export | P0 | M | — |
| F-0242 | Export Preset Profiles | Save and reuse export settings | P1 | M | — |
| F-0243 | Batch Label Merge | Mail-merge style variable label sheets | P1 | L | F-0381 |
| F-0244 | ICC Profile Embed | Embed ICC profile in TIFF/PDF export | P2 | M | — |
| F-0245 | SVG Font Outline | Convert text to paths in SVG | P1 | M | F-0205 |
| F-0246 | Large Format Export | Poster/banner size up to 10ft | P1 | M | — |
| F-0247 | Retina 2× Export | Double-resolution PNG for retina screens | P0 | S | — |
| F-0248 | Dark Mode Export Variant | Auto-export inverted dark version | P2 | S | — |
| F-0249 | Export API Endpoint | Generate QR via REST API call | P1 | M | F-0951 |
| F-0250 | Export Webhook | POST export file URL to webhook on completion | P2 | M | F-0951 |

---

## MODULE 06 — SCANNER (F-0251 – F-0300)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0251 | Camera QR Scanner | Scan QR using device camera in browser | P0 | M | — |
| F-0252 | Image File Upload Scan | Decode QR from uploaded image | P0 | S | — |
| F-0253 | Drag-and-Drop Scan | Drop image onto scanner area | P0 | S | — |
| F-0254 | Scan from Clipboard | Paste image and decode QR | P0 | S | — |
| F-0255 | Scan from Screenshot | Capture screen region for decode | P1 | M | — |
| F-0256 | Batch Image Scan | Upload multiple images; decode all | P1 | M | — |
| F-0257 | Scan History | Log of all scanned codes with timestamps | P0 | S | DB |
| F-0258 | Torch / Flashlight Control | Toggle torch for low-light scanning | P1 | S | — |
| F-0259 | Zoom Control | Pinch/slider zoom for precise scanning | P1 | S | — |
| F-0260 | Auto-Focus Mode | Continuous auto-focus for fast scanning | P1 | S | — |
| F-0261 | Multi-Code Detection | Detect multiple codes in one image | P1 | M | — |
| F-0262 | Safety URL Check | Warn before opening scanned URLs | P0 | M | Safebrowsing API |
| F-0263 | Scan Result Preview | Show decoded content before opening link | P0 | S | — |
| F-0264 | Copy Scan Result | One-click copy decoded text | P0 | S | — |
| F-0265 | Open in New Tab | Open scanned URL in new browser tab | P0 | S | — |
| F-0266 | Add to Contacts | Parse vCard and add to device contacts | P1 | M | — |
| F-0267 | EAN-13 Barcode Scan | Scan retail EAN-13 barcodes | P1 | M | — |
| F-0268 | UPC-A Barcode Scan | Scan UPC-A barcodes | P1 | M | — |
| F-0269 | Code 128 Scan | Scan Code 128 linear barcodes | P1 | M | — |
| F-0270 | Code 39 Scan | Scan Code 39 alphanumeric barcodes | P1 | M | — |
| F-0271 | DataMatrix Scan | Scan DataMatrix 2D codes | P1 | M | — |
| F-0272 | PDF417 Scan | Scan PDF417 stacked codes (IDs, boarding passes) | P1 | M | — |
| F-0273 | Aztec Code Scan | Scan Aztec codes (transit tickets) | P1 | M | — |
| F-0274 | ITF-14 Scan | Scan ITF-14 distribution barcodes | P2 | M | — |
| F-0275 | RSS/GS1 DataBar Scan | Scan GS1 DataBar coupon codes | P2 | M | — |
| F-0276 | Scan Rate Statistics | Scans per session / per day chart | P2 | S | — |
| F-0277 | Export Scan History CSV | Download full scan log as CSV | P1 | S | F-0257 |
| F-0278 | Delete Scan Record | Remove individual scan history entries | P1 | S | F-0257 |
| F-0279 | Scan-to-Search | Look up scanned product/book on search engines | P2 | S | — |
| F-0280 | Sound Feedback on Scan | Audio beep on successful decode | P1 | S | — |
| F-0281 | Haptic Feedback on Scan | Vibration on successful decode (mobile) | P1 | S | — |
| F-0282 | Scan Quality Indicator | Show decode confidence score | P2 | S | — |
| F-0283 | Scan Notes | Annotate scan history entries | P2 | S | F-0257 |
| F-0284 | Share Scan Result | Share decoded content via native share sheet | P1 | S | — |
| F-0285 | Pin Scan Result | Pin important scans to top of history | P2 | S | F-0257 |
| F-0286 | Scan Widget (PWA) | Quick-scan shortcut from home screen | P2 | M | F-0301 |
| F-0287 | Scan QR from URL | Fetch image from URL and decode | P2 | M | — |
| F-0288 | Scan Duplicate Detector | Flag if scanned code matches history | P2 | S | F-0257 |
| F-0289 | Safe Browsing Cache | Cache safety check results to reduce API calls | P1 | S | F-0262 |
| F-0290 | Scan Privacy Mode | Don't log scan history in private mode | P1 | S | F-0257 |
| F-0291 | Scan Analytics Export | Export scan-history analytics as PDF/CSV | P2 | M | F-0257 |
| F-0292 | Scan Category Tagger | Auto-tag scan results by type | P2 | S | — |
| F-0293 | Multiple Cameras Support | Switch between front/back cameras | P0 | S | — |
| F-0294 | Scan in Low Light | Enhanced low-light scanning algorithm | P2 | L | — |
| F-0295 | Scan Region of Interest | Draw box to limit scan area | P2 | M | — |
| F-0296 | Scan Rate Limiter | Prevent scanner spam on rapid triggers | P1 | S | — |
| F-0297 | Scan Error Recovery | Auto-retry on decode failure | P0 | S | — |
| F-0298 | Scan from PDF | Extract and decode QR from PDF pages | P2 | L | — |
| F-0299 | Scan Share-Target | Receive shared images for scanning via PWA | P2 | M | F-0301 |
| F-0300 | Batch Scan Report | Summary report for bulk image scan results | P2 | M | F-0256 |

---

## MODULE 07 — BARCODE GENERATOR (F-0301 – F-0350)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0301 | EAN-13 Generator | Generate standard retail barcode | P1 | S | — |
| F-0302 | EAN-8 Generator | Short retail barcode for small packaging | P1 | S | — |
| F-0303 | UPC-A Generator | North American retail barcode | P1 | S | — |
| F-0304 | UPC-E Generator | Compressed UPC for small packaging | P1 | S | — |
| F-0305 | Code 128 Generator | High-density alphanumeric barcode | P1 | S | — |
| F-0306 | Code 39 Generator | Alphanumeric industrial barcode | P1 | S | — |
| F-0307 | Code 93 Generator | Compact alphanumeric barcode | P2 | S | — |
| F-0308 | ITF-14 Generator | Shipping carton barcode | P2 | S | — |
| F-0309 | Codabar Generator | Library / blood bank barcode | P2 | S | — |
| F-0310 | GS1-128 Generator | Supply chain GS1 standard barcode | P1 | M | — |
| F-0311 | GS1 DataBar Generator | Compact GS1 barcode for small items | P2 | M | — |
| F-0312 | PDF417 Generator | High-capacity 2D stacked barcode | P1 | M | — |
| F-0313 | DataMatrix Generator | Compact 2D code for industrial marking | P1 | M | — |
| F-0314 | Aztec Code Generator | Compact code for transit use | P1 | M | — |
| F-0315 | MaxiCode Generator | UPS-style logistics code | P2 | M | — |
| F-0316 | ISBN Barcode | Book ISBN as EAN-13 | P1 | S | F-0301 |
| F-0317 | ISSN Barcode | Magazine ISSN barcode | P2 | S | — |
| F-0318 | Pharmacode | Pharmaceutical packaging barcode | P2 | S | — |
| F-0319 | MSI / Plessey | Warehouse inventory barcode | P2 | S | — |
| F-0320 | Checksum Validation | Auto-calculate and validate check digits | P0 | S | — |
| F-0321 | Barcode Height Control | Adjust bar height in mm | P1 | S | — |
| F-0322 | Barcode Width Control | Adjust bar width / X-dimension | P1 | S | — |
| F-0323 | Human Readable Text | Toggle HRT below/above barcode | P0 | S | — |
| F-0324 | Barcode Color | Customize bar and background color | P1 | S | — |
| F-0325 | Barcode Export PNG | Raster export for barcodes | P0 | S | F-0201 |
| F-0326 | Barcode Export SVG | Vector export for barcodes | P0 | S | F-0205 |
| F-0327 | Barcode Export PDF | Print-ready PDF barcode | P1 | S | F-0206 |
| F-0328 | Barcode Sheet Layout | Multiple barcodes per sheet | P1 | M | F-0222 |
| F-0329 | Barcode Batch Generate | CSV → batch barcode generation | P1 | M | F-0381 |
| F-0330 | Barcode Preview Zoom | Magnify preview before export | P1 | S | — |
| F-0331 | Barcode API Endpoint | REST API to generate barcodes programmatically | P1 | M | F-0951 |
| F-0332 | Barcode Embed Code | HTML embed snippet for barcodes | P2 | S | — |
| F-0333 | GS1 Application Identifiers | Parse and display GS1 AI data elements | P2 | L | F-0310 |
| F-0334 | Barcode Verify Scan | Verify generated barcode scans correctly | P1 | M | F-0251 |
| F-0335 | QR + Barcode Combo | QR code with accompanying barcode | P2 | M | — |
| F-0336 | Barcode from URL Param | Generate via URL query parameters | P2 | S | — |
| F-0337 | DotCode Generator | Inkjet-printing optimized 2D code | P2 | L | — |
| F-0338 | HanXin Code Generator | Chinese standard QR alternative | P2 | L | — |
| F-0339 | SnapCode Generator | Snapchat-compatible snap code | P2 | L | — |
| F-0340 | Custom Barcode Symbology | Community-contributed barcode formats | P2 | L | — |
| F-0341 | Barcode History | Log of generated barcodes | P1 | S | DB |
| F-0342 | Barcode Favorites | Star and recall frequently used barcodes | P2 | S | DB |
| F-0343 | Barcode Info Tooltip | Explain barcode format on hover | P1 | S | — |
| F-0344 | Barcode Format Selector | Dropdown with format descriptions | P0 | S | — |
| F-0345 | Barcode Data Validator | Validate input data before encode | P0 | S | — |
| F-0346 | Barcode Print Template | Avery-compatible barcode label sheets | P1 | M | F-0220 |
| F-0347 | Serial Number Barcode | Auto-increment serial for batch | P1 | M | F-0329 |
| F-0348 | Barcode White Quiet Zone | Configurable quiet zone sizing | P1 | S | — |
| F-0349 | Barcode Rotation | 0/90/180/270 degree rotation option | P2 | S | — |
| F-0350 | Barcode Watermark | Subtle branding on barcode exports | P2 | S | — |

---

## MODULE 08 — BULK TOOLS (F-0351 – F-0410)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0351 | CSV Import | Upload CSV → map columns → bulk generate | P0 | M | — |
| F-0352 | Excel Import (.xlsx) | Import Excel files for bulk generation | P0 | M | — |
| F-0353 | Google Sheets Import | Connect Sheet → import rows as QR data | P1 | L | Google API |
| F-0354 | Column Mapping UI | Drag-drop map CSV columns to QR fields | P0 | M | F-0351 |
| F-0355 | Variable Templates | Use {column_name} placeholders in content | P0 | M | F-0351 |
| F-0356 | Batch Size: 5,000 rows | Process up to 5,000 QRs per batch | P0 | L | — |
| F-0357 | Background Job Queue | Long batches run as background jobs | P0 | L | Redis, workers |
| F-0358 | Progress Bar & ETA | Real-time progress for batch jobs | P0 | M | F-0357 |
| F-0359 | Batch ZIP Export | Download all QRs as ZIP archive | P0 | M | F-0357 |
| F-0360 | Individual File Naming | Name each QR file after a CSV column value | P0 | S | F-0351 |
| F-0361 | Batch PDF Sheet | All QRs on multi-page print-ready PDF | P1 | M | F-0357 |
| F-0362 | Batch Design Apply | Apply same design to entire batch | P0 | M | F-0061 |
| F-0363 | Per-Row Design Override | Custom colors per row from CSV column | P2 | L | F-0362 |
| F-0364 | Batch Preview (first 10) | Preview first 10 results before full run | P0 | M | — |
| F-0365 | Error Row Report | Download CSV of rows that failed encoding | P0 | S | F-0357 |
| F-0366 | Retry Failed Rows | Re-run only failed rows | P1 | M | F-0365 |
| F-0367 | Batch Job History | List past batch jobs with status & downloads | P1 | M | DB |
| F-0368 | Batch Delete | Delete all QRs in a batch at once | P1 | S | DB |
| F-0369 | Dynamic QR Batch | Generate dynamic QRs from CSV | P1 | L | F-0421 |
| F-0370 | Scheduled Batch | Schedule batch job for off-peak hours | P2 | L | F-0357 |
| F-0371 | Batch Analytics | Aggregate scan analytics for a batch | P2 | M | F-0451 |
| F-0372 | Batch Label PDF | QR + label data on label sheets from CSV | P1 | L | F-0220 |
| F-0373 | Batch API Trigger | Trigger batch via REST API call | P1 | M | F-0951 |
| F-0374 | Batch Webhook | POST progress + completion to webhook | P2 | M | F-0951 |
| F-0375 | Batch Duplicate Check | Warn on duplicate data rows | P1 | S | — |
| F-0376 | Bulk Update Destination | Change all dynamic QR destinations at once | P1 | M | F-0421 |
| F-0377 | Bulk Tag | Add tags to all QRs in batch | P1 | S | F-0801 |
| F-0378 | Bulk Archive | Archive all QRs in batch at once | P1 | S | F-0801 |
| F-0379 | Bulk Download Individual | Checkbox-select and ZIP any subset | P1 | M | F-0359 |
| F-0380 | Batch Test Scan | Auto-verify each generated QR decodes correctly | P1 | L | F-0251 |
| F-0381 | Batch QR: URL list | Paste URL list, one per line | P0 | S | — |
| F-0382 | Batch QR: Email list | Paste email list for email QRs | P0 | S | — |
| F-0383 | Batch QR: vCard from CSV | Full vCard per row from CSV columns | P1 | M | F-0007 |
| F-0384 | Batch QR: WiFi list | Multiple WiFi networks from CSV | P1 | M | F-0006 |
| F-0385 | Batch Folder Assignment | Auto-assign generated QRs to folder | P1 | S | F-0801 |
| F-0386 | Batch Name Prefix | Auto-prefix all file names in batch | P1 | S | — |
| F-0387 | Batch Expiry Set | Set same expiry date for all dynamic QRs | P1 | S | F-0421 |
| F-0388 | Batch UTM Append | Auto-append UTM params to batch destinations | P1 | S | F-0421 |
| F-0389 | Batch Custom Domain | Assign short domain to entire batch | P1 | M | F-0501 |
| F-0390 | Batch QR Type Mix | CSV rows can each have different QR types | P2 | L | — |
| F-0391 | Batch Share Link | Share batch download link externally | P2 | M | S3 |
| F-0392 | Batch Import JSON | Import QR definitions from JSON array | P2 | M | — |
| F-0393 | Batch Export JSON | Export all QR definitions as JSON | P2 | M | — |
| F-0394 | Batch Watermark Toggle | Toggle watermark on/off for entire batch | P1 | S | F-0225 |
| F-0395 | Batch Canvas Size | Set uniform export size for batch | P1 | S | F-0210 |
| F-0396 | Batch DPI Setting | Uniform DPI for entire batch export | P1 | S | F-0208 |
| F-0397 | Batch Google Drive Export | Send batch ZIP to Google Drive | P2 | M | F-0233 |
| F-0398 | Batch Notification Email | Email user when batch job completes | P0 | S | Email service |
| F-0399 | Batch Status Webhook | Push batch status updates to Slack/Zapier | P2 | M | F-0951 |
| F-0400 | Batch Cost Estimate | Show credit/quota cost before running batch | P1 | S | F-0931 |

---

## MODULE 09 — DYNAMIC QR (F-0401 – F-0460)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0401 | Create Dynamic QR | QR with short URL; change destination without reprinting | P0 | M | DB, Redis |
| F-0402 | Edit Destination | Change where QR points any time | P0 | S | F-0401 |
| F-0403 | Redirect Engine | Fast edge-function-based redirection | P0 | M | Edge fn |
| F-0404 | A/B Split Redirect | Send 50/50 traffic to two URLs | P1 | M | F-0401 |
| F-0405 | Weighted Split Redirect | Custom traffic split percentages | P1 | M | F-0404 |
| F-0406 | Time-Based Routing | Different URL per day/hour window | P1 | M | F-0401 |
| F-0407 | Location-Based Routing | Different URL per country/city | P1 | L | GeoIP |
| F-0408 | Device-Based Routing | Different URL for iOS / Android / Desktop | P1 | M | F-0401 |
| F-0409 | Language-Based Routing | Route to locale-specific pages | P1 | M | F-0401 |
| F-0410 | OS-Based Routing | Route by OS version range | P2 | M | F-0401 |
| F-0411 | Scan Count Limit | Expire QR after N total scans | P1 | M | F-0401 |
| F-0412 | Unique Scan Limit | Expire after N unique device scans | P2 | M | F-0401 |
| F-0413 | Date Expiry | Set hard expiry date/time | P1 | M | F-0401 |
| F-0414 | Password Gate | Require password before redirect | P1 | M | F-0401 |
| F-0415 | Fallback URL | Redirect target if QR is expired | P1 | S | F-0401 |
| F-0416 | UTM Auto-Append | Auto-add UTM params to destination | P0 | S | F-0401 |
| F-0417 | Pause / Resume QR | Temporarily disable QR scanning | P1 | S | F-0401 |
| F-0418 | QR Status Page | Show "QR paused" branded page | P1 | M | F-0417 |
| F-0419 | Redirect Preview | Show destination preview before redirect | P2 | M | F-0401 |
| F-0420 | Click Fraud Filter | Detect and exclude bot scans | P1 | M | F-0451 |
| F-0421 | Dynamic QR Dashboard | Manage all dynamic QRs in one view | P0 | M | DB |
| F-0422 | Destination History | See all past destinations for a QR | P1 | S | DB |
| F-0423 | Rollback Destination | Revert to previous destination | P1 | S | F-0422 |
| F-0424 | Smart Redirect for App | Route to app store based on OS | P0 | M | F-0408 |
| F-0425 | Multi-Step Redirect Chain | Chain up to 5 URLs with logic rules | P2 | L | F-0401 |
| F-0426 | Scan Notification | Email alert on first scan of QR | P1 | M | Email |
| F-0427 | Real-Time Scan Counter | Live scan count badge on dashboard | P1 | M | F-0451 |
| F-0428 | QR Embed Tracking Pixel | Fire tracking pixel on scan | P2 | M | F-0401 |
| F-0429 | Cookie Retargeting on Scan | Set retargeting cookie for ad platforms | P2 | M | F-0401 |
| F-0430 | Conditional Redirect Builder | Visual rule builder for redirect logic | P1 | L | F-0401 |
| F-0431 | Dynamic QR Bulk Create | Create 100+ dynamic QRs via CSV | P1 | L | F-0369 |
| F-0432 | Dynamic QR API | Create/edit dynamic QRs via API | P1 | M | F-0951 |
| F-0433 | Custom Short Slug | Set vanity slug for short URL | P0 | S | F-0501 |
| F-0434 | Custom Domain on QR | Use own domain for short URL | P1 | M | F-0501 |
| F-0435 | QR Rotation | Rotate through list of URLs on each scan | P1 | M | F-0401 |
| F-0436 | Scan Cooldown | Ignore repeat scans from same device within X minutes | P2 | M | F-0401 |
| F-0437 | Geographic Block | Block scans from certain countries | P2 | M | F-0407 |
| F-0438 | IP Allowlist | Only allow scans from specific IPs | P2 | M | F-0401 |
| F-0439 | Age Gate | Show age verification before redirect | P2 | M | F-0414 |
| F-0440 | Survey on Scan | Show one-question survey before redirect | P2 | M | F-0601 |
| F-0441 | Lead Capture on Scan | Email gate before redirect | P2 | M | F-0601 |
| F-0442 | Dynamic QR Clone | Duplicate dynamic QR with same settings | P1 | S | DB |
| F-0443 | Dynamic QR Export | Export dynamic QR metadata as JSON | P2 | S | DB |
| F-0444 | QR Lifecycle Alerts | Email warnings before expiry | P1 | M | F-0413 |
| F-0445 | Scan Speed Throttle | Rate-limit scans per IP | P1 | M | Redis |
| F-0446 | Redirect Latency Monitor | Alert if redirect takes >200ms | P2 | M | F-0451 |
| F-0447 | Beacon on Scan | Fire server-side beacon without redirect | P2 | M | — |
| F-0448 | Post-Redirect Conversion Tag | Track conversions after redirect | P2 | M | F-0451 |
| F-0449 | Dynamic QR Sharing | Share management link with teammate | P1 | M | F-0851 |
| F-0450 | Redirect Health Monitor | Automatically check destination is live | P1 | M | F-0511 |

---

## MODULE 10 — ANALYTICS (F-0451 – F-0510)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0451 | Scan Analytics Core | Total + unique scans over time | P0 | L | DB, F-0401 |
| F-0452 | Time-Series Chart | Scan trend chart (hourly/daily/weekly) | P0 | M | F-0451 |
| F-0453 | Device Breakdown | iOS / Android / Desktop pie chart | P0 | M | F-0451 |
| F-0454 | OS Breakdown | Windows / macOS / iOS / Android details | P1 | M | F-0451 |
| F-0455 | Browser Breakdown | Chrome / Safari / Firefox chart | P1 | M | F-0451 |
| F-0456 | Country Map | World heatmap of scan origins | P0 | M | F-0451, GeoIP |
| F-0457 | City Breakdown | Top cities by scan count | P1 | M | F-0451, GeoIP |
| F-0458 | Unique vs Total Toggle | Switch chart between unique and total | P0 | S | F-0451 |
| F-0459 | Date Range Picker | Filter analytics by custom date range | P0 | S | F-0451 |
| F-0460 | Heatmap by Hour | What time of day gets most scans | P1 | M | F-0451 |
| F-0461 | Heatmap by Weekday | What day gets most scans | P1 | M | F-0451 |
| F-0462 | Funnel Analytics | Scan → landing → conversion funnel | P1 | L | F-0451, F-0570 |
| F-0463 | Campaign Comparison | Compare two QRs or time periods side by side | P1 | M | F-0451 |
| F-0464 | CSV Export Report | Download full analytics data as CSV | P0 | M | F-0451 |
| F-0465 | PDF Export Report | Branded PDF analytics report | P1 | M | F-0451 |
| F-0466 | Scheduled Email Reports | Weekly/monthly PDF sent to email | P1 | M | F-0465, Email |
| F-0467 | Privacy-Friendly Mode | No IP/fingerprint storage; GDPR compliant | P0 | M | F-0451 |
| F-0468 | Bot Filtering | Exclude known bot/crawler scans | P0 | M | F-0451 |
| F-0469 | Goal Tracking | Define a conversion URL; track completions | P1 | L | F-0451, F-0570 |
| F-0470 | Conversion Rate | Scan-to-goal conversion rate widget | P1 | M | F-0469 |
| F-0471 | Referrer Tracking | Track source referrer of scans | P1 | M | F-0451 |
| F-0472 | UTM Parameter Tracking | Attribute scans to UTM campaigns | P0 | M | F-0416 |
| F-0473 | Real-Time Dashboard | Live scan counter widget | P1 | M | F-0451 |
| F-0474 | Analytics Embed Widget | Embed live chart on external site | P2 | L | F-0451 |
| F-0475 | Custom Event Tracking | Define custom events on landing pages | P2 | L | F-0451, F-0570 |
| F-0476 | Cohort Analysis | Cohort scan patterns over time | P2 | L | F-0451 |
| F-0477 | Scan Velocity Alert | Notify on sudden spike in scans | P1 | M | F-0451 |
| F-0478 | Zero-Scan Alert | Notify if active QR gets no scans in X days | P1 | M | F-0451 |
| F-0479 | Attribution Model Selector | First-touch / last-touch / linear | P2 | L | F-0469 |
| F-0480 | Analytics API | REST endpoint to pull scan data | P1 | M | F-0951 |
| F-0481 | Google Analytics Integration | Send scan events to GA4 | P1 | M | GA4 |
| F-0482 | Meta Pixel Integration | Send scan events to Meta Pixel | P1 | M | Meta Pixel |
| F-0483 | Google Tag Manager | GTM container support | P1 | M | — |
| F-0484 | Segment Integration | Send scan events to Segment | P2 | M | Segment |
| F-0485 | Mixpanel Integration | Sync scan events to Mixpanel | P2 | M | Mixpanel |
| F-0486 | Amplitude Integration | Sync to Amplitude analytics | P2 | M | Amplitude |
| F-0487 | Snowplow Integration | Enterprise event pipeline support | P2 | L | Snowplow |
| F-0488 | Audience Segments | Group users by scan behaviour for retargeting | P2 | L | F-0451 |
| F-0489 | Data Retention Controls | Set how long analytics data is stored | P1 | M | F-0451 |
| F-0490 | Anonymization Mode | Hash all personal analytics data | P1 | M | F-0467 |
| F-0491 | Analytics Snapshot | Pin a point-in-time analytics screenshot | P2 | S | — |
| F-0492 | Scan Source Breakdown | QR / Link / Embed breakdown | P1 | M | F-0451 |
| F-0493 | Custom Dashboard Builder | Drag-drop analytics widgets | P2 | L | F-0451 |
| F-0494 | Analytics Sharing | Share read-only analytics link | P1 | M | F-0451 |
| F-0495 | White-Label Report | Remove branding from PDF reports | P2 | S | F-0465 |
| F-0496 | Historical Data Import | Import legacy scan data via CSV | P2 | L | F-0451 |
| F-0497 | Benchmark Mode | Compare your QR vs industry averages | P2 | L | F-0451 |
| F-0498 | Scan Journey Map | Visual path from scan → conversion | P2 | L | F-0451 |
| F-0499 | Offline Scan Sync | Sync scans collected offline when reconnected | P2 | L | F-0030 |
| F-0500 | Multi-QR Aggregate View | Aggregate analytics across a folder | P1 | M | F-0451, F-0801 |

---

## MODULE 11 — LINK MANAGEMENT (F-0501 – F-0560)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0501 | Short Link Creation | Create branded short URLs | P0 | M | DB |
| F-0502 | Custom Slug | Set vanity path for short link | P0 | S | F-0501 |
| F-0503 | Custom Domain | Use own domain for short links | P1 | L | DNS, F-0501 |
| F-0504 | Domain Verification | Verify domain ownership via DNS TXT | P1 | M | F-0503 |
| F-0505 | Branded Link Themes | Style link preview cards per domain | P2 | M | F-0503 |
| F-0506 | Bio-Link Page Builder | Multi-link profile page builder | P0 | L | F-0570 |
| F-0507 | Link Groups / Folders | Organize links into groups | P1 | M | DB |
| F-0508 | QR for Every Link | Auto-generate QR for each short link | P0 | S | F-0401 |
| F-0509 | Link Click Analytics | Clicks by time/device/location | P0 | M | F-0451 |
| F-0510 | Link Health Monitor | Check if destination is live periodically | P1 | M | Cron job |
| F-0511 | Broken-Link Alert | Email when destination returns error | P1 | M | F-0510 |
| F-0512 | Link Rotation | Round-robin between destination URLs | P1 | M | F-0435 |
| F-0513 | Link Expiry | Set date/time expiry for links | P1 | M | F-0413 |
| F-0514 | Link Password Gate | Password-protect a short link | P1 | M | F-0414 |
| F-0515 | Link Preview Image | Custom OG image per short link | P1 | M | — |
| F-0516 | Link Preview Title | Custom title/description per link | P1 | S | — |
| F-0517 | UTM Builder | Visual UTM parameter builder | P0 | S | F-0416 |
| F-0518 | UTM Template | Reusable UTM parameter presets | P1 | S | F-0517 |
| F-0519 | Bulk Short Links | Import and shorten 1,000 URLs at once | P1 | M | F-0351 |
| F-0520 | Link Import from CSV | Import existing links from CSV | P1 | M | F-0351 |
| F-0521 | Link Export CSV | Export all links as CSV | P1 | S | DB |
| F-0522 | Link Cloning | Duplicate a link with all settings | P1 | S | DB |
| F-0523 | Deep Link Builder | App deep-link with web fallback | P1 | M | F-0501 |
| F-0524 | App Store Smart Link | Detect OS, route to correct store | P0 | M | F-0026 |
| F-0525 | Link Tagging | Add searchable tags to links | P1 | S | DB |
| F-0526 | Link Search | Full-text search across all links | P0 | S | DB |
| F-0527 | Link Archive | Move to archive without deleting | P1 | S | DB |
| F-0528 | Link Trash & Restore | Soft-delete with 30-day restore | P1 | S | DB |
| F-0529 | Link Notes | Add internal notes to a link | P2 | S | DB |
| F-0530 | Link Collaborators | Share link management with team | P1 | M | F-0851 |
| F-0531 | Link Redirect Chain Inspector | Visualize full redirect path | P2 | M | — |
| F-0532 | Link Safety Score | Rate safety of destination URL | P1 | M | F-0262 |
| F-0533 | Spam Link Detection | Flag links to known spam domains | P1 | M | F-0262 |
| F-0534 | Link Version History | See all past destinations for a link | P1 | M | DB |
| F-0535 | Link Webhook | Fire webhook on each click | P2 | M | F-0951 |
| F-0536 | Link Embed Widget | Embeddable click-counter badge | P2 | M | — |
| F-0537 | Link QR Sheet | Print all links as labeled QR sheet | P1 | M | F-0222 |
| F-0538 | Open Graph Preview | Preview how link appears on social | P1 | M | F-0515 |
| F-0539 | Twitter Card Preview | Preview Twitter card for link | P2 | S | F-0516 |
| F-0540 | Custom 404 Page | Branded page for expired/invalid links | P1 | M | F-0503 |
| F-0541 | Redirect Code Selector | 301/302/307 redirect type selector | P1 | S | F-0501 |
| F-0542 | Link API | Full CRUD via REST API | P1 | M | F-0951 |
| F-0543 | Link Notifications | Slack/email on link milestones | P2 | M | F-0509 |
| F-0544 | Link Conversion Tracking | Track post-click conversions | P2 | L | F-0469 |
| F-0545 | Domain Analytics | Aggregate stats per custom domain | P2 | M | F-0509 |
| F-0546 | Link Preview Mode | Interstitial before redirect (anti-phishing) | P2 | M | F-0414 |
| F-0547 | Cloaked Link | Mask destination URL in browser bar | P2 | M | — |
| F-0548 | Link Geo-Redirect | Country-specific destinations | P1 | M | F-0407 |
| F-0549 | Link AB Test | Split traffic between two destinations | P1 | M | F-0404 |
| F-0550 | Link Aggregator Stats | Combined stats across multiple links | P2 | M | F-0509 |

---

## MODULE 12 — LANDING PAGE BUILDER (F-0551 – F-0620)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0551 | Page Builder Canvas | Drag-drop mobile-first page builder | P0 | L | — |
| F-0552 | Block: Hero | Header with image, title, CTA | P0 | M | F-0551 |
| F-0553 | Block: Button | CTA button with icon + link | P0 | S | F-0551 |
| F-0554 | Block: Text / Rich Text | Formatted text block | P0 | S | F-0551 |
| F-0555 | Block: Image | Full-width or contained image | P0 | S | F-0551 |
| F-0556 | Block: Video Embed | YouTube / Vimeo embed | P0 | M | F-0551 |
| F-0557 | Block: Social Links | Icon grid of social profile links | P0 | S | F-0551 |
| F-0558 | Block: Contact Form | Embedded lead form | P0 | M | F-0601 |
| F-0559 | Block: PDF Viewer | Inline PDF viewer | P1 | M | F-0551 |
| F-0560 | Block: Image Gallery | Lightbox photo gallery | P1 | M | F-0551 |
| F-0561 | Block: Menu | Restaurant menu display | P1 | M | F-0551 |
| F-0562 | Block: Countdown Timer | Event countdown widget | P1 | M | F-0551 |
| F-0563 | Block: Map Embed | Google Maps embed | P1 | M | F-0551 |
| F-0564 | Block: Reviews Carousel | Customer reviews slider | P1 | M | F-0551 |
| F-0565 | Block: Pricing Table | Service/product pricing cards | P1 | M | F-0551 |
| F-0566 | Block: FAQ Accordion | Expandable FAQ section | P1 | S | F-0551 |
| F-0567 | Block: Audio Player | Podcast / music player embed | P2 | M | F-0551 |
| F-0568 | Block: Calendar Booking | Appointment booking widget | P2 | L | F-0551 |
| F-0569 | Block: Loyalty Stamp Card | Digital stamp card UI | P2 | M | F-0551 |
| F-0570 | Page Publish & Hosting | Host pages on QR Studio CDN | P0 | L | S3, edge |
| F-0571 | Custom URL Slug | Set page URL path | P0 | S | F-0570 |
| F-0572 | Custom Domain Pages | Host pages on own domain | P1 | L | F-0503 |
| F-0573 | Page Themes | 20+ pre-built page themes | P0 | M | F-0551 |
| F-0574 | Custom CSS | Full custom CSS injection | P1 | M | F-0551 |
| F-0575 | Custom JavaScript | JS snippet injection for tracking | P2 | M | F-0551 |
| F-0576 | Page SEO Fields | Title, description, OG image per page | P0 | S | F-0551 |
| F-0577 | Page Schema Markup | JSON-LD per page type | P1 | M | F-0551 |
| F-0578 | Multi-Language Page | Translated versions with language switcher | P1 | L | F-0169 |
| F-0579 | Page Password Gate | Protect page with password | P1 | M | F-0414 |
| F-0580 | Page Expiry Date | Auto-unpublish after date | P1 | M | F-0413 |
| F-0581 | Page Analytics | View page views and events | P0 | M | F-0451 |
| F-0582 | Page Version History | Restore to previous page version | P1 | M | DB |
| F-0583 | Page Clone | Duplicate page as starting point | P1 | S | DB |
| F-0584 | Page Template Gallery | 50+ page templates by use case | P0 | L | F-0551 |
| F-0585 | Page Preview (Mobile/Desktop) | Toggle preview between breakpoints | P0 | S | F-0551 |
| F-0586 | Page Collaboration | Co-edit page with team | P2 | L | F-0851 |
| F-0587 | Page Comments | Leave comments on page elements | P2 | M | F-0851 |
| F-0588 | Block Spacing Controls | Margin/padding per block | P1 | M | F-0551 |
| F-0589 | Block Animation | Fade/slide entrance animations | P2 | M | F-0551 |
| F-0590 | Block Visibility Rules | Show/hide blocks by device or time | P2 | L | F-0551 |
| F-0591 | Page A/B Test | Test two page variants | P2 | L | F-0404, F-0551 |
| F-0592 | Conversion Pixel per Page | Fire pixel on page load | P2 | M | F-0482 |
| F-0593 | Page Impression Counter | Public scan/visit counter badge | P2 | S | F-0451 |
| F-0594 | Popup Block | Exit-intent or timed popup | P2 | M | F-0551 |
| F-0595 | Sticky CTA Bar | Persistent bottom CTA on scroll | P2 | M | F-0551 |
| F-0596 | Page Font Selector | Choose from 100+ Google Fonts | P1 | M | — |
| F-0597 | Page Color Theme | Global color vars per page | P0 | S | — |
| F-0598 | Favicon Upload | Custom favicon per page | P1 | S | F-0570 |
| F-0599 | Social Proof Counter | "1,234 people scanned this" | P2 | S | F-0451 |
| F-0600 | Page Export ZIP | Download page as static HTML/CSS | P2 | L | F-0551 |

---

## MODULE 13 — FORMS & LEADS (F-0601 – F-0650)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0601 | Form Builder | Drag-drop form field builder | P0 | L | — |
| F-0602 | Field: Text Input | Single-line text field | P0 | S | F-0601 |
| F-0603 | Field: Textarea | Multi-line text area | P0 | S | F-0601 |
| F-0604 | Field: Email | Email input with validation | P0 | S | F-0601 |
| F-0605 | Field: Phone | Phone input with country dial code | P0 | S | F-0601 |
| F-0606 | Field: Number | Numeric input with min/max | P0 | S | F-0601 |
| F-0607 | Field: Date Picker | Date selection field | P0 | S | F-0601 |
| F-0608 | Field: Dropdown | Single-select dropdown | P0 | S | F-0601 |
| F-0609 | Field: Checkbox Group | Multiple-choice checkboxes | P0 | S | F-0601 |
| F-0610 | Field: Radio Group | Single-choice radio buttons | P0 | S | F-0601 |
| F-0611 | Field: Star Rating | 1–5 star rating input | P0 | S | F-0601 |
| F-0612 | Field: NPS Score | 0–10 Net Promoter Score slider | P0 | S | F-0601 |
| F-0613 | Field: File Upload | Attach file to form submission | P1 | M | S3 |
| F-0614 | Field: Signature | Touch/mouse signature capture | P2 | M | F-0601 |
| F-0615 | Field: Hidden | Hidden field with static/dynamic value | P1 | S | F-0601 |
| F-0616 | Conditional Logic | Show/hide fields based on answers | P1 | L | F-0601 |
| F-0617 | Multi-Page Form | Wizard-style multi-step form | P1 | L | F-0601 |
| F-0618 | Form Progress Bar | Show progress through multi-step form | P1 | S | F-0617 |
| F-0619 | Form Thank-You Page | Custom redirect or message on submit | P0 | S | F-0601 |
| F-0620 | Spam Protection: CAPTCHA | hCaptcha / Turnstile on forms | P0 | M | hCaptcha |
| F-0621 | Spam Protection: Honeypot | Hidden honeypot field to catch bots | P0 | S | F-0601 |
| F-0622 | Lead Export CSV | Download all leads as CSV | P0 | S | DB |
| F-0623 | Lead Export JSON | Download leads as JSON | P1 | S | DB |
| F-0624 | CRM Webhook | POST lead data to CRM on submit | P1 | M | F-0951 |
| F-0625 | Email Notification on Submit | Alert email with lead data | P0 | S | Email |
| F-0626 | Auto-Reply Email | Send confirmation email to respondent | P1 | M | Email |
| F-0627 | HubSpot Integration | Push leads to HubSpot CRM | P1 | M | HubSpot API |
| F-0628 | Mailchimp Integration | Subscribe lead to Mailchimp list | P1 | M | Mailchimp API |
| F-0629 | Zapier / Make Webhook | Trigger Zap on new submission | P1 | M | F-0951 |
| F-0630 | Form Analytics | View submission rates, drop-offs | P1 | M | F-0451 |
| F-0631 | Field Validation Rules | Regex / length / required validation | P0 | M | F-0601 |
| F-0632 | Form Embed Code | Embed form on any website | P1 | M | — |
| F-0633 | Form Password Gate | Password-protect a form | P2 | M | F-0414 |
| F-0634 | Form Expiry | Stop accepting after date or count | P1 | M | F-0413 |
| F-0635 | Quiz Mode | Scored quiz with correct answers | P1 | L | F-0601 |
| F-0636 | Survey Branching | Logic-based survey paths | P1 | L | F-0616 |
| F-0637 | Form Partial Save | Save incomplete form responses | P2 | L | F-0601 |
| F-0638 | GDPR Consent Field | Required consent checkbox with policy link | P0 | S | F-0601 |
| F-0639 | Form Response Limit | Cap submissions at N | P1 | S | DB |
| F-0640 | Form Clone | Duplicate form with all fields | P1 | S | DB |
| F-0641 | Form Template Gallery | Pre-built form templates by use case | P1 | M | F-0601 |
| F-0642 | Response Dashboard | View all submissions in table view | P0 | M | DB |
| F-0643 | Response Search | Full-text search across submissions | P1 | M | DB |
| F-0644 | Response Tagging | Add tags to individual responses | P2 | S | DB |
| F-0645 | Form Embed in Page Builder | Embed form block in landing pages | P0 | M | F-0551, F-0601 |
| F-0646 | Form Webhook Retry | Retry failed webhook deliveries | P1 | M | F-0624 |
| F-0647 | Form Translations | Translate form fields for multi-lang | P2 | L | F-0578 |
| F-0648 | Form Analytics Funnel | Drop-off per field visualization | P2 | M | F-0630 |
| F-0649 | Electronic Signature Form | Legally binding e-sign flow | P2 | L | F-0614 |
| F-0650 | Loyalty Stamp Counter | Stamp-card logic in form submission | P2 | M | F-0060 |

---

## MODULE 14 — ECOMMERCE & PAYMENTS (F-0651 – F-0700)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0651 | Product QR Page | Scan QR → product info + buy button | P1 | M | F-0570 |
| F-0652 | Stripe Checkout | Accept card payments via Stripe | P1 | L | Stripe |
| F-0653 | PayPal Checkout | Accept PayPal payments | P1 | L | PayPal |
| F-0654 | UPI Payment Page | QR-triggered UPI payment | P1 | M | F-0028 |
| F-0655 | Donation Page | Fundraising page with amount presets | P1 | M | F-0652 |
| F-0656 | Tip Jar | Service-worker tipping page | P1 | M | F-0652 |
| F-0657 | Invoice QR | QR on invoice → payment page | P1 | M | F-0652 |
| F-0658 | Coupon Code Generator | Create discount codes with limits | P1 | M | DB |
| F-0659 | Coupon QR | Scan QR → apply discount code | P0 | S | F-0039 |
| F-0660 | Loyalty Card (Digital) | Stamp card with Wallet pass support | P1 | L | F-0665 |
| F-0661 | Apple Wallet Pass | Generate .pkpass loyalty/ticket pass | P1 | L | Apple Wallet API |
| F-0662 | Google Wallet Pass | Generate Google Wallet pass | P1 | L | Google Wallet API |
| F-0663 | Product Catalog QR | Scan → full product catalog page | P1 | M | F-0551 |
| F-0664 | Order Confirmation QR | QR on receipt → order status page | P1 | M | F-0570 |
| F-0665 | Payment Link Generator | Create shareable Stripe/PayPal link + QR | P1 | M | F-0652 |
| F-0666 | Subscription Plan QR | Scan → subscribe to recurring plan | P2 | L | Stripe |
| F-0667 | Free Trial QR | Scan → activate free trial with signup | P2 | M | F-0652 |
| F-0668 | Flash Sale Timer Page | Countdown + buy button | P2 | M | F-0562 |
| F-0669 | Charity Round-Up | Round-up transactions for charity | P2 | L | F-0652 |
| F-0670 | Split Payment QR | Split bill between multiple payers | P2 | L | F-0652 |
| F-0671 | Product Review QR | Scan → leave product review | P1 | M | F-0036 |
| F-0672 | Affiliate Product QR | QR with affiliate tracking param | P2 | M | F-0972 |
| F-0673 | Bundle Deal Page | Scan → multi-product bundle offer | P2 | M | F-0663 |
| F-0674 | Pre-Order QR | Scan → pre-order form + payment | P2 | M | F-0652 |
| F-0675 | Gift Card QR | Generate & redeem gift card codes | P2 | L | F-0652 |
| F-0676 | Multi-Currency Support | Display prices in user's currency | P2 | M | Stripe |
| F-0677 | Tax Calculation | Auto-calculate tax by region | P2 | L | Stripe Tax |
| F-0678 | Checkout Analytics | View checkout funnel metrics | P1 | M | F-0451 |
| F-0679 | Order Management | Basic orders table for payment QRs | P2 | L | DB |
| F-0680 | Refund QR | Scan → request refund flow | P2 | L | F-0652 |
| F-0681 | Download After Payment QR | Pay then get file download | P2 | L | F-0652, S3 |
| F-0682 | Membership Gate QR | Scan → join membership program | P2 | L | F-0666 |
| F-0683 | Event Ticket Purchase QR | Buy ticket → receive QR ticket | P1 | L | F-0751, F-0652 |
| F-0684 | Menu + Order QR | View menu and place order | P1 | L | F-0701 |
| F-0685 | Table Payment QR | Pay restaurant bill at table | P2 | L | F-0684 |
| F-0686 | Tipping QR at POS | Display QR at counter for tips | P1 | M | F-0656 |
| F-0687 | Escrow Payment QR | Hold payment until delivery confirmed | P2 | L | — |
| F-0688 | Invoice Auto-Send | Auto-send invoice QR by email | P2 | M | F-0657 |
| F-0689 | Payment Reminder QR | Resend payment link QR via SMS/email | P2 | M | F-0657 |
| F-0690 | Crypto Payment QR | Accept BTC/ETH via payment QR | P2 | L | F-0029 |
| F-0691 | SEPA Direct Debit QR | European bank debit mandate QR | P2 | L | F-0032 |
| F-0692 | Coupon Redemption Tracker | Track coupon usage and limits | P1 | M | F-0658 |
| F-0693 | Discount Stack Rules | Control if coupons can be combined | P2 | M | F-0658 |
| F-0694 | Payment Confirmation Page | Branded thank-you page post-payment | P0 | S | F-0652 |
| F-0695 | Abandoned Checkout Trigger | Fire webhook on checkout abandonment | P2 | L | F-0652 |
| F-0696 | Revenue Analytics | Total revenue from payment QRs | P1 | M | F-0451, F-0652 |
| F-0697 | Payout Dashboard | Track paid-out amounts | P2 | L | Stripe |
| F-0698 | Sales Export CSV | Download all payment transactions | P1 | S | DB |
| F-0699 | Payment QR Embed | Embed payment widget on any page | P2 | L | F-0652 |
| F-0700 | Payment QR Branding | Custom logo + colors on checkout page | P1 | M | F-0901 |

---

## MODULE 15 — RESTAURANT SUITE (F-0701 – F-0750)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0701 | Digital Menu Builder | Create multi-section digital menu | P0 | L | F-0551 |
| F-0702 | Menu Category | Group menu items into categories | P0 | M | F-0701 |
| F-0703 | Menu Item: Name + Price | Basic item name and price | P0 | S | F-0701 |
| F-0704 | Menu Item: Description | Detailed item description | P0 | S | F-0701 |
| F-0705 | Menu Item: Photo | Photo per item | P0 | M | S3 |
| F-0706 | Menu Item: Allergens | Allergen icons (gluten, nut, etc.) | P0 | M | F-0701 |
| F-0707 | Multi-Language Menu | Menu in multiple languages | P1 | L | F-0578 |
| F-0708 | Menu Scheduling | Show/hide items by day or time | P1 | M | F-0701 |
| F-0709 | Table QR Code | Unique QR per table | P0 | S | F-0001 |
| F-0710 | Table Ordering | Guest places order from table QR | P1 | L | F-0684 |
| F-0711 | Order Dashboard | Kitchen view of incoming orders | P1 | L | F-0710 |
| F-0712 | Order Status Updates | Push status to guest's browser | P1 | L | F-0710 |
| F-0713 | Review Prompt QR | After meal, prompt Google review | P0 | S | F-0036 |
| F-0714 | Dietary Filter | Guest can filter by vegan/keto/etc. | P1 | M | F-0706 |
| F-0715 | Item Availability Toggle | Mark items as sold out | P0 | S | F-0701 |
| F-0716 | Featured Items Badge | Highlight chef specials | P1 | S | F-0701 |
| F-0717 | Menu PDF Download | Let guests download PDF menu | P1 | M | F-0206 |
| F-0718 | Menu Analytics | Views, popular items, peak hours | P1 | M | F-0451 |
| F-0719 | QR Table Tent Template | Print-ready table tent with QR | P0 | M | F-0215 |
| F-0720 | Multi-Location Menu | Manage menus for multiple branches | P1 | M | F-0701 |
| F-0721 | Nutritional Info | Calories and macros per item | P2 | M | F-0701 |
| F-0722 | Upsell Suggestions | "Goes well with" item recommendations | P2 | M | F-0701 |
| F-0723 | Menu SEO Page | Public-facing menu page for Google | P1 | M | F-0576 |
| F-0724 | Happy Hour Scheduler | Auto-apply price changes in time window | P2 | M | F-0708 |
| F-0725 | Menu Item Video | Short video demo per menu item | P2 | M | F-0556 |
| F-0726 | Staff Portal QR | Staff scan QR to access kitchen view | P2 | M | F-0711 |
| F-0727 | Bill Split Request | Guest requests bill split from table | P2 | L | F-0685 |
| F-0728 | Feedback QR per Table | Post-meal rating per table | P1 | M | F-0042 |
| F-0729 | Menu Item Search | Guest searches menu by keyword | P1 | M | F-0701 |
| F-0730 | Menu Catering Order | Pre-order bulk catering from QR | P2 | L | F-0710 |
| F-0731 | Menu Combo Builder | Create combo meal options | P2 | M | F-0701 |
| F-0732 | Loyalty Integration | Earn stamps on orders | P2 | M | F-0660 |
| F-0733 | Real-Time Wait Time | Show current estimated wait time | P2 | M | — |
| F-0734 | Menu Clone per Location | Duplicate menu to another branch | P1 | S | F-0720 |
| F-0735 | Menu Item Import CSV | Bulk import items from CSV | P1 | M | F-0351 |
| F-0736 | Menu Translate AI | AI-translate menu to target language | P2 | M | F-0707, F-0169 |
| F-0737 | QR Staff Check-In | Staff check-in via QR for shift start | P2 | M | — |
| F-0738 | Reservation QR | Scan QR to book a table | P2 | L | F-0043 |
| F-0739 | Menu Version History | Restore previous menu state | P1 | M | DB |
| F-0740 | Menu Domain Alias | Custom URL for menu (e.g., menu.domain.com) | P2 | M | F-0503 |
| F-0741 | Menu Social Share | Share menu link with OG image | P2 | S | F-0515 |
| F-0742 | Contactless Payment Prompt | Prompt for payment via QR after order | P2 | L | F-0685 |
| F-0743 | Order History per Table | Staff can see all orders per session | P2 | M | F-0710 |
| F-0744 | Menu Branding Kit | Apply brand colors/fonts to menu | P1 | M | F-0901 |
| F-0745 | Menu Embed Widget | Embed menu on restaurant website | P2 | M | F-0632 |
| F-0746 | Drink Menu Separate Tab | Separate drink and food tabs | P1 | M | F-0702 |
| F-0747 | Menu Push Notification | Notify signed-up diners of specials | P2 | M | F-0030 |
| F-0748 | Menu QR Poster Template | Poster-size QR print for door/window | P1 | M | F-0246 |
| F-0749 | Catering Inquiry Form | Catering request form via menu QR | P2 | M | F-0601 |
| F-0750 | Menu Expiry Notice | Auto-show "Menu updating" placeholder | P2 | S | F-0580 |

---

## MODULE 16 — EVENTS (F-0751 – F-0800)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0751 | Event Creator | Create event with date/venue/details | P0 | M | DB |
| F-0752 | Event QR Code | QR code for event info / registration | P0 | S | F-0009 |
| F-0753 | RSVP Form | Online RSVP with guest details | P0 | M | F-0601 |
| F-0754 | Guest List Management | View and manage attendees | P0 | M | DB |
| F-0755 | Ticket Generator | Generate unique ticket QRs per attendee | P0 | L | F-0038 |
| F-0756 | Ticket Email Delivery | Email tickets to attendees | P0 | M | Email |
| F-0757 | Check-In Scanner App | Scan tickets at event entrance | P0 | L | F-0251 |
| F-0758 | Check-In Analytics | Who checked in and when | P0 | M | F-0757 |
| F-0759 | Attendee Badge Generator | Print-ready name badge PDFs | P1 | M | F-0206 |
| F-0760 | Event Schedule Page | Agenda with sessions and speakers | P1 | M | F-0551 |
| F-0761 | Speaker Profiles | Speaker bio and photo per session | P1 | M | F-0551 |
| F-0762 | Event Map Embed | Venue map on event page | P1 | M | F-0563 |
| F-0763 | Event Countdown Widget | Live countdown to event start | P1 | M | F-0562 |
| F-0764 | Event Reminders | Email/SMS reminder before event | P1 | M | Email |
| F-0765 | Session QR Codes | QR per session for breakout rooms | P1 | M | F-0014 |
| F-0766 | Sponsor Logos | Sponsor section on event page | P2 | S | F-0551 |
| F-0767 | Event Photo Gallery | Post-event gallery page | P2 | M | F-0560 |
| F-0768 | Event Feedback Form | Post-event survey | P1 | M | F-0601 |
| F-0769 | Event Ticket Resale Block | Mark tickets as non-transferable | P2 | S | F-0755 |
| F-0770 | Waitlist Management | Auto-promote from waitlist on cancellation | P1 | M | F-0753 |
| F-0771 | Group Tickets | Register multiple attendees at once | P1 | M | F-0755 |
| F-0772 | VIP Ticket Tier | Multiple ticket types with different access | P1 | M | F-0755 |
| F-0773 | Event Ticket Scanning Mode | Offline-capable mobile scanner | P1 | L | F-0757 |
| F-0774 | Event Analytics Dashboard | Views, RSVPs, check-ins, revenue | P1 | M | F-0451 |
| F-0775 | Event Clone | Duplicate event with all settings | P1 | S | DB |
| F-0776 | Virtual Event QR | QR links to Zoom/Meet virtual event | P1 | M | F-0014 |
| F-0777 | Hybrid Event Support | In-person + virtual ticket types | P2 | L | F-0776 |
| F-0778 | Event Private Mode | Hidden event; invite-only RSVP | P2 | M | F-0414 |
| F-0779 | Event Donation Option | Optional donation on RSVP | P2 | M | F-0655 |
| F-0780 | Multi-Day Event | Schedule spanning multiple days | P1 | M | F-0751 |
| F-0781 | Event Series | Recurring event with child events | P2 | L | F-0751 |
| F-0782 | Event Exhibitor Portal | Exhibitor listing with QR booth code | P2 | L | F-0551 |
| F-0783 | Event Networking QR | Attendee-to-attendee contact share | P2 | M | F-0007 |
| F-0784 | Event Live Q&A | QR → submit questions live | P2 | L | F-0601 |
| F-0785 | Event Polls | Live audience polling via QR | P2 | L | F-0784 |
| F-0786 | Event Gamification | QR scavenger hunt per booth | P2 | L | — |
| F-0787 | Event Catering Order QR | Scan to pre-order food at event | P2 | L | F-0730 |
| F-0788 | Event Social Wall | Display social posts with event hashtag | P2 | L | — |
| F-0789 | Event Push Notification | Notify registered attendees of updates | P2 | M | F-0030 |
| F-0790 | Event Certificate Generator | PDF certificate of attendance | P2 | M | F-0206 |
| F-0791 | Event Import (.ics) | Import event from .ics calendar file | P2 | M | F-0009 |
| F-0792 | Event Export (.ics) | Export event as .ics for calendars | P1 | M | F-0009 |
| F-0793 | Event Sponsor QR | Sponsor ad + link via event QR | P2 | S | F-0766 |
| F-0794 | Event API | Create/manage events via REST API | P2 | M | F-0951 |
| F-0795 | Check-In Kiosk Mode | Full-screen self-check-in kiosk | P2 | M | F-0757 |
| F-0796 | Seating Chart QR | Scan seat to see booking details | P2 | L | F-0755 |
| F-0797 | Event Merchandise QR | Merch store link on event page | P2 | M | F-0663 |
| F-0798 | Post-Event Thank-You QR | Scan after event for resources | P2 | S | F-0570 |
| F-0799 | Multi-Venue Event | Different venues per session | P2 | L | F-0751 |
| F-0800 | Event Revenue Report | Ticket sales + donation revenue PDF | P2 | M | F-0465 |

---

## MODULE 17 — ACCOUNTS & TEAMS (F-0801 – F-0850)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0801 | Email + Password Auth | Register and login with email | P0 | M | Supabase Auth |
| F-0802 | Google OAuth | Sign in with Google | P0 | S | F-0801 |
| F-0803 | GitHub OAuth | Sign in with GitHub | P1 | S | F-0801 |
| F-0804 | Apple Sign In | Sign in with Apple ID | P1 | M | F-0801 |
| F-0805 | Passkey / WebAuthn | Passwordless biometric login | P1 | L | F-0801 |
| F-0806 | Two-Factor Auth (TOTP) | Authenticator app 2FA | P0 | M | F-0801 |
| F-0807 | 2FA via SMS | SMS OTP fallback | P1 | M | F-0806 |
| F-0808 | Account Settings | Update name, email, password, timezone | P0 | S | F-0801 |
| F-0809 | Avatar Upload | Profile picture upload | P0 | S | S3 |
| F-0810 | Workspace Create | Create isolated workspace | P0 | M | DB |
| F-0811 | Workspace Switcher | Switch between multiple workspaces | P0 | S | F-0810 |
| F-0812 | Workspace Settings | Name, logo, timezone, locale | P0 | S | F-0810 |
| F-0813 | Team Member Invite | Invite teammates by email | P0 | M | F-0810 |
| F-0814 | Role: Owner | Full admin rights on workspace | P0 | S | F-0810 |
| F-0815 | Role: Admin | Manage members and billing | P0 | S | F-0810 |
| F-0816 | Role: Editor | Create and edit QRs | P0 | S | F-0810 |
| F-0817 | Role: Viewer | Read-only access | P0 | S | F-0810 |
| F-0818 | Role: Billing | Access only billing settings | P1 | S | F-0810 |
| F-0819 | Custom Roles | Create custom permission sets | P2 | L | F-0814 |
| F-0820 | Audit Log | Timestamped record of all actions | P1 | M | DB |
| F-0821 | Audit Log Export | Download audit log as CSV | P1 | S | F-0820 |
| F-0822 | SSO / SAML | Enterprise single sign-on | P2 | L | F-0801 |
| F-0823 | SCIM Provisioning | Auto-provision team members via SCIM | P2 | L | F-0822 |
| F-0824 | Activity Feed | Stream of recent workspace actions | P1 | M | F-0820 |
| F-0825 | Comments on Designs | Threaded comments on QR projects | P1 | M | F-0851 |
| F-0826 | @Mention Notifications | Mention teammates in comments | P1 | M | F-0825 |
| F-0827 | Notification Center | In-app notification bell | P1 | M | DB |
| F-0828 | Email Notifications | Configurable email notification prefs | P0 | M | Email |
| F-0829 | Slack Notifications | Push workspace events to Slack | P2 | M | Slack API |
| F-0830 | Member Removal | Remove member and reassign assets | P0 | S | F-0813 |
| F-0831 | Leave Workspace | Self-remove from workspace | P0 | S | F-0810 |
| F-0832 | Transfer Ownership | Transfer workspace to another user | P1 | M | F-0814 |
| F-0833 | Workspace Usage Stats | QR count, scan count, storage used | P1 | S | DB |
| F-0834 | Delete Workspace | Delete workspace and all data | P1 | M | F-0810 |
| F-0835 | Session Management | View and revoke active sessions | P1 | M | F-0801 |
| F-0836 | Login History | Log of recent logins with IP/device | P1 | M | DB |
| F-0837 | Account Data Export | Download all personal data (GDPR) | P0 | L | F-0961 |
| F-0838 | Account Deletion | Delete account and all data | P0 | M | F-0961 |
| F-0839 | Password Reset | Secure reset via email link | P0 | S | F-0801 |
| F-0840 | Email Verification | Verify email on registration | P0 | S | F-0801 |
| F-0841 | Invite Link Expiry | Auto-expire pending invites | P1 | S | F-0813 |
| F-0842 | Pending Invites List | View and resend/cancel invites | P1 | S | F-0813 |
| F-0843 | Workspace Template | Create workspace from template | P2 | M | F-0810 |
| F-0844 | IP Restriction | Restrict workspace access by IP range | P2 | M | F-0810 |
| F-0845 | Onboarding Checklist | Step-by-step first-use guide | P0 | M | F-0801 |
| F-0846 | Profile Public Page | Public profile with QR gallery option | P2 | M | — |
| F-0847 | Connected Apps | View/revoke third-party OAuth apps | P1 | M | F-0951 |
| F-0848 | Workspace Branding | Custom workspace logo on shared pages | P1 | M | F-0901 |
| F-0849 | Team Analytics | Per-member usage stats | P2 | M | F-0451 |
| F-0850 | Enterprise Workspace | Isolated tenant with SLA guarantees | P2 | L | F-0822 |

---

## MODULE 18 — PROJECTS & ORGANIZATION (F-0851 – F-0900)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0851 | QR Library | Central list of all QRs with search | P0 | M | DB |
| F-0852 | Folder Create | Create named folders for QRs | P0 | S | DB |
| F-0853 | Folder Nesting | Sub-folders up to 5 levels | P1 | M | F-0852 |
| F-0854 | Drag QR into Folder | Drag-drop to move QR to folder | P0 | S | F-0852 |
| F-0855 | Tag System | Add multiple tags to any QR | P0 | S | DB |
| F-0856 | Tag Filter | Filter QR library by tag | P0 | S | F-0855 |
| F-0857 | Full-Text Search | Search QRs by name/URL/content | P0 | M | DB |
| F-0858 | Advanced Filters | Filter by type/date/status/tag/creator | P1 | M | DB |
| F-0859 | Sort Options | Sort by date/name/scans/status | P0 | S | DB |
| F-0860 | Grid vs List View | Toggle between card grid and row list | P0 | S | — |
| F-0861 | Bulk Select | Checkbox select multiple QRs | P0 | S | — |
| F-0862 | Bulk Move to Folder | Move selection to folder at once | P0 | S | F-0854 |
| F-0863 | Bulk Tag | Apply tag to selected QRs | P1 | S | F-0861 |
| F-0864 | Bulk Delete | Delete selected QRs at once | P1 | S | F-0861 |
| F-0865 | Bulk Archive | Archive selected QRs | P1 | S | F-0861 |
| F-0866 | Bulk Download | Download selected QRs as ZIP | P1 | M | F-0861 |
| F-0867 | Archive Section | View all archived QRs separately | P1 | S | DB |
| F-0868 | Trash with Restore | Soft-delete with 30-day restore | P0 | M | DB |
| F-0869 | Permanently Delete | Hard delete with confirmation | P1 | S | F-0868 |
| F-0870 | Version History | See all past versions of a QR design | P1 | L | DB |
| F-0871 | Restore Version | Roll back to a previous QR version | P1 | M | F-0870 |
| F-0872 | QR Duplicate | Clone a QR with all settings | P0 | S | DB |
| F-0873 | Rename QR | Rename a QR code in place | P0 | S | DB |
| F-0874 | QR Notes | Add internal notes to a QR | P1 | S | DB |
| F-0875 | Project / Campaign | Group QRs into a named campaign | P1 | M | DB |
| F-0876 | Campaign Analytics | Aggregate stats for all QRs in campaign | P1 | M | F-0500 |
| F-0877 | Import JSON | Import QRs from JSON export | P2 | M | DB |
| F-0878 | Export JSON | Export all QRs as JSON | P2 | M | DB |
| F-0879 | Import from Another Workspace | Move QR between workspaces | P2 | M | F-0810 |
| F-0880 | QR Status: Active/Paused/Expired | Visible status badge | P0 | S | F-0417 |
| F-0881 | Starred QRs | Quick-access favorites | P1 | S | DB |
| F-0882 | Recent QRs | Last 10 accessed QRs on dashboard | P0 | S | DB |
| F-0883 | QR Details Drawer | Slide-out with full QR metadata | P0 | M | — |
| F-0884 | QR Share Link | Share view-only QR link externally | P0 | S | — |
| F-0885 | QR Embed Preview | Preview embedded in details drawer | P0 | S | — |
| F-0886 | QR Last Edited Indicator | "Edited 2h ago" label | P0 | S | DB |
| F-0887 | QR Creator Attribution | Show which team member created it | P1 | S | F-0813 |
| F-0888 | Scan Count Badge | Inline scan count on QR card | P0 | S | F-0451 |
| F-0889 | QR Type Icon | Visual type icon on card | P0 | S | — |
| F-0890 | Keyboard Shortcuts Palette | Ctrl+K command palette for navigation | P1 | M | — |
| F-0891 | Pinned Folders | Pin frequent folders to sidebar | P1 | S | F-0852 |
| F-0892 | Cross-Folder Search | Search across all folders simultaneously | P1 | S | F-0857 |
| F-0893 | Recycle-Bin Auto-Empty | Auto-empty trash after 30 days | P1 | S | F-0868 |
| F-0894 | Folder Export ZIP | Download entire folder as ZIP | P2 | M | F-0359 |
| F-0895 | Folder Permissions | Restrict folder access by role | P2 | M | F-0814 |
| F-0896 | QR Change Log | Manual log of what changed and why | P2 | S | F-0874 |
| F-0897 | Smart Collections | Auto-group by rule (e.g., "all paused") | P2 | M | F-0880 |
| F-0898 | Project Dashboard | Summary card for each campaign | P2 | M | F-0875 |
| F-0899 | Asset Quota Indicator | Storage and QR count usage bars | P1 | S | F-0833 |
| F-0900 | Onboarding Empty State | Guide when library is empty | P0 | S | — |

---

## MODULE 19 — COLLABORATION (F-0901 – F-0930)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0901 | Share for Review Link | Generate time-limited share link | P1 | M | DB |
| F-0902 | Reviewer Role | External reviewer with comment-only access | P1 | M | F-0901 |
| F-0903 | Approval Workflow | Request and record approvals | P1 | L | F-0902 |
| F-0904 | Approval Notifications | Email reviewer on new review request | P1 | M | F-0903 |
| F-0905 | Rejection with Notes | Reviewer rejects with explanation | P1 | M | F-0903 |
| F-0906 | Comment Threads | Threaded comment per QR or element | P1 | M | DB |
| F-0907 | Comment Resolve | Mark comment thread as resolved | P1 | S | F-0906 |
| F-0908 | Comment Reactions | Emoji reaction on comments | P2 | S | F-0906 |
| F-0909 | Real-Time Co-Editing | Multiple users edit QR simultaneously | P2 | L | CRDT/WebSocket |
| F-0910 | Presence Indicators | See who's viewing/editing same QR | P2 | M | F-0909 |
| F-0911 | Edit Lock | Lock QR to prevent concurrent edits | P1 | M | DB |
| F-0912 | Presentation Mode | Full-screen QR showcase for stakeholders | P1 | M | — |
| F-0913 | QR Proposal Pack | Export QR + analytics + notes as PDF | P1 | M | F-0465 |
| F-0914 | Design Diff View | Visual diff between two QR versions | P2 | L | F-0870 |
| F-0915 | Guest Commenting | External guest comments without account | P2 | M | F-0901 |
| F-0916 | Approval Audit Trail | Record who approved what and when | P1 | M | F-0820 |
| F-0917 | Mention in Comment | @user notifications via comments | P1 | M | F-0826 |
| F-0918 | Bulk Approval | Approve multiple QRs at once | P2 | M | F-0903 |
| F-0919 | Template Request | Request a custom template from admin | P2 | M | F-0111 |
| F-0920 | Design Review Checklist | Structured review checklist per QR | P2 | M | F-0903 |
| F-0921 | Share QR Collection | Share a folder link for client review | P2 | M | F-0894 |
| F-0922 | Collaboration Dashboard | View all active reviews and approvals | P2 | M | F-0903 |
| F-0923 | Live Annotation | Draw annotation overlays on QR preview | P2 | L | F-0909 |
| F-0924 | Slack Review Thread | Post QR to Slack for team feedback | P2 | M | F-0829 |
| F-0925 | Version Comparison | Side-by-side version preview | P2 | M | F-0870 |
| F-0926 | Review Due Date | Set deadline for review requests | P2 | S | F-0903 |
| F-0927 | Review Reminder | Auto-remind reviewer before deadline | P2 | S | F-0926 |
| F-0928 | Collaborative Notes | Shared workspace notes pad | P2 | M | — |
| F-0929 | Client Portal | Branded client-facing review portal | P2 | L | F-0901 |
| F-0930 | Permission-Based Sharing | Granular view/comment/edit on shared link | P2 | M | F-0895 |

---

## MODULE 20 — BRAND KIT (F-0931 – F-0955)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0931 | Brand Kit Create | Set up named brand profile | P1 | M | DB |
| F-0932 | Logo Upload | Upload primary and secondary logos | P1 | M | S3 |
| F-0933 | Brand Colors | Define primary, secondary, accent palette | P1 | M | DB |
| F-0934 | Brand Fonts | Set heading and body fonts | P1 | M | DB |
| F-0935 | Brand QR Defaults | Default QR style per brand | P1 | M | F-0931 |
| F-0936 | One-Click Apply | Apply brand kit to any QR instantly | P1 | S | F-0935 |
| F-0937 | Multiple Brand Kits | Create kit per brand or client | P1 | M | F-0931 |
| F-0938 | Brand Kit Switcher | Switch active brand kit | P1 | S | F-0937 |
| F-0939 | Brand Guidelines Checker | Warn when design deviates from brand | P2 | L | F-0931 |
| F-0940 | Brand Kit Share | Share kit with team members | P1 | M | F-0813 |
| F-0941 | Brand Kit Export | Export kit as JSON config | P2 | S | DB |
| F-0942 | Brand Kit Import | Import brand kit from JSON | P2 | S | DB |
| F-0943 | Color Accessibility Check | Check brand colors for WCAG contrast | P1 | M | F-0933 |
| F-0944 | Logo Background Removal | AI remove background from logo | P1 | M | F-0186 |
| F-0945 | Favicon Generator | Generate favicon from brand logo | P1 | M | F-0932 |
| F-0946 | OG Image Template | Brand-styled social preview image template | P1 | M | F-0932 |
| F-0947 | Brand Kit on Landing Pages | Apply brand kit to all pages | P1 | M | F-0551, F-0931 |
| F-0948 | Brand Kit Analytics | Usage count per kit | P2 | S | DB |
| F-0949 | Agency: Client Kits | Manage brand kits per client | P2 | M | F-0937 |
| F-0950 | White-Label Mode | Replace QR Studio branding with own | P2 | L | F-0931 |
| F-0951 | API Key Management | Create/revoke API keys with scopes | P1 | M | DB |
| F-0952 | REST API Docs | OpenAPI 3.1 spec + interactive docs | P1 | L | F-0951 |
| F-0953 | GraphQL API | GraphQL endpoint for all resources | P2 | L | F-0951 |
| F-0954 | API Rate Limit Headers | X-RateLimit headers in responses | P0 | S | Redis |
| F-0955 | API Playground | In-browser API test console | P1 | M | F-0952 |

---

## MODULE 21 — API & DEVELOPERS (F-0956 – F-1000)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-0956 | API Webhook System | Register and manage webhooks | P1 | M | F-0951 |
| F-0957 | Webhook Signing | HMAC signature for webhook security | P0 | S | F-0956 |
| F-0958 | Webhook Retry | Auto-retry failed webhook deliveries | P1 | M | F-0956 |
| F-0959 | Webhook Event Log | See all webhook delivery attempts | P1 | M | F-0956 |
| F-0960 | JS/TS SDK | npm package for Node/browser | P1 | L | F-0951 |
| F-0961 | Python SDK | PyPI package for Python integrations | P1 | L | F-0951 |
| F-0962 | PHP SDK | Packagist package for PHP | P2 | L | F-0951 |
| F-0963 | Ruby SDK | RubyGems package | P2 | L | F-0951 |
| F-0964 | Zapier Integration | Official Zapier app with triggers/actions | P1 | L | F-0956 |
| F-0965 | Make (Integromat) Integration | Official Make module | P1 | L | F-0956 |
| F-0966 | WordPress Plugin | Generate QRs from WP admin | P2 | L | F-0951 |
| F-0967 | Shopify App | QR generation from product pages | P2 | L | F-0951 |
| F-0968 | Embeddable Widget | JS snippet to embed QR generator on any site | P2 | L | F-0951 |
| F-0969 | OAuth 2.0 for Third-Party | Let apps authenticate users via QR Studio | P2 | L | F-0801 |
| F-0970 | Developer Dashboard | API usage, errors, rate limits | P1 | M | F-0951 |
| F-0971 | API Changelog | Versioned API change history | P1 | S | — |
| F-0972 | API Versioning | v1/v2 API with deprecation notices | P1 | M | F-0951 |
| F-0973 | API Throttle per Key | Per-key rate limits | P1 | M | Redis, F-0951 |
| F-0974 | API Audit Log | Log all API calls with IP/key | P1 | M | DB |
| F-0975 | API IP Allowlist | Restrict API key to IP ranges | P2 | M | F-0951 |
| F-0976 | API Mock Server | Sandbox environment for testing | P2 | L | F-0951 |
| F-0977 | Postman Collection | Downloadable Postman collection | P1 | S | F-0952 |
| F-0978 | SDK Code Snippets | Copy-paste code in 10+ languages | P1 | M | F-0952 |
| F-0979 | API Status Page | Real-time API status + incident history | P1 | M | — |
| F-0980 | Edge API Endpoints | API served from edge for <50ms globally | P1 | L | Edge fn |
| F-0981 | Bulk API | Create 1,000 QRs in one API call | P1 | L | F-0951 |
| F-0982 | API Error Codes Reference | Full list of error codes with fixes | P1 | S | F-0952 |
| F-0983 | API Analytics | Per-endpoint usage metrics | P2 | M | F-0970 |
| F-0984 | GraphQL Subscriptions | Real-time scan events via GraphQL | P2 | L | F-0953 |
| F-0985 | OpenAPI Code Gen | Generate client code from OpenAPI spec | P2 | M | F-0952 |
| F-0986 | API Testing CI Hook | Run API contract tests in CI | P2 | L | F-0985 |
| F-0987 | Wix App | Generate QRs from Wix site admin | P2 | L | F-0951 |
| F-0988 | Squarespace Extension | QR integration for Squarespace | P2 | L | F-0951 |
| F-0989 | Bubble Plugin | No-code Bubble.io integration | P2 | M | F-0951 |
| F-0990 | Webflow App | Webflow Designer extension | P2 | L | F-0951 |
| F-0991 | Framer Plugin | Framer component for QR generation | P2 | M | F-0951 |
| F-0992 | Notion Integration | Generate QRs from Notion database | P2 | M | F-0951 |
| F-0993 | Airtable Integration | Trigger QR generation from Airtable | P2 | M | F-0951 |
| F-0994 | Google Sheets Add-On | Generate QRs from Google Sheets | P1 | L | F-0353 |
| F-0995 | HubSpot QR Integration | Generate QRs for contacts/campaigns | P2 | M | F-0627 |
| F-0996 | Salesforce App | QR generation from Salesforce objects | P2 | L | F-0951 |
| F-0997 | Monday.com Integration | Create QRs from Monday boards | P2 | M | F-0951 |
| F-0998 | n8n Node | QR Studio node for n8n automation | P2 | M | F-0951 |
| F-0999 | Pabbly Connect | QR Studio app on Pabbly | P2 | M | F-0951 |
| F-1000 | Developer Community Forum | Forum for API users to share integrations | P2 | L | — |

---

## MODULE 22 — BILLING (F-1001 – F-1035)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1001 | Free Plan | Generous free tier to acquire users | P0 | M | Stripe |
| F-1002 | Pro Plan | Paid plan with dynamic QRs + analytics | P0 | M | Stripe |
| F-1003 | Business Plan | Team features + white-label | P0 | M | Stripe |
| F-1004 | Enterprise Plan | Custom limits + SSO + SLA | P1 | L | Stripe |
| F-1005 | Monthly Billing | Stripe monthly subscription | P0 | M | Stripe |
| F-1006 | Annual Billing (Discount) | Annual plan with 2-month discount | P0 | S | Stripe |
| F-1007 | Invoice Generation | Auto-generate PDF invoices | P0 | M | Stripe |
| F-1008 | Invoice History | Download past invoices | P0 | S | Stripe |
| F-1009 | Usage Meters | Track QRs created, scans, storage | P1 | M | DB |
| F-1010 | Overage Billing | Charge for usage beyond plan limits | P1 | L | Stripe |
| F-1011 | Coupon Codes | Discount codes for plans | P1 | M | Stripe |
| F-1012 | Trial Period | 14-day free trial of Pro | P0 | M | Stripe |
| F-1013 | Trial Conversion Prompt | Upgrade nudge as trial ends | P0 | M | F-1012 |
| F-1014 | Upgrade from App | In-app upgrade flow | P0 | M | Stripe |
| F-1015 | Downgrade / Cancel | Cancel subscription with feedback | P0 | M | Stripe |
| F-1016 | Reactivate Subscription | Re-subscribe after cancellation | P0 | S | Stripe |
| F-1017 | Plan Comparison Page | Feature matrix comparison page | P0 | S | — |
| F-1018 | Regional Pricing | PPP-adjusted pricing by country | P2 | L | Stripe |
| F-1019 | Tax Calculation | VAT/GST auto-calculation | P1 | M | Stripe Tax |
| F-1020 | Tax Invoice (VAT) | VAT-compliant invoices | P1 | M | Stripe Tax |
| F-1021 | Team Seat Billing | Per-seat pricing for teams | P1 | M | Stripe |
| F-1022 | Billing Admin Role | Separate role for billing access | P1 | S | F-0818 |
| F-1023 | Payment Method Update | Change card / bank details | P0 | S | Stripe |
| F-1024 | Failed Payment Recovery | Auto-retry + email + grace period | P0 | M | Stripe |
| F-1025 | Credit System | Prepaid credits for pay-as-you-go | P2 | L | Stripe |
| F-1026 | Add-Ons | Optional paid add-ons (extra scans, storage) | P2 | M | Stripe |
| F-1027 | Partner Discount | Lifetime deal / partner pricing tier | P2 | M | Stripe |
| F-1028 | Non-Profit Discount | Discounted plans for non-profits | P2 | S | Stripe |
| F-1029 | Education Pricing | Free/discounted plans for EDU institutions | P2 | S | Stripe |
| F-1030 | Referral Credit | Credit for referring new paid users | P2 | M | F-1063 |
| F-1031 | Dunning Emails | Smart email sequence for failed payments | P0 | M | Email |
| F-1032 | Churn Survey | Cancellation reason survey | P1 | S | F-1015 |
| F-1033 | Plan Limit Enforcement | Block actions when limit reached | P0 | M | F-1009 |
| F-1034 | Usage Dashboard | Current usage vs plan limits | P0 | S | F-1009 |
| F-1035 | Enterprise Custom Quote | Contact-sales enterprise quote flow | P1 | M | — |

---

## MODULE 23 — ADMIN DASHBOARD (F-1036 – F-1065)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1036 | Admin Panel Access | Role-gated admin section | P0 | M | F-0814 |
| F-1037 | User Management Table | Search, view, edit, ban users | P0 | M | DB |
| F-1038 | User Impersonation | Log in as user for support | P1 | M | F-0801 |
| F-1039 | User Suspend / Ban | Suspend abusive accounts | P0 | S | F-1037 |
| F-1040 | User Delete | Hard-delete user + GDPR erasure | P0 | M | F-0838 |
| F-1041 | Abuse Reports | View flagged content reports | P0 | M | DB |
| F-1042 | Content Moderation Queue | Review user-submitted content | P1 | M | F-1041 |
| F-1043 | Feature Flags | Toggle features on/off globally | P0 | M | DB |
| F-1044 | Per-User Feature Flags | Enable beta features for specific users | P1 | M | F-1043 |
| F-1045 | System Health Dashboard | Uptime, error rates, queue depth | P0 | M | Monitoring |
| F-1046 | Revenue Dashboard | MRR, ARR, churn, trial conversions | P0 | M | Stripe |
| F-1047 | Support Ticket Queue | View and respond to support tickets | P0 | M | DB |
| F-1048 | Announcement Banner | Show site-wide announcement to users | P1 | S | DB |
| F-1049 | Email Blast Tool | Send broadcast email to segments | P2 | L | Email |
| F-1050 | Audit Log Admin | Full audit log across all workspaces | P1 | M | F-0820 |
| F-1051 | QR Inspect Tool | Admin view of any QR in system | P1 | M | F-0851 |
| F-1052 | Malicious URL Report | List of flagged/blocked URLs | P0 | M | F-0172 |
| F-1053 | Rate Limit Override | Temporarily raise limits for users | P2 | M | Redis |
| F-1054 | Plan Override | Manually set plan for user | P1 | S | F-1001 |
| F-1055 | Promo Code Generator | Create coupon codes from admin | P1 | M | F-1011 |
| F-1056 | Signup Metrics | Daily/weekly new user chart | P0 | M | DB |
| F-1057 | Scan Volume Chart | Platform-wide scan volume | P1 | M | F-0451 |
| F-1058 | Storage Usage | Total S3 usage and cost estimate | P1 | M | S3 |
| F-1059 | Queue Monitor | Background job queue health | P0 | M | F-0357 |
| F-1060 | Error Log Viewer | Searchable application error log | P0 | M | Logging |
| F-1061 | DB Backup Status | Latest backup timestamp and size | P0 | S | DB |
| F-1062 | Admin API Access | Admin-scoped API endpoints | P1 | M | F-0951 |
| F-1063 | Referral Dashboard | Track referral signups and payouts | P2 | M | F-1030 |
| F-1064 | Affiliate Manager | Manage affiliate program | P2 | L | F-1063 |
| F-1065 | Security Incidents | Log and track security events | P0 | M | F-1050 |

---

## MODULE 24 — UX CORE (F-1066 – F-1100)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1066 | Step-by-Step Wizard (Mobile) | Guided flow for first-time mobile users | P0 | M | — |
| F-1067 | Bottom Sheet Preview | Mobile: QR preview in bottom sheet | P0 | M | — |
| F-1068 | Undo / Redo | Ctrl+Z/Y across all design actions | P0 | M | — |
| F-1069 | Autosave | Save design changes automatically | P0 | M | DB |
| F-1070 | Drag-Drop Everywhere | Drag items in lists, folders, page builder | P0 | M | — |
| F-1071 | Command Palette (Ctrl+K) | Quick search + action launcher | P1 | L | — |
| F-1072 | Keyboard Shortcuts | Documented shortcuts for power users | P1 | M | — |
| F-1073 | Onboarding Tour | Interactive feature highlight tour | P0 | M | F-0845 |
| F-1074 | Empty State Illustrations | Friendly empty states with CTAs | P0 | S | — |
| F-1075 | Contextual Help Tooltips | "?" tooltips on complex settings | P0 | S | — |
| F-1076 | Inline Validation | Real-time field error messages | P0 | S | — |
| F-1077 | Toast Notifications | Non-blocking success/error toasts | P0 | S | — |
| F-1078 | Confirmation Dialogs | Confirm before destructive actions | P0 | S | — |
| F-1079 | Loading Skeletons | Skeleton placeholders while fetching | P0 | S | — |
| F-1080 | Infinite Scroll | Paginate QR library without pagination | P1 | M | — |
| F-1081 | Virtualized Lists | Render only visible rows in large lists | P1 | M | — |
| F-1082 | Responsive Sidebar | Collapsible sidebar for small screens | P0 | M | — |
| F-1083 | Sticky Header | Header stays visible on scroll | P0 | S | — |
| F-1084 | Mobile Tab Bar | Bottom navigation bar on mobile | P0 | M | — |
| F-1085 | Floating Action Button | Quick-create QR button on mobile | P0 | S | — |
| F-1086 | Dark Mode | Full dark theme support | P0 | M | — |
| F-1087 | Reduced Motion | Respect prefers-reduced-motion | P0 | S | — |
| F-1088 | Focus Trap in Modals | Keyboard focus stays in open modal | P0 | S | — |
| F-1089 | Skip Link | "Skip to main content" for screen readers | P0 | S | — |
| F-1090 | Error Boundary | Friendly error page on JS crash | P0 | M | — |
| F-1091 | Network Status Banner | "You're offline" indicator | P1 | S | F-0030 |
| F-1092 | Breadcrumb Navigation | Location trail in nested views | P0 | S | — |
| F-1093 | Drag Scroll | Drag to scroll horizontal panels | P1 | S | — |
| F-1094 | Multi-Select Keyboard | Shift+click range select | P1 | S | F-0861 |
| F-1095 | Right-Click Context Menu | Context menu on QR cards | P1 | M | — |
| F-1096 | Panel Resize Handles | Drag to resize left/right panels | P1 | M | — |
| F-1097 | Zoom Controls on Preview | Zoom in/out on QR preview canvas | P0 | S | — |
| F-1098 | Copy URL Button | One-click copy QR short URL | P0 | S | — |
| F-1099 | Print Button | Direct browser print shortcut | P0 | S | — |
| F-1100 | Share Native API | Native OS share sheet from app | P1 | M | — |

---

## MODULE 25 — RESPONSIVE & DEVICE (F-1101 – F-1130)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1101 | 320px Minimum Width | Fully functional on small phones | P0 | M | — |
| F-1102 | 4K / Ultra-Wide Layout | Uses full width on large monitors | P1 | M | — |
| F-1103 | Tablet Split View | Two-panel layout on tablets (≥768px) | P0 | M | — |
| F-1104 | Foldable Device Support | Layout adapts to fold/unfold | P2 | L | — |
| F-1105 | Landscape Orientation | Proper landscape layout on phones | P1 | M | — |
| F-1106 | Safe-Area Insets | Respect notch and home-bar insets | P0 | S | — |
| F-1107 | Touch Gesture Support | Swipe, pinch-zoom, long-press | P1 | M | — |
| F-1108 | Pointer vs Touch Optimization | Hover states only on pointer devices | P0 | S | — |
| F-1109 | Container Queries | Component-level responsive styling | P1 | M | — |
| F-1110 | Print Stylesheet | Clean print layout for all pages | P1 | M | — |
| F-1111 | High DPI Assets | 2× images for retina displays | P0 | S | — |
| F-1112 | Dark Mode Media Query | Auto dark mode from OS preference | P0 | S | — |
| F-1113 | Reduced Motion Media Query | Disable animations by OS preference | P0 | S | — |
| F-1114 | Hover State Accessibility | No critical info hidden in hover only | P0 | S | — |
| F-1115 | Fluid Typography | clamp()-based responsive font sizes | P1 | M | — |
| F-1116 | Fluid Spacing | clamp()-based responsive spacing | P1 | M | — |
| F-1117 | Touch Target Minimum | 44×44px minimum touch targets | P0 | S | — |
| F-1118 | Viewport Meta | Correct viewport meta tag setup | P0 | S | — |
| F-1119 | CSS Grid Masonry | Masonry layout for template gallery | P2 | M | — |
| F-1120 | Overflow Scroll Snap | Smooth scroll-snap for carousels | P1 | S | — |
| F-1121 | iOS Standalone PWA Style | Status bar styling in standalone mode | P1 | S | F-0030 |
| F-1122 | Android PWA Edge-to-Edge | Edge-to-edge content in Android PWA | P1 | S | F-0030 |
| F-1123 | TV / 10ft Layout | Basic support for large screen TV view | P2 | L | — |
| F-1124 | Compact View Mode | Dense list view for power users | P2 | M | — |
| F-1125 | Font Size Controls | User-adjustable base font size | P1 | M | — |
| F-1126 | Zoom Level Stability | Layout holds at browser 200% zoom | P0 | M | — |
| F-1127 | Pointer Events None Protection | No accidental taps on overlays | P0 | S | — |
| F-1128 | Overscroll Behavior | Prevent rubber-band scroll issues | P1 | S | — |
| F-1129 | Input Zoom Prevention | Prevent iOS input zoom (font-size ≥16px) | P0 | S | — |
| F-1130 | Text Overflow Handling | Ellipsis / truncation on all strings | P0 | S | — |

---

## MODULE 26 — THEMING (F-1131 – F-1155)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1131 | Light Theme | Default light color scheme | P0 | S | — |
| F-1132 | Dark Theme | Full dark color scheme | P0 | M | — |
| F-1133 | Auto Theme | Follow OS dark/light preference | P0 | S | F-1132 |
| F-1134 | Theme Toggle Button | Manual override in header | P0 | S | F-1133 |
| F-1135 | Accent Theme: Blue | Blue primary accent | P0 | S | — |
| F-1136 | Accent Theme: Purple | Purple accent | P1 | S | — |
| F-1137 | Accent Theme: Green | Green accent | P1 | S | — |
| F-1138 | Accent Theme: Orange | Orange accent | P1 | S | — |
| F-1139 | Accent Theme: Red | Red accent | P1 | S | — |
| F-1140 | Accent Theme: Teal | Teal accent | P2 | S | — |
| F-1141 | Accent Theme: Pink | Pink accent | P2 | S | — |
| F-1142 | Accent Theme: Yellow | Yellow/gold accent | P2 | S | — |
| F-1143 | Accent Theme: Indigo | Indigo accent | P2 | S | — |
| F-1144 | Accent Theme: Neutral | Black/gray accent | P2 | S | — |
| F-1145 | High-Contrast Mode | WCAG AAA contrast theme | P1 | M | — |
| F-1146 | Dyslexia-Friendly Font | OpenDyslexic or Lexie Readable font | P1 | S | — |
| F-1147 | Font Size Controls | User adjustable sm/md/lg/xl text | P1 | M | — |
| F-1148 | Reduced Motion Mode | All animations disabled | P0 | S | F-0087 |
| F-1149 | Custom Theme Builder | Advanced users set any CSS variable | P2 | L | — |
| F-1150 | Theme Preview Panel | Live-preview theme changes | P1 | M | F-1134 |
| F-1151 | Per-Workspace Theme | Different theme per workspace | P2 | M | F-0810 |
| F-1152 | Theme Export/Import | Export theme settings as JSON | P2 | S | — |
| F-1153 | Forced Color Mode Support | Windows Forced Colors / High Contrast | P1 | M | — |
| F-1154 | Focus Ring Style | Custom visible focus ring per theme | P0 | S | — |
| F-1155 | Color Blindness Simulation | Preview app under protanopia/deuteranopia | P2 | M | — |

---

## MODULE 27 — ACCESSIBILITY (F-1156 – F-1185)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1156 | Full Keyboard Navigation | All actions reachable via keyboard | P0 | L | — |
| F-1157 | ARIA Labels on All Controls | Screen-reader labels on every interactive element | P0 | M | — |
| F-1158 | ARIA Live Regions | Announce dynamic updates to screen readers | P0 | M | — |
| F-1159 | Focus Management | Focus moves logically after modal/action | P0 | M | — |
| F-1160 | Skip-to-Main Link | Keyboard shortcut to skip nav | P0 | S | — |
| F-1161 | Alt Text on All Images | Descriptive alt text | P0 | S | — |
| F-1162 | Alt Text Prompt for Uploads | Prompt user to add alt text on image upload | P1 | S | — |
| F-1163 | Caption Support for Videos | Captions on all embedded video content | P1 | M | — |
| F-1164 | Color Contrast ≥ 4.5:1 | WCAG AA contrast on all text | P0 | M | — |
| F-1165 | Color Not Sole Indicator | Status also shown via text/icon | P0 | S | — |
| F-1166 | Error Identified in Text | Error messages in text, not only color | P0 | S | — |
| F-1167 | Form Labels Explicit | All form inputs have explicit <label> | P0 | S | — |
| F-1168 | Touch Target Size | 44×44px minimum targets | P0 | S | F-1117 |
| F-1169 | Heading Hierarchy | Logical h1→h2→h3 structure | P0 | S | — |
| F-1170 | Landmark Regions | <main>, <nav>, <aside>, <header>, <footer> | P0 | S | — |
| F-1171 | Reading Order = DOM Order | Visual and DOM order match | P0 | S | — |
| F-1172 | Accessible Tables | <th> and scope attributes on data tables | P1 | S | — |
| F-1173 | Dialog Role on Modals | role="dialog" + aria-labelledby | P0 | S | — |
| F-1174 | Accessible Drag-Drop Fallback | Keyboard alternative for all drag-drop | P1 | M | F-1070 |
| F-1175 | Accessible Color Picker | Keyboard-operable color picker | P0 | M | — |
| F-1176 | Error Summary List | On submit, list all errors at top | P1 | M | F-1076 |
| F-1177 | Session Timeout Warning | Warn user 2 min before timeout | P1 | M | F-0801 |
| F-1178 | No Keyboard Traps | Focus is never trapped unintentionally | P0 | S | — |
| F-1179 | Accessible Tooltips | Tooltip via aria-describedby | P0 | S | — |
| F-1180 | Accessible Date Picker | Screen-reader operable date picker | P1 | M | F-0607 |
| F-1181 | Accessible Charts | Chart data also in table form | P1 | M | F-0452 |
| F-1182 | Accessible Drag Slider | Slider with aria-valuemin/max/now | P1 | S | — |
| F-1183 | Accessible Video Player | Custom controls with keyboard support | P2 | M | F-0556 |
| F-1184 | Accessibility Statement Page | Public VPAT/accessibility conformance | P1 | M | — |
| F-1185 | a11y CI Testing | axe-core checks in CI pipeline | P0 | M | F-1045 |

---

## MODULE 28 — INTERNATIONALIZATION (F-1186 – F-1215)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1186 | i18n Framework | next-intl setup for all UI strings | P0 | M | — |
| F-1187 | English (en) | Base language | P0 | S | F-1186 |
| F-1188 | Spanish (es) | Spanish translation | P1 | M | F-1186 |
| F-1189 | French (fr) | French translation | P1 | M | F-1186 |
| F-1190 | German (de) | German translation | P1 | M | F-1186 |
| F-1191 | Portuguese (pt-BR) | Brazilian Portuguese | P1 | M | F-1186 |
| F-1192 | Italian (it) | Italian translation | P1 | M | F-1186 |
| F-1193 | Dutch (nl) | Dutch translation | P2 | M | F-1186 |
| F-1194 | Russian (ru) | Russian translation | P2 | M | F-1186 |
| F-1195 | Arabic (ar) | Arabic + RTL layout | P1 | L | F-1186 |
| F-1196 | Hebrew (he) | Hebrew + RTL layout | P2 | L | F-1186 |
| F-1197 | Japanese (ja) | Japanese translation | P1 | M | F-1186 |
| F-1198 | Chinese Simplified (zh-CN) | Simplified Chinese | P1 | M | F-1186 |
| F-1199 | Chinese Traditional (zh-TW) | Traditional Chinese | P2 | M | F-1186 |
| F-1200 | Korean (ko) | Korean translation | P2 | M | F-1186 |
| F-1201 | Hindi (hi) | Hindi translation | P1 | M | F-1186 |
| F-1202 | Turkish (tr) | Turkish translation | P2 | M | F-1186 |
| F-1203 | Polish (pl) | Polish translation | P2 | M | F-1186 |
| F-1204 | Swedish (sv) | Swedish translation | P2 | M | F-1186 |
| F-1205 | RTL Layout Support | Right-to-left layout for Arabic/Hebrew | P1 | L | F-1195 |
| F-1206 | Locale-Aware Number Format | 1,234.56 vs 1.234,56 by locale | P1 | S | F-1186 |
| F-1207 | Locale-Aware Date Format | DD/MM/YYYY vs MM/DD/YYYY | P1 | S | F-1186 |
| F-1208 | Locale-Aware Currency | Show prices in local currency | P2 | M | F-1207 |
| F-1209 | Language Switcher | Header dropdown to change language | P0 | S | F-1186 |
| F-1210 | Auto-Detect Language | Detect browser language on first visit | P1 | S | F-1186 |
| F-1211 | Translated SEO Pages | Localized landing pages per language | P1 | L | F-1186 |
| F-1212 | hreflang Tags | Proper hreflang on all localized pages | P0 | M | F-1211 |
| F-1213 | Localized Sitemap | Separate sitemap entries per language | P1 | M | F-1211 |
| F-1214 | Community Translation Platform | Crowdin-style community contributions | P2 | L | — |
| F-1215 | Locale URL Structure | /en/ /es/ /fr/ URL prefixes | P0 | M | F-1186 |

---

## MODULE 29 — PWA & OFFLINE (F-1216 – F-1240)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1216 | PWA Manifest | Installable web app manifest | P0 | S | — |
| F-1217 | Service Worker | Offline caching via service worker | P0 | M | — |
| F-1218 | Install Prompt | Custom "Add to home screen" prompt | P1 | M | F-1216 |
| F-1219 | Offline QR Generator | Generate static QRs without internet | P0 | M | F-1217 |
| F-1220 | Offline Page Cache | App shell and key pages cached | P0 | M | F-1217 |
| F-1221 | Background Sync | Queue actions offline; sync on reconnect | P1 | L | F-1217 |
| F-1222 | Push Notifications | Opt-in scan alerts and updates | P1 | L | F-1217 |
| F-1223 | Push Notification Opt-In Flow | Friendly permission request UI | P1 | M | F-1222 |
| F-1224 | App Shortcuts | Quick-create shortcuts from home screen | P1 | M | F-1216 |
| F-1225 | Share Target | Receive shared URLs for QR creation | P1 | M | F-1217 |
| F-1226 | Share Extension | Share QR to other apps from within | P1 | M | F-1217 |
| F-1227 | File Handler | Open .qrs or .json files in app | P2 | M | F-1217 |
| F-1228 | Badging API | Show unread notification count on icon | P2 | S | F-1222 |
| F-1229 | Periodic Background Sync | Refresh analytics in background | P2 | L | F-1217 |
| F-1230 | Offline Indicator UI | Banner when app is offline | P0 | S | F-1091 |
| F-1231 | Cached Analytics Snapshot | Show last-known analytics when offline | P2 | M | F-0451 |
| F-1232 | PWA Update Prompt | Notify user of new version | P1 | M | F-1217 |
| F-1233 | Splash Screen | Branded loading screen for PWA install | P1 | S | F-1216 |
| F-1234 | iOS PWA Meta Tags | apple-mobile-web-app-* meta tags | P0 | S | F-1216 |
| F-1235 | Maskable Icon | Full-bleed icon for Android PWA | P0 | S | F-1216 |
| F-1236 | Offline Scan History | Access scan history cached offline | P2 | M | F-0257 |
| F-1237 | IndexedDB Queue | Queue API calls offline in IndexedDB | P2 | L | F-1221 |
| F-1238 | Storage Quota Warning | Warn user when device storage is low | P2 | S | F-1217 |
| F-1239 | Background Fetch API | Download large exports in background | P2 | L | F-1217 |
| F-1240 | Workbox Integration | Workbox for service worker management | P1 | M | F-1217 |

---

## MODULE 30 — PERFORMANCE (F-1241 – F-1270)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1241 | Code Splitting | Route-level JS code splitting | P0 | M | — |
| F-1242 | Edge Caching | Cache responses at CDN edge | P0 | M | Edge fn |
| F-1243 | Image CDN | Serve images via optimized CDN | P0 | M | S3 |
| F-1244 | Next.js Image Optimization | next/image for all images | P0 | S | — |
| F-1245 | Web Worker for QR Gen | Generate heavy QRs off main thread | P1 | M | — |
| F-1246 | Virtualized List (React) | Only render visible QR cards | P1 | M | F-1081 |
| F-1247 | Link Prefetching | Prefetch route data on hover | P1 | S | — |
| F-1248 | Core Web Vitals Monitoring | Track LCP/CLS/INP in production | P0 | M | Analytics |
| F-1249 | Performance Budget CI | Fail CI if bundle exceeds budget | P1 | M | CI |
| F-1250 | Tree Shaking | Unused code eliminated at build | P0 | S | — |
| F-1251 | CSS Purging | Remove unused Tailwind CSS | P0 | S | — |
| F-1252 | Font Subsetting | Serve only needed Unicode ranges | P1 | M | — |
| F-1253 | Critical CSS Inline | Inline above-fold CSS | P1 | M | — |
| F-1254 | HTTP/3 / QUIC Support | CDN HTTP/3 for faster connections | P1 | S | — |
| F-1255 | Brotli Compression | Serve assets with Brotli compression | P0 | S | — |
| F-1256 | DNS Prefetch | Prefetch DNS for external domains | P1 | S | — |
| F-1257 | Resource Hints | preconnect / preload for key assets | P1 | S | — |
| F-1258 | Cache-Control Headers | Aggressive caching for static assets | P0 | S | — |
| F-1259 | DB Query Optimization | Indexes on all hot query paths | P0 | M | DB |
| F-1260 | Redis Cache Layer | Cache frequent DB reads in Redis | P0 | M | Redis |
| F-1261 | Response Compression | gzip/Brotli on API responses | P0 | S | — |
| F-1262 | Lighthouse Mobile ≥ 95 | Target LH performance score | P0 | L | — |
| F-1263 | Bundle Analyzer | Visual bundle size report in CI | P1 | M | CI |
| F-1264 | Eager vs Lazy Loading | Lazy load off-screen components | P1 | M | — |
| F-1265 | Redirect 301 Latency < 50ms | Dynamic QR redirect under 50ms | P0 | M | F-0403 |
| F-1266 | API Response < 200ms p95 | p95 API latency budget | P0 | L | — |
| F-1267 | Stale-While-Revalidate | Serve stale cache + revalidate | P1 | M | F-1242 |
| F-1268 | Priority Hints API | fetchpriority on critical resources | P2 | S | — |
| F-1269 | Speculation Rules API | Prefetch next pages speculatively | P2 | S | — |
| F-1270 | Real User Monitoring (RUM) | Collect performance from real users | P1 | M | F-1248 |

---

## MODULE 31 — SEO PAGES (F-1271 – F-1310)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1271 | QR Type Landing Pages | Unique page per QR type (50+ pages) | P0 | L | — |
| F-1272 | Industry Use Case Pages | Page per vertical (restaurant, retail, etc.) | P1 | L | — |
| F-1273 | Use Case Pages | Page per specific use case | P1 | L | — |
| F-1274 | Localized SEO Pages | Each type page × 30 languages | P2 | L | F-1211 |
| F-1275 | Programmatic Page Generator | Auto-generate pages from data templates | P1 | L | — |
| F-1276 | Unique Copy per Page | No duplicate content across pages | P0 | L | F-1275 |
| F-1277 | FAQ Schema on Each Page | JSON-LD FAQPage markup | P0 | M | — |
| F-1278 | HowTo Schema | JSON-LD HowTo markup on guides | P1 | M | — |
| F-1279 | Internal Linking Engine | Auto-link related pages | P1 | L | F-1275 |
| F-1280 | Pillar Page: QR Code Guide | Comprehensive QR guide pillar | P0 | L | — |
| F-1281 | Pillar Page: Dynamic QR | Dynamic QR comprehensive guide | P0 | L | — |
| F-1282 | Pillar Page: QR Analytics | Analytics features pillar | P1 | L | — |
| F-1283 | Comparison Pages | "QR Studio vs [competitor]" pages | P1 | L | — |
| F-1284 | Alternative Pages | "Best [competitor] alternative" pages | P1 | L | — |
| F-1285 | Pricing Page SEO | Optimized pricing page | P0 | M | F-1017 |
| F-1286 | Features Page | Full features overview page | P0 | M | — |
| F-1287 | Homepage SEO | Optimized homepage with rich content | P0 | L | — |
| F-1288 | About Page | Company story + trust signals | P0 | M | — |
| F-1289 | Blog Category Pages | Paginated blog categories | P1 | M | F-1320 |
| F-1290 | Glossary 100+ Terms | QR/link/marketing glossary | P1 | L | F-1320 |
| F-1291 | Template Gallery SEO | Indexable template showcase | P1 | M | F-0111 |
| F-1292 | Case Study Pages | Customer success stories | P2 | L | — |
| F-1293 | Integration Pages | SEO page per integration | P2 | M | F-0956 |
| F-1294 | Changelog Page | Public product changelog | P1 | M | — |
| F-1295 | Help Center Index | Searchable help articles | P0 | L | F-1380 |
| F-1296 |404 Page SEO | Branded 404 with helpful links | P0 | S | — |
| F-1297 | OG Image Auto-Generation | Dynamic OG images per page | P0 | M | — |
| F-1298 | JSON-LD BreadcrumbList | Breadcrumb schema on all pages | P1 | M | — |
| F-1299 | JSON-LD SoftwareApplication | App schema on homepage | P1 | S | — |
| F-1300 | JSON-LD Organization | Organization schema | P1 | S | — |
| F-1301 | JSON-LD WebSite + SearchAction | Sitelinks searchbox schema | P1 | S | — |
| F-1302 | JSON-LD Product (Pricing) | Product/Offer schema on pricing | P1 | M | — |
| F-1303 | JSON-LD Article on Blog | Article schema on all blog posts | P1 | S | F-1320 |
| F-1304 | JSON-LD Review | Review/Rating schema on case studies | P2 | S | — |
| F-1305 | JSON-LD VideoObject | Video schema on tutorial pages | P2 | S | — |
| F-1306 | JSON-LD Event | Event schema on events module pages | P2 | S | — |
| F-1307 | Canonical Self-Reference | Canonical on every page | P0 | S | — |
| F-1308 | Robots Meta Per Page | noindex on private/admin pages | P0 | S | — |
| F-1309 | Social Proof Page | Reviews and user count page | P2 | M | — |
| F-1310 | Free Tools Page | SEO-optimized free tools hub | P1 | M | — |

---

## MODULE 32 — CONTENT HUB (F-1311 – F-1360)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1311 | Blog Platform | MDX-powered blog | P1 | L | — |
| F-1312 | Blog Post SEO Fields | Title, description, author, date | P1 | M | F-1311 |
| F-1313 | Blog Categories & Tags | Organized content taxonomy | P1 | M | F-1311 |
| F-1314 | Blog Search | Full-text blog search | P1 | M | F-1311 |
| F-1315 | Blog RSS Feed | RSS/Atom feed for blog | P1 | S | F-1311 |
| F-1316 | Blog Comment System | Giscus / Disqus comments | P2 | M | F-1311 |
| F-1317 | Blog Newsletter Opt-In | Subscribe from blog posts | P1 | M | F-1311 |
| F-1318 | Blog Author Profiles | Author bio + avatar | P1 | M | F-1311 |
| F-1319 | Blog Related Posts | Auto-suggest related articles | P2 | M | F-1311 |
| F-1320 | Help Center | Searchable knowledge base | P0 | L | — |
| F-1321 | Help Categories | Organized help article sections | P0 | M | F-1320 |
| F-1322 | Help Article Search | Instant search across all help | P0 | M | F-1320 |
| F-1323 | Help In-App Widget | Embedded help from within app | P1 | M | F-1320 |
| F-1324 | Getting Started Guides | Step-by-step beginner tutorials | P0 | M | F-1320 |
| F-1325 | Video Tutorial Library | Embedded how-to video series | P2 | L | — |
| F-1326 | Glossary Term Pages | Dedicated page per 100+ terms | P1 | L | F-1290 |
| F-1327 | Template Gallery Hub | Browse all 200+ templates | P0 | M | F-0111 |
| F-1328 | Comparison Page Generator | Auto-generate feature comparison tables | P2 | L | F-1283 |
| F-1329 | Case Study Template | Structured case study format | P2 | M | F-1292 |
| F-1330 | Press / Media Kit Page | Logos, screenshots, press info | P2 | M | — |
| F-1331 | Changelog (Public) | Auto-generated from commit notes | P1 | M | — |
| F-1332 | Changelog Subscribe | Email notify on new changelog | P2 | S | F-1331 |
| F-1333 | Webinars Page | Upcoming and recorded webinars | P2 | L | — |
| F-1334 | Community Forum | User discussion board | P2 | L | — |
| F-1335 | QR Code Use Case Library | 100+ use case articles | P1 | L | F-1275 |
| F-1336 | QR Code Statistics Page | Industry stats and research | P2 | M | — |
| F-1337 | Content Hub Sitemap | Dedicated sitemap for content | P1 | M | F-1340 |
| F-1338 | Content Hub RSS | Combined RSS for all content | P2 | M | F-1315 |
| F-1339 | Content Audit Tool | Internal tool for content freshness | P2 | L | — |
| F-1340 | Sitemap Index | XML sitemap index pointing to all sitemaps | P0 | M | — |
| F-1341 | Robots.txt Rules | Proper crawler directives | P0 | S | — |
| F-1342 | IndexNow Submission | Push new pages to search engines instantly | P1 | M | — |
| F-1343 | Affiliate Resource Page | Banners and copy for affiliates | P2 | M | F-1064 |
| F-1344 | Integration Docs Page | Public developer documentation | P1 | L | F-0952 |
| F-1345 | Status Page (public) | Current system status | P0 | M | F-1390 |
| F-1346 | Privacy Policy Page | GDPR-compliant privacy policy | P0 | S | — |
| F-1347 | Terms of Service Page | Legal terms page | P0 | S | — |
| F-1348 | Cookie Policy Page | Cookie usage policy | P0 | S | — |
| F-1349 | Accessibility Statement | WCAG conformance statement | P0 | S | F-1184 |
| F-1350 | Security Disclosure Page | Bug bounty and responsible disclosure | P1 | M | F-1415 |
| F-1351 | DPA Template | Data Processing Agreement download | P1 | M | F-1406 |
| F-1352 | GDPR FAQ Page | Answers to common privacy questions | P1 | M | — |
| F-1353 | Social Proof Wall | Reviews, logos, stat counters | P1 | M | — |
| F-1354 | Free QR Generator (homepage) | Free tool driving organic traffic | P0 | M | F-0001 |
| F-1355 | Affiliate Program Page | Explain affiliate terms and signup | P2 | M | F-1064 |
| F-1356 | Partner Directory | Listed agency/reseller partners | P2 | L | — |
| F-1357 | Feature Request Board | Upvote feature requests publicly | P2 | L | F-1391 |
| F-1358 | Public Roadmap | Visible upcoming features list | P2 | M | F-1357 |
| F-1359 | Product Hunt Launch Page | Campaign page for Product Hunt | P2 | M | — |
| F-1360 | Embeddable Content Widgets | Embeddable stats/glossary widgets | P2 | M | — |

---

## MODULE 33 — TECHNICAL SEO (F-1361 – F-1390)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1361 | XML Sitemap Index | Master sitemap linking all sitemaps | P0 | M | — |
| F-1362 | Dynamic Sitemap Generation | Auto-update sitemap on new content | P0 | M | F-1361 |
| F-1363 | Robots.txt Generator | Manage crawler rules | P0 | S | — |
| F-1364 | Canonical Tag Rules | Canonical on all duplicate/filtered URLs | P0 | M | — |
| F-1365 | hreflang Implementation | Correct hreflang for all language pairs | P0 | L | F-1212 |
| F-1366 | Structured Data Validator | In-app tool to validate JSON-LD | P1 | M | — |
| F-1367 | Breadcrumb Structured Data | BreadcrumbList on all inner pages | P1 | M | F-1092 |
| F-1368 | OG Tag Generator | Auto-generate OG tags per page | P0 | M | F-1297 |
| F-1369 | Twitter Card Tags | Auto-generate Twitter card tags | P0 | S | — |
| F-1370 | RSS Feed (main) | Full-content RSS for blog/changelog | P1 | S | F-1315 |
| F-1371 | IndexNow API | Notify Bing/Yandex on publish | P1 | M | F-1342 |
| F-1372 | Redirect Manager | Manage 301/302 redirects in app | P1 | M | DB |
| F-1373 | 404 Monitor | Detect and alert on broken inbound links | P1 | M | Logs |
| F-1374 | Crawl Budget Rules | noindex on thin/utility pages | P0 | M | — |
| F-1375 | Pagination rel=next/prev | Pagination signals for paginated pages | P1 | S | — |
| F-1376 | Lazy Loading Images SEO | Proper loading="lazy" without CLS | P0 | S | — |
| F-1377 | Core Web Vitals Tracking | LCP/CLS/INP targets in monitoring | P0 | M | F-1248 |
| F-1378 | Speed Score Goal ≥ 95 | Mobile Lighthouse target | P0 | L | F-1262 |
| F-1379 | Faceted URL Management | Canonical on filtered/sorted views | P1 | M | F-1364 |
| F-1380 | Internal Link Audit | Detect orphan pages and broken internal links | P2 | L | F-1279 |
| F-1381 | Structured Data Test CI | Run schema tests in deploy pipeline | P1 | M | — |
| F-1382 | Google Search Console Integration | Connect GSC for click/impression data | P2 | L | — |
| F-1383 | Bing Webmaster Integration | Connect Bing Webmaster Tools | P2 | M | — |
| F-1384 | Alt Text Audit | Detect images without alt text | P1 | M | F-1161 |
| F-1385 | Heading Audit | Detect missing/duplicate H1 | P1 | M | F-1169 |
| F-1386 | Meta Title Length Check | Warn on titles <30 or >60 chars | P1 | S | — |
| F-1387 | Meta Description Length Check | Warn on descriptions outside 50–160 chars | P1 | S | — |
| F-1388 | Page Speed CI Gate | Block deploy if Lighthouse drops below threshold | P1 | L | F-1249 |
| F-1389 | Soft 404 Detection | Detect pages returning 200 with error content | P2 | M | Logs |
| F-1390 | CDN Purge on Publish | Purge CDN cache on content update | P0 | M | F-1242 |

---

## MODULE 34 — SECURITY (F-1391 – F-1430)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1391 | Content Security Policy (CSP) | Prevent XSS via strict CSP headers | P0 | M | — |
| F-1392 | HSTS Header | Force HTTPS via HSTS | P0 | S | — |
| F-1393 | CSRF Protection | CSRF tokens on all state-changing requests | P0 | M | — |
| F-1394 | API Rate Limiting | Redis-backed rate limits per key/IP | P0 | M | Redis |
| F-1395 | CAPTCHA on Auth Forms | CAPTCHA on login/register | P0 | M | hCaptcha |
| F-1396 | Malicious URL Scanning | Block known malicious URLs on creation | P0 | M | Safebrowsing |
| F-1397 | Abuse Detection | Auto-flag unusual usage patterns | P1 | L | DB |
| F-1398 | Encrypted Secrets | Secrets stored in env vars / secrets manager | P0 | S | — |
| F-1399 | Secure File Uploads | File type + size validation; virus scan | P0 | M | S3, ClamAV |
| F-1400 | Dependency Scanning | Snyk/Dependabot in CI | P0 | M | CI |
| F-1401 | Full Audit Log | All mutations logged with user/IP/time | P0 | M | F-0820 |
| F-1402 | Bug Bounty Page | Responsible disclosure program | P1 | S | — |
| F-1403 | SQL Injection Prevention | Parameterized queries only | P0 | S | — |
| F-1404 | Path Traversal Prevention | Sanitize all file path inputs | P0 | S | — |
| F-1405 | Brute Force Protection | Lock account after N failed logins | P0 | M | Redis |
| F-1406 | Data Encryption at Rest | Encrypt sensitive DB fields | P0 | M | DB |
| F-1407 | Data Encryption in Transit | TLS 1.3 on all connections | P0 | S | — |
| F-1408 | Secure Cookie Attributes | HttpOnly, SameSite, Secure flags | P0 | S | — |
| F-1409 | JWT Expiry + Refresh | Short-lived access + refresh token flow | P0 | M | F-0801 |
| F-1410 | Password Strength Enforcement | Minimum length + complexity rules | P0 | S | F-0801 |
| F-1411 | Pwned Password Check | Block passwords in HaveIBeenPwned | P1 | S | HIBP API |
| F-1412 | X-Frame-Options | Prevent clickjacking via iframes | P0 | S | — |
| F-1413 | Subresource Integrity (SRI) | SRI hashes on CDN assets | P1 | S | — |
| F-1414 | Security Headers Score A+ | Mozilla Observatory A+ rating | P0 | M | — |
| F-1415 | Vulnerability Disclosure Policy | Public security contact | P0 | S | — |
| F-1416 | Penetration Test | Annual third-party pen test | P2 | L | — |
| F-1417 | SOC 2 Roadmap | Controls aligned to SOC 2 Type II | P2 | L | — |
| F-1418 | IP Ban List | Block repeated abusive IPs | P1 | M | Redis |
| F-1419 | QR Content Blocklist | Block QRs pointing to blocked domains | P0 | M | DB |
| F-1420 | SSRF Prevention | Block server-side requests to internal IPs | P0 | M | — |
| F-1421 | Output Encoding | HTML-encode all user content in render | P0 | S | — |
| F-1422 | File Download Safety | Scan downloads before serving | P1 | M | F-1399 |
| F-1423 | Admin 2FA Enforcement | Force 2FA for admin accounts | P0 | S | F-0806 |
| F-1424 | Security Changelog | Public log of security fixes | P2 | S | — |
| F-1425 | Threat Model Document | Internal documented threat model | P1 | M | — |
| F-1426 | OWASP Top 10 Review | Quarterly code review against OWASP | P1 | L | — |
| F-1427 | Runtime Security Monitoring | Detect anomalies in real-time | P2 | L | — |
| F-1428 | WAF Integration | Web Application Firewall via CDN | P1 | M | F-1242 |
| F-1429 | Signed Redirects | Verify redirect integrity with HMAC | P2 | M | F-0403 |
| F-1430 | Certificate Transparency Monitor | Alert on unauthorized TLS certs | P2 | M | — |

---

## MODULE 35 — PRIVACY & COMPLIANCE (F-1431 – F-1460)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1431 | GDPR Compliance | Full GDPR compliance framework | P0 | L | — |
| F-1432 | CCPA Compliance | California CCPA opt-out support | P1 | L | — |
| F-1433 | Cookie Consent Banner | Granular cookie consent per category | P0 | M | — |
| F-1434 | Cookie-Free Analytics Mode | Analytics without any cookies/fingerprinting | P1 | M | F-0467 |
| F-1435 | Data Retention Controls | Per-data-type retention period settings | P1 | M | DB |
| F-1436 | Right to Access | Export all personal data within 30 days | P0 | L | F-0837 |
| F-1437 | Right to Erasure | Delete all personal data on request | P0 | L | F-0838 |
| F-1438 | Right to Portability | Download data in machine-readable format | P1 | M | F-0837 |
| F-1439 | DPA Template | Downloadable Data Processing Agreement | P1 | M | F-1351 |
| F-1440 | Consent Audit Log | Log all consent events with timestamps | P1 | M | F-1433 |
| F-1441 | Privacy Impact Assessment | Internal DPIA documentation | P1 | M | — |
| F-1442 | Sub-Processor List | Public list of third-party processors | P1 | S | — |
| F-1443 | Data Minimization | Collect only necessary personal data | P0 | M | — |
| F-1444 | Pseudonymization | Hash PII in analytics storage | P1 | M | F-0490 |
| F-1445 | Cross-Border Transfer Safeguards | SCCs for EU-US data transfers | P1 | M | — |
| F-1446 | Privacy by Design Review | Quarterly privacy checklist | P1 | M | — |
| F-1447 | Opt-Out of Analytics | User can disable all tracking | P0 | M | F-0467 |
| F-1448 | Do Not Track Support | Respect DNT header | P1 | S | — |
| F-1449 | Privacy Policy Auto-Update | Notify users of policy changes | P1 | S | F-1346 |
| F-1450 | Children's Privacy (COPPA) | Block under-13 registration | P1 | M | F-0801 |
| F-1451 | Browser Storage Audit | Enumerate all cookies/local-storage used | P1 | M | — |
| F-1452 | Consent Management API | Programmatic consent get/set | P2 | M | F-1433 |
| F-1453 | LGPD Compliance (Brazil) | Brazil LGPD alignment | P2 | M | F-1431 |
| F-1454 | PIPL Compliance (China) | China PIPL alignment | P2 | L | — |
| F-1455 | App Tracking Transparency | iOS ATT prompt in native app | P2 | M | F-0030 |
| F-1456 | Accessibility Conformance Report | VPAT document | P1 | M | F-1184 |
| F-1457 | Third-Party Risk Assessment | Annual vendor security review | P2 | L | — |
| F-1458 | Data Breach Notification | 72-hour breach notification process | P0 | M | — |
| F-1459 | Privacy Dashboard for Users | Single page to view/manage all consents | P1 | M | F-1433 |
| F-1460 | GDPR Representative (EU) | Appointed EU representative | P2 | S | — |

---

## MODULE 36 — GROWTH (F-1461 – F-1490)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1461 | Referral Program | Invite friends; earn credits | P1 | L | F-1030 |
| F-1462 | Referral Link Generator | Personal referral URL | P1 | M | F-1461 |
| F-1463 | Referral Dashboard | Track referrals and rewards | P1 | M | F-1461 |
| F-1464 | Affiliate Program | Commissions for affiliate partners | P2 | L | F-1064 |
| F-1465 | Affiliate Dashboard | Track clicks, conversions, payouts | P2 | M | F-1464 |
| F-1466 | Social Share Buttons | Share QR to social platforms | P0 | S | — |
| F-1467 | Share QR by Email | Email QR directly from app | P0 | S | Email |
| F-1468 | Share QR via WhatsApp | Native WhatsApp share deep-link | P1 | S | — |
| F-1469 | Public QR Gallery | Showcase public user QRs | P2 | L | — |
| F-1470 | Social Proof Counter | "10M+ QRs created" counter on homepage | P0 | S | DB |
| F-1471 | Testimonial Widget | Review carousel on landing page | P1 | M | — |
| F-1472 | G2 / Capterra Badge | Display verified review badges | P2 | S | — |
| F-1473 | Product Hunt Badge | Show PH badge after launch | P2 | S | — |
| F-1474 | Newsletter Signup | Email capture on blog/landing | P1 | M | Email |
| F-1475 | In-App Announcements | New feature announcements modal | P1 | M | DB |
| F-1476 | Upgrade Prompts (Contextual) | Upgrade prompt at relevant limit points | P0 | M | F-1033 |
| F-1477 | Free Tool Embedding | Embed free QR tool on partner sites | P2 | L | F-0968 |
| F-1478 | "Made with QR Studio" Badge | Optional badge on exported QRs | P1 | S | F-0225 |
| F-1479 | Email Drip Campaign | Onboarding and engagement emails | P0 | L | Email |
| F-1480 | Re-Engagement Email | Email inactive users with tips | P2 | M | Email |
| F-1481 | Feature Announcement Email | Email blast on major feature release | P2 | M | Email |
| F-1482 | NPS Survey | In-app NPS survey to measure satisfaction | P1 | M | F-0612 |
| F-1483 | CSAT Survey | Post-support satisfaction survey | P2 | M | F-0612 |
| F-1484 | Viral QR Watermark | Promote via QR exports (opt-in) | P2 | S | F-1478 |
| F-1485 | Growth Dashboard (Internal) | Signup, conversion, churn metrics | P1 | M | DB |
| F-1486 | A/B Test Landing Pages | Test different homepage variants | P2 | L | F-0591 |
| F-1487 | Exit-Intent (Subtle) | Non-intrusive exit offer on pricing page | P2 | M | — |
| F-1488 | Scan-to-Follow Social QR | Grow social following via QR | P2 | S | F-0017 |
| F-1489 | Case Study Submission | Let customers submit own case studies | P2 | M | F-1329 |
| F-1490 | Launch Partner Program | Discounted plans for launch partners | P2 | M | F-1027 |

---

## MODULE 37 — SUPPORT (F-1491 – F-1520)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1491 | Help Center (hosted) | Self-serve searchable help articles | P0 | L | F-1320 |
| F-1492 | In-App Chat (Intercom/Crisp) | Live chat support widget | P1 | M | Third-party |
| F-1493 | Ticket Submission Form | Submit support ticket from app | P0 | M | DB |
| F-1494 | Ticket Status Page | User views their ticket status | P0 | M | DB |
| F-1495 | Admin Ticket Queue | Agents view and resolve tickets | P0 | M | F-1047 |
| F-1496 | Ticket Auto-Responder | AI-suggested reply from help articles | P2 | L | LLM API |
| F-1497 | Status Page (uptime) | Public uptime and incident history | P0 | M | Monitoring |
| F-1498 | Status Subscribe | Subscribe to status page updates | P1 | S | F-1497 |
| F-1499 | Incident Announcement | Post incident updates to status page | P0 | S | F-1497 |
| F-1500 | Feedback Widget | Thumbs up/down on any screen | P1 | S | DB |
| F-1501 | Feature Request Board | Upvote and suggest features | P2 | L | DB |
| F-1502 | Feature Vote Counter | Show vote count per request | P2 | S | F-1501 |
| F-1503 | Public Roadmap | Show planned/in-progress/shipped items | P2 | M | F-1501 |
| F-1504 | Help Article Was This Helpful | Thumbs on help articles | P1 | S | F-1491 |
| F-1505 | Help Article Search Analytics | Track which help topics are searched | P1 | M | F-1491 |
| F-1506 | Contextual Help Beacon | "?" button linking to relevant help | P1 | M | F-1491 |
| F-1507 | SLA Response Time Goals | P0 1hr / P1 8hr / P2 24hr targets | P1 | S | — |
| F-1508 | Priority Support for Paid | Faster response for Pro/Business | P1 | M | F-1002 |
| F-1509 | Dedicated CSM (Enterprise) | Named customer success manager | P2 | M | F-1004 |
| F-1510 | Onboarding Call Booking | Book onboarding call via Calendly embed | P2 | M | F-0043 |
| F-1511 | Video Tutorial Requests | Users request specific tutorial topics | P2 | S | F-1325 |
| F-1512 | Community Q&A | Peer-to-peer help forum | P2 | L | F-1334 |
| F-1513 | Support Chat Bot | FAQ chatbot before escalating | P2 | L | LLM API |
| F-1514 | Bulk Ticket Import | Import tickets from old system | P2 | M | F-1495 |
| F-1515 | Ticket Canned Responses | Saved replies for common issues | P2 | M | F-1495 |
| F-1516 | Ticket Merge | Merge duplicate tickets | P2 | S | F-1495 |
| F-1517 | Ticket Tags | Categorize tickets by tag | P2 | S | F-1495 |
| F-1518 | Support Analytics | Ticket volume, CSAT, response times | P2 | M | F-1495 |
| F-1519 | Escalation Path | Auto-escalate P0 tickets after 1hr | P1 | M | F-1507 |
| F-1520 | Bug Report Wizard | Structured bug report with screenshots | P1 | M | F-1493 |

---

## MODULE 38 — MOBILE APPS (F-1521 – F-1555)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1521 | React Native / Expo App | iOS + Android companion app | P2 | L | F-0951 |
| F-1522 | App: QR Generator | Full QR generation on mobile app | P2 | L | F-1521 |
| F-1523 | App: QR Scanner | Camera scanner in app | P2 | M | F-1521 |
| F-1524 | App: QR Library | Browse and manage saved QRs | P2 | M | F-1521 |
| F-1525 | App: Analytics View | View scan analytics in app | P2 | M | F-1521 |
| F-1526 | App: Dynamic QR Edit | Edit dynamic QR destination from app | P2 | M | F-1521 |
| F-1527 | App: Offline Mode | Generate + scan offline | P2 | L | F-1521 |
| F-1528 | App: Push Notifications | Receive scan alerts on phone | P2 | M | F-1222 |
| F-1529 | App: Biometric Auth | Face ID / fingerprint login | P2 | M | F-1521 |
| F-1530 | App: Dark Mode | Native dark mode support | P2 | S | F-1521 |
| F-1531 | App: Share Extension | Share URL from any app to generate QR | P2 | M | F-1226 |
| F-1532 | App: Home Screen Widget | Latest scan count widget | P2 | L | F-1521 |
| F-1533 | App: Lock Screen Widget | Quick QR scan from lock screen | P2 | L | F-1521 |
| F-1534 | App: Watch Companion (WatchOS) | Scan count on Apple Watch | P2 | L | F-1521 |
| F-1535 | App: Haptic Feedback | Native haptics on actions | P2 | S | F-1521 |
| F-1536 | App: Dynamic Island | Live scan count in Dynamic Island (iOS) | P2 | L | F-1521 |
| F-1537 | App: iPad Optimized | Split-screen iPad layout | P2 | M | F-1521 |
| F-1538 | App: Tablet Multi-Column | Multi-column layout on large tablets | P2 | M | F-1521 |
| F-1539 | App Store Optimization | ASO: keywords, screenshots, A/B icons | P2 | M | F-1521 |
| F-1540 | App: Auto-Update Check | Prompt user to update on launch | P2 | S | F-1521 |
| F-1541 | App: Onboarding Slides | First-launch onboarding carousel | P2 | M | F-1521 |
| F-1542 | App: Settings Screen | Account, notifications, preferences | P2 | M | F-1521 |
| F-1543 | App: Feedback Button | In-app feedback direct to support | P2 | S | F-1500 |
| F-1544 | App: Event Check-In Mode | Dedicated check-in screen | P2 | M | F-0757 |
| F-1545 | App: Restaurant Mode | Quick table QR scanner for staff | P2 | M | F-0709 |
| F-1546 | App: Batch Scan Mode | Multi-code scan session | P2 | M | F-0256 |
| F-1547 | App: Location Services | Optional location on scan for analytics | P2 | M | F-0456 |
| F-1548 | App: NFC Tag Write | Write QR URL to NFC tag | P2 | L | — |
| F-1549 | App: Print via AirPrint | Print QR from mobile via AirPrint | P2 | M | F-1521 |
| F-1550 | App: Siri Shortcuts | "Hey Siri, create a QR for…" | P2 | L | F-1521 |
| F-1551 | App: Google Assistant | Assistant action for QR creation | P2 | L | F-1521 |
| F-1552 | App: In-App Purchase (Upgrade) | Upgrade plan from within app | P2 | M | F-1014 |
| F-1553 | App: Crash Reporting | Sentry crash tracking in app | P2 | M | F-1560 |
| F-1554 | App: Beta TestFlight | TestFlight beta distribution | P2 | M | F-1521 |
| F-1555 | App: Google Play Beta | Play Store open beta channel | P2 | M | F-1521 |

---

## MODULE 39 — QUALITY & OPS (F-1556 – F-1600)

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1556 | Vitest Unit Tests | Component and utility unit tests | P0 | L | — |
| F-1557 | Playwright E2E Tests | Full user journey E2E tests | P0 | L | — |
| F-1558 | Visual Regression Tests | Screenshot diff tests for UI | P1 | L | F-1557 |
| F-1559 | a11y Tests in CI | axe-core checks on every PR | P0 | M | F-1185 |
| F-1560 | Error Tracking (Sentry) | Capture and alert on runtime errors | P0 | M | Sentry |
| F-1561 | Structured Logging | JSON logs for all server actions | P0 | M | — |
| F-1562 | Log Aggregation | Centralized log search (Loki/Datadog) | P1 | M | F-1561 |
| F-1563 | Uptime Monitoring | External ping monitor with alerts | P0 | S | — |
| F-1564 | Synthetic Monitoring | Scheduled Playwright tests in production | P1 | M | F-1557 |
| F-1565 | DB Automated Backups | Daily Postgres backups to S3 | P0 | M | DB, S3 |
| F-1566 | Backup Restore Drill | Monthly restore test | P1 | M | F-1565 |
| F-1567 | Staging Environment | Full-stack staging on subdomain | P0 | M | — |
| F-1568 | Blue-Green Deployments | Zero-downtime production deploys | P1 | L | CI/CD |
| F-1569 | Feature Branch Previews | Per-PR preview deploy | P1 | M | CI/CD |
| F-1570 | Lighthouse CI | Block PR on score regression | P0 | M | F-1262 |
| F-1571 | TypeScript Strict Mode | Zero any, full type coverage | P0 | M | — |
| F-1572 | ESLint + Prettier | Code style enforcement in CI | P0 | S | — |
| F-1573 | Husky Pre-Commit Hooks | Run lint/test before commit | P0 | S | — |
| F-1574 | Dependabot | Auto-update dependencies | P0 | S | — |
| F-1575 | Snyk Security Scan | Dependency vulnerability scanning | P0 | M | F-1400 |
| F-1576 | Load Testing (k6) | Verify system under 10K concurrent users | P1 | L | — |
| F-1577 | Stress Testing | Push beyond normal load to find limits | P1 | L | F-1576 |
| F-1578 | Database Migration CI | Auto-run migrations on deploy | P0 | M | DB |
| F-1579 | Rollback Procedure | 1-click rollback from CI/CD | P1 | M | F-1568 |
| F-1580 | Secrets Scanning | Block secrets committed to repo | P0 | M | CI |
| F-1581 | Test Coverage Gate | Fail CI if coverage drops below 80% | P1 | M | F-1556 |
| F-1582 | Component Test (Storybook) | Storybook for UI component dev | P1 | L | — |
| F-1583 | Mock Service Worker | MSW for API mocking in tests | P1 | M | F-1556 |
| F-1584 | Database Seed Scripts | Deterministic test data seeds | P0 | M | DB |
| F-1585 | CI Pipeline (GitHub Actions) | Full CI workflow on PRs | P0 | M | — |
| F-1586 | CD Pipeline | Auto-deploy main to production | P0 | M | F-1585 |
| F-1587 | Environment Variables Management | Doppler/Vercel env management | P0 | S | — |
| F-1588 | Infrastructure as Code | Terraform/Pulumi for cloud resources | P2 | L | — |
| F-1589 | Container Registry | Docker images for all services | P2 | M | — |
| F-1590 | CDN Configuration | Vercel/Cloudflare CDN config | P0 | M | F-1242 |
| F-1591 | Health Check Endpoints | /api/health for all services | P0 | S | — |
| F-1592 | Graceful Shutdown | Server handles SIGTERM cleanly | P0 | S | — |
| F-1593 | Queue Dead-Letter | Failed jobs go to dead-letter queue | P1 | M | F-0357 |
| F-1594 | Multi-Region Deployment | Deploy to 3+ regions for resilience | P2 | L | — |
| F-1595 | Disaster Recovery Plan | Documented RTO/RPO targets | P1 | M | F-1565 |
| F-1596 | Chaos Engineering | Simulate failures in staging | P2 | L | F-1567 |
| F-1597 | API Contract Tests | Pact contract testing | P2 | L | F-0952 |
| F-1598 | Documentation Site | Developer docs (Starlight/Docusaurus) | P1 | L | F-0952 |
| F-1599 | Onboarding Dev Docs | Local dev setup in < 5 minutes | P0 | M | — |
| F-1600 | SLA Monitoring Dashboard | Track uptime SLA per customer tier | P2 | M | F-1563 |

---

## MODULE 40 — ADDITIONAL POWER FEATURES (F-1601 – F-1040+)

> *Extra features extending modules above to ensure 1,000+ total.*

| ID | Name | User Value | Priority | Complexity | Dependencies |
|---|---|---|---|---|---|
| F-1601 | QR Code Tester (Simulator) | Simulate scan on virtual devices | P1 | M | — |
| F-1602 | QR Reliability Scorer | Rate QR printability at given size | P1 | M | F-0165 |
| F-1603 | Print Size Recommender | Suggest minimum print size | P1 | S | F-0191 |
| F-1604 | QR Backup Download | Auto-backup all QRs monthly to email | P2 | M | F-0229 |
| F-1605 | QR Sharing Gallery (Public) | Opt-in public design showcase | P2 | L | F-1469 |
| F-1606 | Copy Design Settings | Copy style from one QR to another | P1 | S | — |
| F-1607 | Style Presets | Save and name custom style presets | P1 | M | F-0061 |
| F-1608 | Style Preset Library | Browse community style presets | P2 | M | F-1607 |
| F-1609 | Design History Timeline | Visual timeline of design changes | P2 | M | F-0870 |
| F-1610 | Smart Defaults by Type | Auto-pick best design for each QR type | P0 | M | F-0001 |
| F-1611 | Print Test Page | One-click print test-scan calibration | P1 | M | F-0235 |
| F-1612 | Ruler Overlay on Preview | Show size overlay in mm/inches | P1 | S | — |
| F-1613 | Pixel Grid Overlay | Show pixel grid for precision editing | P2 | S | — |
| F-1614 | Compare QR Encodings | Show data payload size for different types | P2 | S | — |
| F-1615 | Micro-QR Generator | Compact micro-QR for tiny spaces | P2 | M | — |
| F-1616 | rMQR Generator | Rectangular Micro QR Code | P2 | M | — |
| F-1617 | SQRC Generator | Secure QR Code (partial encryption) | P2 | L | — |
| F-1618 | Frame QR Generator | Frame QR Code with message area | P2 | M | — |
| F-1619 | QR + NFC Combo Asset | Single asset with QR + embedded NFC | P2 | L | F-1548 |
| F-1620 | NFC Tag Writer Web NFC | Write URL to NFC tag from browser | P2 | L | — |
| F-1621 | QR Code Merge | Merge two QR layers into one | P2 | L | — |
| F-1622 | Overlay Mode | Place QR overlay on brand image | P1 | M | F-0090 |
| F-1623 | Pantone Color Reference | Map brand Pantone to nearest digital | P2 | M | F-0933 |
| F-1624 | CMYK Preview Mode | Preview QR in CMYK gamut | P2 | M | F-0212 |
| F-1625 | Color Picker Eyedropper | Sample color from uploaded image | P1 | S | — |
| F-1626 | Gradient Angle Snap | Snap gradient angle to 15° increments | P1 | S | — |
| F-1627 | Custom Eye Color | Set independent color per finder eye | P1 | S | — |
| F-1628 | Per-Module Color | Individual module color randomization | P2 | L | — |
| F-1629 | QR as Font Character | Generate QR as embeddable character | P2 | L | — |
| F-1630 | Accessible QR Description | Auto-generate verbal QR description | P1 | S | F-0180 |

---

## SUMMARY

| Module | Feature Range | Count |
|---|---|---|
| 01 QR Types | F-0001 – F-0060 | 60 |
| 02 Design Engine | F-0061 – F-0110 | 50 |
| 03 Template Library | F-0111 – F-0160 | 50 |
| 04 AI Features | F-0161 – F-0200 | 40 |
| 05 Export Formats | F-0201 – F-0250 | 50 |
| 06 Scanner | F-0251 – F-0300 | 50 |
| 07 Barcode Generator | F-0301 – F-0350 | 50 |
| 08 Bulk Tools | F-0351 – F-0400 | 50 |
| 09 Dynamic QR | F-0401 – F-0450 | 50 |
| 10 Analytics | F-0451 – F-0500 | 50 |
| 11 Link Management | F-0501 – F-0550 | 50 |
| 12 Landing Page Builder | F-0551 – F-0600 | 50 |
| 13 Forms & Leads | F-0601 – F-0650 | 50 |
| 14 Ecommerce & Payments | F-0651 – F-0700 | 50 |
| 15 Restaurant Suite | F-0701 – F-0750 | 50 |
| 16 Events | F-0751 – F-0800 | 50 |
| 17 Accounts & Teams | F-0801 – F-0850 | 50 |
| 18 Projects & Organization | F-0851 – F-0900 | 50 |
| 19 Collaboration | F-0901 – F-0930 | 30 |
| 20 Brand Kit | F-0931 – F-0955 | 25 |
| 21 API & Developers | F-0956 – F-1000 | 45 |
| 22 Billing | F-1001 – F-1035 | 35 |
| 23 Admin Dashboard | F-1036 – F-1065 | 30 |
| 24 UX Core | F-1066 – F-1100 | 35 |
| 25 Responsive & Device | F-1101 – F-1130 | 30 |
| 26 Theming | F-1131 – F-1155 | 25 |
| 27 Accessibility | F-1156 – F-1185 | 30 |
| 28 Internationalization | F-1186 – F-1215 | 30 |
| 29 PWA & Offline | F-1216 – F-1240 | 25 |
| 30 Performance | F-1241 – F-1270 | 30 |
| 31 SEO Pages | F-1271 – F-1310 | 40 |
| 32 Content Hub | F-1311 – F-1360 | 50 |
| 33 Technical SEO | F-1361 – F-1390 | 30 |
| 34 Security | F-1391 – F-1430 | 40 |
| 35 Privacy & Compliance | F-1431 – F-1460 | 30 |
| 36 Growth | F-1461 – F-1490 | 30 |
| 37 Support | F-1491 – F-1520 | 30 |
| 38 Mobile Apps | F-1521 – F-1555 | 35 |
| 39 Quality & Ops | F-1556 – F-1600 | 45 |
| 40 Additional Power Features | F-1601 – F-1630 | 30 |
| **TOTAL** | **F-0001 – F-1630** | **1,630** |

---
*Last updated: 2026-10-04 | QR Studio Platform v2.0 Feature Catalog*
