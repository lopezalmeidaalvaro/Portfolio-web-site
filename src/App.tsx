import { useState } from 'react';
import { type Language, translations } from './i18n/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <Header lang={lang} toggleLanguage={toggleLanguage} t={t.header} />
        <main className="space-y-24 pb-24">
          <Hero t={t.hero} />
          <TechStack />
          <Projects t={t.projects} />
        </main>
      </div>
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
