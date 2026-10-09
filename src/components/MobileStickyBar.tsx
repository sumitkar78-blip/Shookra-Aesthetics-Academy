import React from 'react';
import { getWhatsAppLink } from '../config';
import { Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#0D0E11]/95 backdrop-blur-md border-t border-[#252833] shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="py-3 px-3 rounded-sm bg-[#C8A97E] active:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 glow-gold-subtle active:scale-98 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </aside>
  );
};
