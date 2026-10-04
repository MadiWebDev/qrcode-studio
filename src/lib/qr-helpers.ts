import type { QRType, QRData, QRTypeConfig } from '@/types';

export const qrTypeConfigs: QRTypeConfig[] = [
  {
    type: 'text',
    label: 'Plain Text',
    icon: 'Type',
    description: 'Encode any plain text message',
    fields: [
      { name: 'text', label: 'Text Content', type: 'textarea', placeholder: 'Enter your text here...', required: true, rows: 4 },
    ],
  },
  {
    type: 'url',
    label: 'Website URL',
    icon: 'Globe',
    description: 'Link to any website',
    fields: [
      { name: 'url', label: 'Website URL', type: 'url', placeholder: 'https://example.com', required: true },
    ],
  },
  {
    type: 'pdf',
    label: 'PDF File',
    icon: 'FileText',
    description: 'Link to a PDF document',
    fields: [
      { name: 'url', label: 'PDF URL', type: 'url', placeholder: 'https://example.com/document.pdf', required: true },
    ],
  },
  {
    type: 'audio',
    label: 'Audio File',
    icon: 'Music',
    description: 'Link to an audio file or podcast',
    fields: [
      { name: 'url', label: 'Audio URL', type: 'url', placeholder: 'https://example.com/audio.mp3', required: true },
    ],
  },
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    icon: 'MessageCircle',
    description: 'Send a WhatsApp message to a number',
    fields: [
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true },
      { name: 'message', label: 'Pre-filled Message', type: 'textarea', placeholder: 'Hello, I would like to...', required: false, rows: 2 },
    ],
  },
  {
    type: 'phone',
    label: 'Phone Call',
    icon: 'Phone',
    description: 'Initiate a phone call',
    fields: [
      { name: 'number', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true },
    ],
  },
  {
    type: 'sms',
    label: 'SMS',
    icon: 'MessageSquare',
    description: 'Send an SMS message',
    fields: [
      { name: 'number', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message here...', required: false, rows: 2 },
    ],
  },
  {
    type: 'email',
    label: 'Email',
    icon: 'Mail',
    description: 'Send an email with pre-filled fields',
    fields: [
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'someone@example.com', required: true },
      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject line...', required: false },
      { name: 'body', label: 'Message Body', type: 'textarea', placeholder: 'Your message...', required: false, rows: 3 },
    ],
  },
  {
    type: 'address',
    label: 'Address',
    icon: 'MapPin',
    description: 'Show a location on Google Maps',
    fields: [
      { name: 'address', label: 'Physical Address', type: 'textarea', placeholder: '123 Main St, City, Country', required: true, rows: 2 },
    ],
  },
  {
    type: 'wifi',
    label: 'WiFi',
    icon: 'Wifi',
    description: 'Connect to a WiFi network automatically',
    fields: [
      { name: 'ssid', label: 'Network Name (SSID)', type: 'text', placeholder: 'MyWiFiNetwork', required: true },
      { name: 'password', label: 'Password', type: 'text', placeholder: 'wifipassword', required: false },
      { name: 'encryption', label: 'Encryption', type: 'select', placeholder: '', required: true, options: [
        { label: 'WPA/WPA2', value: 'WPA' },
        { label: 'WEP', value: 'WEP' },
        { label: 'None', value: 'nopass' },
      ]},
    ],
  },
  {
    type: 'vcard',
    label: 'vCard',
    icon: 'User',
    description: 'Share contact information',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: false },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: false },
      { name: 'org', label: 'Organisation', type: 'text', placeholder: 'Company Inc.', required: false },
    ],
  },
  {
    type: 'social',
    label: 'Social Media',
    icon: 'Share2',
    description: 'Link to a social media profile',
    fields: [
      { name: 'platform', label: 'Platform', type: 'select', required: true, options: [
        { label: 'Twitter / X', value: 'twitter' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Facebook', value: 'facebook' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'TikTok', value: 'tiktok' },
      ]},
      { name: 'username', label: 'Username', type: 'text', placeholder: '@username or profile URL', required: true },
    ],
  },
  {
    type: 'video',
    label: 'Video',
    icon: 'Video',
    description: 'Link to a video file or platform',
    fields: [
      { name: 'url', label: 'Video URL', type: 'url', placeholder: 'https://youtube.com/watch?v=...', required: true },
    ],
  },
  {
    type: 'image',
    label: 'Image',
    icon: 'Image',
    description: 'Link to an image file',
    fields: [
      { name: 'url', label: 'Image URL', type: 'url', placeholder: 'https://example.com/image.jpg', required: true },
    ],
  },
  {
    type: 'menu',
    label: 'Menu',
    icon: 'UtensilsCrossed',
    description: 'Link to a restaurant menu or display items',
    fields: [
      { name: 'title', label: 'Restaurant Name', type: 'text', placeholder: 'My Restaurant', required: true },
      { name: 'url', label: 'Menu URL (optional)', type: 'url', placeholder: 'https://example.com/menu', required: false },
      { name: 'items', label: 'Menu Items', type: 'textarea', placeholder: 'Item 1 - $10\nItem 2 - $15\n...', required: false, rows: 4 },
    ],
  },
  {
    type: 'app',
    label: 'App Download',
    icon: 'Smartphone',
    description: 'Link to app stores',
    fields: [
      { name: 'platform', label: 'Platform', type: 'select', required: true, options: [
        { label: 'App Store (iOS)', value: 'ios' },
        { label: 'Google Play (Android)', value: 'android' },
        { label: 'Both', value: 'both' },
      ]},
      { name: 'iosUrl', label: 'App Store URL', type: 'url', placeholder: 'https://apps.apple.com/app/...', required: false },
      { name: 'androidUrl', label: 'Google Play URL', type: 'url', placeholder: 'https://play.google.com/store/apps/...', required: false },
    ],
  },
  {
    type: 'coupon',
    label: 'Coupon',
    icon: 'TicketPercent',
    description: 'Share a discount coupon',
    fields: [
      { name: 'code', label: 'Coupon Code', type: 'text', placeholder: 'SAVE20', required: true },
      { name: 'description', label: 'Description', type: 'textarea', placeholder: '20% off your next purchase!', required: false, rows: 2 },
      { name: 'url', label: 'Store URL (optional)', type: 'url', placeholder: 'https://example.com/shop', required: false },
    ],
  },
  {
    type: 'event',
    label: 'Event',
    icon: 'Calendar',
    description: 'Create a calendar event',
    fields: [
      { name: 'title', label: 'Event Name', type: 'text', placeholder: 'My Awesome Event', required: true },
      { name: 'date', label: 'Date', type: 'date', placeholder: '', required: true },
      { name: 'time', label: 'Time', type: 'time', placeholder: '', required: false },
      { name: 'location', label: 'Location', type: 'text', placeholder: '123 Event St, City', required: false },
      { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Event details...', required: false, rows: 2 },
    ],
  },
  {
    type: 'business_card',
    label: 'Business Card',
    icon: 'Briefcase',
    description: 'Enhanced business card with all details',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Software Engineer', required: false },
      { name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Corp', required: false },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1234567890', required: false },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@techcorp.com', required: false },
      { name: 'website', label: 'Website', type: 'url', placeholder: 'https://techcorp.com', required: false },
      { name: 'address', label: 'Address', type: 'textarea', placeholder: '123 Business St, City', required: false, rows: 2 },
    ],
  },
  {
    type: 'freelance',
    label: 'Freelance',
    icon: 'Code',
    description: 'Share your portfolio or freelance profile',
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Designer', required: true },
      { name: 'skill', label: 'Primary Skill', type: 'text', placeholder: 'UI/UX Designer', required: false },
      { name: 'portfolio', label: 'Portfolio URL', type: 'url', placeholder: 'https://myportfolio.com', required: true },
      { name: 'email', label: 'Contact Email', type: 'email', placeholder: 'hello@myportfolio.com', required: false },
    ],
  },
  {
    type: 'ecommerce',
    label: 'E-Commerce',
    icon: 'ShoppingCart',
    description: 'Link to a product or store',
    fields: [
      { name: 'productName', label: 'Product Name', type: 'text', placeholder: 'Awesome Product', required: true },
      { name: 'url', label: 'Product URL', type: 'url', placeholder: 'https://store.com/product/123', required: true },
      { name: 'price', label: 'Price', type: 'text', placeholder: '$29.99', required: false },
    ],
  },
  {
    type: 'cleaning',
    label: 'Cleaning Service',
    icon: 'Sparkles',
    description: 'Booking link for cleaning services',
    fields: [
      { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Sparkle Clean', required: true },
      { name: 'url', label: 'Booking URL', type: 'url', placeholder: 'https://sparkleclean.com/book', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: false },
    ],
  },
  {
    type: 'logistics',
    label: 'Logistics',
    icon: 'Truck',
    description: 'Package tracking link',
    fields: [
      { name: 'trackingNumber', label: 'Tracking Number', type: 'text', placeholder: 'TRACK123456', required: true },
      { name: 'url', label: 'Tracking URL', type: 'url', placeholder: 'https://logistics.com/track?id=...', required: true },
    ],
  },
  {
    type: 'finance',
    label: 'Finance',
    icon: 'Landmark',
    description: 'Payment or financial service link',
    fields: [
      { name: 'service', label: 'Service Name', type: 'text', placeholder: 'PayMe / Transfer', required: true },
      { name: 'url', label: 'Payment URL', type: 'url', placeholder: 'https://pay.example.com/send', required: true },
      { name: 'account', label: 'Account/Handle', type: 'text', placeholder: '@username or account ID', required: false },
    ],
  },
  {
    type: 'cv',
    label: 'CV / Resume',
    icon: 'FileBadge',
    description: 'Link to your CV or resume PDF',
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'url', label: 'CV PDF URL', type: 'url', placeholder: 'https://example.com/my-cv.pdf', required: true },
      { name: 'title', label: 'Professional Title', type: 'text', placeholder: 'Senior Developer', required: false },
    ],
  },
];

