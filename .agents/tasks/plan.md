# Implementation Plan — QR Studio Phase 1 MVP Upgrade

## Project Context

- **Stack**: Vite 7 + React 19 + TypeScript (strict) + Tailwind CSS 3 + shadcn/ui (new-york style)
- **Path alias**: `@/` → `src/`
- **Build**: `npm run build` (`tsc -b && vite build`)
- **Dev server**: `npm run dev` (port 3000)
- **TypeScript**: strict mode with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`
- **QR library**: `qrcode` v1.5.4 — browser entry exports `create`, `toCanvas`, `toDataURL`, `toString`. `QRCode.create(text, opts)` returns `{ modules: BitMatrix, version, errorCorrectionLevel, maskPattern, segments }`. `BitMatrix.get(row, col)` returns a number (1 = dark module). The `modules.data` is a `Uint8Array` and `modules.size` is the grid dimension.
- **No new packages** — all implementations must use existing dependencies.

## Key Architecture Decisions

1. **QR state lifted to App.tsx** — `CustomizationOptions` and `QRState` live in `App.tsx` so `ExportPanel` and `QRPreview` share the same canvas ref and state. Avoids duplicate generation.
2. **canvas-qr.ts draws directly onto an `HTMLCanvasElement`** — avoids intermediate dataURL round-trips; `QRPreview` holds the single `canvasRef` and passes it to `ExportPanel` as a `RefObject`.
3. **TypeSelector rewritten with Tabs** — uses the existing `@/components/ui/tabs` component, not a new install. The collapsible mobile behavior uses a local `isExpanded` state toggled on the header click.
4. **Routing stays in App.tsx with react-router v7** — `BrowserRouter` is already in `main.tsx`; `App.tsx` becomes the route shell. `Home.tsx` gets the full generator. Landing pages are a single parameterized component.
5. **ThemeProvider from next-themes** — wraps the app in `App.tsx`, reads `class` strategy so Tailwind dark mode (`darkMode: ['class']`) works. Toggle cycles `light → dark → system`.
6. **SEO in index.html + SEOHead component** — static site so base meta goes in `index.html`; per-page meta is set imperatively via `useEffect` in `SEOHead.tsx` (there is no SSR, so this is the correct approach for a Vite SPA).
7. **URL state serialization** — `btoa(JSON.stringify(state))` encoded to `?state=` param, decoded on mount in `App.tsx`. Guard against stale/corrupt state with try/catch.
8. **Onboarding tour** — uses shadcn `Dialog` with `framer-motion` slide transitions between 3 steps.

---

## TypeScript Issues to Anticipate

1. **`QRCode.create` import**: `qrcode`'s default export is the Node.js server build. In the browser, import from the named package: `import QRCodeLib from 'qrcode'`. TypeScript uses `@types/qrcode` which types `create` as a named export: `import { create as createQRCode } from 'qrcode'`. In `canvas-qr.ts` use: `import { create as createQRCode } from 'qrcode'` and call `createQRCode(text, opts)`. The returned `QRCode.modules.get(row, col)` returns `number` (not boolean) — cast to `boolean` with `> 0`.

2. **`noUnusedLocals` / `noUnusedParameters`**: Every component prop and local variable must be used or prefixed with `_`. When forwarding event handlers that ignore the argument, use `_e`.

3. **`verbatimModuleSyntax`**: All type-only imports must use `import type { ... }`. Mixed value+type imports from the same module need two import statements or `import { type Foo, valueBar }` syntax.

4. **Canvas `roundRect`**: Available in `lib: ["ES2022", "DOM"]` (tsconfig already includes DOM). No polyfill needed. Call `ctx.roundRect(x, y, w, h, radius)` — available since Chrome 99 / Safari 15.4. For older support fallback, implement a `roundRectFallback(ctx, x, y, w, h, r)` helper that uses `arcTo`.

5. **`QRCodeErrorCorrectionLevel` type**: `@types/qrcode` exports `QRCodeErrorCorrectionLevel = "low"|"medium"|"quartile"|"high"|"L"|"M"|"Q"|"H"`. Our internal type uses `'L'|'M'|'Q'|'H'` — map accordingly when calling `createQRCode`.

6. **`framer-motion` variants with TypeScript**: `AnimatePresence` children must be wrapped in a component with a `key` prop. Use `motion.div` with `key` on the wrapper, not the conditional.

7. **`next-themes` ThemeProvider**: Import `{ ThemeProvider }` from `'next-themes'`. The `attribute="class"` prop enables Tailwind dark mode. `useTheme()` returns `{ theme, setTheme, systemTheme }`.

8. **`react-router` v7**: Import `{ Routes, Route, Link, useNavigate, useSearchParams }` from `'react-router'` (not `'react-router-dom'` — the package is `react-router` v7 which unifies the API).

9. **`sonner` Toaster**: Import `{ Toaster }` from `'sonner'` and `{ toast }` from `'sonner'`. The `Toaster` component must be placed outside `Routes` but inside `ThemeProvider` for theme-aware styling.

10. **`QRData` index signature**: The existing `QRData` type is `{ [key: string]: string }`. This is compatible with `Record<string, string>` but TypeScript strict mode will complain about reading from it without checking for `undefined`. Use optional chaining: `data[field.name] ?? ''`.

---

## Step-by-step Plan

- [ ] 1. **Expand `src/types/index.ts`** — add 15 new QRType members, new interfaces, and extend QRTypeConfig.

  Add these members to the `QRType` union (after `'cv'`):
  `'mecard' | 'geo' | 'telegram' | 'zoom' | 'google_meet' | 'teams' | 'youtube' | 'linkedin' | 'spotify' | 'paypal' | 'upi' | 'bitcoin' | 'ethereum' | 'sepa' | 'google_review'`

  Add `category: 'popular' | 'social' | 'payments' | 'business' | 'utilities'` to the `QRTypeConfig` interface.

  Add these new interfaces:

  ```ts
  export type DotStyle = 'square' | 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'extra-rounded';
  export type EyeShape = 'square' | 'rounded' | 'circle';
  export type InnerEyeShape = 'square' | 'dot' | 'diamond';
  export type FrameStyle = 'none' | 'simple' | 'rounded' | 'badge' | 'banner' | 'ticket';
  export type ECLevel = 'L' | 'M' | 'Q' | 'H';

  export interface CustomizationOptions {
    fgColor: string;           // hex, default '#000000'
    bgColor: string;           // hex, default '#ffffff'
    transparent: boolean;      // if true bgColor is ignored
    dotStyle: DotStyle;
    eyeShape: EyeShape;
    innerEyeShape: InnerEyeShape;
    eyeColor: string;          // hex, default same as fgColor
    logoUrl: string | null;    // data URL or https URL
    logoSize: number;          // 0.1–0.4 (fraction of QR width)
    logoPadding: number;       // px 0–10
    logoShape: 'square' | 'circle';
    ecLevel: ECLevel;
    outputSize: number;        // px 128–2000
    frameStyle: FrameStyle;
    frameCta: string;          // CTA label e.g. "Scan Me"
    frameColor: string;        // hex
    frameFontSize: number;     // px 10–24
  }

  export type ExportFormat = 'png' | 'png-hd' | 'svg' | 'jpeg' | 'pdf' | 'copy-image' | 'copy-datauri' | 'copy-embed';
  ```

  Keep all existing types/interfaces unchanged. The `QRState` interface stays as-is; `CustomizationOptions` is a separate parallel object.

  **Files**: `src/types/index.ts`

  **Verify**: `npm run build` — TypeScript compiles with zero errors. Since we're only adding types, existing code that doesn't reference the new types is unaffected.

---

- [ ] 2. **Extend `src/lib/qr-helpers.ts`** — add `category` to all 25 existing configs, add 15 new configs, and add two utility functions.

  **2a. Add `category` to all 25 existing `qrTypeConfigs` entries**:
  - `text` → `'utilities'`
  - `url` → `'popular'`
  - `pdf` → `'business'`
  - `audio` → `'utilities'`
  - `whatsapp` → `'popular'`
  - `phone` → `'popular'`
  - `sms` → `'popular'`
  - `email` → `'popular'`
  - `address` → `'utilities'`
  - `wifi` → `'popular'`
  - `vcard` → `'popular'`
  - `social` → `'social'`
  - `video` → `'utilities'`
  - `image` → `'utilities'`
  - `menu` → `'business'`
  - `app` → `'business'`
  - `coupon` → `'business'`
  - `event` → `'business'`
  - `business_card` → `'business'`
  - `freelance` → `'business'`
  - `ecommerce` → `'business'`
  - `cleaning` → `'business'`
  - `logistics` → `'business'`
  - `finance` → `'payments'`
  - `cv` → `'utilities'`

  **2b. Add 15 new type configs** (append after existing array entries):

  ```ts
  {
    type: 'mecard', label: 'MeCard', icon: 'ContactRound', category: 'utilities',
    description: 'MeCard contact format (compact vCard)',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Yamada Taro', required: true },
      { name: 'tel', label: 'Phone', type: 'tel', placeholder: '+81...' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'yamada@example.com' },
      { name: 'url', label: 'Website', type: 'url', placeholder: 'https://example.com' },
      { name: 'address', label: 'Address', type: 'text', placeholder: '1-2-3 Shibuya Tokyo' },
      { name: 'nickname', label: 'Nickname', type: 'text' },
      { name: 'birthday', label: 'Birthday (YYYYMMDD)', type: 'text', placeholder: '19900101' },
    ],
  },
  {
    type: 'geo', label: 'Geo Location', icon: 'Navigation', category: 'utilities',
    description: 'GPS coordinates or Google Maps pin',
    fields: [
      { name: 'lat', label: 'Latitude', type: 'text', placeholder: '35.6762', required: true },
      { name: 'lng', label: 'Longitude', type: 'text', placeholder: '139.6503', required: true },
    ],
  },
  {
    type: 'telegram', label: 'Telegram', icon: 'Send', category: 'social',
    description: 'Open a Telegram chat or channel',
    fields: [
      { name: 'username', label: 'Username (without @)', type: 'text', placeholder: 'username', required: true },
      { name: 'message', label: 'Pre-filled message', type: 'text', placeholder: 'Hello!' },
    ],
  },
  {
    type: 'zoom', label: 'Zoom Meeting', icon: 'Video', category: 'business',
    description: 'Join a Zoom meeting directly',
    fields: [
      { name: 'url', label: 'Zoom Meeting URL', type: 'url', placeholder: 'https://zoom.us/j/...', required: true },
    ],
  },
  {
    type: 'google_meet', label: 'Google Meet', icon: 'VideoIcon', category: 'business',
    description: 'Join a Google Meet call',
    fields: [
      { name: 'url', label: 'Meet URL', type: 'url', placeholder: 'https://meet.google.com/xxx-xxxx-xxx', required: true },
    ],
  },
  {
    type: 'teams', label: 'Microsoft Teams', icon: 'Users', category: 'business',
    description: 'Join a Microsoft Teams meeting',
    fields: [
      { name: 'url', label: 'Teams Meeting URL', type: 'url', placeholder: 'https://teams.microsoft.com/l/meetup-join/...', required: true },
    ],
  },
  {
    type: 'youtube', label: 'YouTube', icon: 'Youtube', category: 'social',
    description: 'Link to a YouTube video or channel',
    fields: [
      { name: 'url', label: 'YouTube URL', type: 'url', placeholder: 'https://youtube.com/watch?v=...', required: true },
    ],
  },
  {
    type: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', category: 'social',
    description: 'Link to a LinkedIn profile or company page',
    fields: [
      { name: 'url', label: 'LinkedIn URL', type: 'url', placeholder: 'https://linkedin.com/in/username', required: true },
    ],
  },
  {
    type: 'spotify', label: 'Spotify', icon: 'Music2', category: 'social',
    description: 'Link to a Spotify track, album, or playlist',
    fields: [
      { name: 'url', label: 'Spotify URL', type: 'url', placeholder: 'https://open.spotify.com/track/...', required: true },
    ],
  },
  {
    type: 'paypal', label: 'PayPal.me', icon: 'CreditCard', category: 'payments',
    description: 'PayPal.me payment link',
    fields: [
      { name: 'username', label: 'PayPal.me Username', type: 'text', placeholder: 'yourname', required: true },
      { name: 'amount', label: 'Amount (optional)', type: 'text', placeholder: '10.00' },
      { name: 'currency', label: 'Currency code', type: 'text', placeholder: 'USD' },
    ],
  },
  {
    type: 'upi', label: 'UPI Payment', icon: 'IndianRupee', category: 'payments',
    description: 'Indian UPI payment link (BHIM/GPay/PhonePe)',
    fields: [
      { name: 'pa', label: 'UPI ID (pa)', type: 'text', placeholder: 'name@upi', required: true },
      { name: 'pn', label: 'Payee Name (pn)', type: 'text', placeholder: 'John Doe' },
      { name: 'amount', label: 'Amount (am)', type: 'text', placeholder: '100' },
      { name: 'cu', label: 'Currency (cu)', type: 'text', placeholder: 'INR' },
      { name: 'tn', label: 'Note (tn)', type: 'text', placeholder: 'Payment for...' },
    ],
  },
  {
    type: 'bitcoin', label: 'Bitcoin', icon: 'Bitcoin', category: 'payments',
    description: 'Bitcoin payment URI (BIP-21)',
    fields: [
      { name: 'address', label: 'Bitcoin Address', type: 'text', placeholder: 'bc1q...', required: true },
      { name: 'amount', label: 'Amount (BTC)', type: 'text', placeholder: '0.001' },
      { name: 'label', label: 'Label', type: 'text', placeholder: 'Donation' },
      { name: 'message', label: 'Message', type: 'text', placeholder: 'Thanks!' },
    ],
  },
  {
    type: 'ethereum', label: 'Ethereum', icon: 'Coins', category: 'payments',
    description: 'Ethereum payment URI (EIP-681)',
    fields: [
      { name: 'address', label: 'ETH Address (0x...)', type: 'text', placeholder: '0xAbC...', required: true },
      { name: 'amount', label: 'Amount (ETH)', type: 'text', placeholder: '0.01' },
    ],
  },
  {
    type: 'sepa', label: 'SEPA Transfer', icon: 'Building2', category: 'payments',
    description: 'European SEPA credit transfer (EPC QR)',
    fields: [
      { name: 'name', label: 'Beneficiary Name', type: 'text', placeholder: 'Max Mustermann', required: true },
      { name: 'iban', label: 'IBAN', type: 'text', placeholder: 'DE89370400440532013000', required: true },
      { name: 'bic', label: 'BIC', type: 'text', placeholder: 'COBADEFFXXX' },
      { name: 'amount', label: 'Amount (EUR)', type: 'text', placeholder: '100.00' },
      { name: 'reason', label: 'Payment Reference', type: 'text', placeholder: 'Invoice 2024-001' },
    ],
  },
  {
    type: 'google_review', label: 'Google Review', icon: 'Star', category: 'business',
    description: 'Direct link to your Google Business review page',
    fields: [
      { name: 'url', label: 'Google Review URL', type: 'url', placeholder: 'https://g.page/r/...', required: true },
    ],
  },
  ```

  **2c. Add new `generateQRData` cases** to the switch statement (before the `default` return):

  ```ts
  case 'mecard':
    if (!data.name) return '';
    return `MECARD:N:${data.name};${data.tel ? `TEL:${data.tel};` : ''}${data.email ? `EMAIL:${data.email};` : ''}${data.url ? `URL:${data.url};` : ''}${data.address ? `ADR:${data.address};` : ''}${data.nickname ? `NICKNAME:${data.nickname};` : ''}${data.birthday ? `BDAY:${data.birthday};` : ''};;`;
  
  case 'geo':
    if (!data.lat || !data.lng) return '';
    return `geo:${data.lat},${data.lng}`;
  
  case 'telegram':
    if (!data.username) return '';
    return `https://t.me/${data.username}${data.message ? `?text=${encodeURIComponent(data.message)}` : ''}`;
  
  case 'zoom':
  case 'google_meet':
  case 'teams':
  case 'youtube':
  case 'linkedin':
  case 'spotify':
  case 'google_review':
    return data.url || '';
  
  case 'paypal':
    if (!data.username) return '';
    return `https://paypal.me/${data.username}${data.amount ? `/${data.amount}${data.currency || 'USD'}` : ''}`;
  
  case 'upi':
    if (!data.pa) return '';
    return `upi://pay?pa=${encodeURIComponent(data.pa)}${data.pn ? `&pn=${encodeURIComponent(data.pn)}` : ''}${data.amount ? `&am=${data.amount}` : ''}${data.cu ? `&cu=${data.cu}` : '&cu=INR'}${data.tn ? `&tn=${encodeURIComponent(data.tn)}` : ''}`;
  
  case 'bitcoin':
    if (!data.address) return '';
    return `bitcoin:${data.address}${data.amount || data.label || data.message ? '?' : ''}${[data.amount ? `amount=${data.amount}` : '', data.label ? `label=${encodeURIComponent(data.label)}` : '', data.message ? `message=${encodeURIComponent(data.message)}` : ''].filter(Boolean).join('&')}`;
  
  case 'ethereum':
    if (!data.address) return '';
    return `ethereum:${data.address}${data.amount ? `?value=${data.amount}` : ''}`;
  
  case 'sepa':
    if (!data.name || !data.iban) return '';
    return `BCD\n002\n1\nSCT\n${data.bic || ''}\n${data.name}\n${data.iban}\nEUR${data.amount || ''}\n\n\n${data.reason || ''}`;
  ```

  **2d. Add utility functions** (after `validateField`):

  ```ts
  // Relative luminance per WCAG 2.1 (hex color string)
  export function getContrastRatio(fg: string, bg: string): number {
    function hexToLinear(hex: string): number {
      const h = hex.replace('#', '');
      const r = parseInt(h.slice(0,2), 16) / 255;
      const g = parseInt(h.slice(2,4), 16) / 255;
      const b = parseInt(h.slice(4,6), 16) / 255;
      const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    }
    const l1 = hexToLinear(fg);
    const l2 = hexToLinear(bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  export function getAutoECLevel(hasLogo: boolean, dataLength: number): ECLevel {
    if (hasLogo) return 'H';
    if (dataLength > 1000) return 'L';
    if (dataLength > 500) return 'M';
    return 'M';
  }
  ```

  **2e. Add and export `QR_CATEGORIES`** (after all configs):

  ```ts
  export const QR_CATEGORIES: Record<string, QRType[]> = {
    popular: qrTypeConfigs.filter(c => c.category === 'popular').map(c => c.type),
    social:  qrTypeConfigs.filter(c => c.category === 'social').map(c => c.type),
    payments:qrTypeConfigs.filter(c => c.category === 'payments').map(c => c.type),
    business:qrTypeConfigs.filter(c => c.category === 'business').map(c => c.type),
    utilities:qrTypeConfigs.filter(c => c.category === 'utilities').map(c => c.type),
  };
  ```

  Add these new icon names to `TypeSelector.tsx`'s `iconMap` (step 4): `ContactRound`, `Navigation`, `Send`, `Users`, `Youtube`, `Linkedin`, `Music2`, `CreditCard`, `IndianRupee`, `Bitcoin`, `Coins`, `Building2`, `Star`, `VideoIcon` (use `Video` icon for `google_meet` as well — alias `VideoIcon` to `Video`).

  **TypeScript note**: `ECLevel` is now exported from `src/types/index.ts`. Import it with `import type { ECLevel } from '@/types'` in qr-helpers.ts.

  **Files**: `src/lib/qr-helpers.ts`, `src/types/index.ts` (already done in step 1)

  **Verify**: `npm run build` — zero TypeScript errors. The switch exhaustiveness check — add `default: return '';` which already exists. Ensure the `case 'zoom': case 'google_meet':` fallthrough chain does NOT include a break between cases.

---

- [ ] 3. **Create `src/lib/canvas-qr.ts`** — the core custom QR rendering function.

  This file replaces the `QRCodeLib.toDataURL` usage in the old `useQRGenerator.ts` and `QRPreview.tsx`.

  ```ts
  import { create as createQRCode } from 'qrcode';
  import type { CustomizationOptions, DotStyle, EyeShape, InnerEyeShape, FrameStyle } from '@/types';
  import type { QRCodeErrorCorrectionLevel } from 'qrcode';
  ```

  **Exported function signature**:
  ```ts
  export async function drawCustomQR(
    canvas: HTMLCanvasElement,
    text: string,
    opts: CustomizationOptions
  ): Promise<void>
  ```

  **Implementation steps inside `drawCustomQR`**:

  1. Map `opts.ecLevel` (`'L'|'M'|'Q'|'H'`) to `QRCodeErrorCorrectionLevel` — these strings are already valid values per `@types/qrcode`.
  2. Call `const qr = createQRCode(text, { errorCorrectionLevel: opts.ecLevel })`.
  3. Set `canvas.width = canvas.height = opts.outputSize`.
  4. Get `ctx = canvas.getContext('2d')` — throw if null.
  5. **Background**: if `opts.transparent`, skip fill; else `ctx.fillStyle = opts.bgColor; ctx.fillRect(0, 0, size, size)`.
  6. Compute `moduleSize = (size - 2 * margin) / qr.modules.size` where `margin = Math.floor(size * 0.04)` (quiet zone ≈ 4% of output size).
  7. Compute `origin = margin`.
  8. **Draw data modules** (skip finder pattern region): iterate `row` and `col` 0..qr.modules.size-1. For each dark module (`qr.modules.get(row, col) > 0`), skip the three finder pattern zones (top-left 7×7, top-right 7×7, bottom-left 7×7 — guardedByFrame helper). Then draw using `drawDot(ctx, x, y, dotSize, opts.dotStyle, opts.fgColor)`.
  9. **Draw finder patterns (eyes)**: draw three finder patterns at their standard positions using `drawEye(ctx, x, y, moduleSize, opts.eyeShape, opts.innerEyeShape, opts.eyeColor, opts.bgColor)`.
  10. **Draw logo**: if `opts.logoUrl`, load via `new Image()`, set `crossOrigin = 'anonymous'`, draw centered with size `opts.logoSize * canvas.width`, with padding `opts.logoPadding`. If `opts.logoShape === 'circle'`, clip with `arc` before drawImage.
  11. **Draw frame**: call `drawFrame(ctx, canvas.width, canvas.height, opts.frameStyle, opts.frameCta, opts.frameColor, opts.frameFontSize)`.

  **`drawDot` helper** (not exported):
  ```ts
  function drawDot(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, style: DotStyle, color: string): void
  ```
  - `square`: `ctx.fillStyle = color; ctx.fillRect(x, y, size, size)`
  - `rounded`: `roundRect(ctx, x, y, size, size, size * 0.3); ctx.fillStyle = color; ctx.fill()`
  - `dots`: `ctx.beginPath(); ctx.arc(x + size/2, y + size/2, size/2 * 0.85, 0, Math.PI*2); ctx.fillStyle = color; ctx.fill()`
  - `classy`: square with one corner notched — draw polygon with 5 points (top-right corner cut)
  - `classy-rounded`: `roundRect` with radius `size*0.25` on 3 corners, 0 on top-right
  - `extra-rounded`: `roundRect(ctx, x, y, size, size, size * 0.45); ctx.fillStyle = color; ctx.fill()`

  **`roundRect` helper** — use native `ctx.roundRect` if available (ES2022 DOM), otherwise use the `arcTo` polyfill:
  ```ts
  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
    if (typeof ctx.roundRect === 'function') {
      ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
    } else {
      // arcTo fallback
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h - r);
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx.lineTo(x + r, y + h);
      ctx.arcTo(x, y + h, x, y + h - r, r);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
    }
  }
  ```

  **`drawEye` helper** — draws the 3-zone finder pattern eye:
  - Outer ring (7×7): draw as `eyeShape` (square = rect, rounded = roundRect radius moduleSize*1.5, circle = arc)
  - Inner dot (3×3 centered): draw as `innerEyeShape` (square = fillRect, dot = arc, diamond = rotated rect via transform)
  - Use `eyeColor` for both; `bgColor` for the separator gap (5×5 unfilled ring)

  **`drawFrame` helper** — adds a border band below the QR:
  - `none`: no-op
  - `simple`: stroke a 1px rect around entire canvas in `frameColor`
  - `rounded`: same with rounded corners
  - `badge`: adds a colored rectangle banner at the bottom with centered CTA text
  - `banner`: full-width top + bottom band with CTA text
  - `ticket`: dashed border with CTA text

  **TypeScript notes**:
  - `canvas.getContext('2d')` returns `CanvasRenderingContext2D | null` — use non-null assertion after null check.
  - `ctx.roundRect` exists in `lib: ["DOM"]` with ES2022 target in tsconfig. The property may not exist at runtime on older browsers — check with `typeof ctx.roundRect === 'function'`.
  - `Image` loads asynchronously — wrap in `new Promise<void>((resolve, reject) => { img.onload = () => resolve(); img.onerror = () => reject(); img.src = url; })`.

  **Files**: `src/lib/canvas-qr.ts` (new)

  **Verify**: `npm run build` — zero errors. Spot-check by importing from another file (QRPreview in step 7 will consume it).

---

- [ ] 4. **Rewrite `src/components/TypeSelector.tsx`** — tabbed category UI.

  **Props interface** (unchanged):
  ```ts
  interface TypeSelectorProps {
    selected: QRType;
    onChange: (type: QRType) => void;
  }
  ```

  **Implementation**:
  - Keep the existing `iconMap` but add new icon entries for the 15 new types. New icons from lucide-react: `ContactRound`, `Navigation`, `Send`, `Users`, `Youtube`, `Linkedin`, `Music2`, `CreditCard`, `IndianRupee`, `Bitcoin`, `Coins`, `Building2`, `Star`. For `google_meet` use `Video`, for `zoom` use `Video`.
  - Add a `VideoIcon` alias: `const iconMap = { ..., VideoIcon: <Video className="w-4 h-4" /> }` (since `google_meet` config has icon `'VideoIcon'`).
  - Import `{ Tabs, TabsList, TabsTrigger, TabsContent }` from `'@/components/ui/tabs'`.
  - Import `{ QR_CATEGORIES }` from `'@/lib/qr-helpers'`.
  - Import `{ useLocalStorage }` from `'@/hooks/useLocalStorage'`.
  - State: `const [search, setSearch] = useState('')`, `const [isExpanded, setIsExpanded] = useState(true)`, `const [recentTypes, setRecentTypes] = useLocalStorage<QRType[]>('qr-recent-types', [])`.
  - `filteredTypes` (for search mode): filter `qrTypeConfigs` by label/description match.
  - `handleSelect(type: QRType)`: call `onChange(type)`, update `recentTypes` — prepend `type`, deduplicate, keep first 5.
  - **Render**:
    - A header row (click to expand/collapse on mobile using `isExpanded`): shows selected type icon + label + ChevronDown/Up.
    - Below the header: an `AnimatePresence` + `motion.div` collapsible section.
    - Inside: Search `Input` always visible.
    - When `search` is empty: show "Recently Used" row (max 5 small type chips) above the Tabs, only when `recentTypes.length > 0`.
    - `Tabs` with `defaultValue="popular"`:
      - 6 tabs: `Popular | Social | Payments | Business | Utilities | All`
      - Each `TabsContent`: a 3-column grid of type cards.
      - Type card: `button` with `role="button"`, `aria-pressed={selected===type}`, `tabIndex=0`, `onKeyDown` handler (Enter/Space → select, ArrowRight/Left/Up/Down → move focus to adjacent card using `document.querySelector`).
      - Card layout: icon (24×24 in a 36×36 rounded bg), label text below.
      - Selected state: `ring-2 ring-primary bg-primary/10`.
    - When `search` is non-empty: hide Tabs, show flat filtered list (same card grid but unsectioned).
  - The collapsible animation should use `motion.div` with `initial={false}` and `animate={{ height: isExpanded ? 'auto' : 0, overflow: 'hidden' }}` — but framer-motion `height: 'auto'` requires `layout` or `AnimatePresence`. Use `AnimatePresence` with conditional rendering instead.
  - **TypeScript**: `recentTypes` is `QRType[]` from useLocalStorage — no `any`.

  **Files**: `src/components/TypeSelector.tsx`

  **Verify**: `npm run build` — zero errors. Manually check that the component renders with correct tab counts (popular tab should show URL, WhatsApp, Phone, SMS, Email, WiFi, vCard, Text).

---

- [ ] 5. **Create `src/components/CustomizationPanel.tsx`** — accordion customization UI.

  **Props**:
  ```ts
  interface CustomizationPanelProps {
    options: CustomizationOptions;
    onChange: (options: CustomizationOptions) => void;
    qrText: string;  // for contrast score preview
  }
  ```

  Import `{ Accordion, AccordionItem, AccordionTrigger, AccordionContent }` from `'@/components/ui/accordion'`.
  Import `{ Slider }` from `'@/components/ui/slider'`.
  Import `{ ToggleGroup, ToggleGroupItem }` from `'@/components/ui/toggle-group'`.
  Import `{ RadioGroup, RadioGroupItem }` from `'@/components/ui/radio-group'`.
  Import `{ Switch }` from `'@/components/ui/switch'`.
  Import `{ Badge }` from `'@/components/ui/badge'`.
  Import `{ toast }` from `'sonner'`.
  Import `{ getContrastRatio, getAutoECLevel }` from `'@/lib/qr-helpers'`.
  Import type `{ CustomizationOptions, DotStyle, EyeShape, InnerEyeShape, FrameStyle, ECLevel }` from `'@/types'`.

  **Sections** (each an `AccordionItem`):

  **Section 1 — Colors** (`value="colors"`):
  - Two color picker pairs (fg and bg): native `<input type="color">` + text `<Input>` for HEX value.
  - Sync: when color input changes, update options and also update hex input. When hex input changes (valid 7-char hex), update color input.
  - 12 preset color pairs as small paired swatches:
    ```ts
    const COLOR_PRESETS = [
      { fg: '#000000', bg: '#ffffff' }, { fg: '#ffffff', bg: '#000000' },
      { fg: '#1e40af', bg: '#eff6ff' }, { fg: '#15803d', bg: '#f0fdf4' },
      { fg: '#7c3aed', bg: '#faf5ff' }, { fg: '#dc2626', bg: '#fef2f2' },
      { fg: '#d97706', bg: '#fffbeb' }, { fg: '#0891b2', bg: '#ecfeff' },
      { fg: '#be185d', bg: '#fdf2f8' }, { fg: '#374151', bg: '#f9fafb' },
      { fg: '#1e293b', bg: '#f8fafc' }, { fg: '#4d7c0f', bg: '#f7fee7' },
    ];
    ```
  - Invert button: swaps fg/bg, shows a `toast.warning('Inverted QR codes may not scan on all devices')` if the resulting fg is lighter than bg.
  - Contrast ratio badge: call `getContrastRatio(options.fgColor, options.bgColor)`. Show a badge:
    - ≥7 → `variant="default"` green text: "AA+ (x.x:1)"
    - ≥4.5 → yellow: "AA (x.x:1)"
    - ≥3 → orange: "A (x.x:1)"
    - <3 → red + warning text: "Poor contrast — may not scan"
  - Transparent bg toggle: `<Switch>` — when on, sets `options.transparent = true` and dims the bg color picker.

  **Section 2 — Dot Style** (`value="dots"`):
  - `ToggleGroup type="single"` with 6 items. Each item shows a small SVG preview icon (a 12×12 example of that dot style) + label.
  - Dot styles: `square | rounded | dots | classy | classy-rounded | extra-rounded`
  - SVG previews: inline minimal 20×20 SVG showing a 2×2 grid of dots in the respective shape.

  **Section 3 — Eye Style** (`value="eyes"`):
  - Outer shape `ToggleGroup`: `square | rounded | circle` — 3 items with icon previews.
  - Inner dot `ToggleGroup`: `square | dot | diamond` — 3 items.
  - Eye color: color picker (same pattern as fg/bg) with label "Eye Color".
  - Checkbox "Same as foreground" — when checked, disables the eye color picker and syncs to fgColor.

  **Section 4 — Logo** (`value="logo"`):
  - Drag-and-drop area: `<div onDrop={handleDrop} onDragOver={prevent}>`. On drop, read `FileReader.readAsDataURL(file)`, set `options.logoUrl` to the data URL.
  - File `<input type="file" accept="image/*">` hidden, triggered by click on drag area.
  - URL input: `<Input type="url">` — on change, set `options.logoUrl`. Validate URL on blur.
  - Preview: if `options.logoUrl`, show `<img>` thumbnail (40×40) + "Remove" button.
  - Logo size slider: 10–40 (displayed as %) → maps to 0.10–0.40 for `logoSize`.
  - Padding slider: 0–10 (px) → `logoPadding`.
  - Shape toggle: `square | circle`.
  - **Auto EC**: when `options.logoUrl` changes from null to a value, call `onChange({ ...options, ecLevel: 'H' })` and `toast.info('Error correction set to H for logo compatibility')`.

  **Section 5 — Error Correction** (`value="ec"`):
  - `RadioGroup` with 4 options (L/M/Q/H).
  - Each option: label + description tooltip.
    - L: "~7% recovery — smallest QR"
    - M: "~15% recovery — recommended"
    - Q: "~25% recovery — good for logos"
    - H: "~30% recovery — best for logos"
  - Auto-recommended badge: show `"Recommended"` badge next to `getAutoECLevel(!!options.logoUrl, qrText.length)`.

  **Section 6 — Output Size** (`value="size"`):
  - `Slider min={128} max={2000} step={8}` → `options.outputSize`.
  - Live display: `"{options.outputSize} × {options.outputSize} px"`.
  - Presets row: small buttons for 256px, 512px, 1024px.

  **Section 7 — Frame** (`value="frame"`):
  - 6 frame style buttons (icon grid, similar to dot style): none, simple, rounded, badge, banner, ticket.
  - CTA text input: `<Input>` → `options.frameCta`. Only active when frameStyle ≠ 'none'. Placeholder: "Scan Me".
  - Frame color: color picker.
  - Font size slider: 10–24px.

  **TypeScript notes**:
  - `Slider` from shadcn expects `value={[number]}` (array) and `onValueChange={(v) => handler(v[0])}`. Access with `v[0]` only — `v` is `number[]`.
  - When implementing drag-and-drop, the `DragEvent` type's `dataTransfer.files` is `FileList | null`. Guard: `if (!e.dataTransfer?.files[0]) return`.
  - `FileReader.onload` event: type as `ProgressEvent<FileReader>` — access result via `(e.target as FileReader).result as string`.

  **Files**: `src/components/CustomizationPanel.tsx` (new)

  **Verify**: `npm run build` — zero errors.

---

- [ ] 6. **Create `src/components/ExportPanel.tsx`** — export and sharing UI.

  **Props**:
  ```ts
  interface ExportPanelProps {
    qrText: string;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    type: QRType;
    state: QRState & { customization: CustomizationOptions };
    onRestoreState: (state: QRState & { customization: CustomizationOptions }) => void;
  }
  ```

  Import `{ DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator }` from `'@/components/ui/dropdown-menu'`.
  Import `{ Dialog, DialogContent, DialogHeader, DialogTitle }` from `'@/components/ui/dialog'`.
  Import `{ toast }` from `'sonner'`.
  Import `{ useEffect }` from `'react'`.

  **Download handler** — `handleDownload(format: ExportFormat)`:
  - `'png'`: `canvas.toBlob(blob => downloadBlob(blob, 'qrcode.png'))`.
  - `'png-hd'`: create a new offscreen canvas at 4× the current size, redraw via `drawCustomQR`, then download.
  - `'svg'`: use `QRCodeLib.toString(qrText, { type: 'svg' })` then create a Blob and download.
  - `'jpeg'`: `canvas.toBlob(blob => ..., 'image/jpeg', 0.92)`.
  - `'pdf'`: create an offscreen canvas the same size, fill white background, draw canvas onto it, convert to PNG, embed in a minimal PDF structure using a custom `createPDFFromImage(dataUrl)` function that writes the PDF binary manually (avoids needing jspdf). The PDF is a 1-page A4 document with the QR image centered. Implementation: use the PDF 1.4 spec inline encoding — embed the PNG as `/Filter /FlateDecode` or simply embed it as a raw JPEG. Since we cannot use jspdf, use a simpler approach: create an HTML page with the image and use `window.print()` with a print stylesheet.
  - `'copy-image'`: `canvas.toBlob(async blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob! })]))`.
  - `'copy-datauri'`: `navigator.clipboard.writeText(canvas.toDataURL())`.
  - `'copy-embed'`: `navigator.clipboard.writeText(`<img src="${canvas.toDataURL()}" alt="QR Code" style="max-width:100%;height:auto;" />`)`.

  **`downloadBlob` helper**:
  ```ts
  function downloadBlob(blob: Blob | null, filename: string): void {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  ```

  **Share handler**:
  - Try `navigator.share` with canvas blob as File.
  - On failure or absence, show a Dialog with share link (see below) and copy buttons.

  **Print handler**:
  - Open `window.open('', '_blank')`, write HTML with the QR as an img with `@media print` CSS. Size presets: Business Card (54mm × 85mm), A4, Sticker (50mm × 50mm). Pass selected size as a query param or embed in the print popup.

  **Shareable link** (`handleShareableLink`):
  - `const payload = JSON.stringify(state)`.
  - `const encoded = btoa(unescape(encodeURIComponent(payload)))` — handles Unicode.
  - `const url = `${window.location.origin}${window.location.pathname}?state=${encoded}``
  - If `url.length > 2048`, show `toast.warning('State URL is very long. Consider shortening your content.')`.
  - Else: `navigator.clipboard.writeText(url)` + `toast.success('Shareable link copied!')`.

  **State restore on mount** (in `App.tsx` — see step 11):
  The `ExportPanel` itself just fires `onRestoreState` when the `?state=` param is present. Actually, this is cleaner done in `App.tsx` on mount — `ExportPanel` just receives `onRestoreState` as a prop for the share link's "Restore" action. The URL param decoding lives in App.tsx.

  **SVG download note**: `QRCodeLib.toString` (the browser export) calls the SVG renderer. Import as: `import QRCodeLib from 'qrcode'` and call `await QRCodeLib.toString(qrText, { type: 'svg' as const })`. The return type is `string`. If TypeScript complains about `type: 'svg'`, cast: `{ type: 'svg' as QRCodeStringType }` importing `QRCodeStringType` from `'qrcode'`.

  **Files**: `src/components/ExportPanel.tsx` (new)

  **Verify**: `npm run build` — zero errors.

---

- [ ] 7. **Rewrite `src/components/QRPreview.tsx`** — canvas-based preview using `drawCustomQR`.

  **New props**:
  ```ts
  interface QRPreviewProps {
    qrText: string;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    options: CustomizationOptions;
    typeLabel: string;
  }
  ```

  Remove all old imports of `QRCodeLib`, template logic, `generateQRData`.

  **Implementation**:
  - `useEffect` depending on `[qrText, options]` (debounced — see note):
    ```ts
    useEffect(() => {
      if (!qrText.trim() || !canvasRef.current) { setHasQR(false); return; }
      setIsGenerating(true);
      drawCustomQR(canvasRef.current, qrText, options)
        .then(() => setHasQR(true))
        .catch(() => setHasQR(false))
        .finally(() => setIsGenerating(false));
    }, [qrText, options, canvasRef]);
    ```
  - The `canvasRef` is passed in from `App.tsx` — the component does NOT create the ref. This allows `ExportPanel` to read the same canvas.
  - Render:
    - Outer container with `role="img"` and `aria-label={`QR code for ${typeLabel}`}`.
    - The `<canvas>` element: `ref={canvasRef}`, `className="w-full h-full"`. Styled with `max-w-[256px]` display.
    - Loading overlay (AnimatePresence spinner) positioned over the canvas.
    - Placeholder (shown when `!hasQR && !isGenerating`): same phone icon + instructional text as before.
    - Too-long warning: moved to parent `App.tsx` (keep in `QRPreview` as well — check `qrText.length > 2953` and show warning banner inside the component).
  - Remove old action buttons (Download, Copy, Print, Share) — they are now in `ExportPanel`.
  - **Debounce**: `QRPreview` receives the already-debounced `qrText` from `App.tsx`. No internal debounce needed.
  - **TypeScript**: `canvasRef: React.RefObject<HTMLCanvasElement>` — `canvasRef.current` may be null; always guard.

  **Files**: `src/components/QRPreview.tsx`

  **Verify**: `npm run build` — zero errors.

---

- [ ] 8. **Create `src/components/SEOHead.tsx`** — imperative meta tag setter.

  ```ts
  interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
  }
  ```

  Implementation using `useEffect`:
  ```ts
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl ?? window.location.href, 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setCanonical(canonicalUrl ?? window.location.href);
  }, [title, description, canonicalUrl, ogImage]);
  ```

  Helper `setMeta(name, content, attr = 'name')`:
  - `let el = document.querySelector(`meta[${attr}="${name}"]`)` 
  - If not found, `el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el)`.
  - `el.setAttribute('content', content)`.

  Helper `setCanonical(url)`:
  - Find or create `<link rel="canonical">` and set `href`.

  Returns `null` (no DOM output).

  **Files**: `src/components/SEOHead.tsx` (new)

  **Verify**: `npm run build` — zero errors.

---

- [ ] 9. **Create `src/components/OnboardingTour.tsx`** — first-visit modal.

  Import `{ Dialog, DialogContent, DialogTitle }` from `'@/components/ui/dialog'`.
  Import `{ motion, AnimatePresence }` from `'framer-motion'`.
  Import `{ useLocalStorage }` from `'@/hooks/useLocalStorage'`.
  Import `{ Checkbox }` from `'@/components/ui/checkbox'`.

  **Steps data**:
  ```ts
  const STEPS = [
    { title: 'Choose a QR Type', description: 'Pick from 40+ QR types organised by category — URL, WiFi, vCard, Bitcoin and more.', icon: '🎯' },
    { title: 'Fill in Your Content', description: 'Each type has a smart form. Required fields are marked; everything is validated as you type.', icon: '✏️' },
    { title: 'Customize & Download', description: 'Change colors, dot styles, add a logo, then download PNG, SVG, or PDF in one click.', icon: '🎨' },
  ];
  ```

  State:
  - `const [onboarded, setOnboarded] = useLocalStorage<boolean>('qr-onboarded', false)`.
  - `const [open, setOpen] = useState(!onboarded)`.
  - `const [step, setStep] = useState(0)`.
  - `const [dontShow, setDontShow] = useState(false)`.

  On close: if `dontShow`, call `setOnboarded(true)`.

  Render: `Dialog open={open} onOpenChange={setOpen}`. Inside, `AnimatePresence mode="wait"` with `motion.div key={step}` sliding left/right using `x: ±40` variants.

  Step content: icon, title, description, step counter dots, Back/Next/Get Started buttons, "Don't show again" checkbox on step 0.

  **TypeScript**: `dontShow` is `boolean`, `setDontShow` accepts `boolean`. The `Checkbox` from shadcn expects `onCheckedChange: (checked: boolean | 'indeterminate') => void` — handle the `'indeterminate'` case: `if (typeof checked === 'boolean') setDontShow(checked)`.

  **Files**: `src/components/OnboardingTour.tsx` (new)

  **Verify**: `npm run build` — zero errors.

---

- [ ] 10. **Create `src/components/ThemeToggle.tsx`** — sun/moon/system cycle.

  ```ts
  import { useTheme } from 'next-themes';
  import { Sun, Moon, Monitor } from 'lucide-react';
  import { Button } from '@/components/ui/button';
  import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

  export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const cycle = () => {
      if (theme === 'light') setTheme('dark');
      else if (theme === 'dark') setTheme('system');
      else setTheme('light');
    };
    const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
    const label = theme === 'light' ? 'Switch to dark' : theme === 'dark' ? 'Switch to system' : 'Switch to light';
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={cycle} aria-label={label}>
            <Icon className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    );
  }
  ```

  **TypeScript note**: `useTheme()` may return `theme: string | undefined`. Guard: `const safeTheme = theme ?? 'system'` and use `safeTheme` in comparisons.

  **Files**: `src/components/ThemeToggle.tsx` (new)

  **Verify**: `npm run build` — zero errors.

---

- [ ] 11. **Rewrite `src/App.tsx`** and update `src/main.tsx` — routing shell with ThemeProvider.

  **main.tsx** change: `ThemeProvider` wraps the router:
  ```tsx
  import { ThemeProvider } from 'next-themes';
  createRoot(document.getElementById('root')!).render(
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
  ```
  Actually, per the plan: put `ThemeProvider` inside `App.tsx` instead — because the app shell (Toaster, TooltipProvider) should be inside the theme context. Keep `BrowserRouter` in `main.tsx`. Add `ThemeProvider` at the top level in `App.tsx`.

  **New App.tsx structure**:

  ```tsx
  import { useRef, useState, useCallback, useEffect } from 'react';
  import { Routes, Route } from 'react-router';
  import { ThemeProvider } from 'next-themes';
  import { Toaster } from 'sonner';
  import { TooltipProvider } from '@/components/ui/tooltip';
  import { ThemeToggle } from '@/components/ThemeToggle';
  import { OnboardingTour } from '@/components/OnboardingTour';
  import Home from '@/pages/Home';
  import LandingPage from '@/pages/LandingPage';
  import Blog from '@/pages/Blog';
  import About from '@/pages/About';
  import Privacy from '@/pages/Privacy';
  import Terms from '@/pages/Terms';
  import Contact from '@/pages/Contact';
  import type { QRType, QRData, TemplateName, CustomizationOptions } from '@/types';
  // ... shared state and canvasRef ...

  export default function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Shared QR state lifted here so both Home and ExportPanel can access
    const [qrType, setQrType] = useState<QRType>('url');
    const [qrData, setQrData] = useState<QRData>({});
    const [template, setTemplate] = useState<TemplateName>('classic');
    const [customization, setCustomization] = useState<CustomizationOptions>(DEFAULT_CUSTOMIZATION);

    // URL state restore on mount
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get('state');
      if (!encoded) return;
      try {
        const decoded = decodeURIComponent(escape(atob(encoded)));
        const state = JSON.parse(decoded) as { type: QRType; data: QRData; template: TemplateName; customization: CustomizationOptions };
        setQrType(state.type ?? 'url');
        setQrData(state.data ?? {});
        setTemplate(state.template ?? 'classic');
        setCustomization({ ...DEFAULT_CUSTOMIZATION, ...(state.customization ?? {}) });
      } catch { /* ignore corrupt state */ }
    }, []);

    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider delayDuration={300}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-background px-4 py-2 rounded">
            Skip to content
          </a>
          <div className="min-h-screen bg-background">
            <AppHeader />  {/* Header with logo, ThemeToggle, info tooltip */}
            <main id="main-content">
              <Routes>
                <Route path="/" element={
                  <Home canvasRef={canvasRef} qrType={qrType} setQrType={setQrType}
                    qrData={qrData} setQrData={setQrData} template={template}
                    setTemplate={setTemplate} customization={customization}
                    setCustomization={setCustomization} />
                } />
                <Route path="/wifi-qr-code-generator" element={<LandingPage type="wifi" />} />
                <Route path="/url-qr-code-generator" element={<LandingPage type="url" />} />
                <Route path="/vcard-qr-code-generator" element={<LandingPage type="vcard" />} />
                <Route path="/whatsapp-qr-code-generator" element={<LandingPage type="whatsapp" />} />
                <Route path="/upi-qr-code-generator" element={<LandingPage type="upi" />} />
                <Route path="/bitcoin-qr-code-generator" element={<LandingPage type="bitcoin" />} />
                <Route path="/bulk-qr-code-generator" element={<BulkPlaceholder />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Toaster position="bottom-right" richColors />
          <OnboardingTour />
        </TooltipProvider>
      </ThemeProvider>
    );
  }
  ```

  **`DEFAULT_CUSTOMIZATION`** constant (define at top of file or in a `src/lib/defaults.ts`):
  ```ts
  export const DEFAULT_CUSTOMIZATION: CustomizationOptions = {
    fgColor: '#000000', bgColor: '#ffffff', transparent: false,
    dotStyle: 'square', eyeShape: 'square', innerEyeShape: 'square',
    eyeColor: '#000000', logoUrl: null, logoSize: 0.2, logoPadding: 2,
    logoShape: 'square', ecLevel: 'M', outputSize: 512,
    frameStyle: 'none', frameCta: 'Scan Me', frameColor: '#000000', frameFontSize: 14,
  };
  ```

  **`AppHeader`** sub-component (defined in the same file):
  - Sticky frosted header with QR Studio brand, ThemeToggle, info tooltip.
  - Identical to existing header but adds `ThemeToggle`.

  **`BulkPlaceholder`** sub-component: a simple "Coming Soon" card.

  **`NotFound`** sub-component: 404 page with link back to home.

  **Mobile layout for `Home`**: handled inside `Home.tsx` (step 12) using `useIsMobile`.

  **TypeScript notes**:
  - `canvasRef` is `RefObject<HTMLCanvasElement>` — pass it as a prop to `Home` and down to `QRPreview` and `ExportPanel`.
  - State setter props typed as `React.Dispatch<React.SetStateAction<T>>` — but since `Home.tsx` calls `useCallback`, prefer passing `(v: T) => void` callbacks.
  - `window.location.search` reading in `useEffect` — no SSR concerns with Vite.

  **Files**: `src/App.tsx` (rewrite), `src/main.tsx` (minor update)

  **Verify**: `npm run build` — zero errors. `npm run dev` — app loads at localhost:3000, routes work.

---

- [ ] 12. **Rewrite `src/pages/Home.tsx`** — full generator page with responsive layout.

  **Props**:
  ```ts
  interface HomeProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    qrType: QRType;
    setQrType: (type: QRType) => void;
    qrData: QRData;
    setQrData: (data: QRData) => void;
    template: TemplateName;
    setTemplate: (template: TemplateName) => void;
    customization: CustomizationOptions;
    setCustomization: (opts: CustomizationOptions) => void;
  }
  ```

  Import `{ useIsMobile }` from `'@/hooks/use-mobile'`.
  Import `{ useDebounce }` from `'@/hooks/useDebounce'`.
  Import all relevant components.

  **QR text computation** (same pattern as current App.tsx):
  ```ts
  const debouncedData = useDebounce(qrData, 300);
  const qrText = useMemo(() => {
    const config = getTypeConfig(qrType);
    if (!config) return '';
    const allFilled = config.fields.filter(f => f.required).every(f => (debouncedData[f.name] ?? '').trim().length > 0);
    if (!allFilled) return '';
    return generateQRData(qrType, debouncedData);
  }, [qrType, debouncedData]);
  ```

  **Desktop layout** (≥1024px — `!isMobile`):
  ```
  Two-column grid:
  Left: TypeSelector | DynamicForm | CustomizationPanel | TemplateSelector
  Right (sticky): QRPreview | ExportPanel | stats footer
  ```

  **Tablet layout** (768–1023px): single column, preview below controls.

  **Mobile layout** (<768px — `isMobile`):
  - Top: mini sticky preview bar (small canvas preview, 64×64, not interactive).
  - Bottom: step-by-step tab bar with 4 steps: "Type" / "Content" / "Design" / "Download".
  - Each step content slides in/out with `framer-motion` using `x: ±100%` transitions.
  - Step 1: TypeSelector
  - Step 2: DynamicForm + data-too-long warning
  - Step 3: CustomizationPanel + TemplateSelector
  - Step 4: QRPreview (full-size) + ExportPanel
  - Progress indicator above steps (1/2/3/4 dots).

  **Stats footer** (below ExportPanel on desktop):
  - Type label | Character count | EC level | Size in px.

  **SEO**: render `<SEOHead title="Free QR Code Generator — QR Studio" description="Create beautiful, custom QR codes for free. 40+ types, custom colors, logo upload. Download PNG, SVG, PDF instantly." />`.

  **Files**: `src/pages/Home.tsx`

  **Verify**: `npm run build` — zero errors. Check at 375px and 1440px in browser devtools — no horizontal scroll, preview visible.

---

- [ ] 13. **Create `src/pages/LandingPage.tsx`** — per-type SEO landing page.

  **Props**:
  ```ts
  interface LandingPageProps {
    type: QRType;
  }
  ```

  **Page data** map (define inside the file as a constant):
  ```ts
  const LANDING_DATA: Record<string, {
    title: string;
    description: string;
    slug: string;
    howTo: string[];
    faqs: { q: string; a: string }[];
  }> = {
    wifi: {
      title: 'Free WiFi QR Code Generator',
      description: 'Create a WiFi QR code that connects guests instantly — no password typing needed. Download PNG, SVG or PDF for free.',
      slug: 'wifi-qr-code-generator',
      howTo: [
        'Select the WiFi QR type and enter your network name (SSID)',
        'Enter your WiFi password and select the encryption type (WPA2 is most common)',
        'Customise the design, then download your QR code as PNG or SVG',
      ],
      faqs: [
        { q: 'Is the WiFi password stored anywhere?', a: 'No. All QR generation happens in your browser — your password never leaves your device.' },
        { q: 'Which devices can scan a WiFi QR code?', a: 'Android 10+ and iOS 11+ can scan WiFi QR codes natively with their camera app.' },
        { q: 'Does the WiFi QR code work for hidden networks?', a: 'Yes, mark the "Hidden" option and the QR will include the H:true flag in the WIFI string.' },
      ],
    },
    url: { /* similar data */ },
    vcard: { /* similar data */ },
    whatsapp: { /* similar data */ },
    upi: { /* similar data */ },
    bitcoin: { /* similar data */ },
  };
  ```

  Write full data for `wifi`, `url`, `vcard`, `whatsapp`, `upi`, `bitcoin` — each needs at least 3 how-to steps and 3 FAQs.

  **Render**:
  1. `<SEOHead title={data.title} description={data.description} canonicalUrl={`https://qrstudio.app/${data.slug}`} />`
  2. Hero: `<h1>` with title, subtitle paragraph with description.
  3. Full generator embedded — `<Home>` component with `type` pre-selected. To pre-select, pass `initialType={type}` to Home. **Note**: `Home` currently reads type from parent `App.tsx` state. For landing pages, the type should be pre-selected. Pass `type` as `initialType` prop that overrides the default. Alternatively, render the individual generator controls inline in `LandingPage` (simpler). Choose: render a mini-generator inline using the same components but with local state pre-set to `type`. This avoids threading `initialType` through the shared state.
  4. How-to section: `<h2>How to create a {type} QR code</h2>`, numbered `<ol>`.
  5. FAQ accordion: `<h2>Frequently Asked Questions</h2>`, shadcn `Accordion` with `AccordionItem` per FAQ.
  6. Related tools links: e.g., links to `/url-qr-code-generator`, `/wifi-qr-code-generator`, etc.

  **TypeScript note**: `LANDING_DATA[type]` — since `type` is `QRType` and keys may not cover all 40 types, guard with `LANDING_DATA[type] ?? null` and show a generic fallback if null.

  **Files**: `src/pages/LandingPage.tsx` (new)

  **Verify**: `npm run build` — zero errors. Navigate to `/wifi-qr-code-generator` — page renders with correct H1 and FAQ.

---

- [ ] 14. **Create stub pages**: `Blog.tsx`, `About.tsx`, `Privacy.tsx`, `Terms.tsx`, `Contact.tsx`.

  Each page:
  - Imports `SEOHead` and renders appropriate title/description.
  - `Blog.tsx`: H1 "QR Code Resources", 6 article cards (title + teaser text) for:
    1. "How do QR codes work?"
    2. "QR code sizes for printing"
    3. "Static vs dynamic QR codes"
    4. "How to make a WiFi QR code"
    5. "Best error correction level for logos"
    6. "QR codes for restaurants"
    Each card has a heading, a 2-sentence description, and a "Read more →" link pointing to a future `/blog/article-slug` URL.
  - `About.tsx`: H1, 2 paragraphs about QR Studio, a features list.
  - `Privacy.tsx`: H1, privacy policy placeholder text (data processed client-side only).
  - `Terms.tsx`: H1, terms of use placeholder.
  - `Contact.tsx`: H1, a simple contact form (name, email, message — client-side only, submitting shows a toast, no backend).

  **Files**: `src/pages/Blog.tsx`, `src/pages/About.tsx`, `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/pages/Contact.tsx`

  **Verify**: `npm run build` — zero errors. Each page route renders.

---

- [ ] 15. **Update `src/hooks/useQRGenerator.ts`** — wire to `drawCustomQR`.

  The hook is no longer used directly by `QRPreview` (which now calls `drawCustomQR` inline). However, keep the hook for use by the `ExportPanel`'s HD export flow. Update it to accept `CustomizationOptions` instead of `template + customColor`:

  ```ts
  interface GenerateOptions {
    qrText: string;
    options: CustomizationOptions;
  }

  export function useQRGenerator() {
    const generateToCanvas = useCallback(async (canvas: HTMLCanvasElement, opts: GenerateOptions): Promise<boolean> => {
      if (!opts.qrText.trim()) return false;
      try {
        await drawCustomQR(canvas, opts.qrText, opts.options);
        return true;
      } catch {
        return false;
      }
    }, []);

    return { generateToCanvas };
  }
  ```

  The `canvasRef` is no longer stored in the hook — it lives in `App.tsx`.

  **TypeScript**: `opts.qrText` is `string` — no `QRType`/`QRData` in this hook anymore; the caller passes the pre-built text string.

  **Files**: `src/hooks/useQRGenerator.ts`

  **Verify**: `npm run build` — zero errors.

---

- [ ] 16. **Update `index.html`** — add base meta tags and JSON-LD schema.

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Free QR Code Generator — QR Studio</title>
      <meta name="description" content="Create beautiful, custom QR codes for free. 40+ QR types including WiFi, vCard, Bitcoin, UPI. Custom colors, logo upload, download PNG SVG PDF." />
      <meta property="og:title" content="Free QR Code Generator — QR Studio" />
      <meta property="og:description" content="Create and download custom QR codes for free. 40+ types, custom styles, no sign-up required." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://qrstudio.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Free QR Code Generator — QR Studio" />
      <meta name="twitter:description" content="Create and download custom QR codes for free. 40+ types, custom styles." />
      <link rel="canonical" href="https://qrstudio.app/" />
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "QR Studio",
        "description": "Free QR code generator with 40+ types, custom styles, and instant download.",
        "url": "https://qrstudio.app/",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
      </script>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```

  **Files**: `index.html`

  **Verify**: `npm run build` — builds successfully. Check `dist/index.html` contains the meta tags.

