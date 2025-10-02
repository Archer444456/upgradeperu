import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/50 rounded-full px-4 py-2 text-sm">
              <Sparkles className="text-red-500" size={16} />
              <span>Soluciones Digitales Innovadoras</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Up Grade Perú
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-300">
              Impulsamos tu negocio con Marketing Digital y Automatización Inteligente
            </p>

            <p className="text-lg text-gray-400">
              Transformamos ideas en resultados reales. Especialistas en llevar tu empresa al siguiente nivel digital con tecnología de vanguardia y estrategias comprobadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/51937191856?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Up%20Grade%20Perú"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
              >
                Contáctanos por WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-sm text-gray-400">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Soporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] bg-black rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="https://ncdb.protocolo2r.store/dltemp/S97_Wq17dBSsy9eD/1759441200000/thumbnails/noco/p9sst1qpk93c1sc/mq6bxc0dmiubo6t/ch4rx70nkxkkkn6/upgradeperu_I5Ida.webp/card_cover.jpg"
                alt="Up Grade Perú - Tecnología de Punta"
                className="w-full h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-white text-2xl font-bold drop-shadow-2xl">Tecnología de Punta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
