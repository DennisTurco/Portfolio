"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/LangSwitcher.module.scss";

const LANGS = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
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

  const currentLang = LANGS.find((l) => pathname.startsWith(`/${l.code}`)) || LANGS[0];

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
        <span>{currentLang.flag}</span> {currentLang.label} ▼
      </button>

      {open && (
        <ul role="listbox" tabIndex={-1} className={styles.dropdown}>
          {LANGS.filter((l) => l.code !== currentLang.code).map((lang) => (
            <li
              key={lang.code}
              role="option"
              onClick={() => changeLanguage(lang.code)}
              className={styles.option}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") changeLanguage(lang.code);
              }}
              tabIndex={0}
            >
              {lang.flag} {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