---

- [ ] 17. **Create `public/sitemap.xml` and `public/robots.txt`**.

  **sitemap.xml**:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://qrstudio.app/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
    <url><loc>https://qrstudio.app/wifi-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/url-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/vcard-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/whatsapp-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/upi-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/bitcoin-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
    <url><loc>https://qrstudio.app/bulk-qr-code-generator</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
    <url><loc>https://qrstudio.app/blog</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
    <url><loc>https://qrstudio.app/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
    <url><loc>https://qrstudio.app/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
    <url><loc>https://qrstudio.app/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
    <url><loc>https://qrstudio.app/contact</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  </urlset>
  ```

  **robots.txt**:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://qrstudio.app/sitemap.xml
  ```

  **Files**: `public/sitemap.xml` (new), `public/robots.txt` (new)

  **Verify**: `npm run build` — files copied to `dist/`. Check `dist/sitemap.xml` exists.

---

## Dependency Order Summary

The items must be implemented in this order because of the following dependencies:

1. Step 1 (types) → required by all other steps
2. Step 2 (qr-helpers) → depends on step 1 types
3. Step 3 (canvas-qr.ts) → depends on step 1 types and `qrcode` package API
4. Step 4 (TypeSelector) → depends on step 2 new configs + categories
5. Step 5 (CustomizationPanel) → depends on step 1 types, step 2 helpers
6. Step 6 (ExportPanel) → depends on step 3 (for HD export), step 1 types
7. Step 7 (QRPreview) → depends on step 3
8. Steps 8–10 (SEOHead, OnboardingTour, ThemeToggle) → independent, only need step 1 types
9. Step 11 (App.tsx) → depends on all components (steps 4–10) and pages (steps 12–14)
10. Step 12 (Home.tsx) → depends on all components (steps 4–7, 8)
11. Step 13 (LandingPage.tsx) → depends on Home.tsx structure (step 12)
12. Step 14 (stub pages) → independent of QR logic
13. Step 15 (useQRGenerator) → depends on step 3
14. Steps 16–17 (index.html, public/) → independent, can be done any time

