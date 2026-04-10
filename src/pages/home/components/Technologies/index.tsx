import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../../data/portfolio/portfolio-data';
import { styles } from './styles';

const GROUP_ORDER = ['Languages', 'Frameworks', 'Databases', 'Cloud', 'Tools'];

export const Technologies = () => {
  const { t } = useTranslation();

  const groups = GROUP_ORDER.map((group) => ({
    group,
    skills: portfolioData.skills.filter((s) => s.group === group),
  })).filter((g) => g.skills.length > 0);

  return (
    <section id="technologies" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('technologies.title')}</h2>

        <div className={styles.groups}>
          {groups.map(({ group, skills }) => (
            <div key={group}>
              <h3 className={styles.groupTitle}>{group}</h3>

              <div className={styles.grid}>
                {skills.map((skill, index) => (
                  <div key={`${group}-${index}`} className={styles.skill}>
                    <div className={styles.iconWrapper}>
                      <img
                        src={`/${skill.image}`}
                        alt={skill.name}
                        className={styles.icon}
                        loading="lazy"
                      />
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
