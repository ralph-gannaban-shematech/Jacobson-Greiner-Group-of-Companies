import { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Trophy, ArrowRight, Building2, MapPin } from 'lucide-react';
import { Company, ASSET_IMAGES } from '../data/companies.ts';

interface HeroProps {
  companies: Company[];
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  selectedCompanyId: string;
  onSelectCompanyId: (id: string) => void;
  onScrollToDirectory: () => void;
  onSelectCompany: (company: Company) => void;
}

export const Hero = ({
  companies,
  selectedLocation,
  onSelectLocation,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchQueryChange,
  selectedCompanyId,
  onSelectCompanyId,
  onScrollToDirectory,
  onSelectCompany,
}: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Building Manitoba’s Future With End-to-End Precision',
      subtitle: 'Jacobson & Greiner Group of Companies',
      lead: 'A collective of 12 market-leading companies spanning commercial general contracting, custom residential neighborhoods, heavy civil excavation, concrete supply, and community athletics.',
      ctaText: 'Explore Group Companies',
      kicker: 'Est. 1953 · Western Manitoba Flagship',
      image: ASSET_IMAGES.hero,
      theme: 'gold',
      featuredCompanyId: 'jacobson-commercial',
    },
    {
      title: 'Brandon Wheat Kings & Championship Spirit',
      subtitle: 'Proud Owners & Champions of the Western Hockey League',
      lead: 'Rooted in community pride and Western Hockey League championships (1979 · 1996 · 2016). Anchoring local youth development alongside J&G Homes Arena and the Western Canada Hockey Academy.',
      ctaText: 'Discover Sports & Community',
      kicker: 'WHL Champions 1979 · 1996 · 2016',
      image: ASSET_IMAGES.arena,
      theme: 'gold-dark',
      featuredCompanyId: 'brandon-wheat-kings',
    },
    {
      title: 'From Groundbreak to Skyline: 100% In-House Integration',
      subtitle: 'Civil Excavation · Ready-Mix · Custom Builds',
      lead: 'Our integrated ecosystem—from Allen & Bolack’s mass earthmoving and Western Concrete’s computerized batch plants to J&G Homes and RONA Brandon—ensures uncompromising speed and quality control.',
      ctaText: 'View Civil & Residential',
      kicker: 'Integrated Supply Chain',
      image: ASSET_IMAGES.residential,
      theme: 'navy',
      featuredCompanyId: 'jng-homes',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  const handleExecuteSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCompanyId) {
      const match = companies.find((c) => c.id === selectedCompanyId);
      if (match) {
        onSelectCompany(match);
        return;
      }
    }
    onScrollToDirectory();
  };

  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Visual Canvas Background with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center transition-all duration-1000 scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Unboxed Kicker Metadata */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a325] mb-4">
            <Trophy className="w-4 h-4 text-[#d4a325] shrink-0" />
            <span>{slide.kicker}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-6 font-serif-brand">
            {slide.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-normal">
            {slide.lead}
          </p>

          {/* CTA & Slide Switcher */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const target = companies.find((c) => c.id === slide.featuredCompanyId);
                if (target) {
                  onSelectCompany(target);
                } else {
                  onScrollToDirectory();
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-[#c59b27] hover:bg-[#d8ab2e] rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToDirectory}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/20 rounded-lg transition-all cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#d4a325]" />
              <span>Explore All 12 Companies</span>
            </button>
          </div>
        </div>

        {/* Carousel Micro Controls honoring original pagination dots */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? 'w-8 bg-[#d4a325]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modernized Search & Filtering Bar (Faithful evolution of screenshot 1 & 2's interactive bar) */}
      <div className="relative z-20 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
        <form
          onSubmit={handleExecuteSearch}
          className="bg-white rounded-xl shadow-xl border border-neutral-200/90 p-3 sm:p-4 text-neutral-900"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Location Filter */}
            <div className="flex flex-col">
              <label htmlFor="location-select" className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#b58723]" />
                Location
              </label>
              <select
                id="location-select"
                value={selectedLocation}
                onChange={(e) => onSelectLocation(e.target.value)}
                className="w-full text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723] transition-all cursor-pointer"
              >
                <option value="All">All Locations (Westman &amp; Brandon)</option>
                <option value="Brandon">Brandon, MB</option>
                <option value="Westman">Westman Region</option>
                <option value="Southwest">Southwest Manitoba</option>
              </select>
            </div>

            {/* Type / Sector Filter */}
            <div className="flex flex-col">
              <label htmlFor="category-select" className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#b58723]" />
                Sector / Type
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                className="w-full text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723] transition-all cursor-pointer"
              >
                <option value="All">All Sectors</option>
                <option value="Commercial">Commercial Contracting &amp; Dev</option>
                <option value="Residential">Residential &amp; Custom Homes</option>
                <option value="Civil & Infrastructure">Civil Excavation &amp; Concrete</option>
                <option value="Building Supplies">Building Supplies &amp; Retail</option>
                <option value="Sports & Entertainment">Sports &amp; Athletics (Wheat Kings)</option>
                <option value="Hospitality">Hospitality &amp; Dining</option>
              </select>
            </div>

            {/* Quick Company Jump */}
            <div className="flex flex-col">
              <label htmlFor="company-select" className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Select Company
              </label>
              <select
                id="company-select"
                value={selectedCompanyId}
                onChange={(e) => {
                  onSelectCompanyId(e.target.value);
                  if (e.target.value) {
                    const match = companies.find((c) => c.id === e.target.value);
                    if (match) onSelectCompany(match);
                  }
                }}
                className="w-full text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723] transition-all cursor-pointer"
              >
                <option value="">Jump to Business Directory (12)...</option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input & Button */}
            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchQueryChange(e.target.value)}
                    placeholder="Search keywords or trades..."
                    className="w-full text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723] transition-all placeholder:text-neutral-400"
                  />
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-3" />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-xs hover:shadow-sm whitespace-nowrap cursor-pointer active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
