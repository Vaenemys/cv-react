import React from "react";
import "./cv.css";
import html2pdf from "html2pdf.js";

const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

const ExperienceItem = ({ title, company, location, start, end, bullets }) => (
  <article className="experience-item">
    <header>
      <h3 className="experience-title">{title}</h3>
      <div className="experience-meta">
        <span className="experience-company">{company}</span>
        <span className="experience-location">{location}</span>
        <span className="experience-dates">
            {start}{end ? ` – ${end}` : ""}
        </span>
      </div>
    </header>
    <ul>
      {bullets.map((b, index) => (
        <li key={index}>{b}</li>
      ))}
    </ul>
  </article>
);

const EducationItem = ({ degree, school, location, start, end, bullets }) => (
  <article className="education-item">
    <header>
      <h3 className="education-degree">{degree}</h3>
      <div className="education-meta">
        <span className="education-school">{school}</span>
        <span className="education-location">{location}</span>
        <span className="education-dates">
            {start}{end ? ` – ${end}` : ""}
        </span>
      </div>
    </header>
<ul>
      {bullets.map((b, index) => (
        <li key={index}>{b}</li>
      ))}
    </ul>
  </article>
);

const App = () => {

const handleDownloadPDF = () => {
    const element = document.getElementById("cv-root");

   if (!element) {
    console.error("CV root not found");
    return;
  }

  const options = {
    margin: [8, 8, 8, 8], // marges en mm (haut, droite, bas, gauche)
    filename: "CV_Adrien.pdf",

    image: { type: "jpeg", quality: 0.98 },

    html2canvas: {
      scale: 2,            // qualité nette
      useCORS: true,
      scrollY: 0,
      windowWidth: 1200    // évite les bugs de largeur
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },

    pagebreak: {
      mode: ["avoid-all", "css", "legacy"]
    }
  };

    html2pdf().set(options).from(element).save();
  };


  return (
    <div className="cv-page">
       <div className="cv-actions">
        <button className="print-button" onClick={handleDownloadPDF}>
          Télécharger en PDF
        </button>
      </div>
      <div className="cv-container" id="cv-root">
        {/* CARTOUCHE EN TÊTE */}
        <header className="cv-header-box">
          <div>
            <h1 className="cv-name">Adrien Sanches</h1>
            <p className="cv-title">Analyste Cybersécurité (SOC / Sécurité opérationnelle)</p>
          </div>

          {/* CONTACT AVEC ICONES CLIQUABLES */}
         <div className="cv-header-icons-text">

            {/* LIGNE 1 — icônes + texte NON cliquables */}
            <div className="info-item">
              <img src="/icons/location.png" alt="" className="info-icon" />
              <span>Corbeil Essonnes, France</span>
            </div>

            <div className="info-item">
              <img src="/icons/email.png" alt="" className="info-icon" />
              <span>adrien.sanches91@gmail.com</span>
            </div>

            <div className="info-item">
              <img src="/icons/phone.png" alt="" className="info-icon" />
              <span>06.17.53.64.26</span>
            </div>

            <div className="info-item">
              <span>Permis A</span>
            </div>

          </div>
          <div className="cv-header-icons-only">
              {/* LIGNE 2 — icônes CLIQUABLES */}
              <a className="icon-only" href="https://github.com/Vaenemys" target="_blank" rel="noreferrer">
                <img src="/icons/github.png" alt="GitHub" />
              </a>

              <a className="icon-only" href="https://www.linkedin.com/in/adriensanches/" target="_blank" rel="noreferrer">
                <img src="/icons/linkedin.png" alt="LinkedIn" />
              </a>

              <a className="icon-only" href="https://www.root-me.org/Vaene-617505?lang=fr#32ef9b9f67e5df4164ac54c168299911" target="_blank" rel="noreferrer">
                <img src="/icons/rootme.png" alt="Root-Me" />
              </a>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="cv-main">
          <section className="section-card" aria-label="Profil">
            <SectionTitle>Profil</SectionTitle>
            <p>
              Analyste cybersécurité junior spécialisé en sécurité opérationnelle et analyse réseau.
              Expérience en audit de sécurité, analyse de trafic, investigation Active Directory et
              détection de vulnérabilités applicatives.
              À l’aise à l’écrit comme à l’oral, avec une pratique régulière de la rédaction de livrables
              et de la vulgarisation de sujets cybersécurité.
              Habitué aux environnements professionnels sensibles (banque, défense), rigoureux,
              adaptable et orienté vers l'amélioration continue de la sécurité des systèmes d’information.
            </p>
          </section>

          <section className="section-card" aria-label="Compétences">
            <SectionTitle>Compétences</SectionTitle>
            <div className="skills-grid">
              <div>
                <h3>Sécurité opérationnelle</h3>
                <ul>
                  <li>Analyse de trafic réseau</li>
                  <li>Investigation Active Directory</li>
                  <li>Identification de vulnérabilités et durcissement d’infrastructures</li>
                  <li>Outils : Wireshark, Bloodhound, Metasploit</li>
                </ul>
              </div>

              <div>
                <h3>Sécurité applicative</h3>
                <ul>
                  <li>Tests d’intrusion web</li>
                  <li>Analyse de failles</li>
                  <li>Outils : Burp Suite, OWASP ZAP, John the Ripper, Hashcat, SQLMap, Nikto</li>
                </ul>
              </div>

              <div>
                <h3>Environnements & systèmes</h3>
                <ul>
                  <li>Linux (Kali, Exegol, Raspberry Pi), Windows Server</li>
                  <li>Protocoles TCP/UDP, HTTP(S), Kerberos</li>
                  <li>Bonnes bases en Python, C, C#, PHP et SQL</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            className="section-card"
            aria-label="Expérience professionnelle"
          >
            <SectionTitle>Expérience professionnelle</SectionTitle>

            <ExperienceItem
              title="Analyste Développeur"
              company="Sardel Conseil"
              location="Fontenay Sous Bois"
              start="2024"
              end="2025"
              bullets={[
                "Mission en environnement bancaire (Euro-Information, Crédit Mutuel)",
                "Développement applicatif en prenant en compte les contraintes de sécurité et de conformité",
                "Gestion de flux interbancaires critiques et données sensibles",
              ]}
            />

            <ExperienceItem
              title="Stage développeur Fullstack"
              company="Marine Nationale"
              location="Base Navale Toulon"
              start="2023"
              bullets={[
                "Utilisation des technologies Laravel, PostgreSQL et Apache Superset",
                "Développement d'une application interne dans un environnement institutionnel",
                "Manipulation de données en diffusion restreinte",
              ]}
            />

            <ExperienceItem
              title="Architecte réseau Freelance"
              company="Paris Ynov Campus"
              location="Nanterre"
              start="2022"
              end="2023"
              bullets={[
                "Conception et déploiement d’une architecture réseau sécurisée",
                "Segmentation réseau, règles de pare-feu, mise en place de honeypots et de portails captifs",
                "Réduction de la surface d’attaque et détection d’activités malveillantes",
              ]}
            />  

            <ExperienceItem
              title="Stage consultant Cybersécurité"
              company="Insight Signals"
              location="Paris"
              start="2021"
              bullets={[
                "Réalisation d'un audit de sécurité complet du logiciel en cours de développement",
                "Analyse de l’architecture applicative et des flux afin d’identifier des points de vigilance",
                "Etude et mise en place de solutions d'amélioration du réseau de l'entreprise",
                "Rédaction de livrables d’audit et restitution des constats aux équipes techniques",
                "Rédaction d’un guide de sensibilisation à la cybersécurité destiné à des profils non techniques",
                "Vulgarisation des risques numériques et des bonnes pratiques de sécurité",

              ]}
            />
          </section>

          <section className="section-card" aria-label="Formation">
            <SectionTitle>Formation</SectionTitle>
            <EducationItem
              degree="Realisation de challenge et CTF en autodidacte"
              school="Root-Me/Hack The Box"
              location="Remote"
              start="2025"
                bullets={[
                "Participation à divers CTF orientés sécurité offensive et défensive",
                "Exploitation de vulnérabilités web, réseau et système",
                "Score actuel : 1010 points",
              ]}
            />

            <EducationItem
              degree="Concepteur Developpeur Mainframe"
              school="Estiac Agile Concept"
              location="Noisy le Grand"
              start="2024"
                bullets={[
                "Formation au développement sur environnement mainframe réel",
                "Découverte d’environnements informatiques à forte criticité",
                "Travail dans un cadre procédural strict et normé",
              ]}
            />

            <EducationItem
              degree="Master Expert Informatique et Systèmes d'Information"
              school="Ynov Informatique Ingesup"
              location="Nanterre"
              start="2019"
              end="2023"
                bullets={[
                "Titre RNCP niveau 7 enregistré à France Compétences",
                "Formation généraliste d'informatique sur les deux premières années",
                "Spécialisation cybersécurité, mise en place d’audits, de pentests et de gouvernance",
              ]}
            />
          </section>

          <section className="section-card" aria-label="Langues">
            <SectionTitle>Langues</SectionTitle>
            <ul>
              <li>Français — Langue maternelle</li>
              <li>Anglais — B2/C1</li>
              <li>Espagnol — B1</li>
              <li>Japonais - JLPT Niveau 1</li>
            </ul>
          </section>

          <section className="section-card" aria-label="Centres d'intérêt">
            <SectionTitle>Centres d’intérêt</SectionTitle>
            <p>
              Voyages culturels, musique, séries et films en VO, soin animalier, jeu vidéo compétitif, jeux de cartes
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
