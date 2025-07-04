import styles from "@/styles/Projects.module.scss";
import { FaGithub, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    "title": "Sim Finance",
    "description": "Sito sviluppato come tool per ottenere una simulazione fino alla pensione in base alla propria situazione economica",
    "image": "/images/projects/logo6.png",
    "link": "https://simfinance.streamlit.app/",
    "languages": ["Python"],
    "year": "2025",
    "github": "https://github.com/DennisTurco/SimFinance"
  },
  {
    "title": "Remind Me",
    "description": "Questo programma, con una moderna interfaccia grafica personalizzata, ti consente di programmare promemoria ricorrenti. Offre una grafica elegante e contemporanea, dallo stile raffinato ma allo stesso tempo amichevole.",
    "image": "/images/projects/logo5.png",
    "link": "https://dennis-turco.itch.io/remind-me",
    "languages": ["Java"],
    "year": "2025",
    "github": "https://github.com/DennisTurco/RemindMe"
  },
  {
    "title": "Fusa & Caffè",
    "description": "Sito web dinamico sviluppato in Next.js per permettere all'attività Fusa & Caffè di mostrare il proprio magico posto per bere un buon caffè in compagnia dei gatti.",
    "image": "https://www.fusacafe.it/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75",
    "link": "https://fusacafe.it/",
    "languages": ["Typescript, SCSS"],
    "year": "2025",
    "github": "https://github.com/DennisTurco/FusaCafe"
  },
  {
    "title": "Backup Manager",
    "description": "Questo programma con una moderna interfaccia grafica ti consente di eseguire automaticamente il backup di cartelle e sottocartelle.",
    "image": "/images/projects/logo3.webp",
    "link": "https://github.com/DennisTurco/BackupManager",
    "languages": ["Java"],
    "year": "2022 - 2025",
    "github": "https://github.com/DennisTurco/AutoBackupProgram"
  },
  {
    "title": "Google Calendar Data Manager",
    "description": "Questo programma, con una semplice interfaccia grafica, ti permette di gestire gli eventi di Google Calendar in modo efficace.",
    "image": "/images/projects/logo2.png",
    "link": "https://github.com/DennisTurco/Calendar-Data-Manager",
    "languages": ["Python"],
    "year": "2023 - 2024",
    "github": "https://github.com/DennisTurco/Calendar-Data-Manager"
  },
  {
    "title": "Imparare Facile",
    "description": "Sito web dedicato alla pubblicazione di documentazione finalizzata a spiegare concetti di programmazione e matematica in modo chiaro e conciso.",
    "image": "/images/projects/logo1.png",
    "link": "https://dennisturco.github.io/ImparareFacile/",
    "languages": ["HTML", "CSS"],
    "year": "2022 - 2024",
    "github": "https://github.com/DennisTurco/ImparareFacile"
  },
  {
    "title": "Minesweeper Game",
    "description": "Classico gioco del Campo Minato realizzato in Java.",
    "image": "/images/projects/logo4.webp",
    "link": "https://github.com/DennisTurco/Minesweeper-Game",
    "languages": ["Java"],
    "year": "2022",
    "github": "https://github.com/DennisTurco/Minesweeper-Game"
  }

];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}> <i className="material-icons" title="career">terminal</i> Progetti Principali</h2>
      <div className={styles.container}>
        {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className={styles.image} />
          </a>
          <div className={styles.content}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <div className={styles.details}>
              <span>📅 {project.year}</span>
              <span>🖥️ {project.languages.join(", ")}</span>
            </div>
            {/* Pulsante GitHub */}
            <div className={styles.buttonsContainer}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteButton}
                aria-label={`Vai alla repository GitHub di ${project.title}`}
              >
                <FaGithub style={{ marginRight: '6px' }} />
                GitHub
              </a>
            )}
            {project.link && project.link !== project.github && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteButton}
                aria-label={`Vai al sito/app di ${project.title}`}
              >
                <FaGlobe style={{ marginRight: '6px' }} />
                Sito
              </a>
            )}
          </div>
          </div>
        </div>
      ))}
      </div>
      <p className={styles.attribution}>
        Sono mostrati solo alcuni progetti. Per vedere la lista completa visitare{" "}
        <a
          href="https://github.com/DennisTurco?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
