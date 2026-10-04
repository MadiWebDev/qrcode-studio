import { create as createQRCode } from 'qrcode';
import type { CustomizationOptions, DotStyle, EyeOuterStyle, EyeInnerStyle, FrameStyle } from '@/types';

// ─── roundRect helper (native where available, arcTo fallback) ─────────────────
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  const radius = Math.min(r, w / 2, h / 2);
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.arcTo(x + w, y, x + w, y + radius, radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
    ctx.lineTo(x + radius, y + h);
    ctx.arcTo(x, y + h, x, y + h - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
  }
}

// ─── Individual dot style drawing ─────────────────────────────────────────────
function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  style: DotStyle,
  color: string
): void {
  ctx.fillStyle = color;
  const gap = 0.5; // small gap between adjacent modules
  const s = size - gap;
  switch (style) {
    case 'square':
      ctx.fillRect(x, y, s, s);
      break;
    case 'rounded':
      roundRect(ctx, x, y, s, s, s * 0.3);
      ctx.fill();
      break;
    case 'dots':
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, (size / 2) * 0.85, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'classy': {
      const n = s * 0.3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + s - n, y);
      ctx.lineTo(x + s, y + n);
      ctx.lineTo(x + s, y + s);
      ctx.lineTo(x + n, y + s);
      ctx.lineTo(x, y + s - n);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'classy-rounded': {
      const n = s * 0.3;
      const r = s * 0.2;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + s - n, y);
      ctx.lineTo(x + s, y + n);
      ctx.lineTo(x + s, y + s - r);
      ctx.arcTo(x + s, y + s, x + s - r, y + s, r);
      ctx.lineTo(x + r, y + s);
      ctx.arcTo(x, y + s, x, y + s - r, r);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'extra-rounded':
      roundRect(ctx, x, y, s, s, s * 0.48);
      ctx.fill();
      break;
  }
}

// ─── Finder pattern (eye) drawing ─────────────────────────────────────────────
function drawEye(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  eyeColor: string,
  bgColor: string,
  outerStyle: EyeOuterStyle,
  innerStyle: EyeInnerStyle
): void {
  const bw = size / 7; // ≈ 1 module border width

  // Outer ring (7×7 modules)
  ctx.fillStyle = eyeColor;
  if (outerStyle === 'circle') {
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (outerStyle === 'rounded') {
    roundRect(ctx, x, y, size, size, size * 0.22);
    ctx.fill();
  } else {
    ctx.fillRect(x, y, size, size);
  }

  // Inner clear (5×5 modules) — use bg color
  const inner5 = size - bw * 2;
  ctx.fillStyle = bgColor;
  if (outerStyle === 'circle') {
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, inner5 / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (outerStyle === 'rounded') {
    roundRect(ctx, x + bw, y + bw, inner5, inner5, inner5 * 0.15);
    ctx.fill();
  } else {
    ctx.fillRect(x + bw, y + bw, inner5, inner5);
  }

  // Inner dot (3×3 modules)
  const dot3 = size * 3 / 7;
  const dotX = x + size / 2 - dot3 / 2;
  const dotY = y + size / 2 - dot3 / 2;
  ctx.fillStyle = eyeColor;

  if (innerStyle === 'dot') {
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, dot3 / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (innerStyle === 'diamond') {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const half = dot3 / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy - half);
    ctx.lineTo(cx + half, cy);
    ctx.lineTo(cx, cy + half);
    ctx.lineTo(cx - half, cy);
    ctx.closePath();
    ctx.fill();
  } else {
    // square
    roundRect(ctx, dotX, dotY, dot3, dot3, dot3 * 0.1);
    ctx.fill();
  }
}

// ─── Frame drawing ─────────────────────────────────────────────────────────────
function drawFrame(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  qrAreaHeight: number,
  style: FrameStyle,
  color: string,
  cta: string,
  fontSize: number
): void {
  if (style === 'none') return;

  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  switch (style) {
    case 'simple':
      ctx.lineWidth = 3;
      ctx.strokeRect(2, 2, canvasWidth - 4, canvasHeight - 4);
      break;
    case 'rounded':
      ctx.lineWidth = 3;
      roundRect(ctx, 2, 2, canvasWidth - 4, canvasHeight - 4, 16);
      ctx.stroke();
      break;
    case 'badge': {
      // Banner at the bottom below QR area
      ctx.fillRect(0, qrAreaHeight, canvasWidth, canvasHeight - qrAreaHeight);
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cta || 'Scan Me', canvasWidth / 2, qrAreaHeight + (canvasHeight - qrAreaHeight) / 2);
      break;
    }
    case 'banner': {
      // Top band
      ctx.fillRect(0, 0, canvasWidth, 40);
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cta || 'Scan Me', canvasWidth / 2, 20);
      break;
    }
    case 'ticket':
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 5]);
      ctx.strokeRect(2, 2, canvasWidth - 4, canvasHeight - 4);
      ctx.setLineDash([]);
      break;
  }
}

