import { useState } from 'react';
import { COMPANIES, Company } from './data/companies.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AsymmetricalBento } from './components/AsymmetricalBento.tsx';
import { CompanyDirectory } from './components/CompanyDirectory.tsx';
import { CompanyModal } from './components/CompanyModal.tsx';
import { AboutView } from './components/AboutView.tsx';
import { CareersView } from './components/CareersView.tsx';
import { ContactView } from './components/ContactView.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'about' | 'careers' | 'contact'>('home');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('');
  const [activeCompanyModal, setActiveCompanyModal] = useState<Company | null>(null);
  const [contactInitialCompanyId, setContactInitialCompanyId] = useState<string>('');

  const handleScrollToDirectory = () => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
      setTimeout(() => {
        const el = document.getElementById('directory-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('directory-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCompany = (company: Company) => {
    setActiveCompanyModal(company);
  };

  const handleInquireFromModal = (company: Company) => {
    setContactInitialCompanyId(company.id);
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSearchQuery('');
    setSelectedCompanyId('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#c59b27]/20 selection:text-neutral-900">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Areas based on exact Navigation architecture */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* Hero Section with Carousel & Modern Search / Filter Bar */}
            <Hero
              companies={COMPANIES}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleScrollToDirectory();
              }}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              selectedCompanyId={selectedCompanyId}
              onSelectCompanyId={setSelectedCompanyId}
              onScrollToDirectory={handleScrollToDirectory}
              onSelectCompany={handleSelectCompany}
            />

            {/* Asymmetrical Bento Grid breaking the 3-card symmetrical layout */}
            <AsymmetricalBento
              companies={COMPANIES}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleScrollToDirectory();
              }}
              onSelectCompany={handleSelectCompany}
            />

            {/* Full Portfolio Directory: "Our Businesses" */}
            <CompanyDirectory
              companies={COMPANIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              searchQuery={searchQuery}
              onSelectCompany={handleSelectCompany}
              onResetFilters={handleResetFilters}
            />

            {/* Screenshot 4 Modernized Callout: "Construction. Excavation. Building." */}
            <CtaBanner
              onContactClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentTab === 'about' && (
          <>
            <AboutView
              onNavigateTab={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <CtaBanner
              onContactClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentTab === 'careers' && (
          <CareersView />
        )}

        {currentTab === 'contact' && (
          <ContactView
            companies={COMPANIES}
            initialSelectedCompanyId={contactInitialCompanyId}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onFilterCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentTab('home');
          setTimeout(() => {
            const el = document.getElementById('directory-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* Global Company Detail Modal */}
      <CompanyModal
        company={activeCompanyModal}
        onClose={() => setActiveCompanyModal(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
