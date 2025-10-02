import { Target, Eye, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Implementamos las últimas tecnologías y tendencias digitales'
  },
  {
    icon: Award,
    title: 'Transparencia',
    description: 'Comunicación clara y honesta en cada etapa del proyecto'
  },
  {
    icon: TrendingUp,
    title: 'Resultados',
    description: 'Enfocados en generar impacto real y medible en tu negocio'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 right-20"></div>
        <div className="absolute w-96 h-96 bg-red-500/5 rounded-full blur-3xl bottom-20 left-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Somos el aliado estratégico para tu transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-red-500/10 to-blue-500/10 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Nuestra Misión</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ayudamos a emprendedores y empresas a digitalizarse con soluciones modernas, rentables y efectivas. Nuestro compromiso es impulsar el crecimiento de tu negocio mediante tecnología de vanguardia y estrategias personalizadas que generan resultados reales.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ser la empresa líder en transformación digital en Perú, reconocida por ofrecer soluciones innovadoras que permiten a los negocios competir en la era digital con confianza, eficiencia y un crecimiento sostenible.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nuestros <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Valores</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white">Nuestro Equipo</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Contamos con un equipo multidisciplinario de expertos en marketing digital, desarrollo web, diseño UX/UI, inteligencia artificial y automatización. Cada miembro aporta su experiencia y pasión para garantizar el éxito de tu proyecto.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Users className="text-gray-600" size={48} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">Especialista {num}</div>
                  <div className="text-sm text-gray-500">Área de Expertise</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
