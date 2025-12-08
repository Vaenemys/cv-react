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
          {start} – {end}
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
          {start} – {end}
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
            <p className="cv-title">Consultant Cybersécurité</p>
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
              Diplômé d’un Bac+5 en informatique spécialité cybersécurité et doté d’un an d’expérience professionnelle,
              je possède un large panel de compétences technique couvrant la sécurité, le développement et l’administration réseau. Polyvalent et rigoureux,
              j’interviens sur le durcissement, l’audit, le développement et le maintien en conditions de sécurité d’infrastructures, de logiciel et de sites web,
              afin de garantir leur disponibilité, leur confidentialité et leur intégrité. 
            </p>
          </section>

          <section className="section-card" aria-label="Compétences">
            <SectionTitle>Compétences</SectionTitle>
            <div className="skills-grid">
              <div>
                <h3>Techniques</h3>
                <ul>
                  <li>Réseau, TCP/UDP, HTTP, Kerberos, CISCO</li>
                  <li>Python, JS, PHP, C, C#, Cobol</li>
                  <li>Linux (Kali, Ubuntu, Exegol), Active Directory</li>
                  <li>OSINT, Stéganographie, Cryptanalyse</li>
                </ul>
              </div>
              <div>
                <h3>Outils</h3>
                <ul>
                  <li>Burp Suite, SQLMap, Nikto, Owasp ZAP</li>
                  <li>Wireshark, Bloodhound</li>
                  <li>Hashcat, John the Ripper</li>
                  <li>Git, Docker, Kubernetes</li>
                </ul>
              </div>
              <div>
                <h3>Soft skills</h3>
                <ul>
                  <li>Adaptabilité</li>
                  <li>A l'écoute des autres</li>
                  <li>Autonomie</li>
                  <li>Aisanse écrite</li>
                  <li>Sensibilité émotionnelle</li>
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
                "Prestation chez Euro-Information (groupe Crédit Mutuel)",
                "Développement d'applications en C# et Oracle",
                "Gestion de flux interbancaire",
              ]}
            />

            <ExperienceItem
              title="Stage développeur Fullstack"
              company="Marine Nationale"
              location="Base Navale Toulon"
              start="2023"
              bullets={[
                "Laravel, PostgreSQL, Apache Superset",
                "Traitement de données confidentielles et sensible",
                "Création appilcation web pour convertir un fichier Excel en infographie",
              ]}
            />

            <ExperienceItem
              title="Architecte réseau Freelance"
              company="Paris Ynov Campus"
              location="Nanterre"
              start="2022"
              end="2023"
              bullets={[
                "Conception et création d'une architecture réseau complète",
                "Mise en place sécurisation réseau (Segmentation, Pare Feu, Honeypot)",
              ]}
            />  

            <ExperienceItem
              title="Stage consultant Cybersécurité"
              company="Insight Signals"
              location="Paris"
              start="2021"
              bullets={[
                "Réalisation d'un audit de sécurité complet du logiciel en développement",
                "Etude et mise en place de solutions d'amélioration du réseau de l'entreprise",
              ]}
            />
          </section>

          <section className="section-card" aria-label="Formation">
            <SectionTitle>Formation</SectionTitle>
            <EducationItem
              degree="Realisation de challenge et CTF autodidacte"
              school="Root-Me"
              location="Remote"
              start="2025"
                bullets={[
                "Participation à divers CTF dans l'année",
                "Réalisation de challenges sur le thème de la cybersécurité (1010 points)",
              ]}
            />

            <EducationItem
              degree="Concepteur Developpeur Mainframe"
              school="Estiac Agile Concept"
              location="Noisy le Grand"
              start="2024"
                bullets={[
                "Analyse et développement sur véritable mainframe",
                "Création et gestion base de données sur mainframe",
              ]}
            />

            <EducationItem
              degree="Master Expert Informaituqe et Systèmes d'Information"
              school="Ynov Informatique Ingesup"
              location="Nanterre"
              start="2019"
              end="2023"
                bullets={[
                "Titre RNCP niveau 7 enregistré à France Compétences",
                "Formation généraliste d'informatique sur les deux premières années",
                "Spécialisation cybersécurité, mise en place audit, pentest et gouvernance",
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
              Voyages culturels, Musique, Series et films en VO, Soin animalier, Jeu vidéo compétitif, Jeux de cartes
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