Steps 8, 9, 10, 14, 16, 17 are fully independent of each other and can be done in any order.

---

## Known Constraints

- **PDF export without jspdf**: Since no new packages can be installed, the PDF export falls back to the `window.print()` approach with a print-optimized popup. A proper PDF with embedded image requires writing raw PDF binary — this is feasible but complex. Implement the print popup approach for Phase 1 and note in a `// TODO: PDF binary` comment.
- **SVG download**: `QRCodeLib.toString(text, { type: 'svg' })` generates a standard SVG but does NOT support custom dot styles or logos. The SVG export will be the basic QR without custom styling. Note this limitation in the UI ("SVG is standard style; use PNG for custom designs").
- **`canvas.toBlob` with JPEG**: The canvas `toBlob('image/jpeg')` may produce a white background on transparent QRs because JPEG doesn't support alpha. When `opts.transparent` is true and format is JPEG, automatically composite onto a white background first.
- **`qrcode` package's browser entry**: Vite resolves the `browser` field in package.json. The `qrcode` package has `"browser": "./lib/browser.js"` — this provides `create`, `toCanvas`, `toDataURL`, `toString` but NOT `toFile` or `toBuffer`. Do not use `toFile` or `toBuffer` in any browser code.
- **`noUnusedLocals` in strict TypeScript**: The `VideoIcon` alias in `iconMap` — since both `google_meet` and `zoom` use icon name `'Video'` (not `'VideoIcon'`), avoid adding `VideoIcon` as a separate key to prevent an unused variable error. Give them both the same icon name `'Video'` in the configs and don't add a separate `VideoIcon` entry to iconMap.
- **`useLocalStorage` state initialization on server (N/A)**: This is a pure SPA, no SSR, so `window.localStorage` is always available during `useState` initializer.
- **framer-motion `height: 'auto'` animation**: Use `initial={false}` on `AnimatePresence` to prevent animation on the initial render. For collapsible sections, the `motion.div` with `initial={{ height: 0 }}` and `animate={{ height: isExpanded ? 'auto' : 0 }}` works in framer-motion — it uses `ResizeObserver` internally to measure the target height.
