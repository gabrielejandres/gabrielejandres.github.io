import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';
import { CloseIcon, MenuIcon } from '../../icons';
import { styles } from './styles';
import type { HeaderProps } from './types';

const NAV_ITEMS = [
  { key: 'home', section: 'hero' },
  { key: 'about', section: 'about' },
  { key: 'experience', section: 'experience' },
  { key: 'projects', section: 'projects' },
  { key: 'technologies', section: 'technologies' },
];

export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="flex items-center justify-between">
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoText}>GJ</span>
          </Link>

          <div className={styles.desktopNav}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className={styles.navButton}
              >
                {t(`header.${item.key}`)}
              </button>
            ))}
            <LanguageSwitch />
            <ThemeSwitch isDark={isDark} onToggle={onToggleTheme} />
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className={styles.mobileNavButton}
              >
                {t(`header.${item.key}`)}
              </button>
            ))}
            <div className={styles.mobileDivider}>
              <LanguageSwitch />
              <div className="mt-3">
                <ThemeSwitch isDark={isDark} onToggle={onToggleTheme} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
