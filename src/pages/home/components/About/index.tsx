import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../../data/portfolio/portfolio-data';
import { styles } from './styles';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{t('about.title')}</h2>

          <div className={styles.grid}>
            <div className="shrink-0">
              <img
                src={`/${portfolioData.main.image}`}
                alt={`${portfolioData.main.name}`}
                className={styles.photo}
              />
            </div>
            <p className={styles.bio}>{t('about.bio')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
