import type { MouseEvent } from 'react';
import { MoonIcon, SunIcon } from '../../icons';
import { styles } from './styles';
import type { ThemeSwitchProps } from './types';

export const ThemeSwitch = ({ isDark, onToggle }: ThemeSwitchProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.button}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? (
        <SunIcon className={styles.icon} />
      ) : (
        <MoonIcon className={styles.icon} />
      )}
      <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
};
