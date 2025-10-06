import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-12 w-auto"
              src="https://upgradeperu.net/images/up.webp"
              alt="Up Grade Perú Logo"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/51937191856?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Up%20Grade%20Perú"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-red-500 py-2 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-red-500 py-2 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-red-500 py-2 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-red-500 py-2 transition-colors"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/51937191856?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Up%20Grade%20Perú"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 mt-4"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
