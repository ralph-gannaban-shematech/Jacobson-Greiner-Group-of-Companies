import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, Building, ShieldCheck } from 'lucide-react';
import { Company } from '../data/companies.ts';

interface ContactViewProps {
  companies: Company[];
  initialSelectedCompanyId?: string;
}

export const ContactView = ({ companies, initialSelectedCompanyId }: ContactViewProps) => {
  const [selectedEntity, setSelectedEntity] = useState(initialSelectedCompanyId || 'general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial General Contracting',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-neutral-50 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-3">
            Get In Contact
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-serif-brand">
            Connect With Jacobson &amp; Greiner Group
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Whether embarking on a major commercial build, planning a residential development, or requiring heavy civil earthmoving, our central executive and dispatch teams are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-10 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 font-serif-brand mb-2">
              Send a Direct Project Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6">
              Inquiries are routed directly to the specific project executive, estimator, or general manager of your chosen group entity.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-neutral-50 rounded-xl border border-neutral-200/90 p-6">
                <CheckCircle2 className="w-12 h-12 text-[#b58723] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 font-serif-brand">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mt-2 mb-6">
                  Thank you, {formData.name}. Your inquiry has been routed to the appropriate team at{' '}
                  <span className="font-semibold text-neutral-900">
                    {selectedEntity === 'general'
                      ? 'Jacobson & Greiner Group of Companies'
                      : companies.find((c) => c.id === selectedEntity)?.name || 'the Group'}
                  </span>
                  . A project specialist will reply within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'Commercial General Contracting',
                      message: '',
                    });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Target Entity Selection */}
                <div>
                  <label htmlFor="inquiry-entity" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Select Group Entity / Division *
                  </label>
                  <select
                    id="inquiry-entity"
                    value={selectedEntity}
                    onChange={(e) => setSelectedEntity(e.target.value)}
                    className="w-full text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723] cursor-pointer"
                  >
                    <option value="general">Jacobson &amp; Greiner Group (Central Administration)</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Robert Vance"
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="robert@vancedevelopments.ca"
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(204) 728-2235"
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Project Nature / Scope
                    </label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    >
                      <option>Commercial General Contracting / Tender</option>
                      <option>Custom Residential Build or Lot Purchase</option>
                      <option>Heavy Civil Excavation &amp; Utilities</option>
                      <option>Ready-Mix Concrete Dispatch &amp; Aggregate</option>
                      <option>Land Development &amp; Rezoning</option>
                      <option>Athletic Facility / Wheat Kings Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Project Details &amp; Timeline *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide location, target construction schedule, drawings status, or specific requirements..."
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>Submit Inquiry to J&amp;G Group</span>
                  <Send className="w-3.5 h-3.5 text-[#d4a325]" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Headquarters & Direct Numbers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-neutral-900 text-white rounded-2xl p-8 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#d4a325] mb-2">
                Central Corporate Office
              </div>
              <h3 className="text-2xl font-bold font-serif-brand mb-4">
                Jacobson &amp; Greiner Group
              </h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4a325] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Head Office Address:</strong>
                    <div>2404 Park Avenue</div>
                    <div>Brandon, MB R7B 0S3 Canada</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#d4a325] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Main Telephone Switchboard:</strong>
                    <div className="font-mono text-sm text-white mt-0.5">
                      <a href="tel:2047282235" className="hover:underline">
                        (204) 728-2235
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#d4a325] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">General Email:</strong>
                    <div className="text-neutral-200">info@jandggroup.ca</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d4a325] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Office Hours:</strong>
                    <div>Monday – Friday: 8:00 AM – 5:00 PM CST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Division Switchboard Table */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#b58723]" />
                Direct Division Dispatch Numbers
              </h4>
              <div className="divide-y divide-neutral-100 text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">Jacobson Commercial &amp; J&amp;G Homes</span>
                  <a href="tel:2047282235" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-728-2235
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">Western Concrete Dispatch</span>
                  <a href="tel:2047282210" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-728-2210
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">Allen &amp; Bolack Excavating</span>
                  <a href="tel:2047286789" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-728-6789
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">Powell Construction</span>
                  <a href="tel:2047272353" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-727-2353
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">Brandon Wheat Kings Box Office</span>
                  <a href="tel:2047263535" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-726-3535
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-neutral-700">RONA Brandon Contractor Desk</span>
                  <a href="tel:2047281855" className="font-mono font-semibold text-neutral-900 hover:text-[#b58723]">
                    204-728-1855
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
