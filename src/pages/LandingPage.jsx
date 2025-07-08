import ImageCarousel from '../components/ImageCarousel';
import './LandingPage.css';
import React from 'react';

import landingphoto1 from '../assets/landingphoto/landingphoto1.png';
import landingphoto2 from '../assets/landingphoto/landingphoto2.png';
import landingphoto3 from '../assets/landingphoto/landingphoto3.png';
import landingphoto4 from '../assets/landingphoto/landingphoto4.png';
import landingphoto5 from '../assets/landingphoto/landingphoto5.avif'

const landingphoto = [
  landingphoto1,
  landingphoto2,
  landingphoto3,
  landingphoto4,
  landingphoto5,
];

function LandingPage() {
  return (
    <div className="landing-container">
      <ImageCarousel images={landingphoto} />
      <section className="landing-content">
        <h1>Willkommen in Hand in Hand</h1>
        <p>Gemeinsam in der Nachbarschaft helfen und verbunden bleiben.</p>
        <div className="cta-buttons">
          <a href="./Register" className="btn primary">Jetzt Registieren</a>
          <a href="./Uberuns" className="btn secondary">Über uns</a>
        </div>
{/* Events */}
<section id="events" className="section-block section-colored">
  <h2>🎉 Events in deiner Nähe</h2>
  <img src={landingphoto1} alt="nachbarschafts-event" />
  <p>Entdecke lokale Veranstaltungen und triff Nachbarn.</p>
  <a href="./Events" className="btn primary">Alle Events</a>
</section>

      <section id="verschenke" className="section-block">
        <h2>🎁 Verschenke & Tausche</h2>
        <img src={landingphoto2} alt="verschenke-event" />
        <p>Gib Dingen ein zweites Leben – verschenke oder tausche mit Nachbarn.</p>
        <a href="./Exchange" className="btn primary">Angebote ansehen</a>
      </section>

      {/* Blog */}
      <section id="blog" className="section-block section-colored">
        <h2>📝 Blog & Geschichten</h2>
        <img src={landingphoto3} alt="blog-event" />
        <p>Erfahre mehr über inspirierende Nachbarschaftsprojekte und Tipps.</p>
        <a href="./Blog" className="btn primary">Zum Blog</a>
      </section>

      {/* Ask */}
      <section id="ask" className="section-block">
        <h2>❓ Häufige Fragen</h2>
        <img src={landingphoto5} alt="faq-event" />
        <p>Du hast Fragen? Wir haben Antworten für dich gesammelt.</p>
        <a href="./Help" className="btn secondary">Häufige Fragen</a>
      </section>

     {/* {/* Hilfe */}
     {/*} <section id="hilfe" className="section-block help-bg">
        <h2>🤝 Hilfe & Unterstützung</h2>
        <img src={landingphoto4} alt="hilfe-event" />
        <p>Unsere Community steht dir bei Fragen und Anliegen zur Seite.</p>
        <p>Hier findest du Antworten auf häufige Fragen und kannst uns direkt kontaktieren.</p>
        <p>Brauchst du Hilfe oder Unterstützung? Wir sind für dich da.</p>
        <button className="btn primary">Hilfeseite öffnen</button>
      </section> */}

      </section>
    </div>
  );
}

export default LandingPage;


