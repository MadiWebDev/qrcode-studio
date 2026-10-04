import { useState } from 'react';
import { toast } from 'sonner';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only — no backend
    toast.success('Thanks for reaching out! We\'ll get back to you soon.');
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <SEOHead
        title="Contact QR Studio"
        description="Get in touch with the QR Studio team. We'd love to hear your feedback, feature requests, or questions about our free QR code generator."
        canonicalUrl="https://qrstudio.app/contact"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Contact Us</h1>
          <p className="text-muted-foreground">
            Have a question, feature request, or found a bug? We'd love to hear from you.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Email</p>
            <a
              href="mailto:contact@qrstudio.app"
              className="text-primary hover:underline text-sm"
            >
              contact@qrstudio.app
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Response time</p>
            <p className="text-sm text-muted-foreground">Usually within 1–2 business days</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800/50 p-6 text-center">
            <p className="text-green-700 dark:text-green-400 font-medium">Message sent!</p>
            <p className="text-sm text-muted-foreground mt-1">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell us what's on your mind..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </>
  );
}
