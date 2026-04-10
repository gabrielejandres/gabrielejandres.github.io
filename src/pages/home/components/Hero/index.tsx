import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../../data/portfolio/portfolio-data';
import { styles } from './styles';

export const Hero = () => {
  const { t } = useTranslation();
  const [firstName = '', lastName = ''] = portfolioData.main.name.split(' ');

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.subtitle}>{t('header.description')}</p>

            <h1 className={styles.title}>
              {firstName}
              <br />
              <span className={styles.lastName}>
                {lastName}
                <span className={styles.dot}>.</span>
              </span>
            </h1>

            <div className={styles.divider} />

            <div className={styles.cta}>
              <a
                href={portfolioData.main.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                GitHub
              </a>
              <a
                href={`mailto:${portfolioData.main.email}`}
                className={styles.secondaryButton}
              >
                {t('about.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
