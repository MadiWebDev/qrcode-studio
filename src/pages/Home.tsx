import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Settings, Palette, Download, Wand2, RotateCcw, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TypeSelector } from '@/components/TypeSelector';
import { DynamicForm } from '@/components/DynamicForm';
import { TemplateSelector } from '@/components/TemplateSelector';
import { CustomizationPanel } from '@/components/CustomizationPanel';
import { QRPreview } from '@/components/QRPreview';
import { ExportPanel } from '@/components/ExportPanel';
import { SEOHead } from '@/components/SEOHead';
import { useIsMobile } from '@/hooks/use-mobile';
import type { QRType, QRData, TemplateName, CustomizationOptions, QRState } from '@/types';
import { getTypeConfig } from '@/lib/qr-helpers';

interface HomeProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  qrType: QRType;
  setQrType: (t: QRType) => void;
  qrData: QRData;
  setQrData: (d: QRData) => void;
  template: TemplateName;
  setTemplate: (t: TemplateName) => void;
  customization: CustomizationOptions;
  setCustomization: (o: CustomizationOptions) => void;
  qrText: string;
  state: QRState & { customization: CustomizationOptions };
}

const MOBILE_STEPS = [
  { id: 0, label: 'Type', icon: Settings },
  { id: 1, label: 'Content', icon: QrCode },
  { id: 2, label: 'Design', icon: Palette },
  { id: 3, label: 'Download', icon: Download },
];

export default function Home({
  canvasRef,
  qrType,
  setQrType,
  qrData,
  setQrData,
  template,
  setTemplate,
  customization,
  setCustomization,
  qrText,
  state,
}: HomeProps) {
  const isMobile = useIsMobile();
  const [mobileStep, setMobileStep] = useState(0);
  const config = getTypeConfig(qrType);
  const localCanvasRef = useRef<HTMLCanvasElement>(null);
  // Use the passed canvasRef, fall back to local ref
  const activeCanvasRef = canvasRef.current !== undefined ? canvasRef : localCanvasRef;

  const handleReset = useCallback(() => setQrData({}), [setQrData]);

  // Stats footer
  const statsBar = (
    <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-2">
      <span>Type: <span className="font-medium text-foreground">{config?.label}</span></span>
      <span>Chars: <span className="font-medium text-foreground">{qrText.length}</span></span>
      <span>EC: <span className="font-medium text-foreground">{customization.ecLevel}</span></span>
      <span>Size: <span className="font-medium text-foreground">{customization.outputSize}px</span></span>
    </div>
  );

  // ── Mobile layout ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        <SEOHead
          title="Free QR Code Generator — QR Studio"
          description="Create beautiful, custom QR codes for free. 40+ types, custom colors, logo upload. Download PNG, SVG, PDF instantly. No sign-up needed."
        />

        {/* Mini preview bar */}
        {qrText && (
          <div className="sticky top-14 z-40 bg-background/90 backdrop-blur-md border-b border-border/60 px-4 py-2 flex items-center gap-3">
            <canvas ref={activeCanvasRef} className="hidden" aria-hidden="true" />
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center shrink-0">
              <QrCode className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{config?.label}</p>
              <p className="text-xs text-muted-foreground">{qrText.length} characters</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="text-xs shrink-0"
              onClick={() => setMobileStep(3)}
            >
              Download <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        )}

        {/* Mobile step content */}
        <div className="px-4 py-4 pb-24 max-w-2xl mx-auto">
          {mobileStep === 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Choose QR Type</h2>
              <TypeSelector selected={qrType} onChange={t => { setQrType(t); setMobileStep(1); }} />
            </div>
          )}

          {mobileStep === 1 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Content</h2>
                <Button variant="ghost" size="sm" onClick={handleReset} className="h-7 px-2 text-xs text-muted-foreground">
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset
                </Button>
              </div>
              <DynamicForm type={qrType} data={qrData} onChange={setQrData} />
              {qrText && (
                <Button className="w-full" size="sm" onClick={() => setMobileStep(2)}>
                  Next: Design <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          )}

          {mobileStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Design</h2>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Template</p>
                <TemplateSelector selected={template} onChange={setTemplate} />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Advanced customization</p>
                <CustomizationPanel options={customization} onChange={setCustomization} qrText={qrText} />
              </div>
              {qrText && (
                <Button className="w-full" size="sm" onClick={() => setMobileStep(3)}>
                  Next: Download <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          )}

          {mobileStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Preview & Download</h2>
              <QRPreview
                qrText={qrText}
                canvasRef={activeCanvasRef}
                options={customization}
                typeLabel={config?.label ?? ''}
              />
              <ExportPanel
                qrText={qrText}
                canvasRef={activeCanvasRef}
                type={qrType}
                state={state}
              />
              {statsBar}
            </div>
          )}
        </div>

        {/* Mobile bottom nav */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/60 px-2 pb-safe">
          <div className="flex">
            {MOBILE_STEPS.map(step => {
              const Icon = step.icon;
              const isActive = mobileStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setMobileStep(step.id)}
                  className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label={step.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{step.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </>
    );
  }

  // ── Desktop layout ────────────────────────────────────────────────────────
  return (
    <>
      <SEOHead
        title="Free QR Code Generator — QR Studio"
        description="Create beautiful, custom QR codes for free. 40+ types, custom colors, logo upload. Download PNG, SVG, PDF instantly. No sign-up needed."
        canonicalUrl="https://qrstudio.app/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4 min-w-0"
          >
            {/* Type selector */}
            <Card className="shadow-sm border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  QR Code Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypeSelector selected={qrType} onChange={setQrType} />
              </CardContent>
            </Card>

            {/* Content form */}
            <Card className="shadow-sm border-border/60">
              <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-primary" />
                  Content Details
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="h-8 px-2 text-muted-foreground hover:text-foreground"
                  aria-label="Reset form"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" />
                  <span className="text-xs">Reset</span>
                </Button>
              </CardHeader>
              <CardContent>
                <DynamicForm type={qrType} data={qrData} onChange={setQrData} />
              </CardContent>
            </Card>

            {/* Template + customization */}
            <Card className="shadow-sm border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-primary" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Template</p>
                  <TemplateSelector selected={template} onChange={setTemplate} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Advanced</p>
                  <CustomizationPanel options={customization} onChange={setCustomization} qrText={qrText} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column — sticky preview */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="lg:sticky lg:top-20 lg:self-start space-y-4"
          >
            <Card className="shadow-lg border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-primary" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <QRPreview
                  qrText={qrText}
                  canvasRef={activeCanvasRef}
                  options={customization}
                  typeLabel={config?.label ?? ''}
                />
                <Separator />
                <ExportPanel
                  qrText={qrText}
                  canvasRef={activeCanvasRef}
                  type={qrType}
                  state={state}
                />
                <Separator />
                {statsBar}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
