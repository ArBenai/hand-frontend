import './Uberuns.css';
import image from '../assets/nachbarshaft.avif';
import uberuns2 from '../assets/uberuns2.jpg';
import uberuns3 from '../assets/uberuns3.jpg';

const Uberuns = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">Über Hand in Hand</h1>

      {/* Section 1 - Image Left / Text Right */}
      <section className="about-section reverse">
        <div className="about-image-container">
          <img src={image} alt="Nachbarschaft" />
        </div>
        <div className="about-text-block">
          <p>
            Auf dieser Plattform können Nachbar:innen miteinander in Kontakt treten,
            Veranstaltungen entdecken, sich über Neuigkeiten austauschen und gegenseitige Hilfe anbieten.
            Gemeinsam stärken wir menschliche Beziehungen, lernen voneinander und finden Antworten
            auf Fragen des Zusammenlebens in unserem Viertel – mit der Unterstützung unserer Nachbarschaft.
          </p>
        </div>
      </section>

      {/* Section 2 - Text Left / Image Right */}
      <section className="about-section">
        <div className="about-text-block">
          <h2>Unsere Mission</h2>
          <p>
            Bei <strong>Hand in Hand</strong> glauben wir, dass Nachbarschaft mehr ist als nur eine Adresse. 
            Wir schaffen eine Plattform, auf der Menschen sich gegenseitig unterstützen, Geschenke teilen, 
            Events organisieren und echte Verbindungen aufbauen können.
          </p>
        </div>
        <div className="about-image-container2">
          <img src={uberuns2} alt="Unsere Mission" />
        </div>
      </section>

      {/* Section 3 - Text Full Width */}
      <section className="about-section full-width">
        <div className="about-image-container">
          <img src={uberuns3} alt="Nachbarschaft" />
        </div>
        <h2>Was uns antreibt</h2>
        <p>
          In einer Welt voller Hektik wollen wir einen Raum schaffen, in dem gegenseitige Hilfe, 
          Vertrauen und Menschlichkeit im Vordergrund stehen. Jeder kann etwas geben – 
          und jeder darf etwas brauchen.
        </p>
      </section>

      {/* Section 4 - Team Grid */}
      <section className="team-section">
        <h2>Wer wir sind</h2>
        <div className="team-grid">
          {[
            { name: "Rea", role: "Community & Netzwerk", img: "/images/rea.jpg" },
            { name: "Dominik", role: "Technik & Entwicklung", img: "/images/dominik.jpg" },
            { name: "Nazli", role: "Design & UX", img: "/images/nazli.jpg" },
            { name: "Dogmar", role: "Organisation & Events", img: "/images/dogmar.jpg" },
            { name: "Brian", role: "Kommunikation", img: "/images/brian.jpg" },
            { name: "Arben", role: "Marketing & Outreach", img: "/images/arben.jpg" },
          ].map((person) => (
            <div className="team-member" key={person.name}>
              <img src={person.img} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Uberuns;
