import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const checkChat = () => {
      const chatWidget = document.querySelector('[data-chat-widget]');
      if (chatWidget) {
        const openBtn = chatWidget.querySelector('button');
        const chatPanel = chatWidget.querySelector('[class*="h-\\[480px"]');
        setChatOpen(!!chatPanel);
      }
    };
    const observer = new MutationObserver(checkChat);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    checkChat();
    return () => observer.disconnect();
  }, []);

  if (chatOpen) return null;

  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-30 p-3 sm:p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none pointer-events-none" />
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
    </a>
  );
};
