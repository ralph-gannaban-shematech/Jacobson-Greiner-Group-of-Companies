import { useEffect } from 'react';
import { X, Phone, ExternalLink, MapPin, CheckCircle, ArrowRight, Building2, Calendar } from 'lucide-react';
import { Company } from '../data/companies.ts';

interface CompanyModalProps {
  company: Company | null;
  onClose: () => void;
  onInquire: (company: Company) => void;
}

export const CompanyModal = ({ company, onClose, onInquire }: CompanyModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (company) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [company, onClose]);

  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 bg-neutral-900 overflow-hidden">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#b58723] text-white rounded">
                {company.category}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-neutral-300">
                <MapPin className="w-3 h-3 text-[#d4a325]" />
                {company.location}
              </span>
              {company.founded && (
                <span className="flex items-center gap-1 text-[11px] text-neutral-300">
                  <Calendar className="w-3 h-3 text-[#d4a325]" />
                  Est. {company.founded}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif-brand">
              {company.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#d4a325] font-medium mt-0.5">
              {company.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Company Overview
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {company.fullOverview}
            </p>
          </div>

          {/* Core Highlights & Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Capabilities &amp; Specializations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {company.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  <CheckCircle className="w-4 h-4 text-[#b58723] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-neutral-800">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Integration Info */}
          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-bold mb-0.5">
                Direct Contact Channel
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900 font-mono">
                <Phone className="w-4 h-4 text-[#b58723]" />
                <a href={`tel:${company.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onInquire(company);
                  onClose();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4a325]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
