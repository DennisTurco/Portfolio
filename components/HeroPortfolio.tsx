import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/HeroPortfolio.module.scss";
import Image from "next/image";
import Link from "next/link";

const HeroPortfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Sezione Sinistra: Foto e Nome */}
        <div 
          className={styles.left} 
          data-aos="fade-right" 
          data-aos-duration="800"
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photo.png"
              alt="Profilo"
              width={200} 
              height={200} 
              className={styles.profileImage}
            />
          </div>
          <h1 className={styles.name}>Dennis Turco</h1>
        </div>

        {/* Sezione Destra: Descrizione */}
        <div
          className={styles.right}
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h2 className={styles.title}> <i className="material-icons" title="chi sono">fingerprint</i> Chi sono</h2>

          <p className={styles.description}>
            Ciao e benvenuto nella mia pagina web! <br />
            Sono <strong>Dennis Turco</strong>, nato il <strong>04/08/2001</strong> a Fidenza (una piccola città in provincia di Parma, Italia), dove attualmente risiedo.
          </p>

          <p className={styles.description}>
            Sono laureato in <strong>Informatica</strong> presso l&apos;<strong>Università di Parma</strong>. 
            <br/> 
            Ho una grande passione per la tecnologia e una costante voglia di imparare ed esplorare nuove sfide.
            <br/>
            Amo lavorare in team, ma sono anche perfettamente in grado di lavorare in autonomia.
          </p>


          <section className={styles.divider}></section>

          {/* Bottoni di navigazione */}
          <div className={styles.buttonGroup}>
            <Link href="/carriera" className={styles.button}>Carriera</Link>
            <Link href="/progetti" className={styles.button}>Progetti</Link>
            <Link href="/servizi" className={styles.button}>Servizi</Link>
            <Link href="/studi" className={styles.button}>Studio</Link>
            <Link href="mailto:dennisturco@gmail.com" target="_blank" className={styles.button}>CONTATTAMI</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
