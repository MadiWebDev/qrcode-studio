import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download, Copy, Check, Printer, Share2, AlertTriangle,
  QrCode, Smartphone, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { QRType, QRData, TemplateName } from '@/types';
import { templates } from '@/lib/templates';
import { generateQRData, getTypeConfig } from '@/lib/qr-helpers';
import QRCodeLib from 'qrcode';

interface QRPreviewProps {
  type: QRType;
  data: QRData;
  template: TemplateName;
  customColor: string;
}

export function QRPreview({ type, data, template, customColor }: QRPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isTooLong, setIsTooLong] = useState(false);
  const templateStyle = templates[template];
  const config = getTypeConfig(type);

  const generateQR = useCallback(async () => {
    const qrText = generateQRData(type, data);
    if (!qrText.trim()) {
      setQrDataUrl(null);
      setIsTooLong(false);
      return;
    }

    if (qrText.length > 2953) {
      setIsTooLong(true);
      return;
    }
    setIsTooLong(false);
    setIsGenerating(true);

    try {
      let qrColor = templateStyle.qrColor;
      if (template === 'vibrant' && customColor) {
        qrColor = customColor;
      }

      const dataUrl = await QRCodeLib.toDataURL(qrText, {
        errorCorrectionLevel: 'M',
        margin: 2,
        width: 1024,
        color: {
          dark: qrColor,
          light: '#ffffff',
        },
      });

      setQrDataUrl(dataUrl);

      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = new Image();
          img.onload = () => {
            canvas.width = 1024;
            canvas.height = 1024;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
          };
          img.src = dataUrl;
        }
      }
    } catch {
      setQrDataUrl(null);
    } finally {
      setIsGenerating(false);
    }
  }, [type, data, template, customColor, templateStyle.qrColor]);

  useEffect(() => {
    generateQR();
  }, [generateQR]);

  const handleDownload = useCallback(() => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `qrcode-${type}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [qrDataUrl, type]);

  const handleCopy = useCallback(async () => {
    if (!qrDataUrl) return;
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      try {
        const canvas = canvasRef.current;
        if (canvas) {
          canvas.toBlob(async (blob) => {
            if (blob) {
              await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob }),
              ]);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          });
        }
      } catch {
        // Final fallback
        const input = document.createElement('input');
        input.value = qrDataUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }, [qrDataUrl]);

  const handlePrint = useCallback(() => {
    if (!qrDataUrl) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print QR Code</title>
          <style>
            body { margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui; }
            .qr-container { text-align: center; padding: 40px; }
            img { max-width: 400px; width: 100%; height: auto; }
            .label { margin-top: 20px; font-size: 18px; color: #666; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <img src="${qrDataUrl}" alt="QR Code" />
            <div class="label">${config?.label || 'QR Code'} - Scannable Code</div>
          </div>
          <script>window.onload = () => { setTimeout(() => { window.print(); window.close(); }, 200); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }, [qrDataUrl, config]);

  const handleShare = useCallback(async () => {
    if (!qrDataUrl) return;
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      const file = new File([blob], `qrcode-${type}.png`, { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          title: `${config?.label || 'QR'} Code`,
          text: `Scan this QR code for ${config?.label || 'my content'}`,
          files: [file],
        });
      } else {
        alert('Web Share API not supported on this device');
      }
    } catch {
      // User cancelled or error
    }
  }, [qrDataUrl, type, config]);

  const hasData = Object.values(data).some(v => v && v.trim().length > 0);

  return (
    <div className="space-y-4">
      {/* QR Card */}
      <div
        className={`relative overflow-hidden rounded-2xl ${templateStyle.cardBorder} ${templateStyle.cardShadow} transition-all duration-300`}
      >
        <div className={`${templateStyle.cardBg} p-6 sm:p-8`}>
          <div className="flex flex-col items-center gap-4">
            {/* Template Header */}
            <div className="text-center space-y-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${templateStyle.accentColor} ${templateStyle.textColor}`}>
                <QrCode className="w-3 h-3" />
                {config?.label}
              </div>
              <p className={`text-xs ${templateStyle.subtitleColor}`}>
                Scan to access
              </p>
            </div>

            {/* QR Canvas */}
            <div className={`relative p-4 rounded-xl ${templateStyle.qrBg} shadow-inner`}>
              {qrDataUrl ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={qrDataUrl}
                    alt={`QR Code for ${config?.label || 'content'}`}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                  />
                </motion.div>
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center gap-2">
                  {isTooLong ? (
                    <>
                      <AlertTriangle className="w-8 h-8 text-amber-500" />
                      <span className="text-xs text-muted-foreground text-center px-4">
                        Data is too long for QR code
                      </span>
                    </>
                  ) : (
                    <>
                      <Smartphone className="w-10 h-10 text-muted-foreground/40" />
                      <span className="text-xs text-muted-foreground text-center">
                        {hasData ? (
                          <span className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Fill required fields
                          </span>
                        ) : (
                          'Enter data to generate'
                        )}
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* Loading indicator */}
              <AnimatePresence>
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl"
                  >
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Template Footer */}
            <div className="text-center space-y-0.5">
              <p className={`text-xs font-medium ${templateStyle.textColor}`}>
                {config?.label || 'QR Code'}
              </p>
              <p className={`text-xs ${templateStyle.subtitleColor}`}>
                Generated with QR Studio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          disabled={!qrDataUrl}
          className="flex items-center gap-1.5"
          aria-label="Download QR code as PNG"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="text-xs">Download</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          disabled={!qrDataUrl}
          className="flex items-center gap-1.5"
          aria-label="Copy QR code to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="text-xs">{copied ? 'Copied' : 'Copy'}</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handlePrint}
          disabled={!qrDataUrl}
          className="flex items-center gap-1.5"
          aria-label="Print QR code"
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="text-xs">Print</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          disabled={!qrDataUrl}
          className="flex items-center gap-1.5"
          aria-label="Share QR code"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="text-xs">Share</span>
        </Button>
      </div>

      {/* Hidden canvas for copy operations */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
