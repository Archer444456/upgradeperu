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

const team = [
  {
    name: 'Arnold Ccopa',
    role: 'Experto soluciones digitales',
    imageUrl: 'https://ncdb.protocolo2r.store/dltemp/4cuTjqHTUagM0Aml/1759521600000/noco/p9sst1qpk93c1sc/mchcgvwg6fh63mn/c4cyf0f3101o3k3/IMG-20250816-WA0024_Wpy4t.jpg'
  },
  {
    name: 'Brandon Clay',
    role: 'Experto en HTML',
    imageUrl: 'https://ncdb.protocolo2r.store/dltemp/q3zlonOCVrAVaDRS/1759521600000/noco/p9sst1qpk93c1sc/mchcgvwg6fh63mn/c4cyf0f3101o3k3/yourosa1_zVo4t.jpg'
  },
  {
    name: 'Juan Jose',
    role: 'Desarrollador Web y App',
    imageUrl: 'https://ncdb.protocolo2r.store/dltemp/fZgh94OOsZpqdCEu/1759521600000/noco/p9sst1qpk93c1sc/mchcgvwg6fh63mn/c4cyf0f3101o3k3/demon-tana_YJNJq.webp'
  },
  {
    name: 'Ignacio Aruvito',
    role: 'Experto N8N y Backend',
    imageUrl: 'https://ncdb.protocolo2r.store/dltemp/-ITzFy-VG5u85shj/1759521600000/noco/p9sst1qpk93c1sc/mchcgvwg6fh63mn/cger8fphvqd0hr5/28_JAmlE.webp'
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
            <h3 className="text-3xl font-bold text-white">Nuestro Equipo de Expertos</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Contamos con un equipo multidisciplinario de expertos en marketing digital, desarrollo web, diseño UX/UI, inteligencia artificial y automatización. Cada miembro aporta su experiencia y pasión para garantizar el éxito de tu proyecto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border-2 border-gray-800 group-hover:border-red-500 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-red-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
