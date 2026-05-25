import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { type Language, translations } from './i18n/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudyWeather from './components/CaseStudyWeather';
import Footer from './components/Footer';
import { ThemeProvider } from './hooks/useTheme';

function AppContent() {
  const [lang, setLang] = useState<Language>('en');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[lang];

  const handleViewCaseStudy = () => {
    window.scrollTo({ top: 0 });
    setShowCaseStudy(true);
  };

  const handleCloseCaseStudy = () => {
    setShowCaseStudy(false);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (showCaseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Header lang={lang} toggleLanguage={toggleLanguage} t={t.header} />
          <main className="pb-24">
            <CaseStudyWeather onClose={handleCloseCaseStudy} lang={lang} />
          </main>
        </div>
        <Footer t={t.footer} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <Header lang={lang} toggleLanguage={toggleLanguage} t={t.header} />
        <Routes>
          {/* Main Portfolio View */}
          <Route path="/" element={
            <main className="space-y-24 pb-24">
              <Hero t={t.hero} />
              <Credibility t={t.credibility} />
              <TechStack />
              <Services t={t.services} />
              <Projects t={t.projects} onViewCaseStudy={handleViewCaseStudy} view="main" lang={lang} />
            </main>
          } />

          {/* Research & Lab View */}
          <Route path="/lab" element={
            <main className="space-y-12 pb-24 pt-10">
              <div className="max-w-4xl mx-auto">
                {/* Back to portfolio */}
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="group inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-medium mb-10 transition-colors select-none"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  {lang === 'es' ? "Volver al portfolio" : "Back to portfolio"}
                </Link>
                
                {/* Titles */}
                <h1 className="text-3xl md:text-5xl font-black text-gray-950 dark:text-white tracking-tight mb-4 leading-tight">
                  Research & Side Projects
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-normal max-w-2xl mb-12">
                  {lang === 'es'
                    ? "Proyectos de exploración técnica, investigación aplicada y experimentos fuera del stack principal."
                    : "Technical exploration, applied research, and experiments outside the main stack."}
                </p>

                {/* Symmetrical 3-card project list */}
                <Projects t={t.projects} view="lab" lang={lang} />
              </div>
            </main>
          } />
        </Routes>
      </div>
      <Footer t={t.footer} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
