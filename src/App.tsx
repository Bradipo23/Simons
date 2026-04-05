import React, { useState } from 'react';
import { Menu, X, ArrowRight, Package, ShieldCheck, Star } from 'lucide-react';

const Instagram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const Twitter = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Facebook = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="font-serif text-2xl font-bold tracking-widest text-white flex flex-col uppercase">
          Simons <span className="text-[0.5em] leading-none text-gold ml-10">& Scarpe</span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] tracking-widest uppercase font-medium text-white">
          <a href="#" className="hover:text-gold transition-colors">Su Misura</a>
          <a href="#" className="hover:text-gold transition-colors">Collezione</a>
          <a href="#" className="hover:text-gold transition-colors">L'Eredità</a>
          <a href="#" className="hover:text-gold transition-colors">Atelier</a>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
        {/* Background Image Loading */}
        <div 
          className="absolute inset-0 bg-[url('/simons.png')] bg-cover bg-center bg-no-repeat scale-105 transform origin-top transition-transform duration-[20s] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/30 to-[#0a0a0c]" />
        
        <div className="relative z-10 text-center flex flex-col items-center mt-20 px-4">
          <p className="font-montserrat text-gold tracking-[0.3em] text-[10px] md:text-sm font-semibold uppercase mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Creato esclusivamente per il vero gentiluomo
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Simons & <br /><span className="italic text-transparent bg-clip-text gold-gradient">Scarpe</span>
          </h1>
          <p className="font-montserrat font-light max-w-lg mx-auto text-[#e5e7eb] text-sm md:text-[15px] tracking-[0.05em] leading-loose mb-12 opacity-90 drop-shadow-md">
            L'intersezione tra pura maestria artigianale italiana ed eleganza maschile senza pari. Modellato da una mente geniale, per chi sa apprezzare la vera essenza della bellezza.
          </p>
          <button className="font-montserrat group glass-panel text-white hover:bg-white/10 px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-300 border border-white/20">
            <span className="text-[11px] md:text-[13px] tracking-widest uppercase font-semibold">Scopri La Collezione</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-gold" />
          </button>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Incontra <span className="italic text-gold">Simons</span>
          </h2>
          <div className="h-1 w-20 bg-[#d4af37] mb-8" />
          <p className="text-light leading-relaxed mb-6 font-light">
            Simons non è un semplice uomo; è un manifesto assoluto di grazia, fascino e travolgente bellezza. Ma oltre i suoi lineamenti perfetti e il suo sguardo profondo si cela un'ardente passione per la calzatura squisita.
          </p>
          <p className="text-light leading-relaxed font-light mb-8">
            Capì rapidamente che l'eleganza di un uomo bellissimo passa imprescindibilmente da ciò che indossa ai piedi. Così nacque <strong>Simons & Scarpe</strong> — un marchio di lusso nato per far risuonare la purezza della sua estetica ad ogni tuo singolo passo.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <Star className="text-gold fill-[#d4af37]" size={20} />
              <Star className="text-gold fill-[#d4af37]" size={20} />
              <Star className="text-gold fill-[#d4af37]" size={20} />
              <Star className="text-gold fill-[#d4af37]" size={20} />
              <Star className="text-gold fill-[#d4af37]" size={20} />
            </div>
            <span className="text-sm text-light tracking-widest pl-2 uppercase">Design Impeccabile</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-[#d4af37] opacity-20 blur-3xl rounded-full" />
          <img 
            src="/simons.png" 
            alt="Ritratto di Simons" 
            className="w-full h-auto aspect-[4/5] object-cover rounded-sm relative z-10 shadow-2xl sepia-[0.3]"
          />
          <div className="absolute -bottom-6 -left-6 glass-panel text-white p-6 z-20 rounded-sm">
            <p className="font-serif text-2xl italic">"L'eleganza è un'attitudine."</p>
            <p className="text-xs uppercase tracking-widest text-gold mt-2">- Simons</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-[#1a1a1f] py-24 md:py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-gold tracking-widest uppercase text-sm mb-4">Capolavori</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-0">La Linea Signature</h2>
            </div>
            <a href="#" className="flex items-center gap-2 group text-sm uppercase tracking-widest hover:text-gold transition-colors text-white">
              Vedi Tutto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm bg-[#0a0a0c] mb-6 relative w-full aspect-square">
                <img 
                  src="/luxury.png" 
                  alt="La Oxford Simons" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 glass-panel text-white px-3 py-1 rounded-sm text-xs font-medium uppercase tracking-wider border border-white/20">
                  Più Vendute
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">La Oxford Simons</h3>
                  <p className="text-light text-sm font-light">Realizzata a mano minuziosamente in Italia</p>
                </div>
                <p className="font-medium text-lg text-white">€1.250</p>
              </div>
            </div>

            <div className="group cursor-pointer mt-0 md:mt-16">
              <div className="overflow-hidden rounded-sm bg-[#0a0a0c] mb-6 relative w-full aspect-square">
                <img 
                  src="/luxury.png" 
                  alt="Il Mocassino Mezzanotte" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 sepia-[0.3]"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Il Mocassino Mezzanotte</h3>
                  <p className="text-light text-sm font-light">Velluto con dettaglio stemma d'oro</p>
                </div>
                <p className="font-medium text-lg text-white">€980</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-6">
          <Package className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
          <h4 className="uppercase tracking-widest text-sm text-white mb-3">Spedizione Gratuita</h4>
          <p className="text-light text-sm font-light">Consegna globale con il nostro esclusivo servizio in guanti bianchi.</p>
        </div>
        <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-6">
          <ShieldCheck className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
          <h4 className="uppercase tracking-widest text-sm text-white mb-3">Garanzia a Vita</h4>
          <p className="text-light text-sm font-light">Standard di qualità inalterabili firmati e garantiti Simons.</p>
        </div>
        <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-6">
          <Star className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
          <h4 className="uppercase tracking-widest text-sm text-white mb-3">Vestibilità Su Misura</h4>
          <p className="text-light text-sm font-light">Lavorazione sartoriale personalizzata disponibile nel nostro atelier.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1f] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="font-serif text-2xl font-bold tracking-widest text-white flex flex-col uppercase mb-6">
              Simons <span className="text-[0.5em] leading-none text-gold ml-10">& Scarpe</span>
            </div>
            <p className="text-light text-sm font-light leading-relaxed mb-8">
              Ridefinire l'eleganza maschile attraverso le lenti della pura perfezione estetica italiana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h5 className="uppercase tracking-widest text-sm font-medium text-white mb-2">Esplora</h5>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Collezione</a>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Su di noi (Simons)</a>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Il Giornale</a>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Contatti</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="uppercase tracking-widest text-sm font-medium text-white mb-2">Note Legali</h5>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Termini di Servizio</a>
              <a href="#" className="text-sm text-light hover:text-gold transition-colors">Resi e Rimborsi</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-xs text-gray-500 tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Simons & Scarpe. Per l'uomo assolutamente elegante.
        </div>
      </footer>
    </div>
  );
}
