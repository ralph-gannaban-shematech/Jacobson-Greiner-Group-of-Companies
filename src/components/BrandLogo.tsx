interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
}

export const BrandLogo = ({ className = '', variant = 'dark' }: BrandLogoProps) => {
  const isDarkBg = variant === 'light';

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-serif-brand text-lg md:text-xl font-bold tracking-[0.16em] uppercase leading-none transition-colors ${
            isDarkBg ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Jacobson &amp; Greiner
        </span>
        <span
          className={`text-[9px] md:text-[10.5px] uppercase tracking-[0.32em] font-medium mt-1 leading-none transition-colors ${
            isDarkBg ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Group of Companies
        </span>
      </div>

      {/* 4 Iconic Heritage Glyphs */}
      <div className="flex items-center gap-1.5 mt-2">
        {/* Glyph 1: People / Collective */}
        <div
          title="Collective Team & People"
          className="w-5 h-5 rounded-[3px] bg-[#b58723] text-white flex items-center justify-center p-0.5 shadow-xs"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <circle cx="12" cy="7" r="3" />
            <path d="M5 21v-2a5 5 0 0 1 10 0v2" />
            <path d="M19 13v6" />
          </svg>
        </div>

        {/* Glyph 2: Home / Construction */}
        <div
          title="Residential Construction & Homes"
          className="w-5 h-5 rounded-[3px] bg-[#9e741e] text-white flex items-center justify-center p-0.5 shadow-xs"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5z" />
          </svg>
        </div>

        {/* Glyph 3: Tree / Land Development */}
        <div
          title="Land Development & Environment"
          className="w-5 h-5 rounded-[3px] bg-[#825d14] text-white flex items-center justify-center p-0.5 shadow-xs"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M12 22v-7" />
            <path d="M12 15a5 5 0 0 1-5-5c0-1.5.6-2.5 1.5-3.3A5.5 5.5 0 0 1 17 6.7c.9.8 1.5 1.8 1.5 3.3a5 5 0 0 1-5 5z" />
          </svg>
        </div>

        {/* Glyph 4: Structure / Concrete & Civil */}
        <div
          title="Civil, Concrete & Commercial Works"
          className="w-5 h-5 rounded-[3px] bg-[#67480a] text-white flex items-center justify-center p-0.5 shadow-xs"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 10h2" />
            <path d="M13 10h2" />
            <path d="M9 14h2" />
            <path d="M13 14h2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
