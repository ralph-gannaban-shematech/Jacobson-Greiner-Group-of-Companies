import { ShieldCheck, Users, Trophy, Layers, Award, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';
import { ASSET_IMAGES } from '../data/companies.ts';

interface AboutViewProps {
  onNavigateTab: (tab: 'home' | 'careers' | 'contact') => void;
}

export const AboutView = ({ onNavigateTab }: AboutViewProps) => {
  const milestones = [
    {
      year: '1953',
      title: 'Foundations in Concrete',
      description: 'Western Concrete Products was founded in Brandon, establishing the region’s first dedicated ready-mixed concrete plant and masonry block supplier.'
    },
    {
      year: '1968',
      title: 'Industrial Expansion with Powell',
      description: 'Powell Construction was established to provide heavy commercial and industrial concrete flatwork and structural engineering.'
    },
    {
      year: '1979',
      title: 'J&G Homes & First WHL Championship',
      description: 'J&G Homes was formed, redefining custom residential construction across SW Manitoba, while the Brandon Wheat Kings captured their historic first WHL title.'
    },
    {
      year: '1993',
      title: 'Allen & Bolack Excavating',
      description: 'Deep civil excavation and municipal sewer and water infrastructure capabilities were integrated into the group network.'
    },
    {
      year: '2004',
      title: 'VBJ Developments',
      description: 'Formed to spearhead master-planned subdivision communities, commercial retail zoning, and infrastructure growth across Brandon.'
    },
    {
      year: '2021',
      title: 'J&G Homes Arena & WCHA',
      description: 'Commissioned a state-of-the-art twin-rink multi-sport arena complex on Patricia Avenue to champion youth sports and regional athletics.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-neutral-50 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-3">
            About Jacobson &amp; Greiner
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-serif-brand">
            Pioneering Western Manitoba’s Skyline and Communities Since 1953
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            What began over seven decades ago with a single ready-mix batch plant has grown into one of Manitoba’s most respected and diversified collective enterprises, employing hundreds of local tradespeople, engineers, and professionals.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-neutral-900 font-serif-brand">
              The Power of Integrated Construction
            </h2>
            <p>
              Jacobson &amp; Greiner Group of Companies was founded on the straightforward principle that quality and accountability cannot be outsourced. When clients partner with one of our companies, they gain direct access to the resources, equipment, materials, and skilled labor of the entire collective.
            </p>
            <p>
              By unifying land development (VBJ Developments), mass earthmoving (Allen &amp; Bolack), concrete formulation (Western Concrete &amp; Powell Construction), pro building supplies (RONA Brandon), and general contracting (Jacobson Commercial &amp; J&amp;G Homes), we deliver unmatched efficiency and certainty to commercial developers, municipalities, and homeowners alike.
            </p>
            <div className="pt-2">
              <BrandLogo variant="header" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img
                src={ASSET_IMAGES.hero}
                alt="Jacobson & Greiner headquarters"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-neutral-900 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#d4a325] mb-1">
                  Corporate Headquarters
                </div>
                <div className="text-sm font-semibold">2404 Park Avenue, Brandon, MB R7B 0S3</div>
                <div className="text-xs text-neutral-400 mt-2 font-mono">
                  Direct Line: (204) 728-2235 · info@jandggroup.ca
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Guiding Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-serif-brand">
              Our Core Guiding Values
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              The steadfast operational tenets that govern every project across all 12 group companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-xl border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-2">Uncompromised Safety</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                COR™ certified safety protocols across all job sites, heavy equipment operations, batch plants, and facilities.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-2">Vertical Synergy</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct control over aggregates, heavy transport, drafting, framing, and procurement to eliminate supply chain delays.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-2">Community Champions</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Proud stewards of the Brandon Wheat Kings and J&amp;G Homes Arena, reinvesting into youth recreation and athletic development.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-2">Craftsmanship Pledge</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comprehensive multi-year warranty coverage, Red Seal certified tradespeople, and enduring structural integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-2">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-serif-brand">
              Seven Decades of Manitoba Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-xs">
                <div className="text-2xl font-bold font-mono text-[#b58723] mb-2">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-brand">
              Ready to collaborate with Western Manitoba's leader?
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              Contact our corporate team or explore career opportunities across the group.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigateTab('contact')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-[#c59b27] hover:bg-[#d8ab2e] rounded-lg transition-colors cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigateTab('careers')}
              className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
