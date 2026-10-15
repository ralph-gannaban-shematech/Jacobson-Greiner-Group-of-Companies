import { useState } from 'react';
import { Phone, ExternalLink, ArrowRight, Grid, List, Building, Sparkles } from 'lucide-react';
import { Company } from '../data/companies.ts';

interface CompanyDirectoryProps {
  companies: Company[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedLocation: string;
  searchQuery: string;
  onSelectCompany: (company: Company) => void;
  onResetFilters: () => void;
}

export const CompanyDirectory = ({
  companies,
  selectedCategory,
  onSelectCategory,
  selectedLocation,
  searchQuery,
  onSelectCompany,
  onResetFilters,
}: CompanyDirectoryProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'Commercial',
    'Residential',
    'Civil & Infrastructure',
    'Building Supplies',
    'Sports & Entertainment',
    'Hospitality',
  ];

  // Filter logic
  const filteredCompanies = companies.filter((c) => {
    // Category match
    const categoryMatch = selectedCategory === 'All' || c.category === selectedCategory;

    // Location match
    let locationMatch = true;
    if (selectedLocation === 'Brandon') {
      locationMatch = c.location.toLowerCase().includes('brandon');
    } else if (selectedLocation === 'Westman' || selectedLocation === 'Southwest') {
      locationMatch = true;
    }

    // Search query match
    let searchMatch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      searchMatch =
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.highlights.some((h) => h.toLowerCase().includes(q));
    }

    return categoryMatch && locationMatch && searchMatch;
  });

  return (
    <section id="directory-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title honoring screenshot's "Our Businesses" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#b58723]" />
              <span>The Jacobson &amp; Greiner Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-serif-brand">
              Our Businesses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
              12 specialized entities working in synergy to provide turnkey commercial contracting, custom home building, land development, and community athletics.
            </p>
          </div>

          {/* View Mode Toggle & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-medium">
              Showing <span className="font-bold text-neutral-900 font-mono">{filteredCompanies.length}</span> of 12 businesses
            </span>
            <div className="flex items-center p-1 bg-neutral-100 rounded-lg border border-neutral-200/80">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === 'All'
                ? companies.length
                : companies.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100/80 hover:bg-neutral-200/70 text-neutral-700'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-neutral-800 text-[#d4a325]' : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Directory Results */}
        {filteredCompanies.length === 0 ? (
          <div className="text-center py-16 px-4 bg-neutral-50 rounded-2xl border border-neutral-200/80">
            <Building className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800">No matching companies found</h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mt-1 mb-4">
              We couldn't find any business matching your search criteria. Try selecting another sector or clearing filters.
            </p>
            <button
              onClick={onResetFilters}
              className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-xl border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#b58723]/40"
              >
                <div>
                  {/* Visual Header Thumbnail */}
                  <div className="relative h-44 overflow-hidden bg-neutral-100">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-900/90 backdrop-blur-xs text-white rounded-md border border-white/10">
                        {company.category}
                      </span>
                    </div>
                    {company.founded && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-mono text-neutral-300 bg-black/60 px-2 py-0.5 rounded">
                          Est. {company.founded}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight text-neutral-900 font-serif-brand group-hover:text-[#b58723] transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs font-medium text-[#b58723] mt-1 mb-3">
                      {company.tagline}
                    </p>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {company.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                      {company.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct Action Callouts honoring original site */}
                <div className="px-6 py-3.5 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#b58723] transition-colors font-medium"
                      title={`Call ${company.name}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-[#b58723]" />
                      <span className="font-mono text-[11px]">{company.phone}</span>
                    </a>
                    <span className="text-neutral-300">·</span>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-neutral-500 hover:text-neutral-900 transition-colors"
                      title={`Visit ${company.name} Website`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span className="hidden sm:inline text-[11px]">Website</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onSelectCompany(company)}
                    className="inline-flex items-center gap-1 font-semibold text-[#b58723] hover:text-[#8e6613] transition-colors cursor-pointer text-xs"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="flex flex-col gap-3">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-xl border border-neutral-200/90 p-5 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-100">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b58723]">
                        {company.category}
                      </span>
                      {company.founded && (
                        <span className="text-[10px] text-neutral-400 font-mono">
                          · Est. {company.founded}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 font-serif-brand group-hover:text-[#b58723] transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-1 max-w-xl">
                      {company.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100 justify-between md:justify-end">
                  <a
                    href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1 text-xs text-neutral-700 hover:text-[#b58723] font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#b58723]" />
                    <span>{company.phone}</span>
                  </a>

                  <button
                    onClick={() => onSelectCompany(company)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
