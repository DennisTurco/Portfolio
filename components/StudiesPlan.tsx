import { useState } from "react";
import { CheckCircle } from "lucide-react";
import styles from "../styles/StudyPlan.module.scss";

interface Exam {
  year: string;
  subjects: string[];
}

const exams: Exam[] = [
  {
    year: "Anno 1",
    subjects: [
      "Architettura degli Elaboratori",
      "Fondamenti di Programmazione A",
      "Analisi 1",
      "Fisica Generale",
      "Fondamenti di Programmazione B",
      "Algebra e Geometria",
      "Algoritmi e Strutture Dati",
      "Inglese B1",
    ],
  },
  {
    year: "Anno 2",
    subjects: [
      "Sistemi Operativi",
      "Sistemi Informativi",
      "Elementi di Probabilità",
      "Basi di Dati",
      "Calcolo Numerico",
      "Fondamenti dell'Informatica",
      "Laboratorio di Algoritmi e Strutture Dati",
      "Metodologie di Programmazione",
      "Amministrazione di Sistemi IT e Cloud",
    ],
  },
  {
    year: "Anno 3",
    subjects: [
      "Chimica",
      "Ingegneria Del Software",
      "Reti di Calcolatori",
      "LaTeX",
      "Sistemi Informativi e Gestione d'Impresa",
      "Intelligenza Artificiale",
      "Programmazione Parallela e HPC",
      "Prova Finale (Tesi)",
      "Tirocinio",
    ],
  },
];

export default function StudyPlan() {
  const [activeTab, setActiveTab] = useState<string>("Anno 1");

  return (
    <>
      {/* Sezione superiore */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <i className="material-icons" title="education">school</i> Educazione
        </h2>
        <div className={styles.diploma}>
        <a href="/doc/diploma.pdf" title="degree" target="_blank">
          <strong>Diploma delle superiori</strong>

            <i className="material-icons">file_download</i>
          </a>
        </div>
      </div>

      {/* Card con gli esami */}
      <div className={styles.studyPlan}>
        <h2 className={styles.subtitle}>Esami Universitari</h2>

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

        {/* Contenuto */}
        {exams.map(({ year, subjects }) => (
          <div key={year} className={`${styles.tabContent} ${activeTab === year ? styles.active : ""}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Esame</th>
                  <th>Completato</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={subject} className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
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
}
