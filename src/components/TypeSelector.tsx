import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { QRType } from '@/types';
import { qrTypeConfigs } from '@/lib/qr-helpers';
import {
  Type, Globe, FileText, Music, MessageCircle, Phone, MessageSquare,
  Mail, MapPin, Wifi, User, Share2, Video, Image, UtensilsCrossed,
  Smartphone, TicketPercent, Calendar, Briefcase, Code, ShoppingCart, Sparkles,
  Truck, Landmark, FileBadge
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Type: <Type className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />,
  MessageCircle: <MessageCircle className="w-4 h-4" />,
  Phone: <Phone className="w-4 h-4" />,
  MessageSquare: <MessageSquare className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Wifi: <Wifi className="w-4 h-4" />,
  User: <User className="w-4 h-4" />,
  Share2: <Share2 className="w-4 h-4" />,
  Video: <Video className="w-4 h-4" />,
  Image: <Image className="w-4 h-4" />,
  UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  TicketPercent: <TicketPercent className="w-4 h-4" />,
  Calendar: <Calendar className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Truck: <Truck className="w-4 h-4" />,
  Landmark: <Landmark className="w-4 h-4" />,
  FileBadge: <FileBadge className="w-4 h-4" />,
};

interface TypeSelectorProps {
  selected: QRType;
  onChange: (type: QRType) => void;
}

export function TypeSelector({ selected, onChange }: TypeSelectorProps) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const selectedConfig = useMemo(
    () => qrTypeConfigs.find(c => c.type === selected),
    [selected]
  );

  const filteredTypes = useMemo(() => {
    if (!search.trim()) return qrTypeConfigs;
    const query = search.toLowerCase();
    return qrTypeConfigs.filter(
      c =>
        c.label.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between h-auto py-3 px-4 text-left"
          aria-label="Select QR code type"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {selectedConfig && iconMap[selectedConfig.icon]}
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">{selectedConfig?.label}</div>
              <div className="text-xs text-muted-foreground">{selectedConfig?.description}</div>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2" align="start">
        <div className="px-2 pb-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search types..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9"
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
        </div>
        <div className="max-h-64 overflow-y-auto">
          <AnimatePresence>
            {filteredTypes.map((config) => (
              <DropdownMenuItem
                key={config.type}
                onClick={() => {
                  onChange(config.type);
                  setOpen(false);
                  setSearch('');
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
                  selected === config.type ? 'bg-primary/10 text-primary' : ''
                }`}
              >
                <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                  selected === config.type ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  {iconMap[config.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{config.label}</div>
                  <div className="text-xs text-muted-foreground truncate">{config.description}</div>
                </div>
                {selected === config.type && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </DropdownMenuItem>
            ))}
          </AnimatePresence>
          {filteredTypes.length === 0 && (
            <div className="px-3 py-4 text-center text-sm text-muted-foreground">
              No types found
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
