import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio/portfolio-data';
import { ArrowLeftIcon, ExternalLinkIcon } from '../../icons';
import { styles } from './styles';

export const ProjectDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const projectIndex = parseInt(id || '0', 10);
  const project = portfolioData.portfolio.projects[projectIndex];
  const description = project?.descriptionKey
    ? t(`portfolio.descriptions.${project.descriptionKey}`)
    : project?.description;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/#projects" className={styles.backLink}>
          <ArrowLeftIcon className={styles.backIcon} />
          Back
        </Link>

        <div className={styles.inner}>
          <div className={styles.headerBlock}>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              {project.year && <span className={styles.year}>{project.year}</span>}
            </div>

            <h1 className={styles.title}>{project.title}</h1>

            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={`/${project.image}`}
              alt={`${project.title}`}
              className={styles.image}
              loading="lazy"
            />
          </div>

          {project.technologies && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Technologies</h2>
              <div className={styles.techList}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Details</h2>
            <p className={styles.detailText}>
              {description ||
                'This project showcases modern design principles and clean implementation.'}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewProjectLink}
              >
                View
                <ExternalLinkIcon className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
