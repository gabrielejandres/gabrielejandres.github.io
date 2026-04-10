import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../../data/portfolio/types';
import { ChevronDownIcon } from '../../icons';
import { styles } from './styles';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.trigger}
        aria-label="Select language"
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon className={isOpen ? styles.chevronOpen : styles.chevron} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className="flex flex-col">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`${styles.option} ${
                  i18n.language === lang.code ? styles.optionActive : styles.optionInactive
                }`}
                aria-label={`Switch to ${lang.label}`}
              >
                <span className={styles.optionFlag}>{lang.flag}</span>
                <span className={styles.optionLabel}>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
