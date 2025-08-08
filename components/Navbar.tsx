import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" title="home">
            <i className="material-icons">home</i>
          </Link>
        </li>
        <li>
          <Link href="/carriera" title="career">
            <i className="material-icons">work</i>
          </Link>
        </li>
        <li>
          <Link href="/progetti" title="projects">
            <i className="material-icons">terminal</i>
          </Link>
        </li>
        <li>
          <Link href="/servizi" title="services">
            <i className="material-icons">build</i>
          </Link>
        </li>

        <li id="school">
          <Link href="/studi" title="education">
            <i className="material-icons">school</i>
          </Link>
        </li>

        <li className={styles.right}>
          <Link href="mailto:dennisturco@gmail.com" title="contattami">
            <i className="material-icons">email</i>
          </Link>
          <LangSwitcher />
        </li>
      </ul>

      <div className={styles.overlay}></div>
    </nav>
  );
};

export default Navbar;