export function generateQRData(type: QRType, data: QRData): string {
  switch (type) {
    case 'text':
      return data.text || '';
    
    case 'url':
    case 'pdf':
    case 'audio':
    case 'video':
    case 'image':
      return data.url || '';
    
    case 'whatsapp':
      if (!data.phone) return '';
      return `https://wa.me/${data.phone.replace(/\D/g, '')}${data.message ? `?text=${encodeURIComponent(data.message)}` : ''}`;
    
    case 'phone':
      return data.number ? `tel:${data.number}` : '';
    
    case 'sms':
      if (!data.number) return '';
      return `sms:${data.number}${data.message ? `?body=${encodeURIComponent(data.message)}` : ''}`;
    
    case 'email':
      if (!data.email) return '';
      return `mailto:${data.email}${data.subject || data.body ? `?${data.subject ? `subject=${encodeURIComponent(data.subject)}` : ''}${data.body ? `${data.subject ? '&' : ''}body=${encodeURIComponent(data.body)}` : ''}` : ''}`;
    
    case 'address':
      return data.address ? `https://maps.google.com/?q=${encodeURIComponent(data.address)}` : '';
    
    case 'wifi':
      if (!data.ssid) return '';
      return `WIFI:T:${data.encryption || 'WPA'};S:${data.ssid};${data.encryption !== 'nopass' ? `P:${data.password || ''};` : ''};`;
    
    case 'vcard':
      if (!data.name) return '';
      return `MECARD:N:${data.name};${data.phone ? `TEL:${data.phone};` : ''}${data.email ? `EMAIL:${data.email};` : ''}${data.org ? `ORG:${data.org};` : ''};;`;
    
    case 'social': {
      if (!data.username) return '';
      const platform = data.platform || 'twitter';
      const username = data.username.replace(/^@/, '');
      const urls: Record<string, string> = {
        twitter: `https://twitter.com/${username}`,
        instagram: `https://instagram.com/${username}`,
        facebook: `https://facebook.com/${username}`,
        linkedin: `https://linkedin.com/in/${username}`,
        tiktok: `https://tiktok.com/@${username}`,
      };
      return urls[platform] || username;
    }
    
    case 'menu': {
      const parts: string[] = [];
      if (data.title) parts.push(data.title);
      if (data.items) parts.push(data.items);
      if (data.url) parts.push(`Menu: ${data.url}`);
      return parts.join('\n');
    }
    
    case 'app': {
      if (data.platform === 'both') {
        return `iOS: ${data.iosUrl || ''}\nAndroid: ${data.androidUrl || ''}`;
      }
      if (data.platform === 'ios') return data.iosUrl || '';
      if (data.platform === 'android') return data.androidUrl || '';
      return data.iosUrl || data.androidUrl || '';
    }
    
    case 'coupon': {
      const parts: string[] = [];
      if (data.code) parts.push(`Coupon: ${data.code}`);
      if (data.description) parts.push(data.description);
      if (data.url) parts.push(`Redeem at: ${data.url}`);
      return parts.join('\n');
    }
    
    case 'event': {
      if (!data.title) return '';
      const parts = [`Event: ${data.title}`];
      if (data.date) parts.push(`Date: ${data.date}${data.time ? ` ${data.time}` : ''}`);
      if (data.location) parts.push(`Location: ${data.location}`);
      if (data.description) parts.push(data.description);
      const details = parts.join('\n');
      // Google Calendar format
      const startDate = data.date ? data.date.replace(/-/g, '') : '';
      const startTime = data.time ? data.time.replace(':', '') + '00' : '';
      const dates = startDate ? (startTime ? `${startDate}T${startTime}/${startDate}T${startTime}` : `${startDate}/${startDate}`) : '';
      return dates 
        ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(data.title)}&dates=${dates}&details=${encodeURIComponent(data.description || '')}&location=${encodeURIComponent(data.location || '')}`
        : details;
    }
    
    case 'business_card': {
      const parts: string[] = [];
      if (data.name) parts.push(data.name);
      if (data.title) parts.push(data.title);
      if (data.company) parts.push(data.company);
      if (data.phone) parts.push(`Tel: ${data.phone}`);
      if (data.email) parts.push(`Email: ${data.email}`);
      if (data.website) parts.push(`Web: ${data.website}`);
      if (data.address) parts.push(data.address);
      return parts.join('\n');
    }
    
    case 'freelance': {
      const parts: string[] = [];
      if (data.name) parts.push(data.name);
      if (data.skill) parts.push(data.skill);
      if (data.portfolio) parts.push(`Portfolio: ${data.portfolio}`);
      if (data.email) parts.push(`Contact: ${data.email}`);
      return parts.join('\n');
    }
    
    case 'ecommerce': {
      const parts: string[] = [];
      if (data.productName) parts.push(data.productName);
      if (data.price) parts.push(`Price: ${data.price}`);
      if (data.url) parts.push(data.url);
      return parts.join('\n');
    }
    
    case 'cleaning': {
      const parts: string[] = [];
      if (data.company) parts.push(data.company);
      if (data.phone) parts.push(`Book: ${data.phone}`);
      if (data.url) parts.push(`Online: ${data.url}`);
      return parts.join('\n');
    }
    
    case 'logistics': {
      const parts: string[] = [];
      if (data.trackingNumber) parts.push(`Tracking: ${data.trackingNumber}`);
      if (data.url) parts.push(data.url);
      return parts.join('\n');
    }
    
    case 'finance': {
      const parts: string[] = [];
      if (data.service) parts.push(data.service);
      if (data.account) parts.push(`Account: ${data.account}`);
      if (data.url) parts.push(data.url);
      return parts.join('\n');
    }
    
    case 'cv': {
      const parts: string[] = [];
      if (data.name) parts.push(data.name);
      if (data.title) parts.push(data.title);
      if (data.url) parts.push(`CV: ${data.url}`);
      return parts.join('\n');
    }
    
    default:
      return '';
  }
}

export function getTypeConfig(type: QRType): QRTypeConfig | undefined {
  return qrTypeConfigs.find(c => c.type === type);
}

export function validateField(field: { type: string; required?: boolean }, value: string): string | null {
  if (field.required && !value.trim()) {
    return 'This field is required';
  }
  if (value.trim()) {
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
    }
    if (field.type === 'url') {
      try {
        new URL(value);
      } catch {
        return 'Please enter a valid URL (include https://)';
      }
    }
    if (field.type === 'tel') {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
    }
  }
  return null;
}
