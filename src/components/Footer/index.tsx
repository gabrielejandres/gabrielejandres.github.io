import { portfolioData } from '../../data/portfolio/portfolio-data';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../../icons';
import { styles } from './styles';

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
  email: EmailIcon,
} as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} />

        <div className={styles.content}>
          <p className={styles.copyright}>
            &copy; {currentYear} {portfolioData.main.name}
          </p>

          <div className={styles.socialList}>
            {portfolioData.main.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                {(() => {
                  const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                  return Icon ? <Icon className={styles.socialIcon} /> : null;
                })()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
