import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Hoy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos listos para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-400">Arequipa, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">contacto@upgradeperu.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-blue-500/10 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
              <p className="text-gray-300 mb-6">
                Contáctanos directamente por WhatsApp y recibe atención inmediata de nuestro equipo de expertos.
              </p>
              <a
                href="https://wa.me/51937191856?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Up%20Grade%20Perú"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 w-full text-center"
              >
                Chatea con Nosotros
              </a>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                <p className="text-gray-400 text-center">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
