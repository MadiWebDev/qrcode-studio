export type QRType =
  | 'text'
  | 'url'
  | 'pdf'
  | 'audio'
  | 'whatsapp'
  | 'phone'
  | 'sms'
  | 'email'
  | 'address'
  | 'wifi'
  | 'vcard'
  | 'social'
  | 'video'
  | 'image'
  | 'menu'
  | 'app'
  | 'coupon'
  | 'event'
  | 'business_card'
  | 'freelance'
  | 'ecommerce'
  | 'cleaning'
  | 'logistics'
  | 'finance'
  | 'cv';

export interface QRField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'email' | 'tel' | 'url' | 'select' | 'date' | 'time' | 'color';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  rows?: number;
}

export interface QRTypeConfig {
  type: QRType;
  label: string;
  icon: string;
  description: string;
  fields: QRField[];
}

export interface QRData {
  [key: string]: string;
}

export type TemplateName = 'classic' | 'modern' | 'vibrant' | 'glassmorphism' | 'minimal' | 'corporate';

export interface TemplateStyle {
  name: TemplateName;
  label: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  qrBg: string;
  qrColor: string;
  accentColor: string;
  textColor: string;
  subtitleColor: string;
  iconColor: string;
}

export interface QRState {
  type: QRType;
  data: QRData;
  template: TemplateName;
  customColor: string;
}
