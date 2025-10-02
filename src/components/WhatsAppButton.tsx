import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51937191856?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Up%20Grade%20Perú"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="text-white group-hover:scale-110 transition-transform" size={32} />
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
}
