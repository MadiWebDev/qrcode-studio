import { useRef, useState, useMemo, useCallback } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { TypeSelector } from '@/components/TypeSelector';
import { DynamicForm } from '@/components/DynamicForm';
import { QRPreview } from '@/components/QRPreview';
import { ExportPanel } from '@/components/ExportPanel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import type { QRType, QRData, CustomizationOptions, QRState } from '@/types';
import { DEFAULT_CUSTOMIZATION } from '@/lib/defaults';
import { generateQRData, getTypeConfig } from '@/lib/qr-helpers';
import { useDebounce } from '@/hooks/useDebounce';

interface LandingData {
  title: string;
  description: string;
  slug: string;
  howTo: string[];
  faqs: { q: string; a: string }[];
  relatedTypes: QRType[];
}

const LANDING_DATA: Partial<Record<QRType, LandingData>> = {
  wifi: {
    title: 'Free WiFi QR Code Generator — Share Your Network Instantly',
    description:
      'Create a WiFi QR code that connects guests to your network in one scan — no password typing, no errors. Download PNG, SVG, or PDF for free. Works on every modern smartphone.',
    slug: 'wifi-qr-code-generator',
    howTo: [
      'Select the WiFi QR type and enter your network name (SSID) exactly as it appears in your router settings.',
      'Choose your encryption type — WPA/WPA2 is the most common. Enter your WiFi password.',
      'Optionally customise colours and add a logo, then click Download to save your QR code as PNG or SVG.',
    ],
    faqs: [
      {
        q: 'Is my WiFi password stored anywhere?',
        a: 'No. All QR generation happens entirely in your browser using JavaScript. Your password never leaves your device and is never sent to any server.',
      },
      {
        q: 'Which devices can scan a WiFi QR code natively?',
        a: 'Android 10 and above can scan WiFi QR codes with the built-in Camera app. iOS 11 and above on iPhone and iPad also support scanning WiFi QR codes natively without a third-party app.',
      },
      {
        q: 'Does the WiFi QR code work for hidden networks?',
        a: 'The WIFI QR standard includes an H:true flag for hidden networks. Check the hidden-network option in the form and the QR code will include this flag so compatible devices can connect.',
      },
      {
        q: 'Can I print the WiFi QR code for my café or hotel?',
        a: 'Absolutely. Download the SVG version for the sharpest results at any print size. We recommend a minimum printed size of 2 cm × 2 cm for reliable scanning at a normal reading distance.',
      },
    ],
    relatedTypes: ['url', 'vcard', 'email'],
  },

  url: {
    title: 'Free URL QR Code Generator — Link Anything with a QR Code',
    description:
      'Turn any website URL into a scannable QR code in seconds. Perfect for marketing materials, business cards, and product packaging. Download in PNG, SVG, or PDF format for free.',
    slug: 'url-qr-code-generator',
    howTo: [
      'Select the URL QR type and paste or type the full website address, including the https:// prefix.',
      'Customise the design — pick a colour scheme, dot style, or upload your logo to brand the QR code.',
      'Click Download and choose PNG for digital use or SVG for print-quality output.',
    ],
    faqs: [
      {
        q: 'What is the difference between a static and a dynamic URL QR code?',
        a: 'A static QR code encodes the URL directly. It cannot be changed after printing. A dynamic QR code points to a short link that you can redirect later. QR Studio currently generates static codes, which are free forever and require no account.',
      },
      {
        q: 'How small can a URL QR code be and still scan reliably?',
        a: 'For a standard URL, a printed size of 2 cm × 2 cm typically scans well at 25–30 cm distance. Shorter URLs produce simpler QR codes that can be printed even smaller. Avoid putting QR codes smaller than 1 cm × 1 cm in print.',
      },
      {
        q: 'Can I use https redirect links like bit.ly in a URL QR code?',
        a: 'Yes. Any valid URL works — short links, UTM-tagged links, deep links, and standard https addresses all encode correctly.',
      },
    ],
    relatedTypes: ['wifi', 'vcard', 'whatsapp'],
  },

  vcard: {
    title: 'Free vCard QR Code Generator — Digital Business Card',
    slug: 'vcard-qr-code-generator',
    description:
      'Create a vCard QR code that saves your full contact details directly into the scanners address book. Replace paper business cards with a stylish, sustainable digital alternative.',
    howTo: [
      'Select the vCard QR type and fill in your name, phone number, email, and organisation.',
      'Optionally add your website URL and a job title for a complete digital business card.',
      'Download your QR code, print it on your business cards, or share it digitally.',
    ],
    faqs: [
      {
        q: 'What contact fields does the vCard QR code support?',
        a: 'The QR Studio vCard type supports name, phone number, email address, and organisation. For a more detailed contact record with multiple numbers, address, and social links, try the Business Card type which generates a richer plain-text contact.',
      },
      {
        q: 'How does a recipient save my details from a vCard QR code?',
        a: 'When scanned with the native camera app on iOS or Android, the phone prompts the user to create a new contact. It pre-fills all the fields you encoded, and the user just taps Save.',
      },
      {
        q: 'Does a vCard QR code expire?',
        a: 'No. Static QR codes do not expire. The contact details are stored inside the QR code pattern itself and will work as long as the printed code is readable.',
      },
    ],
    relatedTypes: ['mecard', 'business_card', 'email'],
  },

  whatsapp: {
    title: 'Free WhatsApp QR Code Generator — Start Conversations Instantly',
    description:
      'Generate a WhatsApp QR code that opens a chat to your number with an optional pre-filled message. Ideal for customer support, shops, restaurants, and personal promotion.',
    slug: 'whatsapp-qr-code-generator',
    howTo: [
      'Select the WhatsApp QR type and enter your phone number in international format, for example +447911123456.',
      'Optionally type a pre-filled message that the scanner will see before sending — for example "Hello, I did like to enquire about your services."',
      'Download the QR code and place it on your website, flyer, storefront, or business card.',
    ],
    faqs: [
      {
        q: 'Does the recipient need WhatsApp installed to scan the QR code?',
        a: 'Yes. The QR code encodes a wa.me link which opens the WhatsApp app. If WhatsApp is not installed, the link opens whatsapp.com in a browser, where the user can download the app.',
      },
      {
        q: 'Does the pre-filled message send automatically?',
        a: 'No. The message appears in the text input field so the recipient can edit or delete it before tapping Send. This is a WhatsApp platform limitation designed to prevent spam.',
      },
      {
        q: 'Can I use a WhatsApp Business number?',
        a: 'Yes. Enter your WhatsApp Business number in international format. The QR code works identically for personal and business accounts.',
      },
    ],
    relatedTypes: ['sms', 'telegram', 'email'],
  },

  upi: {
    title: 'Free UPI QR Code Generator — Accept Payments Instantly',
    description:
      'Create a UPI payment QR code that lets customers pay you directly through BHIM, Google Pay, PhonePe, Paytm, and any other UPI app. Set a fixed amount or leave it open.',
    slug: 'upi-qr-code-generator',
    howTo: [
      'Select the UPI QR type and enter your UPI ID (VPA), for example yourname@upi or 9999999999@paytm.',
      'Enter your name, an optional fixed amount, and a transaction note.',
      'Download the QR code and display it at your checkout counter, on invoices, or share it digitally.',
    ],
    faqs: [
      {
        q: 'Which apps can scan a UPI QR code?',
        a: 'Any UPI-enabled app in India can scan the QR code — BHIM, Google Pay, PhonePe, Paytm, Amazon Pay, banking apps, and many more. The QR code uses the standard upi://pay URI scheme.',
      },
      {
        q: 'Can I set a fixed amount in the QR code?',
        a: 'Yes. Fill in the "Amount" field and the UPI app will pre-fill that amount. The payer can still modify it before confirming the transaction.',
      },
      {
        q: 'Is it safe to share a UPI QR code publicly?',
        a: 'Yes. A UPI QR code only lets people send money to you. It does not expose any bank account details or allow withdrawals.',
      },
    ],
    relatedTypes: ['paypal', 'bitcoin', 'sepa'],
  },

  bitcoin: {
    title: 'Free Bitcoin QR Code Generator — Crypto Payments Made Easy',
    description:
      'Generate a Bitcoin payment QR code from a wallet address with an optional amount and label. Compatible with all major Bitcoin wallets. Download PNG or SVG.',
    slug: 'bitcoin-qr-code-generator',
    howTo: [
      'Select the Bitcoin QR type and paste your Bitcoin wallet address (bc1q..., 1..., or 3... format).',
      'Optionally set a BTC amount, a label, and a message to create a fully descriptive payment request.',
      'Download the QR code and share it with payers or display it at point of sale.',
    ],
    faqs: [
      {
        q: 'What Bitcoin address formats are supported?',
        a: 'All standard Bitcoin address formats work: Legacy (1...), P2SH (3...), and native SegWit (bc1q...). The QR code uses the BIP-21 bitcoin: URI scheme which is supported by all major wallets.',
      },
      {
        q: 'Can I set a specific BTC amount?',
        a: 'Yes. Enter the amount in BTC in the Amount field. Most wallets will pre-fill the amount but allow the payer to change it. For a fixed-amount invoice, consider also including a label and message.',
      },
      {
        q: 'Is it safe to share a Bitcoin payment QR code?',
        a: 'Yes. The QR code encodes only your public receiving address and payment parameters. It cannot expose your private key or allow access to your wallet.',
      },
    ],
    relatedTypes: ['ethereum', 'upi', 'paypal'],
  },
};

