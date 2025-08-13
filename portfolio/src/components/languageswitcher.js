import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const LANGS = [
  { code: "en", label: "English", flag: process.env.PUBLIC_URL + "/images/united-kingdom.png" },
  { code: "fi", label: "Suomi",   flag: process.env.PUBLIC_URL + "/images/finland.png" },
];
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState(i18n.language || "en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
    setCurrent(saved || i18n.language || "en");
  }, [i18n]);

  const change = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setCurrent(code);
  };

  return (
    <div className="langswitch">
      {LANGS.map(l => (
        <button
          key={l.code}
          type="button"
          onClick={() => change(l.code)}
          className={`lang-btn ${current === l.code ? "active" : ""}`}
          aria-pressed={current === l.code}
        >
          <img src={l.flag} alt={l.label} className="flag-icon" />
          <span className="label">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
