import styles from '../styles/Footer.module.scss';
import { FaMobileAlt, FaLocationArrow, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

type FooterProps = {
  dictionary: {
    footer: {
      contacts: string;
    };
  };
};

const Footer = ({ dictionary }: FooterProps) => {

  const t = dictionary.footer;

  return (
    <div id="footer-container" className={styles.footerContainer}>
      <footer className={styles.footer}>

        {/* Colonna 1 - Informazioni di contatto */}
        <div className={styles.colonna1}>
          <div className={styles.logofooter}>
            <h3 className={styles.footerHeading}>&copy; 2022 - 2025 Dennis Turco</h3>
            <hr className={styles.footerHr} />
            <p><FaMobileAlt size={18} /> +39 342 166 6192</p>
            <p><FaEnvelope size={18} /> dennisturco@gmail.com</p>
            <p><FaLocationArrow size={18} /> Fidenza</p>
          </div>
        </div>

        {/* Colonna 2 - Social e Contatti */}
        <div className={styles.colonna2}>
          <div className={styles.contactsFooter}>
            <h1 className={styles.contactsHeader}>{t.contacts}</h1>
            <div className={styles.icons}>
              <Link href="https://discordapp.com/invite/kbZVz3m" target="_blank">
                <Image src="/images/discord.svg" alt="Discord" width={50} height={50} />
              </Link>
              <Link href="https://www.linkedin.com/in/dennis-turco-751239232/" target="_blank">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={50} height={50} />
              </Link>
              <Link href="https://www.instagram.com/dennis_turco/" target="_blank">
                <Image src="/images/instagram.svg" alt="Instagram" width={50} height={50} />
              </Link>
              <Link href="https://github.com/DennisTurco" target="_blank">
                <Image src="/images/github.svg" alt="GitHub" width={50} height={50} />
              </Link>
              <Link href="mailto:dennisturco@gmail.com" target="_blank">
                <Image src="/images/mail.svg" alt="Email" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
