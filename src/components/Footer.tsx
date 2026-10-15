import { Phone, Mail, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface FooterProps {
  onNavigateTab: (tab: 'home' | 'about' | 'careers' | 'contact') => void;
  onFilterCategory: (category: string) => void;
}

export const Footer = ({ onNavigateTab, onFilterCategory }: FooterProps) => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Jacobson &amp; Greiner Group of Companies is Western Manitoba’s premier integrated construction, land development, civil engineering, and community sports collective.
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a325] shrink-0" />
                <span>2404 Park Avenue, Brandon, MB R7B 0S3</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4a325] shrink-0" />
                <a href="tel:2047282235" className="hover:text-white transition-colors">
                  (204) 728-2235
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4a325] shrink-0" />
                <span>info@jandggroup.ca</span>
              </div>
            </div>
          </div>

          {/* Navigation Mirror (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('careers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Sectors / Categories (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Group Sectors
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    onFilterCategory('Commercial');
                  }}
                  className="hover:text-[#d4a325] transition-colors cursor-pointer text-left"
                >
                  Commercial General Contracting
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    onFilterCategory('Residential');
                  }}
                  className="hover:text-[#d4a325] transition-colors cursor-pointer text-left"
                >
                  Custom Homes &amp; Residential
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    onFilterCategory('Civil & Infrastructure');
                  }}
                  className="hover:text-[#d4a325] transition-colors cursor-pointer text-left"
                >
                  Excavation &amp; Concrete Supply
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    onFilterCategory('Building Supplies');
                  }}
                  className="hover:text-[#d4a325] transition-colors cursor-pointer text-left"
                >
                  Lumber &amp; Retail Hardware
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('home');
                    onFilterCategory('Sports & Entertainment');
                  }}
                  className="hover:text-[#d4a325] transition-colors cursor-pointer text-left"
                >
                  Brandon Wheat Kings &amp; Arena
                </button>
              </li>
            </ul>
          </div>

          {/* Western Manitoba Legacy (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Manitoba Heritage
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Serving the Westman region with prairie pride, safety certification, and community athletics since 1953.
            </p>
            <div className="pt-2 text-[11px] text-[#d4a325] font-semibold">
              WHL Champions · 1979 · 1996 · 2016
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Jacobson &amp; Greiner Group of Companies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Brandon, Manitoba</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
