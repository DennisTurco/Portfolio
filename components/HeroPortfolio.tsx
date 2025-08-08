import styles from "../styles/HeroPortfolio.module.scss";
import Image from "next/image";
import Link from "next/link";

type HeroPortfolioProps = {
  dictionary: {
    hero: {
      whoami: string;
      intro1: string;
      intro2: string;
      education: string;
      passion: string;
      team: string;
      career: string;
      projects: string;
      services: string;
      study: string;
      contact: string;
    };
  };
};

const HeroPortfolio = ({ dictionary }: HeroPortfolioProps) => {

  const t = dictionary.hero;

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left side: photo and name */}
        <div className={styles.left} data-aos="fade-right" data-aos-duration="800">
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photo.webp"
              alt="Profilo"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </div>
          <h1 className={styles.name}>Dennis Turco</h1>
        </div>

        {/* Right side: description */}
        <div className={styles.right} data-aos="fade-left" data-aos-duration="800">
          <h2 className={styles.title}>
            <i className="material-icons" title={t.whoami}>fingerprint</i> {t.whoami}
          </h2>

          <p className={styles.description}>{t.intro1}</p>
          <p className={styles.description}>{t.intro2}</p>
          <p className={styles.description}>{t.education}<br />{t.passion}<br />{t.team}</p>

          <section className={styles.divider}></section>

          <div className={styles.buttonGroup}>
            <Link href="/carriera" className={styles.button}>{t.career}</Link>
            <Link href="/progetti" className={styles.button}>{t.projects}</Link>
            <Link href="/servizi" className={styles.button}>{t.services}</Link>
            <Link href="/studi" className={styles.button}>{t.study}</Link>
            <Link href="mailto:dennisturco@gmail.com" target="_blank" className={styles.button}>{t.contact}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
