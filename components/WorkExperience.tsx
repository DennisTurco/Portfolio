'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/WorkExperience.module.scss";
import Image from "next/image";

type WorkExperienceProps = {
  dictionary: {
    work: {
      title: string;
      cv: string;
      cisita: string;
      work_animatore: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_consegne: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_universita: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_superprof: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_personalizzalo: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_insegnantecoordinatore: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_tirocinio: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      },
      work_isolutions: {
        title: string,
        location: string,
        description: string,
        year: string,
        duration: string
      }
    };
  };
};

const ExperienceSection = ({ dictionary }: WorkExperienceProps) => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const t = dictionary.work;

  const experiences = [
    t.work_isolutions,
    t.work_tirocinio,
    t.work_insegnantecoordinatore,
    t.work_personalizzalo,
    t.work_superprof,
    t.work_universita,
    t.work_consegne,
    t.work_animatore,
  ];

  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>
        <i className="material-icons" title="career">work</i> {t.title}
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
        <a href="/doc/curriculum.pdf" title={t.cv} target="_blank" rel="noopener noreferrer">
          <strong>{t.cv}</strong>
          <i className="material-icons">file_download</i>
        </a>
      </div>

      <div className={styles.cv}>
        <a href="/doc/cisita.pdf" title={t.cisita} target="_blank" rel="noopener noreferrer">
          <strong>{t.cisita}</strong>
          <i className="material-icons">file_download</i>
        </a>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.timelineItem}
            data-aos="fade-up"
          >
            <div className={styles.date}>
              <span className={styles.year}>{exp.year}</span>
              <span className={styles.duration}>{exp.duration}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.position}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.location}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

