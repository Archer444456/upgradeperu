import { TrendingUp, LayoutGrid as Layout, ShoppingCart, GraduationCap, MessageSquare, Zap } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar tu presencia online, captar clientes y multiplicar tus ventas en redes sociales y motores de búsqueda.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Layout,
    title: 'Landing Pages y Webs Profesionales',
    description: 'Diseños modernos, responsivos y optimizados para conversión. Tu página web será tu mejor vendedor trabajando 24/7.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    title: 'Tiendas Virtuales',
    description: 'E-commerce completo con pasarelas de pago, gestión de inventario y experiencia de compra optimizada para maximizar ventas.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: GraduationCap,
    title: 'Academias Virtuales',
    description: 'Plataformas de educación online con gestión de cursos, estudiantes, certificados y contenido multimedia profesional.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: MessageSquare,
    title: 'Chatbots Inteligentes',
    description: 'Automatiza la atención al cliente en WhatsApp, Telegram y tu sitio web con IA que entiende y responde como un humano.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Zap,
    title: 'Automatizaciones con IA',
    description: 'Optimiza procesos, reduce costos y aumenta productividad con inteligencia artificial aplicada a tu negocio.',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full max-w-md bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href="https://wa.me/51937191856?text=Hola,%20quiero%20cotizar%20el%20servicio%20de%20"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
