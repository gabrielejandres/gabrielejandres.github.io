import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../../data/portfolio/portfolio-data';
import { ProjectCard } from '../../../../components';
import { useState } from 'react';
import { styles } from './styles';

const CATEGORIES = ['All', 'Web', 'App', 'UI/UX'];

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.portfolio.projects
      : portfolioData.portfolio.projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('portfolio.title')}</h2>

        <div className={styles.filters}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? styles.filterActive : styles.filterInactive}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => {
            const originalIndex = portfolioData.portfolio.projects.findIndex(
              (p) => p.title === project.title
            );
            return (
              <ProjectCard key={index} project={project} index={originalIndex} />
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.empty}>
            <p className={styles.emptyText}>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
