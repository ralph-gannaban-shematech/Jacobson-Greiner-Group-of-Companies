import { ArrowRight, Phone } from 'lucide-react';

interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner = ({ onContactClick }: CtaBannerProps) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-24 sm:py-32">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/jg_headquarters_hero_1792091524260.jpg"
          alt="Jacobson & Greiner headquarters evening view"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#d4a325] mb-4">
          <span>Western Manitoba’s Integrated Force</span>
        </div>

        {/* Exact Headline from Screenshot 4 */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-brand mb-6 text-balance">
          Construction. Excavation. Building.
        </h2>

        {/* Exact Subtitle from Screenshot 4 */}
        <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Whatever you need, Jacobson &amp; Greiner Group has the perfect company for you. With years of expertise in construction, excavation, home building, and so much more, your next project could just be a click away!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-[#c59b27] hover:bg-[#d8ab2e] rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
          >
            <span>Get in Contact!</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:2047282235"
            className="inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/20 rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#d4a325]" />
            <span>Call 204-728-2235</span>
          </a>
        </div>
      </div>
    </section>
  );
};
