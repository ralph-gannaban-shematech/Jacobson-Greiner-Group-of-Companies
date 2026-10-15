import { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface HeaderProps {
  currentTab: 'home' | 'about' | 'careers' | 'contact';
  onSelectTab: (tab: 'home' | 'about' | 'careers' | 'contact') => void;
}

export const Header = ({ currentTab, onSelectTab }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home' as const, label: 'Home' },
    { id: 'about' as const, label: 'About Us' },
    { id: 'careers' as const, label: 'Careers' },
    { id: 'contact' as const, label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Top micro-utility bar honoring screenshot's "Call us: 204-728-2235" */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400">
            <span>Brandon &amp; Western Manitoba</span>
            <span>·</span>
            <span>Since 1953</span>
            <span>·</span>
            <span>12 Integrated Member Companies</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:2047282235"
              className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-[#d4a325] transition-colors font-medium tracking-wide text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4a325]" />
              <span>Call us: 204-728-2235</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (4 Links) - Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Heritage Glyphs */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58723]"
          aria-label="Jacobson & Greiner Group Home"
        >
          <BrandLogo variant="header" />
        </button>

        {/* Zone 2: Exact Navigation Menu Structure */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onSelectTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-sm tracking-wide ${
                  isActive
                    ? 'text-neutral-900 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b58723] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onSelectTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors shadow-xs hover:shadow-sm whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d4a325]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onSelectTab(link.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-neutral-100 text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
              <a
                href="tel:2047282235"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-neutral-800 bg-neutral-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#b58723]" />
                <span>Call 204-728-2235</span>
              </a>
              <button
                onClick={() => {
                  onSelectTab('contact');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 rounded-lg"
              >
                Partner With Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
