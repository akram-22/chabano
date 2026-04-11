import { Home, TrendingUp, DollarSign, ArrowRight } from "lucide-react"

const WHATSAPP_BUY = `https://wa.me/213541029014?text=Bonjour%20Chabane%2C%20je%20cherche%20%C3%A0%20acheter%20un%20appartement%20%C3%A0%20Oran.`
const WHATSAPP_SELL = `https://wa.me/213541029014?text=Bonjour%20Chabane%2C%20j%27ai%20un%20bien%20%C3%A0%20vendre%20%C3%A0%20Oran.`
const WHATSAPP_INVEST = `https://wa.me/213541029014?text=Bonjour%20Chabane%2C%20je%20cherche%20des%20opportunit%C3%A9s%20d%27investissement%20immobilier%20%C3%A0%20Oran.`

const services = [
  {
    icon: Home,
    tag: "Achat",
    title: "Vous cherchez à acheter ?",
    desc: "F2, F3, F4 — peu importe votre budget ou votre quartier préféré, je connais les bons biens avant même qu'ils soient publiés. Fini les annonces floues et les visites pour rien.",
    benefits: [
      "Sélection personnalisée selon vos critères",
      "Visites vidéo avant déplacement",
      "Accompagnement jusqu'à la signature",
    ],
    cta: "Je cherche un appartement",
    link: WHATSAPP_BUY,
    accent: true,
  },
  {
    icon: DollarSign,
    tag: "Vente",
    title: "Vous vendez votre bien ?",
    desc: "Je ne mets pas juste une annonce et j'attends. Je crée une vidéo professionnelle, je la distribue à mes acheteurs, et j'attire des clients sérieux en quelques jours.",
    benefits: [
      "Vidéo professionnelle de votre bien",
      "Diffusion sur mes réseaux qualifiés",
      "Acheteurs sérieux uniquement",
    ],
    cta: "Vendre mon bien",
    link: WHATSAPP_SELL,
    accent: false,
  },
  {
    icon: TrendingUp,
    tag: "Investissement",
    title: "Vous investissez ?",
    desc: "Oran est en pleine mutation. Je vous guide sur les zones à fort potentiel, les biens sous-évalués, et les opportunités que les portails ne montrent pas.",
    benefits: [
      "Analyse des quartiers porteurs",
      "Opportunités off-market",
      "Conseil rentabilité locative",
    ],
    cta: "Découvrir les opportunités",
    link: WHATSAPP_INVEST,
    accent: false,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Ce que je fais</span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Un accompagnement sur mesure,{" "}
            <span className="text-gold">quelle que soit votre situation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            Acheteur, vendeur, investisseur — chaque profil mérite une approche différente. Voici comment je travaille.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.tag}
              className={`relative rounded-lg p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.accent
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "bg-card border border-border text-foreground hover:border-gold/30"
              }`}
            >
              {/* Tag */}
              <span
                className={`inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-5 w-fit ${
                  service.accent
                    ? "bg-gold/20 text-gold"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                  service.accent ? "bg-gold/10 border border-gold/30" : "bg-gold/10 border border-gold/20"
                }`}
              >
                <service.icon size={22} className="text-gold" />
              </div>

              {/* Title */}
              <h3
                className={`font-serif text-xl font-bold mb-3 leading-snug ${
                  service.accent ? "text-white" : "text-navy"
                }`}
              >
                {service.title}
              </h3>

              {/* Desc */}
              <p
                className={`text-sm leading-relaxed mb-5 flex-1 ${
                  service.accent ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {service.desc}
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2 mb-7">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <span
                      className={`text-xs leading-relaxed ${
                        service.accent ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-semibold group transition-colors duration-150 ${
                  service.accent ? "text-gold hover:text-white" : "text-navy hover:text-gold"
                }`}
              >
                {service.cta}
                <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
