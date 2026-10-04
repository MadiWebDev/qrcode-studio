import { SEOHead } from '@/components/SEOHead';

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — QR Studio"
        description="QR Studio's privacy policy. We do not collect personal data for static QR code generation. All processing happens in your browser."
        canonicalUrl="https://qrstudio.app/privacy"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
        </header>

        {[
          {
            title: 'Data we do not collect',
            body: 'QR Studio does not collect, store, or transmit any personal data when you generate a QR code. The content you enter into the form — WiFi passwords, contact details, payment addresses, or URLs — is processed entirely inside your browser and never leaves your device.',
          },
          {
            title: 'Local storage',
            body: 'We store your most recently used QR type and template in your browser\'s localStorage. This data stays on your device and is never sent to any server. You can clear it at any time through your browser settings.',
          },
          {
            title: 'Analytics',
            body: 'We may use privacy-respecting, cookieless analytics (such as aggregate page view counts) to understand which features are most used and to improve the product. These analytics do not identify individual users and do not set tracking cookies.',
          },
          {
            title: 'Third-party services',
            body: 'QR Studio does not embed third-party tracking scripts, social media pixels, or advertising networks. No data is shared with third parties.',
          },
          {
            title: 'Your rights',
            body: 'Since we do not collect personal data linked to your identity, there is no personal data for us to provide, correct, or delete. If you have questions about this policy, contact us at contact@qrstudio.app.',
          },
        ].map(section => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">{section.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
