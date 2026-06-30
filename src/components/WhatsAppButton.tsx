import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn fixed z-30 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      style={{
        bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
        left: '1rem',
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: '#22c55e',
        boxShadow: '0 8px 32px rgba(34,197,94,0.35)',
        transition: 'transform 0.2s, background-color 0.2s',
      }}
      aria-label="Contact us on WhatsApp"
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* Ping animation */}
      <span
        className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none group-hover:animate-none"
        style={{ borderRadius: '50%' }}
      />
      <MessageCircle className="w-6 h-6 text-white relative z-10" />
    </a>
  );
};