const RELATED_LABELS: Partial<Record<QRType, string>> = {
  url: 'URL Generator',
  wifi: 'WiFi Generator',
  vcard: 'vCard Generator',
  whatsapp: 'WhatsApp Generator',
  upi: 'UPI Generator',
  bitcoin: 'Bitcoin Generator',
  ethereum: 'Ethereum Generator',
  paypal: 'PayPal Generator',
  sepa: 'SEPA Generator',
  email: 'Email Generator',
  sms: 'SMS Generator',
  telegram: 'Telegram Generator',
  mecard: 'MeCard Generator',
  business_card: 'Business Card Generator',
};

const RELATED_SLUGS: Partial<Record<QRType, string>> = {
  url: '/url-qr-code-generator',
  wifi: '/wifi-qr-code-generator',
  vcard: '/vcard-qr-code-generator',
  whatsapp: '/whatsapp-qr-code-generator',
  upi: '/upi-qr-code-generator',
  bitcoin: '/bitcoin-qr-code-generator',
};

interface LandingPageProps {
  type: QRType;
}

export default function LandingPage({ type }: LandingPageProps) {
  const data = LANDING_DATA[type];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [qrData, setQrData] = useState<QRData>({});
  const [customization] = useState<CustomizationOptions>(DEFAULT_CUSTOMIZATION);
  const debouncedData = useDebounce(qrData, 300);
  const config = getTypeConfig(type);

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
    return generateQRData(type, debouncedData);
  }, [type, debouncedData, isValid]);

  const landingState: QRState & { customization: CustomizationOptions } = useMemo(() => ({
    type,
    data: qrData,
    template: 'classic',
    customColor: '#000000',
    customization,
  }), [type, qrData, customization]);

  const handleTypeChange = useCallback((t: QRType) => {
    // On landing pages, redirect to the home generator for other types
    if (t !== type) {
      window.location.href = `/?type=${t}`;
    }
  }, [type]);

  // Fallback for types without landing data
  if (!data) {
    return (
      <>
        <SEOHead
          title={`Free ${config?.label ?? type} QR Code Generator — QR Studio`}
          description={`Generate ${config?.label ?? type} QR codes for free. Custom colors, logo upload, instant download.`}
          canonicalUrl={`https://qrstudio.app/`}
        />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">{config?.label} QR Code Generator</h1>
          <p className="text-muted-foreground mb-8">Generate {config?.label} QR codes for free.</p>
          <a href="/" className="text-primary hover:underline">← Use the full QR Studio generator</a>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.description}
        canonicalUrl={`https://qrstudio.app/${data.slug}`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{data.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.description}</p>
        </section>

        {/* Embedded generator */}
        <section aria-label="QR code generator" className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-6">
          {/* Left: type selector (locked) + form */}
          <div className="space-y-4">
            <div className="p-4 border border-border/60 rounded-xl bg-card shadow-sm">
              <TypeSelector selected={type} onChange={handleTypeChange} />
            </div>
            <div className="p-4 border border-border/60 rounded-xl bg-card shadow-sm">
              <DynamicForm type={type} data={qrData} onChange={setQrData} />
            </div>
          </div>

          {/* Right: preview + export */}
          <div className="md:sticky md:top-20 md:self-start space-y-4">
            <div className="p-4 border border-border/60 rounded-xl bg-card shadow-lg">
              <QRPreview
                qrText={qrText}
                canvasRef={canvasRef}
                options={customization}
                typeLabel={config?.label ?? ''}
              />
              <Separator className="my-3" />
              <ExportPanel
                qrText={qrText}
                canvasRef={canvasRef}
                type={type}
                state={landingState}
              />
            </div>
          </div>
        </section>

        {/* How-to steps */}
        <section className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">How to create a {config?.label} QR code</h2>
          <ol className="space-y-3">
            {data.howTo.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-muted-foreground pt-0.5 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="multiple" className="space-y-2">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left text-sm font-medium py-3">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related tools */}
        {data.relatedTypes.length > 0 && (
          <section className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold">Related QR Code Tools</h2>
            <div className="flex flex-wrap gap-2">
              {data.relatedTypes.map(t => {
                const slug = RELATED_SLUGS[t];
                const label = RELATED_LABELS[t];
                if (!slug || !label) return null;
                return (
                  <a
                    key={t}
                    href={slug}
                    className="px-3 py-1.5 rounded-lg border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
