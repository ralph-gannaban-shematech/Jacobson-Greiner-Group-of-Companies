import { CheckCircle2, Trophy, Hammer, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Company, ASSET_IMAGES } from '../data/companies.ts';

interface AsymmetricalBentoProps {
  onSelectCategory: (cat: string) => void;
  onSelectCompany: (company: Company) => void;
  companies: Company[];
}

export const AsymmetricalBento = ({
  onSelectCategory,
  onSelectCompany,
  companies,
}: AsymmetricalBentoProps) => {
  const wheatKings = companies.find((c) => c.id === 'brandon-wheat-kings');
  const jacobsonComm = companies.find((c) => c.id === 'jacobson-commercial');

  return (
    <section className="py-20 sm:py-24 bg-neutral-100/60 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Editorial Numbering */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-2">
            The Jacobson &amp; Greiner Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-serif-brand">
            Reimagining Manitoba’s Built Environment
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Replacing disconnected sub-trades with a unified, vertically integrated construction ecosystem. We handle every stage of your project under one trusted umbrella.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Marquee Collective Group (Col-Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                  01. Complete Ecosystem
                </span>
                <span className="text-xs font-semibold text-[#b58723] bg-[#b58723]/10 px-2.5 py-1 rounded-md">
                  12 Integrated Entities
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-serif-brand mb-4">
                The Collective Advantage: Zero Bottlenecks, Single Accountability
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                Jacobson &amp; Greiner Group is not a broker—we are the builders, the suppliers, and the earthmovers. By controlling our own ready-mix plants, excavation fleet, retail hardware warehouse, and master-planned land, we eliminate subcontractor delays and maintain exacting quality standards from foundation to roofline.
              </p>

              {/* Integrated Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b58723] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-neutral-700">
                    Direct Aggregate &amp; Concrete Supply (Western Concrete)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b58723] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-neutral-700">
                    GPS-Equipped Heavy Excavation (Allen &amp; Bolack)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b58723] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-neutral-700">
                    Retail Hardware &amp; Pro Contractor Lumber (RONA Brandon)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b58723] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-neutral-700">
                    Master Land Planning &amp; Zoning (VBJ Developments)
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Base Image with Inset Metric Strip */}
            <div className="relative h-64 sm:h-72 overflow-hidden border-t border-neutral-100">
              <img
                src={ASSET_IMAGES.commercial}
                alt="Jacobson Commercial construction engineers"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-lg font-bold font-mono tabular-nums text-[#d4a325]">1953</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-300">Prairie Heritage</div>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div>
                    <div className="text-lg font-bold font-mono tabular-nums text-[#d4a325]">12</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-300">Active Companies</div>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div>
                    <div className="text-lg font-bold font-mono tabular-nums text-[#d4a325]">100%</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-300">Local Manitoba Focus</div>
                  </div>
                </div>

                {jacobsonComm && (
                  <button
                    onClick={() => onSelectCompany(jacobsonComm)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Jacobson Commercial</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b58723]" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column Stack (Col-Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Development & Heavy Civil */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                  02. Heavy Civil &amp; Building
                </span>
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#b58723] flex items-center justify-center">
                  <Hammer className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-neutral-900 font-serif-brand mb-2">
                Mass Excavation, Utilities &amp; Structural Concrete
              </h4>

              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                From subgrade grading and municipal trunk lines to laser-screed flatwork and ready-mix delivery, our heavy divisions supply the physical backbone of commercial and residential Manitoba.
              </p>

              <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src={ASSET_IMAGES.civil}
                  alt="Allen & Bolack civil excavation work"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => onSelectCategory('Civil & Infrastructure')}
                className="text-xs font-semibold text-[#b58723] hover:text-[#8f6711] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Civil &amp; Concrete Companies</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Sports, Hockey & Community Pride */}
            <div className="bg-neutral-900 text-white rounded-2xl border border-neutral-800 p-8 shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#d4a325]">
                    03. Community Athletics
                  </span>
                  <Trophy className="w-5 h-5 text-[#d4a325]" />
                </div>

                <h4 className="text-xl font-bold tracking-tight text-white font-serif-brand mb-2">
                  Brandon Wheat Kings &amp; J&amp;G Homes Arena
                </h4>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Owners of the 3-time Western Hockey League Champion Brandon Wheat Kings (1979 · 1996 · 2016) and operators of the state-of-the-art J&amp;G Homes Arena sports complex.
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-neutral-400">
                    Twin NHL-size sheets · Elite WCHA youth academy
                  </div>
                  {wheatKings && (
                    <button
                      onClick={() => onSelectCompany(wheatKings)}
                      className="px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-[#d4a325] hover:bg-[#e0b43c] rounded-md transition-colors cursor-pointer"
                    >
                      Team Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Full-Width Guarantee & Standards Ribbon (Col-Span 12) */}
          <div className="lg:col-span-12 bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#b58723]/10 text-[#b58723] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#b58723] mb-0.5">
                  04. Satisfaction Guaranteed
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 font-serif-brand">
                  Over Seven Decades of Craftsmanship &amp; Trusted Delivery
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl">
                  Whether building your family's custom dream home, paving heavy civil infrastructure, or supplying commercial concrete, our unified group stands behind every square foot with industry-leading warranty coverage.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onSelectCategory('All')}
                className="w-full md:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                Browse All Entities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
