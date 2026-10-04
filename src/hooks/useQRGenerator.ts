import { useCallback, useRef } from 'react';
import QRCodeLib from 'qrcode';
import type { QRType, QRData, TemplateName } from '@/types';
import { generateQRData } from '@/lib/qr-helpers';

interface GenerateOptions {
  type: QRType;
  data: QRData;
  template: TemplateName;
  customColor?: string;
  width?: number;
}

export function useQRGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateQRCode = useCallback(async (options: GenerateOptions): Promise<string | null> => {
    const { type, data, template, customColor, width = 512 } = options;
    const qrText = generateQRData(type, data);
    
    if (!qrText.trim()) return null;

    try {
      const canvas = document.createElement('canvas');
      const finalWidth = Math.min(width, 1024);
      const canvasSize = Math.min(finalWidth, 1024);
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Fill background
      ctx.fillStyle = template === 'glassmorphism' ? 'rgba(255,255,255,0.1)' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Determine QR color
      let qrColor = '#000000';
      if (template === 'modern') qrColor = '#0f172a';
      else if (template === 'vibrant') qrColor = customColor || '#7c3aed';
      else if (template === 'glassmorphism') qrColor = '#1e293b';
      else if (template === 'minimal') qrColor = '#374151';
      else if (template === 'corporate') qrColor = '#1e40af';
      else if (template === 'classic') qrColor = '#000000';

      // Generate QR data and render
      const qrData = await QRCodeLib.toDataURL(qrText, {
        errorCorrectionLevel: 'M',
        margin: 2,
        width: canvasSize,
        color: {
          dark: qrColor,
          light: '#ffffff00', // transparent for light cells
        },
      });

      const img = new Image();
      img.src = qrData;
      
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });

      // Draw white QR background first
      if (template !== 'glassmorphism') {
        ctx.fillStyle = '#ffffff';
        const qrSize = canvasSize - 40;
        ctx.fillRect(20, 20, qrSize, qrSize);
      }

      // Draw the QR code image
      ctx.drawImage(img, 20, 20, canvasSize - 40, canvasSize - 40);

      return canvas.toDataURL('image/png');
    } catch {
      return null;
    }
  }, []);

  const generateQROnCanvas = useCallback(async (canvas: HTMLCanvasElement, options: GenerateOptions) => {
    const dataUrl = await generateQRCode(options);
    if (!dataUrl) return false;

    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    const img = new Image();
    img.src = dataUrl;
    
    await new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    return true;
  }, [generateQRCode]);

  return {
    canvasRef,
    generateQRCode,
    generateQROnCanvas,
  };
}
