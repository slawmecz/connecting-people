"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
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
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-24 text-center gap-6 relative overflow-hidden">
      {/* Marble background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-stone-300 to-slate-400 dark:from-slate-800 dark:via-gray-700 dark:to-stone-600">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)] bg-[length:100px_100px]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 dark:bg-gray-900/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 dark:bg-gray-800/25 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/20 dark:bg-gray-700/30 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center animate-fade-in">Wyjątkowe relacje zaczynają się od&nbsp;dyskrecji.</h1>
        <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl text-center leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
          Ekskluzywne kojarzenie par dla osób, które nie&nbsp;godzą się na&nbsp;kompromisy.
        </p>
        <a
          href="#jak-to-dziala"
          className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
          style={{animationDelay: '0.6s'}}
        >
          Zobacz, jak działamy
        </a>
      </div>
      
      {/* Decorative elements in hero section */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-400 dark:via-stone-500 to-transparent"></div>
      </div>
      
      {/* Floating diamonds in hero */}
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-stone-400 dark:bg-stone-500 rotate-45 animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-stone-400 dark:bg-stone-500 rotate-45 animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-500 dark:bg-stone-400 rotate-45 animate-bounce opacity-80"></div>
      

      
      {/* Curved bottom transition */}
      <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,20 L1200,120 L0,120 Z" 
              fill="currentColor" 
              className="text-white dark:text-gray-900"
        />
      </svg>
    </section>



    {/* Dlaczego My? Section */}
    <section id="jak-dzialamy" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Dlaczego My?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Benefit 1 - Dyskrecja klasy VIP */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-stone-100 to-slate-200 dark:from-slate-700 dark:to-stone-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Dyskrecja klasy VIP</h3>
                        <p className="text-gray-600 dark:text-gray-300">Nie wymagamy zdjęcia, Twoje dane kontaktowe są przekazywane za&nbsp;każdorazową zgodą</p>
          </div>

          {/* Benefit 2 - 12 miesięcy dopasowań */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-gray-200 dark:from-stone-700 dark:to-slate-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">12 miesięcy dopasowań</h3>
            <p className="text-gray-600 dark:text-gray-300">Bez pośpiechu, dokładnie według Twoich preferencji</p>
          </div>

          {/* Benefit 3 - Pierwszeństwo wyboru */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-stone-200 dark:from-gray-700 dark:to-slate-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Pierwszeństwo wyboru</h3>
            <p className="text-gray-600 dark:text-gray-300">Nowi kandydaci trafiają najpierw do&nbsp;Ciebie, a dopiero potem do&nbsp;Klientów z innymi pakietami</p>
          </div>


          {/* Benefit 5 - Promocja w sieci */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-stone-200 to-slate-300 dark:from-slate-600 dark:to-stone-700 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Promocja w sieci</h3>
            <p className="text-gray-600 dark:text-gray-300">Możliwość promocji ogłoszenia w&nbsp;social media</p>
          </div>

          {/* Benefit 6 - Opieka właściciela */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-200 to-gray-300 dark:from-stone-600 dark:to-gray-700 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Opieka właściciela</h3>
            <p className="text-gray-600 dark:text-gray-300">Właściciel biura osobiście przeprowadza cały proces</p>
          </div>

          {/* Benefit 7 - Wywiad w biurze/domu */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-slate-300 dark:from-slate-700 dark:to-stone-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Jesteś zapracowany, nie masz czasu?</h3>
            <p className="text-gray-600 dark:text-gray-300">Właściciel biura przyjedzie do Ciebie celem
            przeprowadzenia wywiadu, przedstawienia fotoofert, zrobienia zdjęć</p>
          </div>
        </div>

        {/* Special highlight section - standalone without card styling */}
        <div className="text-center py-12 mb-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              To przede wszystkim Ty wybierasz,<br className="hidden sm:block" />
              a&nbsp;nie jesteś wybierany
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-slate-600 dark:from-slate-500 dark:to-stone-300 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Masz większy wpływ na&nbsp;to z&nbsp;kim się umawiasz
            </p>
          </div>
        </div>

        <div className="text-center mb-4">
          <a
            href="#kontakt"
            className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
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
        <div className="absolute top-8 left-1/4 w-6 h-6 border-2 border-stone-400 dark:border-stone-500 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-8 right-1/4 w-6 h-6 border-2 border-stone-400 dark:border-stone-500 rotate-45 animate-spin" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-8 left-1/3 w-4 h-4 bg-stone-300 dark:bg-stone-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-4 h-4 bg-stone-300 dark:bg-stone-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
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
    <section id="jak-to-dziala" className="py-20 px-4 bg-gradient-to-br from-slate-100 via-gray-200 to-stone-300 dark:from-stone-800 dark:via-slate-700 dark:to-gray-600 relative overflow-hidden">
      {/* Marble texture overlays */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(-45deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] bg-[length:90px_90px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Jak to&nbsp;działa?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-slate-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-stone-700 to-slate-800 dark:from-stone-100 dark:to-slate-200 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white dark:text-stone-800">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Wstępna rozmowa
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Online lub osobiście – gdzie chcesz. Poznajemy Twoje oczekiwania i&nbsp;preferencje.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-stone-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-700 to-stone-800 dark:from-slate-100 dark:to-stone-200 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white dark:text-slate-800">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Personalny dobór ofert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Starannie dobieramy kandydatów zgodnie z&nbsp;Twoimi kryteriami i&nbsp;oczekiwaniami.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-slate-800 dark:from-gray-100 dark:to-slate-200 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white dark:text-gray-800">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Spotkania
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Spotkania tylko z&nbsp;osobami zgodnymi z&nbsp;Twoimi oczekiwaniami.
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
            className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-3 font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Rozpocznij już dziś
          </a>
        </div>
      </div>
      
    </section>

    {/* Decorative Divider 3 */}
    <div className="relative h-32 bg-gradient-to-br from-slate-100 via-gray-200 to-stone-300 dark:from-stone-800 dark:via-slate-700 dark:to-gray-600 overflow-hidden">
      {/* Marble texture overlays - matching the process section above */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(-45deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] bg-[length:90px_90px]"></div>
      
      {/* Flowing lines */}
      <div className="absolute inset-0">
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
      {/* Floating circles */}
      <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-float opacity-70"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-stone-300 dark:bg-stone-600 rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-float opacity-70" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-stone-300 dark:bg-stone-600 rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
    </div>

    {/* Contact Form Section */}
    <section id="kontakt" className="py-20 px-4 bg-gradient-to-br from-stone-100 via-slate-200 to-gray-300 dark:from-gray-800 dark:via-stone-700 dark:to-slate-600 relative overflow-hidden">
      {/* Marble texture overlays */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:35px_35px]"></div>
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.08)_50%,transparent_65%)] bg-[length:70px_70px]"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Umów się na&nbsp;dyskretną rozmowę
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Wypełnij formularz poniżej albo zadzwoń na&nbsp;numer{" "}
          <a href="tel:+48600434700" className="hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
            📞 600 434 700
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
              Otrzymaliśmy Twoją wiadomość i&nbsp;odezwiemy się w&nbsp;ciągu 24&nbsp;godzin.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-block bg-black text-white dark:bg-white dark:text-black rounded-full px-6 py-2 font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form action="https://formspree.io/f/xnnvyowd" method="POST" onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Imię *
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

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Adres email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
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
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="+48 123 456 789"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wiek
            </label>
            <select
              id="age"
              name="age"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Wybierz przedział wiekowy</option>
              <option value="18-25">18-25 lat</option>
              <option value="25-35">25-35 lat</option>
              <option value="35-45">35-45 lat</option>
              <option value="45-55">45-55 lat</option>
              <option value="55-65">55-65 lat</option>
              <option value="65+">65+ lat</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Opowiedz nam o swoich oczekiwaniach..."
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              required
              className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="ml-3 text-sm text-gray-600 dark:text-gray-300">
              Zgadzam się na&nbsp;przetwarzanie moich danych osobowych zgodnie z&nbsp;polityką prywatności *
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-4 font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Wyślij wiadomość
          </button>
        </form>
        )}
      </div>
      
    </section>

    {/* Decorative Divider 4 */}
    <div className="relative h-24 bg-gradient-to-b from-gray-300 via-stone-200 to-stone-100 dark:from-slate-600 dark:via-stone-700 dark:to-gray-800 overflow-hidden">
      {/* Elegant wave pattern */}
      <svg className="absolute top-0 w-full h-full" viewBox="0 0 1200 96" preserveAspectRatio="none">
        <path d="M0,48 Q200,20 400,48 T800,48 Q1000,20 1200,48 L1200,96 L0,96 Z" 
              fill="currentColor" 
              className="text-stone-100 dark:text-gray-800 opacity-60"
        />
        <path d="M0,60 Q300,30 600,60 T1200,60 L1200,96 L0,96 Z" 
              fill="currentColor" 
              className="text-stone-100 dark:text-gray-800 opacity-40"
        />
      </svg>
      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-stone-400 dark:bg-stone-500 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-stone-400 dark:bg-stone-500 opacity-50"></div>
    </div>

    {/* Footer */}
    <footer className="bg-gradient-to-br from-stone-100 via-slate-200 to-gray-300 dark:from-gray-800 dark:via-stone-700 dark:to-slate-600 relative overflow-hidden">
      {/* Marble texture overlays */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] bg-[length:80px_80px]"></div>
      
      <div className="relative z-10 py-12 px-8">
        <div className="w-full">
          {/* First row: Social media, Phone, Email */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Phone */}
            <div>
              <a href="tel:+48600434700" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
                +48 600 434 700
              </a>
            </div>
            
            {/* Email */}
            <div>
              <a href="mailto:kontakt@magnes.pl" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
                kontakt@magnes.pl
              </a>
            </div>
          </div>
          
          {/* Second row: Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Regulamin
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Ustawienia ciasteczek
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Polityka Prywatności
            </a>
          </div>
          
          {/* Copyright - Bottom */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-600 pt-6">
            <p>© Biuro Matrymonialne Magnes 2025 Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
