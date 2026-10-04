import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string): void {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

export function SEOHead({ title, description, canonicalUrl, ogImage }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonicalUrl ?? window.location.href, 'property');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title, 'property');
    setMetaTag('twitter:description', description, 'property');
    if (ogImage) {
      setMetaTag('og:image', ogImage, 'property');
      setMetaTag('twitter:image', ogImage, 'property');
    }
    setCanonical(canonicalUrl ?? window.location.href);
  }, [title, description, canonicalUrl, ogImage]);

  return null;
}
