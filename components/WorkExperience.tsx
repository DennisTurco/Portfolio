import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/WorkExperience.module.scss";
import Image from "next/image";

const experiences = [
  {
    title: "Sviluppatore Software",
    company: "ISolutions (Noceto)",
    duration: "In corso",
    year: "2023 - Presente",
    description: "Attualmente impiegato a tempo pieno come Sviluppatore Software.",
  },
  {
    title: "Tirocinante Web Developer",
    company: "Tirocinio Universitario",
    duration: "90 giorni",
    year: "2023",
    description:
      "Sviluppata un'applicazione web .NET MVC 6.0 utilizzando C#, SQL, HTML, CSS e JavaScript.",
  },
  {
    title: "Insegnante e Coordinatore",
    company: "Associazione di Fidenza",
    duration: "6 mesi",
    year: "2021/22",
    description:
      "Lavorato part-time come insegnante in un doposcuola, conducendo attività educative.",
  },
  {
    title: "Tirocinante Web Designer",
    company: "Azienda di Piacenza",
    duration: "2 settimane",
    year: "2021",
    description:
      "Lavorato come Front-End Developer durante un tirocinio a tempo pieno.",
  },
  {
    title: "Insegnante Privato",
    company: "SuperProf",
    duration: "In corso",
    year: "2021 - Presente",
    description:
      "Fornisco lezioni private di Matematica e Programmazione.",
  },
  {
    title: "Università",
    company: "Università di Parma",
    duration: "3 anni",
    year: "2020 - 2023",
    description:
      "Laureato in Informatica con un punteggio di 100/110.",
  },
  {
    title: "Ragazzo delle Consegne",
    company: "Pizzeria (Fidenza)",
    duration: "1 anno e 6 mesi",
    year: "2020/21",
    description: "Lavorato su chiamata come addetto alle consegne.",
  },
  {
    title: "Animatore Centro Estivo",
    company: "Fornio (PR)",
    duration: "1 mese",
    year: "2019",
    description: "Lavorato a tempo pieno come animatore presso un centro estivo.",
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.experienceSection} id="experience">
      {/* Titolo della sezione con icona */}
      <h2 className={styles.title}>
        <i className="material-icons" title="career">work</i> Carriera
      </h2>

      <div className={styles.avatarWrapper}>
        <Image
          src="/images/action_figure.png" 
          alt="Action Figure"
          width={400}
          height={500}
          className={styles.avatar}
        />
      </div>

      <div className={styles.cv}>
          <a href="/doc/curriculum.pdf" title="curriculum" target="_blank">
            <strong>Curriculum Vitae (ultima modifica 2025)</strong>
            <i className="material-icons">file_download</i>
          </a>
      </div>

      <div className={styles.cv}>
          <a href="/doc/cisita.pdf" title="attestato" target="_blank">
            <strong>Attestato Cisita 2024</strong>
            <i className="material-icons">file_download</i>
          </a>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.timelineItem}
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className={styles.date}>
              <span className={styles.year}>{exp.year}</span>
              <span className={styles.duration}>{exp.duration}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.position}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
