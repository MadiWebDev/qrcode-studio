import { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { QrCode, Info } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { OnboardingTour } from '@/components/OnboardingTour';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Contact from '@/pages/Contact';
import type { QRType, QRData, TemplateName, CustomizationOptions } from '@/types';
import { DEFAULT_CUSTOMIZATION } from '@/lib/defaults';
import { generateQRData, getTypeConfig } from '@/lib/qr-helpers';
import { useDebounce } from '@/hooks/useDebounce';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import LandingPage from './pages/LandingPage';

// ── 404 page ──────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <div className="text-6xl font-bold text-muted-foreground/20">404</div>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-muted-foreground max-w-sm">
        The page you're looking for doesn't exist. Go back to the generator and create some QR codes.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Back to QR Studio
      </a>
    </div>
  );
}

// ── Bulk coming-soon placeholder ──────────────────────────────────────────────
function BulkPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <div className="text-4xl">🚀</div>
      <h1 className="text-2xl font-bold">Bulk QR Generator — Coming Soon</h1>
      <p className="text-muted-foreground max-w-md">
        Upload a CSV or Excel file and generate hundreds of QR codes in one click. This feature is in active development and will be available in Phase 2.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Use QR Studio Now
      </a>
    </div>
  );
}

// ── App header ────────────────────────────────────────────────────────────────
function AppHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
            <QrCode className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg tracking-tight">QR Studio</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">Free QR Code Generator</span>
          </div>
        </a>
        <div className="flex items-center gap-1">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            <a href="/blog" className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors">Blog</a>
            <a href="/about" className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors">About</a>
          </nav>
          <ThemeToggle />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="About QR Studio">
                <Info className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-xs">
                Generate custom QR codes for 40+ types — WiFi, vCard, Bitcoin, UPI and more.
                All processing happens in your browser. No data is ever sent to a server.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [storedType, setStoredType] = useLocalStorage<QRType>('qr-last-type', 'url');
  const [storedTemplate, setStoredTemplate] = useLocalStorage<TemplateName>('qr-last-template', 'classic');

  const [qrType, setQrTypeState] = useState<QRType>(storedType);
  const [qrData, setQrData] = useState<QRData>({});
  const [template, setTemplateState] = useState<TemplateName>(storedTemplate);
  const [customization, setCustomization] = useState<CustomizationOptions>(DEFAULT_CUSTOMIZATION);

  const debouncedData = useDebounce(qrData, 300);

  // Restore state from URL ?state= param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('state');
    if (!encoded) return;
    try {
      const decoded = decodeURIComponent(escape(atob(encoded)));
      const parsed = JSON.parse(decoded) as {
        type?: QRType;
        data?: QRData;
        template?: TemplateName;
        customization?: Partial<CustomizationOptions>;
      };
      if (parsed.type) { setQrTypeState(parsed.type); setStoredType(parsed.type); }
      if (parsed.data) setQrData(parsed.data);
      if (parsed.template) { setTemplateState(parsed.template); setStoredTemplate(parsed.template); }
      if (parsed.customization) setCustomization({ ...DEFAULT_CUSTOMIZATION, ...parsed.customization });
    } catch {
      // Ignore corrupt state param
    }
  // Only run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setQrType = useCallback((t: QRType) => {
    setQrTypeState(t);
    setStoredType(t);
    setQrData({});
  }, [setStoredType]);

  const setTemplate = useCallback((t: TemplateName) => {
    setTemplateState(t);
    setStoredTemplate(t);
  }, [setStoredTemplate]);

  const config = getTypeConfig(qrType);

  const isValid = useMemo(() => {
    if (!config) return false;
    return config.fields
      .filter(f => f.required)
      .every(f => {
        const val = debouncedData[f.name];
        return val !== undefined && val.trim().length > 0;
      });
  }, [config, debouncedData]);

  const qrText = useMemo(() => {
    if (!isValid) return '';
    return generateQRData(qrType, debouncedData);
  }, [qrType, debouncedData, isValid]);

  const state = useMemo(() => ({
    type: qrType,
    data: qrData,
    template,
    customColor: customization.fgColor,
    customization,
  }), [qrType, qrData, template, customization]);

  const homeProps = {
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
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider delayDuration={300}>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-background px-4 py-2 rounded-lg border border-border text-sm font-medium"
        >
          Skip to content
        </a>

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <AppHeader />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home {...homeProps} />} />
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
