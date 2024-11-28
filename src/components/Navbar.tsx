import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" role="navigation" aria-label="Menu główne">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold" role="heading" aria-level={1}>Paweł Wyszomirski</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#o-mnie" className="hover:text-blue-600" aria-label="Przejdź do sekcji O mnie">O mnie</a>
            <a href="#oferta" className="hover:text-blue-600" aria-label="Przejdź do sekcji Oferta">Oferta</a>
            <a href="#dlaczego-ja" className="hover:text-blue-600" aria-label="Przejdź do sekcji Dlaczego ja">Dlaczego ja?</a>
            <a href="#kontakt" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" aria-label="Przejdź do formularza kontaktowego">
              Kontakt
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden" role="menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#o-mnie" className="block px-3 py-2 hover:text-blue-600" role="menuitem">O mnie</a>
            <a href="#oferta" className="block px-3 py-2 hover:text-blue-600" role="menuitem">Oferta</a>
            <a href="#dlaczego-ja" className="block px-3 py-2 hover:text-blue-600" role="menuitem">Dlaczego ja?</a>
            <a href="#kontakt" className="block px-3 py-2 text-white bg-blue-600 rounded-lg" role="menuitem">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
};