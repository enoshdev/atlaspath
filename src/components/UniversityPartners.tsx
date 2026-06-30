import React from 'react';

export const UniversityPartners: React.FC = () => {
  const partners = [
    {
      name: 'MIT',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <rect x="0" y="20" width="12" height="60" fill="#A31F34" />
          <rect x="20" y="20" width="12" height="60" fill="#A31F34" />
          <rect x="40" y="20" width="12" height="36" fill="#A31F34" />
          <rect x="60" y="20" width="18" height="60" fill="#8A8B8C" />
          <rect x="86" y="20" width="12" height="60" fill="#A31F34" />
        </svg>
      ),
      fullName: 'Massachusetts Institute of Technology',
    },
    {
      name: 'Stanford University',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="20" fill="#8C1515" />
          <text x="50%" y="72%" textAnchor="middle" fontSize="56" fontFamily="Georgia, serif" fontWeight="black" fill="#FFFFFF">S</text>
          <path d="M50 18 L43 45 L48 45 L46 54 L50 54 L49 62 L51 62 L50 54 L54 54 L52 45 L57 45 Z" fill="#007C56" />
        </svg>
      ),
      fullName: 'Stanford University',
    },
    {
      name: 'NUS',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="20" fill="#003D7C" />
          <path d="M30 40 L50 25 L70 40 L70 60 C70 70 50 80 50 80 C50 80 30 70 30 60 Z" fill="#EF7C00" />
          <text x="50%" y="62%" textAnchor="middle" fontSize="18" fontFamily="sans-serif" fontWeight="black" fill="#FFFFFF">NUS</text>
        </svg>
      ),
      fullName: 'National University of Singapore',
    },
    {
      name: 'Melbourne',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="40" fill="#092B5C" />
          <path d="M50 30 L43 45 L57 45 Z" fill="#FFFFFF" />
          <circle cx="50" cy="52" r="1.5" fill="#FFD700" />
          <circle cx="43" cy="58" r="1.5" fill="#FFD700" />
          <circle cx="57" cy="58" r="1.5" fill="#FFD700" />
          <circle cx="50" cy="65" r="1.5" fill="#FFD700" />
          <circle cx="50" cy="46" r="3.5" fill="#FFD700" />
        </svg>
      ),
      fullName: 'The University of Melbourne',
    },
    {
      name: 'Toronto',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <path d="M15 15 L85 15 L85 55 C85 75 50 88 50 88 C50 88 15 75 15 55 Z" fill="#002A5C" />
          <path d="M40 38 L50 28 L60 38 L50 48 Z" fill="#EAAA00" />
          <path d="M50 48 L50 68" stroke="#EAAA00" strokeWidth="4" />
        </svg>
      ),
      fullName: 'University of Toronto',
    },
    {
      name: 'Kings College',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="20" fill="#ED1B2E" />
          <path d="M30 65 L35 45 L50 55 L65 45 L70 65 Z" fill="#FFD700" />
          <circle cx="50" cy="38" r="4" fill="#FFD700" />
        </svg>
      ),
      fullName: 'King\'s College London',
    },
    {
      name: 'Sydney',
      icon: (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100">
          <path d="M15 15 L85 15 L85 60 C85 78 50 88 50 88 C50 88 15 78 15 60 Z" fill="#D62246" />
          <path d="M32 32 H68 V52 H32 Z" fill="#FFFFFF" />
          <line x1="38" y1="38" x2="62" y2="38" stroke="#012169" strokeWidth="2.5" />
          <line x1="38" y1="45" x2="62" y2="45" stroke="#012169" strokeWidth="2.5" />
          <circle cx="50" cy="70" r="5.5" fill="#FFD700" />
        </svg>
      ),
      fullName: 'The University of Sydney',
    },
  ];

  return (
    <section id="universities" className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h2 className="text-[11px] font-bold tracking-widest text-[#64748B] uppercase">
          Our University Partners
        </h2>
        <span className="text-xs text-[#64748B] font-semibold">
          Connecting you with top-tier global institutions
        </span>
      </div>

      <div className="flex w-full overflow-hidden mask-gradient">
        <div className="animate-marquee [--marquee-duration:35s] flex gap-16 items-center shrink-0">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 shrink-0 hover:scale-105 transition-all duration-300 select-none cursor-pointer"
            >
              <div className="text-text">{partner.icon}</div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm tracking-tight text-slate-800 leading-none">
                  {partner.name}
                </span>
                <span className="font-sans text-[8px] text-[#64748B] font-bold mt-0.5 max-w-[150px] truncate">
                  {partner.fullName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
    </section>
  );
};
