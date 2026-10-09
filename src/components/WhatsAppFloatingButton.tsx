import React from 'react';
import { getWhatsAppLink } from '../config';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick enquiry" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shookra Aesthetics on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#0A120D] hover:bg-[#20BA5A] shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 font-semibold text-xs tracking-wide group"
      >
        <MessageSquare className="w-4 h-4 fill-current group-hover:rotate-6 transition-transform" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
