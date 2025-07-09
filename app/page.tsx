"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowFloatingMenu(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Custom validation: require either email or phone
    if (!emailValue.trim() && !phoneValue.trim()) {
      alert('Proszę podać adres e-mail lub numer telefonu.');
      return;
    }
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setEmailValue('');
        setPhoneValue('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {/* Floating Menu */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ${showFloatingMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {/* Desktop Menu */}
        <nav className="hidden md:block bg-white dark:bg-gray-800 rounded-full px-8 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-6">
            <a
              href="https://matrymonialne24.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="/Logo.svg" alt="Biuro Matrymonialne Magnes" className="h-10 w-auto max-w-none" />
            </a>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            <a
              href="#jak-dzialamy"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 whitespace-nowrap"
            >
              Dlaczego My?
            </a>
            <a
              href="#jak-to-dziala"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 whitespace-nowrap"
            >
              Jak to działa?
            </a>
            <a
              href="#pakiet-premium"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 whitespace-nowrap"
            >
              Pakiet Premium
            </a>
            <a
              href="https://matrymonialne24.pl/o-nas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 whitespace-nowrap"
            >
              O nas
            </a>
            <a
              href="#kontakt"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 whitespace-nowrap"
            >
              Kontakt
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden relative" data-mobile-menu>
          <nav className="bg-white dark:bg-gray-800 rounded-full px-4 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <a
                href="https://matrymonialne24.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src="/Logo.svg" alt="Biuro Matrymonialne Magnes" className="h-8 w-auto max-w-none" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="#jak-dzialamy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-6 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  Dlaczego My?
                </a>
                <a
                  href="#jak-to-dziala"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-6 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  Jak to działa?
                </a>
                <a
                  href="#pakiet-premium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-6 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  Pakiet Premium
                </a>
                <a
                  href="https://matrymonialne24.pl/o-nas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-6 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  O nas
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors px-6 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="flex flex-col justify-center items-center px-4 text-center gap-6 relative overflow-hidden" style={{height: '110vh'}}>
      {/* Marble background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-stone-300 to-slate-400 dark:from-slate-800 dark:via-gray-700 dark:to-stone-600">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)] bg-[length:100px_100px]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 dark:bg-gray-900/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 dark:bg-gray-800/25 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/20 dark:bg-gray-700/30 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        

         <div className="absolute top-1/3 left-0 opacity-20 animate-heart-move">
           <svg className="w-14 h-14" fill="#e2007a" viewBox="0 0 24 24">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
         </div>
         <div className="absolute top-1/3 left-12 opacity-15 animate-heart-move-2">
           <svg className="w-12 h-12" fill="#e2007a" viewBox="0 0 24 24">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
         </div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center animate-fade-in">Wyjątkowe relacje zaczynają się od&nbsp;dyskrecji.</h1>
        <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl text-center leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
          Ekskluzywne kojarzenie par dla osób, które nie&nbsp;godzą się na&nbsp;kompromisy.
        </p>
        <a
          href="#jak-dzialamy"
          className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-[#e2007a] hover:text-white dark:hover:bg-[#e2007a] dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
          style={{animationDelay: '0.6s'}}
        >
          Zobacz, jak&nbsp;działamy
        </a>
      </div>
      
      {/* Decorative elements in hero section */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-400 dark:via-stone-500 to-transparent"></div>
      </div>
      
      {/* Floating rectangles in hero */}
      <div className="absolute bottom-32 left-1/4 animate-pulse opacity-70">
        <div className="w-4 h-4 bg-[#72569c] transform rotate-45"></div>
      </div>
      <div className="absolute bottom-32 right-1/4 animate-pulse opacity-70" style={{animationDelay: '1s'}}>
        <div className="w-4 h-4 bg-[#72569c] transform rotate-45"></div>
      </div>
      <a href="#jak-dzialamy" className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 animate-bounce-gentle group z-50" style={{animationDelay: '1s'}}>
        <svg className="w-16 h-16 text-stone-500 dark:text-stone-400 group-hover:text-[#e2007a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 16l-6-6h12l-6 6z"/>
        </svg>
      </a>
      

      
      {/* Curved bottom transition */}
      <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,20 L1200,120 L0,120 Z" 
              fill="currentColor" 
              className="text-white dark:text-gray-900"
        />
      </svg>
    </section>



    {/* Dlaczego My? Section */}
    <section id="jak-dzialamy" className="pt-20 pb-8 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Dlaczego My?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Dyskrecja klasy VIP</h3>
                        <p className="text-gray-600 dark:text-gray-300">Nie&nbsp;wymagamy zdjęcia, Twoje dane kontaktowe są&nbsp;przekazywane za&nbsp;każdorazową zgodą</p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">12 miesięcy dopasowań</h3>
            <p className="text-gray-600 dark:text-gray-300">Bez pośpiechu, dokładnie według&nbsp;Twoich preferencji</p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Pierwszeństwo wyboru</h3>
            <p className="text-gray-600 dark:text-gray-300">Nowi kandydaci trafiają najpierw do&nbsp;Ciebie, a&nbsp;dopiero potem do&nbsp;Klientów z&nbsp;innymi pakietami</p>
          </div>



          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Promocja w&nbsp;sieci</h3>
            <p className="text-gray-600 dark:text-gray-300">Możliwość promocji ogłoszenia w&nbsp;mediach społecznościowych</p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Opieka właściciela</h3>
            <p className="text-gray-600 dark:text-gray-300">Właściciel biura osobiście przeprowadza cały proces</p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#72569c]/20 to-[#72569c]/40 dark:from-[#72569c]/30 dark:to-[#72569c]/50 group-hover:from-[#e2007a]/20 group-hover:to-[#e2007a]/40 dark:group-hover:from-[#e2007a]/30 dark:group-hover:to-[#e2007a]/50 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
              <svg className="w-6 h-6 text-[#72569c] dark:text-[#72569c] group-hover:text-[#e2007a] dark:group-hover:text-[#e2007a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Jesteś zapracowany, nie&nbsp;masz czasu?</h3>
            <p className="text-gray-600 dark:text-gray-300">Właściciel biura przyjedzie do&nbsp;Ciebie celem
            przeprowadzenia wywiadu, przedstawienia fotoofert, zrobienia zdjęć</p>
          </div>
        </div>

        {/* highlight section*/}
        <div className="text-center py-12 mb-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              To przede wszystkim Ty&nbsp;wybierasz,<br className="hidden sm:block" />
              a&nbsp;nie jesteś wybierany
            </h3>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Masz większy wpływ na&nbsp;to z&nbsp;kim się&nbsp;umawiasz
            </p>
          </div>
        </div>

        <div className="text-center mb-1">
          <a
            href="#kontakt"
            className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-[#e2007a] hover:text-white dark:hover:bg-[#e2007a] dark:hover:text-white transition-all duration-300"
          >
            Umów się na&nbsp;dyskretną rozmowę
          </a>
        </div>
      </div>
      
    </section>

    {/* Decorative Divider 2 */}
    <div className="relative h-32 bg-gradient-to-b from-white via-gray-100 to-slate-200 dark:from-gray-900 dark:via-stone-800 dark:to-slate-700 overflow-hidden">
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-8 left-1/4 animate-spin" style={{animationDuration: '8s'}}>
          <svg className="w-7 h-7" fill="#72569c" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute top-8 right-1/4 animate-spin" style={{animationDuration: '8s', animationDelay: '2s'}}>
          <svg className="w-7 h-7" fill="#e2007a" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-1/3 animate-pulse">
          <svg className="w-4 h-4 text-stone-300 dark:text-stone-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute bottom-8 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}>
          <svg className="w-4 h-4 text-stone-300 dark:text-stone-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
      {/* Zigzag pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-8" viewBox="0 0 1200 32" preserveAspectRatio="none">
          <path d="M0,16 L30,4 L60,16 L90,4 L120,16 L150,4 L180,16 L210,4 L240,16 L270,4 L300,16 L330,4 L360,16 L390,4 L420,16 L450,4 L480,16 L510,4 L540,16 L570,4 L600,16 L630,4 L660,16 L690,4 L720,16 L750,4 L780,16 L810,4 L840,16 L870,4 L900,16 L930,4 L960,16 L990,4 L1020,16 L1050,4 L1080,16 L1110,4 L1140,16 L1170,4 L1200,16" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                className="text-stone-400 dark:text-stone-500 opacity-60"
          />
        </svg>
      </div>
    </div>

    {/* Jak to działa? Section */}
    <section id="jak-to-dziala" className="pt-20 pb-36 px-4 bg-gradient-to-br from-slate-100 via-gray-200 to-stone-300 dark:from-stone-800 dark:via-slate-700 dark:to-gray-600 relative overflow-hidden">
      {/* Marble texture overlays */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(-45deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] bg-[length:90px_90px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Jak to&nbsp;działa?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-500 dark:to-gray-600 rounded-full flex items-center justify-center shadow-lg animate-step-1">
              <span className="text-2xl font-bold text-white dark:text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Wstępna rozmowa
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Online lub&nbsp;osobiście – gdzie&nbsp;chcesz. Poznajemy Twoje oczekiwania i&nbsp;preferencje.
            </p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-500 dark:to-gray-600 rounded-full flex items-center justify-center shadow-lg animate-step-2">
              <span className="text-2xl font-bold text-white dark:text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Personalny dobór ofert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Starannie dobieramy kandydatów zgodnie z&nbsp;Twoimi kryteriami i&nbsp;oczekiwaniami.
            </p>
          </div>


          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-500 dark:to-gray-600 rounded-full flex items-center justify-center shadow-lg animate-step-3">
              <span className="text-2xl font-bold text-white dark:text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Spotkania
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Organizumemy spotkania z&nbsp;osobami zgodnymi z&nbsp;Twoimi oczekiwaniami - na&nbsp;miejscu w&nbsp;biurze.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Prosty proces, maksymalne rezultaty
          </p>
          <a
            href="https://matrymonialne24.pl/ankieta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-[#e2007a] hover:text-white dark:hover:bg-[#e2007a] dark:hover:text-white transition-all duration-300"
          >
            Rozpocznij już&nbsp;dziś
          </a>
        </div>
      </div>
      

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
          <path d="M0,64 Q300,20 600,64 T1200,64" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-stone-400 dark:text-stone-500 opacity-40"
          />
          <path d="M0,80 Q300,40 600,80 T1200,80" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-stone-400 dark:text-stone-500 opacity-30"
          />
          <path d="M0,48 Q300,0 600,48 T1200,48" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-stone-400 dark:text-stone-500 opacity-50"
          />
        </svg>
      </div>
      

      <div className="absolute bottom-16 left-1/6 animate-float opacity-70">
        <svg className="w-6 h-6" fill="#72569c" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-float opacity-90" style={{animationDelay: '2s'}}>
        <svg className="w-8 h-8" fill="#72569c" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="absolute bottom-12 right-1/3 animate-float opacity-70" style={{animationDelay: '4s'}}>
        <svg className="w-6 h-6" fill="#72569c" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="absolute bottom-16 right-1/6 animate-float opacity-90" style={{animationDelay: '1s'}}>
        <svg className="w-8 h-8" fill="#72569c" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
    </section>

    {/* Premium Package Section */}
    <section id="pakiet-premium" className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-rose-50 dark:from-gray-900 dark:via-pink-950/20 dark:to-rose-950/20 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#72569c]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#707173]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#e2007a]/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
                  <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#e2007a] to-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#e2007a] uppercase tracking-wider">Pakiet Premium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pakiet Najkorzystniejszy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dla tych, którzy nie&nbsp;idą na&nbsp;kompromisy. Zaprojektowany z&nbsp;myślą o&nbsp;osobach, które wiedzą, czego chcą.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-pink-100 dark:border-pink-900/30 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-x-8 gap-y-6">

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Przedstawianie Twojej oferty – do&nbsp;skutku</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nie przestajemy działać, dopóki nie znajdziesz odpowiedniej osoby.</p>
              </div>
            </div>


            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Status osoby anonimowej</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nie chcesz ujawniać wizerunku? Możesz pozostać całkowicie incognito.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Możliwość kontaktu z&nbsp;osobami, które Cię&nbsp;wybrały</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Niczego nie&nbsp;przegapisz – każda szansa na&nbsp;spotkanie trafia do&nbsp;Ciebie.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Randki w&nbsp;prestiżowej lokalizacji</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Spotkanie na&nbsp;miejscu w&nbsp;naszym biurze – w&nbsp;bezpiecznym, eleganckim otoczeniu.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pełna kontrola nad Twoimi danymi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Twoje dane kontaktowe przekażemy tylko po&nbsp;obustronnej akceptacji.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Profesjonalna sesja zdjęciowa</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Twój wizerunek – uchwycony z&nbsp;klasą. Zajmiemy się&nbsp;wszystkim.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Ekskluzywna opieka przez 12 miesięcy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Starannie wyselekcjonowane propozycje przez nasze Biuro – przez cały rok.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Stały kontakt z&nbsp;właścicielem biura</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nie&nbsp;jesteś tylko numerem w&nbsp;systemie. Bezpośredni dostęp do&nbsp;osoby decyzyjnej.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pierwszeństwo wyboru</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nowi klienci? Najpierw poznasz ich&nbsp;Ty. Zanim zobaczą ich&nbsp;Klienci z&nbsp;innych pakietów.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#e2007a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Wywiad i&nbsp;sesja u&nbsp;Ciebie</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Jesteś zapracowany? Przyjedziemy do&nbsp;Twojego biura lub&nbsp;domu.</p>
              </div>
            </div>
          </div>


          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <div className="mb-6">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Pakiet, który działa w&nbsp;tle, gdy&nbsp;Ty skupiasz się&nbsp;na&nbsp;życiu.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Dyskretnie, skutecznie i&nbsp;z&nbsp;pełnym szacunkiem do&nbsp;Twojego czasu.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://matrymonialne24.pl/cennik/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#72569c] to-purple-600 text-white rounded-full px-8 py-3 font-medium text-base hover:from-purple-600 hover:to-[#72569c] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Zobacz ceny
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Wyjątkowe relacje wymagają wyjątkowego podejścia
              </p>
            </div>
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center items-center mt-4">
              <a
                href="https://matrymonialne24.pl/promocje/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#e2007a] to-pink-600 text-white rounded-full px-8 py-3 font-medium text-base hover:from-pink-600 hover:to-[#e2007a] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Zobacz promocje
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sprawdź dostępne rabaty i&nbsp;oferty specjalne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section id="kontakt" className="py-20 px-4 bg-gradient-to-br from-stone-100 via-slate-200 to-gray-300 dark:from-gray-800 dark:via-stone-700 dark:to-slate-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:35px_35px]"></div>
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.08)_50%,transparent_65%)] bg-[length:70px_70px]"></div>
      
      {/* Moving balloons */}
      <div className="absolute left-16 top-0 h-full w-24 overflow-hidden pointer-events-none">
        <div className="absolute animate-balloon-float-1 left-4">
          <img src="/slice1.svg" alt="" className="w-12 h-12 opacity-70" />
        </div>
        <div className="absolute animate-balloon-float-2 left-8" style={{animationDelay: '3s'}}>
          <img src="/slice1.svg" alt="" className="w-10 h-10 opacity-60" />
        </div>
        <div className="absolute animate-balloon-float-3 left-2" style={{animationDelay: '6s'}}>
          <img src="/slice1.svg" alt="" className="w-14 h-14 opacity-50" />
        </div>
      </div>
      
      <div className="absolute right-16 top-0 h-full w-24 overflow-hidden pointer-events-none">
        <div className="absolute animate-balloon-float-1 right-4" style={{animationDelay: '1.5s'}}>
          <img src="/slice1.svg" alt="" className="w-11 h-11 opacity-65" />
        </div>
        <div className="absolute animate-balloon-float-2 right-8" style={{animationDelay: '4.5s'}}>
          <img src="/slice1.svg" alt="" className="w-13 h-13 opacity-55" />
        </div>
        <div className="absolute animate-balloon-float-3 right-2" style={{animationDelay: '7.5s'}}>
          <img src="/slice1.svg" alt="" className="w-9 h-9 opacity-70" />
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Umów się na&nbsp;dyskretną rozmowę
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Wypełnij formularz poniżej albo zadzwoń na&nbsp;numer{" "}
          <a href="tel:+48600434700" className="hover:text-[#e2007a] dark:hover:text-[#e2007a] transition-colors font-medium inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-stone-600 dark:text-stone-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            600 434 700
          </a>
        </p>
        
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dziękujemy za&nbsp;wiadomość!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Otrzymaliśmy Twoją wiadomość i&nbsp;odezwiemy się&nbsp;w&nbsp;ciągu 24&nbsp;godzin.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmailValue('');
                setPhoneValue('');
              }}
              className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-6 py-2 font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form action="https://formspree.io/f/xnnvyowd" method="POST" onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Wprowadź swoje imię"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wiek
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="18"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Wprowadź swój wiek"
                />
              </div>

              <div>
                <label htmlFor="marital_status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Stan cywilny
                </label>
                <select
                  id="marital_status"
                  name="marital_status"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Wybierz stan cywilny</option>
                  <option value="kawaler/panna">Kawaler/Panna</option>
                  <option value="rozwiedziony/a">Rozwiedziony/a</option>
                  <option value="w separacji">W separacji</option>
                  <option value="wdowiec/wdowa">Wdowiec/Wdowa</option>
                </select>
              </div>

              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Zawód
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Wprowadź swój zawód"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wykształcenie
                </label>
                <select
                  id="education"
                  name="education"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Wybierz wykształcenie</option>
                  <option value="podstawowe">Podstawowe</option>
                  <option value="zawodowe">Zawodowe</option>
                  <option value="srednie">Średnie</option>
                  <option value="wyzsze">Wyższe</option>
                </select>
              </div>

              <div>
                <label htmlFor="voivodeship" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Województwo
                </label>
                <select
                  id="voivodeship"
                  name="voivodeship"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Wybierz województwo</option>
                  <option value="dolnoslaskie">Dolnośląskie</option>
                  <option value="kujawsko-pomorskie">Kujawsko-pomorskie</option>
                  <option value="lubelskie">Lubelskie</option>
                  <option value="lubuskie">Lubuskie</option>
                  <option value="lodzkie">Łódzkie</option>
                  <option value="malopolskie">Małopolskie</option>
                  <option value="mazowieckie">Mazowieckie</option>
                  <option value="opolskie">Opolskie</option>
                  <option value="podkarpackie">Podkarpackie</option>
                  <option value="podlaskie">Podlaskie</option>
                  <option value="pomorskie">Pomorskie</option>
                  <option value="slaskie">Śląskie</option>
                  <option value="swietokrzyskie">Świętokrzyskie</option>
                  <option value="warminsko-mazurskie">Warmińsko-mazurskie</option>
                  <option value="wielkopolskie">Wielkopolskie</option>
                  <option value="zachodniopomorskie">Zachodniopomorskie</option>
                  <option value="zagranica">Zagranica</option>
                </select>
              </div>

              <div>
                <label htmlFor="partner_age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wiek wybranki/a
                </label>
                <select
                  id="partner_age"
                  name="partner_age"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Wybierz preferencje wiekowe</option>
                  <option value="w zbliżonym wieku">W zbliżonym wieku</option>
                  <option value="starszy/a">Starszy/a</option>
                  <option value="młodszy/a">Młodszy/a</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Twój adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="twoj@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Numer telefonu
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="+48 123 456 789"
                />
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-6 mb-6">
              Proszę podać adres e-mail lub numer telefonu (wystarczy jedno z nich)
            </div>

            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="contact_consent"
                name="contact_consent"
                required
                className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor="contact_consent" className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                Wyrażam zgodę, aby Doradca Matrymonialny skontaktował się&nbsp;ze&nbsp;mną przed zapisaniem się&nbsp;do&nbsp;Biura.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-4 font-medium text-lg hover:bg-[#e2007a] hover:text-white dark:hover:bg-[#e2007a] dark:hover:text-white transition-all duration-300"
            >
              Wyślij
            </button>
          </form>
        )}
      </div>
      
    </section>

    {/* Footer */}
    <footer className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-200 dark:from-purple-900/30 dark:via-pink-900/20 dark:to-rose-900/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] bg-[length:80px_80px]"></div>
      <div className="absolute top-4 left-10 w-16 h-16 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-10 w-20 h-20 bg-pink-200/30 dark:bg-pink-600/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rose-200/40 dark:bg-rose-600/20 rounded-full blur-lg"></div>
      
      <div className="relative z-10 py-6 px-8">
        <div className="w-full">
          {/* First row: Social media, Phone, Email */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 dark:bg-gradient-to-br dark:from-purple-700/50 dark:to-purple-800/50 rounded-full flex items-center justify-center hover:from-[#72569c] hover:to-purple-600 dark:hover:from-[#72569c] dark:hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-md">
                <svg className="w-5 h-5 text-purple-700 dark:text-purple-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 dark:bg-gradient-to-br dark:from-pink-700/50 dark:to-pink-800/50 rounded-full flex items-center justify-center hover:from-[#e2007a] hover:to-pink-600 dark:hover:from-[#e2007a] dark:hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-md">
                <svg className="w-5 h-5 text-pink-700 dark:text-pink-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-rose-200 to-rose-300 dark:bg-gradient-to-br dark:from-rose-700/50 dark:to-rose-800/50 rounded-full flex items-center justify-center hover:from-rose-500 hover:to-red-500 dark:hover:from-rose-500 dark:hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-md">
                <svg className="w-5 h-5 text-rose-700 dark:text-rose-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Phone */}
            <div>
              <a href="tel:+48600434700" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#72569c] dark:hover:text-[#72569c] transition-colors">
                +48 600 434 700
              </a>
            </div>
            
            {/* Email */}
            <div>
              <a 
                href="mailto:magnes@matrymonialne24.pl" 
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#72569c] dark:hover:text-[#72569c] transition-colors cursor-pointer"
              >
                magnes@matrymonialne24.pl
              </a>
            </div>
          </div>
          
          {/* Second row: Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="https://matrymonialne24.pl/regulamin/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#72569c] dark:hover:text-[#72569c] transition-colors font-medium">
              Regulamin
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#72569c] dark:hover:text-[#72569c] transition-colors font-medium">
              Ustawienia ciasteczek
            </a>
            <a href="https://matrymonialne24.pl/wp-content/uploads/2025/05/Polityka-prywatnosci-Magnes.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#72569c] dark:hover:text-[#72569c] transition-colors font-medium">
              Polityka Prywatności
            </a>
          </div>
          
          {/* Copyright - Bottom */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-400 dark:border-gray-500 pt-6">
            <p>© Biuro Matrymonialne Magnes 2025 Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