// ─── Logo drawing ──────────────────────────────────────────────────────────────
async function drawLogo(
  ctx: CanvasRenderingContext2D,
  src: string,
  canvasWidth: number,
  qrCenterY: number,
  qrCenterX: number,
  sizePercent: number,
  padding: number,
  shape: 'square' | 'circle'
): Promise<void> {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const logoSize = canvasWidth * sizePercent;
      const totalSize = logoSize + padding * 2;
      const lx = qrCenterX - totalSize / 2;
      const ly = qrCenterY - totalSize / 2;

      // White background behind logo
      ctx.fillStyle = '#ffffff';
      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(qrCenterX, qrCenterY, totalSize / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        roundRect(ctx, lx, ly, totalSize, totalSize, 4);
        ctx.fill();
      }

      ctx.save();
      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(qrCenterX, qrCenterY, logoSize / 2, 0, Math.PI * 2);
        ctx.clip();
      }
      ctx.drawImage(img, lx + padding, ly + padding, logoSize, logoSize);
      ctx.restore();
      resolve();
    };
    img.onerror = () => resolve();
    img.src = src;
  });
}

// ─── Main draw function ────────────────────────────────────────────────────────
export async function drawCustomQR(
  canvas: HTMLCanvasElement,
  text: string,
  opts: CustomizationOptions
): Promise<void> {
  const {
    fgColor,
    bgColor,
    transparent,
    dotStyle,
    eyeOuterStyle,
    eyeInnerStyle,
    eyeColor,
    logoUrl,
    logoSize,
    logoPadding,
    logoShape,
    ecLevel,
    outputSize,
    frameStyle,
    frameCta,
    frameColor,
    frameFontSize,
  } = opts;

  // Create QR code data
  const qr = createQRCode(text, { errorCorrectionLevel: ecLevel });
  const moduleCount = qr.modules.size;

  // Frame adds extra height for badge/banner
  const frameHeight = (frameStyle === 'badge') ? 40 : (frameStyle === 'banner') ? 40 : 0;
  const qrAreaSize = outputSize;
  const totalHeight = qrAreaSize + frameHeight;

  canvas.width = outputSize;
  canvas.height = totalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  // Background
  if (!transparent) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Offset for banner (banner adds top bar)
  const qrOffsetY = frameStyle === 'banner' ? frameHeight : 0;

  // Module size with quiet zone
  const quietModules = 4;
  const totalModules = moduleCount + quietModules * 2;
  const moduleSize = qrAreaSize / totalModules;
  const originX = moduleSize * quietModules;
  const originY = qrOffsetY + moduleSize * quietModules;

  // Eye positions (top-left corner of each 7×7 eye, in module coords)
  const eyeRegions = [
    { row: 0, col: 0 },
    { row: 0, col: moduleCount - 7 },
    { row: moduleCount - 7, col: 0 },
  ];

  function isInEye(row: number, col: number): boolean {
    return eyeRegions.some(
      ({ row: er, col: ec }) => row >= er && row < er + 7 && col >= ec && col < ec + 7
    );
  }

  // Draw data modules (skip finder pattern regions)
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (!isInEye(row, col) && qr.modules.get(row, col) > 0) {
        const px = originX + col * moduleSize;
        const py = originY + row * moduleSize;
        drawDot(ctx, px, py, moduleSize, dotStyle, fgColor);
      }
    }
  }

  // Draw the three finder pattern eyes
  for (const { row: er, col: ec } of eyeRegions) {
    const eyeX = originX + ec * moduleSize;
    const eyeY = originY + er * moduleSize;
    const eyeSize = moduleSize * 7;
    drawEye(ctx, eyeX, eyeY, eyeSize, eyeColor, transparent ? 'rgba(0,0,0,0)' : bgColor, eyeOuterStyle, eyeInnerStyle);
  }

  // Draw logo (centered in QR area)
  if (logoUrl) {
    const qrCenterX = originX + (moduleCount / 2) * moduleSize;
    const qrCenterY = originY + (moduleCount / 2) * moduleSize;
    await drawLogo(ctx, logoUrl, qrAreaSize, qrCenterY, qrCenterX, logoSize, logoPadding, logoShape);
  }

  // Draw frame
  drawFrame(ctx, canvas.width, canvas.height, qrAreaSize + qrOffsetY, frameStyle, frameColor, frameCta, frameFontSize);
}
