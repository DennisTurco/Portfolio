"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/LangSwitcher.module.scss";

const LANGS = [
  { code: "it", label: "Italiano", flag: "/images//flags/ita.png" },
  { code: "en", label: "English", flag: "/images//flags/eng.png" },
];

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang =
    LANGS.find((l) => pathname.startsWith(`/${l.code}`)) || LANGS[0];

  function changeLanguage(lang: string) {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    const newPath = pathname.replace(/^\/(en|it)/, "") || "/";
    router.push(`/${lang}${newPath}`);
    setOpen(false);
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={styles.button}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className={styles.flag}
        />
      </button>

      {open && (
        <ul role="listbox" className={styles.dropdown}>
          {LANGS.filter((l) => l.code !== currentLang.code).map((lang) => (
            <li
              key={lang.code}
              role="option"
              onClick={() => changeLanguage(lang.code)}
              className={styles.option}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") changeLanguage(lang.code);
              }}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className={styles.flag}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}