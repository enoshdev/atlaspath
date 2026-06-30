import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
        
        {/* Left Col: Brand and Intro (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Logo className="text-white" />
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm text-pretty">
            Empowering students to achieve their global education dreams with clarity, precision, and verified matching systems.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/company/atlaspath" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary" aria-label="AtlasPath LinkedIn Page">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com/atlaspath" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary" aria-label="AtlasPath Instagram Page">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/atlaspath" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary" aria-label="AtlasPath Facebook Page">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://youtube.com/@atlaspath" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary" aria-label="AtlasPath YouTube Page">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Links lists: Quick Links, Countries, Resources (6 cols split) */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-6">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="/universities" className="hover:text-white transition-colors">Universities</a></li>
              <li><a href="/countries" className="hover:text-white transition-colors">Countries</a></li>
              <li><a href="/scholarships" className="hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="/assessment" className="hover:text-white transition-colors">Assessment</a></li>
              <li><a href="/book-consultation" className="hover:text-white transition-colors">Book Consultation</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="/success-stories" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Countries */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Study Countries</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="/countries/germany" className="hover:text-white transition-colors">Study in Germany</a></li>
              <li><a href="/countries/canada" className="hover:text-white transition-colors">Study in Canada</a></li>
              <li><a href="/countries/australia" className="hover:text-white transition-colors">Study in Australia</a></li>
              <li><a href="/countries/united-kingdom" className="hover:text-white transition-colors">Study in UK</a></li>
              <li><a href="/countries/united-states" className="hover:text-white transition-colors">Study in USA</a></li>
              <li><a href="/countries/ireland" className="hover:text-white transition-colors">Study in Ireland</a></li>
              <li><a href="/countries/netherlands" className="hover:text-white transition-colors">Study in Netherlands</a></li>
              <li><a href="/countries/singapore" className="hover:text-white transition-colors">Study in Singapore</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="/resources" className="hover:text-white transition-colors">Visa Guide</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">SOP Guide</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Scholarship Guide</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">IELTS Guide</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Education Loans</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">All Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Newsletter</h4>
          <p className="text-xs text-slate-500 leading-relaxed text-pretty">
            Get the latest updates and study abroad guidance directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative">
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full py-1.5 pl-4 pr-1.5 focus-within:border-[#6D4AFF] focus-within:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] hover:border-slate-700 transition-all duration-200 ease-in-out">
              <input
                type="email"
                placeholder="Enter your email address…"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="bg-transparent text-xs text-white placeholder-slate-600 outline-none w-full mr-2"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="p-2.5 rounded-full bg-primary hover:bg-secondary text-white transition-all shadow-md shadow-primary/10 flex-shrink-0"
                aria-label="Submit newsletter email"
              >
                {status === 'loading' ? (
                  <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : status === 'success' ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Inlined validation labels */}
            {status === 'success' && (
              <p className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                <Check className="w-3 h-3" /> Successfully subscribed!
              </p>
            )}
            {status === 'error' && (
              <p className="text-[10px] text-rose-500 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> Please enter a valid email address.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Legal & Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <span>&copy; {currentYear} AtlasPath. All rights reserved.</span>
      </div>
    </footer>
  );
};
