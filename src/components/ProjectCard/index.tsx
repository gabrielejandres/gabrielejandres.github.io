import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import type { ProjectCardProps } from './types';

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();
  const description = project.descriptionKey
    ? t(`portfolio.descriptions.${project.descriptionKey}`)
    : project.description;

  return (
    <Link to={`/project/${index}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={`/${project.image}`}
          alt={`${project.title}`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          {project.year && <span className={styles.year}>{project.year}</span>}
        </div>

        <h3 className={styles.title}>{project.title}</h3>

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {project.technologies && (
          <div className={styles.techList}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
