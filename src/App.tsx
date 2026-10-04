import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Palette, Settings, Info, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TypeSelector } from '@/components/TypeSelector';
import { DynamicForm } from '@/components/DynamicForm';
import { TemplateSelector } from '@/components/TemplateSelector';
import { QRPreview } from '@/components/QRPreview';
import { useDebounce } from '@/hooks/useDebounce';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { QRType, QRData, TemplateName } from '@/types';
import { getTypeConfig, generateQRData } from '@/lib/qr-helpers';

export default function App() {
  const [storedType, setStoredType] = useLocalStorage<QRType>('qr-last-type', 'url');
  const [storedTemplate, setStoredTemplate] = useLocalStorage<TemplateName>('qr-last-template', 'classic');

  const [type, setType] = useState<QRType>(storedType);
  const [data, setData] = useState<QRData>({});
  const [template, setTemplate] = useState<TemplateName>(storedTemplate);
  const [customColor, setCustomColor] = useState('#7c3aed');

  const debouncedData = useDebounce(data, 400);

  const handleTypeChange = useCallback((newType: QRType) => {
    setType(newType);
    setStoredType(newType);
    setData({});
  }, [setStoredType]);

  const handleTemplateChange = useCallback((newTemplate: TemplateName) => {
    setTemplate(newTemplate);
    setStoredTemplate(newTemplate);
  }, [setStoredTemplate]);

  const handleDataChange = useCallback((newData: QRData) => {
    setData(newData);
  }, []);

  const handleReset = useCallback(() => {
    setData({});
  }, []);

  const config = getTypeConfig(type);

  // Check if required fields are filled
  const isValid = useMemo(() => {
    if (!config) return false;
    return config.fields
      .filter(f => f.required)
      .every(f => {
        const val = debouncedData[f.name];
        return val && val.trim().length > 0;
      });
  }, [config, debouncedData]);

  const qrText = useMemo(() => {
    if (!isValid) return '';
    return generateQRData(type, debouncedData);
  }, [type, debouncedData, isValid]);

  const isDataTooLong = qrText.length > 2953;

  return (
    <TooltipProvider delayDuration={300}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <QrCode className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <h1 className="font-bold text-lg tracking-tight">QR Studio</h1>
                <span className="text-xs text-muted-foreground hidden sm:inline">Professional QR Code Generator</span>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Info className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">Generate QR codes for 26 different data types. Choose a template, fill in the fields, and download your code.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 lg:space-y-6"
            >
              {/* Type Selection Card */}
              <Card className="shadow-sm border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" />
                    QR Code Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TypeSelector selected={type} onChange={handleTypeChange} />
                </CardContent>
              </Card>

              {/* Dynamic Form Card */}
              <Card className="shadow-sm border-border/60">
                <CardHeader className="pb-3 flex flex-row items-center justify-between">
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
                  <DynamicForm
                    type={type}
                    data={data}
                    onChange={handleDataChange}
                  />
                </CardContent>
              </Card>

              {/* Template Selection Card */}
              <Card className="shadow-sm border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Palette className="w-4 h-4 text-primary" />
                    Visual Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <TemplateSelector selected={template} onChange={handleTemplateChange} />

                  {/* Color Picker for Vibrant Template */}
                  <AnimatePresence>
                    {template === 'vibrant' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2">
                          <label className="text-xs font-medium text-muted-foreground mb-2 block">
                            QR Code Color
                          </label>
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <input
                                type="color"
                                value={customColor}
                                onChange={(e) => setCustomColor(e.target.value)}
                                className="w-10 h-10 rounded-lg cursor-pointer border-2 border-border bg-transparent p-1"
                                aria-label="Choose QR code color"
                              />
                            </div>
                            <Input
                              type="text"
                              value={customColor}
                              onChange={(e) => setCustomColor(e.target.value)}
                              className="w-28 text-xs font-mono"
                              placeholder="#7c3aed"
                              aria-label="QR color hex value"
                            />
                            <div className="flex gap-1">
                              {['#7c3aed', '#db2777', '#059669', '#d97706', '#dc2626', '#0891b2'].map((color) => (
                                <button
                                  key={color}
                                  type="button"
                                  onClick={() => setCustomColor(color)}
                                  className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${customColor === color ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                                  style={{ backgroundColor: color }}
                                  aria-label={`Set color to ${color}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>

              {/* Validation Status */}
              <AnimatePresence>
                {isDataTooLong && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800/50 p-3 flex items-start gap-2.5"
                  >
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-amber-800 dark:text-amber-300">Data too long</p>
                      <p className="text-xs text-amber-700 dark:text-amber-400/80">QR codes can hold up to 2,953 characters. Try shortening your content.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <Card className="shadow-lg border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-primary" />
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <QRPreview
                    type={type}
                    data={debouncedData}
                    template={template}
                    customColor={customColor}
                  />

                  <Separator className="my-4" />

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Type: <span className="font-medium text-foreground">{config?.label}</span></span>
                    <span>Characters: <span className="font-medium text-foreground">{qrText.length}</span></span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
