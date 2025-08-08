'use client';
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import styles from "../styles/StudyPlan.module.scss";

type StudiesPlanProps = {
  dictionary: {
    education: {
      title: string;
      diploma: string;
      exams: {
        title: string;
        examcolumn: string;
        statuscolumn: string;
        year1: string[];
        year2: string[];
        year3: string[];
      };
    };
  };
};

type ExamYear = {
  year: string;
  subjects: string[];
};

const StudyPlan = ({ dictionary }: StudiesPlanProps) => {
  const t = dictionary.education;
  const [activeTab, setActiveTab] = useState<string>("Year 1");

  // Prepare exam years data for easier mapping
  const exams: ExamYear[] = [
    { year: "Year 1", subjects: t.exams.year1 },
    { year: "Year 2", subjects: t.exams.year2 },
    { year: "Year 3", subjects: t.exams.year3 },
  ];

  return (
    <>
      {/* Header section */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <i className="material-icons" title="education">
            school
          </i>{" "}
          {t.title}
        </h2>
        <div className={styles.diploma}>
          <a href="/doc/diploma.pdf" title="degree" target="_blank" rel="noopener noreferrer">
            <strong>{t.diploma}</strong>{" "}
            <i className="material-icons" aria-label="Download diploma file">
              file_download
            </i>
          </a>
        </div>
      </div>

      {/* Exams card */}
      <div className={styles.studyPlan}>
        <h2 className={styles.subtitle}>{t.exams.title}</h2>

        {/* Tabs */}
        <div className={styles.tabs}>
          {exams.map(({ year }) => (
            <button
              key={year}
              className={`${styles.tabButton} ${activeTab === year ? styles.active : ""}`}
              onClick={() => setActiveTab(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {exams.map(({ year, subjects }) => (
          <div
            key={year}
            className={`${styles.tabContent} ${activeTab === year ? styles.active : ""}`}
          >
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t.exams.examcolumn}</th>
                  <th>{t.exams.statuscolumn}</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr
                    key={subject}
                    className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
                  >
                    <td>{subject}</td>
                    <td className={styles.checkIcon}>
                      <CheckCircle size={24} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudyPlan;
