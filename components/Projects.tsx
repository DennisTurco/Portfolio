import styles from "@/styles/Projects.module.scss";
import Image from "next/image";

const projects = [
  {
    "title": "Fusa & Caffè",
    "description": "Sito web dinamico sviluppato in Next.js per permettere all'attività Fusa & Caffè di mostrare il proprio magico posto per bere un buon caffè in compagnia dei gatti.",
    "image": "https://www.fusacafe.it/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75",
    "link": "https://www.fusacafe.it/",
    "languages": ["Typescript, SCSS"],
    "year": "2025"
  },
  {
    "title": "Backup Manager",
    "description": "Questo programma con una moderna interfaccia grafica ti consente di eseguire automaticamente il backup di cartelle e sottocartelle.",
    "image": "/images/projects/logo3.webp",
    "link": "https://github.com/DennisTurco/BackupManager",
    "languages": ["Java"],
    "year": "2022 - 2025"
  },
  {
    "title": "Google Calendar Data Manager",
    "description": "Questo programma, con una semplice interfaccia grafica, ti permette di gestire gli eventi di Google Calendar in modo efficace.",
    "image": "/images/projects/logo2.webp",
    "link": "https://github.com/DennisTurco/Calendar-Data-Manager",
    "languages": ["Python"],
    "year": "2023 - 2024"
  },
  {
    "title": "Imparare Facile",
    "description": "Sito web dedicato alla pubblicazione di documentazione finalizzata a spiegare concetti di programmazione e matematica in modo chiaro e conciso.",
    "image": "/images/projects/logo1.webp",
    "link": "https://github.com/DennisTurco/ImparareFacile",
    "languages": ["HTML", "CSS"],
    "year": "2022 - 2024"
  },
  {
    "title": "Minesweeper Game",
    "description": "Classico gioco del Campo Minato realizzato in Java.",
    "image": "/images/projects/logo4.webp",
    "link": "https://github.com/DennisTurco/Minesweeper-Game",
    "languages": ["Java"],
    "year": "2022"
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
            <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className={styles.image}
            />
            </div>
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
