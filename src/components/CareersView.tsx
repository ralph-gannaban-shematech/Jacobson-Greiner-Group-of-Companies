import { useState } from 'react';
import { Briefcase, MapPin, Clock, CheckCircle, ArrowRight, X, Heart, Shield, Award } from 'lucide-react';
import { CAREER_LISTINGS, CareerJob } from '../data/careers.ts';

export const CareersView = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeJobModal, setActiveJobModal] = useState<CareerJob | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<CareerJob | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const departments = ['All', 'General Contracting', 'Residential Construction', 'Civil Infrastructure', 'Logistics & Supply', 'Recreation & Facilities'];

  const filteredJobs = CAREER_LISTINGS.filter((job) => {
    if (selectedDept === 'All') return true;
    return job.department === selectedDept;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setApplyModalJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantNote('');
    }, 2800);
  };

  return (
    <div className="py-12 sm:py-20 bg-neutral-50 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b58723] mb-3">
            Build Your Career
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-serif-brand">
            Careers at Jacobson &amp; Greiner Group
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Join Western Manitoba's largest and most diversified construction family. We offer stable year-round employment, comprehensive health benefits, apprenticeship sponsorship, and unmatched career advancement.
          </p>
        </div>

        {/* Culture & Benefits Bento Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-1">
              Safety &amp; Modern Fleet
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Work with GPS-guided equipment, heated shop facilities, and strict COR™ safety protocols on every site.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-1">
              Comprehensive Health &amp; Pension
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Full medical, dental, prescription coverage, retirement matching plans, and employee wellness benefits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#b58723]/10 text-[#b58723] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 font-serif-brand mb-1">
              Apprenticeship Sponsorship
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We pay tuition and provide mentorship for Red Seal carpentry, heavy duty mechanics, and civil trades.
            </p>
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedDept === dept
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-neutral-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b58723]">
                    {job.companyName}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-serif-brand group-hover:text-[#b58723] transition-colors mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {job.location}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                    {job.experienceLevel}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {job.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveJobModal(job)}
                  className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => setApplyModalJob(job)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4a325]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 font-serif-brand">
              Don’t see your trade or discipline listed?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
              We are constantly seeking skilled equipment operators, carpenters, commercial estimators, safety coordinators, and hospitality staff across our 12 companies. Send a general application today.
            </p>
          </div>
          <button
            onClick={() => {
              setApplyModalJob({
                id: 'general',
                title: 'General Career Application',
                companyId: 'group',
                companyName: 'Jacobson & Greiner Group',
                department: 'General Inquiries',
                location: 'Brandon & Westman, MB',
                type: 'Full-time',
                experienceLevel: 'All Experience Levels',
                summary: 'Submit your resume and cover note to our human resources directory.',
                responsibilities: [],
                qualifications: []
              });
            }}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-[#c59b27] hover:bg-[#d8ab2e] rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            Submit General Resume
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs" onClick={() => setActiveJobModal(null)} />
          <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-neutral-200 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b58723]">
                  {activeJobModal.companyName}
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 font-serif-brand">
                  {activeJobModal.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                  <span>{activeJobModal.location}</span>
                  <span>·</span>
                  <span>{activeJobModal.type}</span>
                  <span>·</span>
                  <span>{activeJobModal.experienceLevel}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveJobModal(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Position Summary</h4>
                <p className="text-xs text-neutral-700 leading-relaxed">{activeJobModal.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Key Responsibilities</h4>
                <ul className="space-y-1.5">
                  {activeJobModal.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#b58723] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Required Qualifications</h4>
                <ul className="space-y-1.5">
                  {activeJobModal.qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#b58723] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveJobModal(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setApplyModalJob(activeJobModal);
                  setActiveJobModal(null);
                }}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                Apply for Position
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs" onClick={() => setApplyModalJob(null)} />
          <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-neutral-200 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b58723]">
                  Job Application
                </span>
                <h2 className="text-xl font-bold text-neutral-900 font-serif-brand">
                  {applyModalJob.title}
                </h2>
                <div className="text-xs text-neutral-500">{applyModalJob.companyName}</div>
              </div>
              <button
                onClick={() => setApplyModalJob(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-emerald-900">Application Submitted!</h3>
                <p className="text-xs text-emerald-700 mt-1">
                  Thank you, {applicantName}. Our recruitment coordinator at Jacobson &amp; Greiner Group will review your application and contact you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g., Sarah Campbell"
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="(204) 555-0192"
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Experience / Cover Note / Qualifications
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Briefly state your trade certification, tickets, years of experience, or equipment operated..."
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#b58723]"
                  />
                </div>

                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-500">
                  Resumes may also be emailed directly to <strong className="text-neutral-800">careers@jandggroup.ca</strong> or delivered in person to 2404 Park Avenue, Brandon, MB.
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setApplyModalJob(null)}
                    className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors shadow-xs"
                  >
                    Send Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
