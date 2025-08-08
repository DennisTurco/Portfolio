import styles from "@/styles/Projects.module.scss";
import { FaGithub, FaGlobe } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string | ((url: string) => string);
  languages: string[];
  year: string;
  github: string;
};

type ProjectsProps = {
  dictionary: {
    projects: {
      title: string,
      note: string,
      simfinance: Project,
      remindme: Project,
      fusaecaffe: Project,
      backupmanager: Project,
      calendardatamanager: Project,
      impararefacile: Project,
      minesweeper: Project,
    }
  }
};

function isProject(value: any): value is Project {
  return (
    value &&
    typeof value === 'object' &&
    'title' in value &&
    'link' in value &&
    (typeof value.link === 'string' || typeof value.link === 'function')
  );
}

export default function Projects({ dictionary }: ProjectsProps) {
  const t = dictionary.projects;
  const projectsArray = Object.entries(t)
  .filter(([key, value]) => key !== "title" && key !== "note" && isProject(value))
  .map(([, project]) => {
    const link = typeof project.link === 'function' ? project.link('') : project.link;
    return { ...project, link }; // Now `link` is always string here
  });


  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>
        <i className="material-icons" title="career">terminal</i>{t.title}
      </h2>
      <div className={styles.container}>
        {projectsArray.map((project, index) => (
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
        {t.note}{" "}
        <a
          href="https://github.com/DennisTurco?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>
    </section>
  );
}
