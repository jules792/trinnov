import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Film, House, Menu, SlidersHorizontal } from "lucide-react";

const universes = [
  { index: "01", title: "Home Cinéma", copy: "L’émotion du cinéma. La liberté d’être chez soi.", href: "https://www.trinnov.com/fr/solutions/home-cinema/", icon: House },
  { index: "02", title: "Hi-Fi", copy: "Retrouver la musique. Écouter chaque intention.", href: "https://www.trinnov.com/fr/solutions/hi-fi/", icon: AudioLines },
  { index: "03", title: "Audio professionnel", copy: "Une écoute de référence, au cœur de la création.", href: "https://www.trinnov.com/fr/solutions/audio-professionnel/", icon: SlidersHorizontal },
  { index: "04", title: "Cinéma", copy: "Une expérience collective. Un son à grande échelle.", href: "https://www.trinnov.com/fr/solutions/cinema/", icon: Film },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Trinnov — accueil">
          <img src="/images/trinnov-logo.png" alt="" width="32" height="42" />
          <span>TRINNOV</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#univers">Nos univers</a>
          <a href="#technologie">Technologie</a>
          <a href="https://www.trinnov.com/fr/produits/">Produits</a>
        </nav>
        <div className="header-actions">
          <a className="dealer-link" href="https://www.trinnov.com/fr/trouver-un-revendeur/">Trouver un revendeur <ArrowUpRight size={15} /></a>
          <details className="mobile-menu">
            <summary aria-label="Ouvrir le menu"><Menu size={22} /><span className="sr-only">Menu</span></summary>
            <nav aria-label="Navigation mobile">
              <a href="#univers">Nos univers</a>
              <a href="#technologie">Technologie</a>
              <a href="https://www.trinnov.com/fr/produits/">Produits</a>
              <a href="https://www.trinnov.com/fr/trouver-un-revendeur/">Trouver un revendeur</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-media" aria-hidden="true"><img src="/images/waveforming.png" alt="" /></div>
          <div className="hero-content">
            <p className="eyebrow">La précision au service de l’émotion</p>
            <h1>Le son.<br />Dans toute sa<br /><em>dimension.</em></h1>
            <p className="hero-copy">Quand la technologie s’efface,<br />l’émotion prend toute la place.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#univers">Explorer nos univers <ArrowRight size={17} /></a>
              <a className="text-link" href="#technologie">L’approche Trinnov <ArrowDown size={16} /></a>
            </div>
          </div>
          <div className="hero-foot"><span>Faire défiler</span><span>01 / L’immersion / WaveForming</span></div>
        </section>

        <section className="universes" id="univers">
          <div className="section-intro">
            <div><p className="eyebrow dark">02 — Vos univers</p><h2>Une passion.<br /><span>Quatre façons de l’écouter.</span></h2></div>
            <p>De l’intimité d’un salon à l’exigence d’un studio, nous révélons le potentiel de chaque espace d’écoute.</p>
          </div>
          <div className="universe-grid">
            {universes.map(({ index, title, copy, href, icon: Icon }) => (
              <a className="universe-card" href={href} key={title}>
                <span className="card-top"><Icon size={25} strokeWidth={1.4} /><small>{index}</small></span>
                <span className="card-copy"><strong>{title}</strong><span>{copy}</span></span>
                <span className="card-arrow"><ArrowUpRight size={19} /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="technology" id="technologie">
          <div className="tech-heading">
            <p className="eyebrow">03 — La technologie</p>
            <h2>Chaque détail<br /><span>retrouve sa place.</span></h2>
            <p>Correction acoustique. Son immersif. Une rencontre précise entre la pièce, les enceintes et l’auditeur.</p>
          </div>
          <figure className="product-visual"><img src="/images/nova.jpg" alt="Processeur audio Trinnov NOVA vu de face et de dos" loading="lazy" /><figcaption>NOVA — plateforme de traitement audio</figcaption></figure>
          <div className="product-copy">
            <div><span>NOVA</span><h3>Votre écoute<br />de référence.</h3></div>
            <p>Une architecture pensée pour les environnements professionnels les plus exigeants, dans un format compact et évolutif.</p>
            <a className="button button-outline" href="https://www.trinnov.com/fr/produits/nova/">Découvrir NOVA <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="invitation">
          <p className="eyebrow dark">Écouter autrement</p>
          <h2>À vous de ressentir<br />la différence.</h2>
          <a className="button button-dark" href="https://www.trinnov.com/fr/trouver-un-revendeur/">Trouver un revendeur <ArrowRight size={17} /></a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#accueil"><img src="/images/trinnov-logo.png" alt="" width="30" height="40" /><span>TRINNOV</span></a>
        <p>L’écoute. L’espace. L’émotion.</p>
        <div><a href="https://www.trinnov.com/fr/contact/">Contact</a><a href="https://www.trinnov.com/fr/politique-de-confidentialite/">Confidentialité</a></div>
        <small>Prototype de page d’accueil non officiel, réalisé à des fins de démonstration.</small>
      </footer>
    </>
  );
}
