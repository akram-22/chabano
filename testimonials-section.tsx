import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Karim B.",
    role: "Acheteur — F3 Centre-Ville",
    text: "J'ai cherché pendant 6 mois sur les portails sans rien trouver de sérieux. Chabane m'a trouvé mon appartement en 3 semaines, avec une vidéo qui m'a convaincu avant même la visite. Efficace et professionnel.",
    stars: 5,
    avatar: "K",
  },
  {
    name: "Samira O.",
    role: "Vendeuse — Bir El Djir",
    text: "Mon appartement était sur le marché depuis 4 mois. Après la vidéo de Chabane, j'ai reçu 3 offres sérieuses en une semaine. Je n'aurais pas cru que la présentation faisait autant la différence.",
    stars: 5,
    avatar: "S",
  },
  {
    name: "Mourad L.",
    role: "Investisseur — Portefeuille locatif",
    text: "Je travaille avec Chabane depuis 2 ans pour mes investissements à Oran. Il connaît le marché mieux que personne et m'a orienté vers des biens avec un excellent rendement locatif. Partenaire de confiance.",
    stars: 5,
    avatar: "M",
  },
]

const results = [
  { value: "48h", label: "Délai moyen de premier contact" },
  { value: "94%", label: "Taux de satisfaction client" },
  { value: "3×", label: "Plus vite qu'une agence classique" },
  { value: "100+", label: "Biens traités à Oran" },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Ils témoignent</span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Des résultats concrets,{" "}
            <span className="text-gold">pas des promesses</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            Voici ce que disent les clients qui ont fait confiance à Chabano Properties.
          </p>
        </div>

        {/* Results bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {results.map((r) => (
            <div
              key={r.label}
              className="text-center bg-card border border-border rounded-lg py-6 px-4 hover:border-gold/30 transition-colors duration-200"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">{r.value}</div>
              <div className="text-muted-foreground text-xs leading-tight text-pretty">{r.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-lg p-6 flex flex-col hover:shadow-lg hover:border-gold/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={13} fill="var(--gold)" className="text-gold" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-gold/30 mb-3" />

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 text-pretty italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-navy text-white font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof badge */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Créateur de contenu UGC certifié</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
            <Star size={13} fill="var(--gold)" className="text-gold" />
            <span className="text-sm text-muted-foreground font-medium">5/5 sur les avis clients</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
            <span className="text-sm text-muted-foreground font-medium">Expert immobilier Oran depuis 2019</span>
          </div>
        </div>
      </div>
    </section>
  )
}
