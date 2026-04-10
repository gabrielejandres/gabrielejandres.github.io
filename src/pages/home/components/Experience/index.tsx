import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '../../../../icons';
import { styles } from './styles';
import type { ExperienceItem, GroupedEntry } from './types';

const groupByEntity = (data: ExperienceItem[]): GroupedEntry[] => {
  const groups: GroupedEntry[] = [];

  for (const item of data) {
    const label = item.company || item.school || '';
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && label && lastGroup.label === label) {
      lastGroup.items.push(item);
    } else {
      groups.push({ label, items: [item] });
    }
  }

  return groups;
};

const getDateParts = (value?: string) => {
  if (!value) return { start: '', end: '' };
  const normalized = value.replace('–', '-');
  const [start = '', end = ''] = normalized.split('-').map((part) => part.trim());
  return { start, end };
};

export const Experience = () => {
  const { t } = useTranslation();
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderItem = (item: ExperienceItem, showEntity: boolean, skipHeader = false) => (
    <>
      {showEntity && (item.company || item.school) && (
        <h4 className={styles.entityTitle}>{item.company || item.school}</h4>
      )}

      {!skipHeader && (
        <p className={styles.roleTitle}>{item.title || item.degree}</p>
      )}

      {!skipHeader && (
        <p className={styles.date}>{item.years || item.graduated || item.date}</p>
      )}

      {item.description && Array.isArray(item.description) && (
        <ul className={styles.descriptionList}>
          {item.description.map((desc, i) => (
            <li key={i} className={styles.descriptionItem}>
              <span className={styles.dash}>&mdash;</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}

      {item.dispatcher && (
        <p className={styles.dispatcher}>by {item.dispatcher}</p>
      )}
    </>
  );

  const renderSection = (sectionKey: string) => {
    const section = t(`resume.${sectionKey}`, { returnObjects: true }) as {
      title: string;
      data: ExperienceItem[];
    };

    if (!section || !section.data || !Array.isArray(section.data)) {
      return null;
    }

    const groups = groupByEntity(section.data);

    return (
      <div key={sectionKey} className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>{section.title}</h3>

        <div className={styles.groupList}>
          {groups.map((group, gIndex) => {
            const accordionKey = `${sectionKey}-${gIndex}`;
            const isOpen = !!openAccordions[accordionKey];
            const firstItem = group.items[0];
            const lastItem = group.items[group.items.length - 1];
            const summaryTitle =
              group.label || firstItem?.title || firstItem?.degree || 'Entry';
            const summarySubtitle =
              group.items.length === 1
                ? firstItem?.title || firstItem?.degree
                : `${group.items.length} roles`;
            const firstDateValue =
              firstItem?.years || firstItem?.graduated || firstItem?.date;
            const lastDateValue =
              lastItem?.years || lastItem?.graduated || lastItem?.date;
            const firstDateParts = getDateParts(firstDateValue);
            const lastDateParts = getDateParts(lastDateValue);
            const groupedStart = lastDateParts.start || lastDateValue || '';
            const groupedEnd = firstDateParts.end || firstDateValue || '';
            const summaryDate =
              group.items.length > 1
                ? groupedStart && groupedEnd
                  ? `${groupedStart} - ${groupedEnd}`
                  : groupedStart || groupedEnd
                : firstDateValue;

            return (
              <div key={gIndex} className={styles.groupCard}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(accordionKey)}
                  className={styles.accordionButton}
                  aria-expanded={isOpen}
                >
                  <div className={styles.accordionHeader}>
                    <div>
                      <h4 className={styles.entityTitle}>{summaryTitle}</h4>
                      {summarySubtitle && summarySubtitle !== summaryTitle && (
                        <p className={styles.roleTitleSummary}>{summarySubtitle}</p>
                      )}
                      {summaryDate && (
                        <p className={styles.dateSummary}>{summaryDate}</p>
                      )}
                    </div>
                    <ChevronDownIcon className={isOpen ? styles.chevronOpen : styles.chevron} />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.expandedContent}>
                    {group.items.length === 1 ? (
                      <div>{renderItem(group.items[0], false, true)}</div>
                    ) : (
                      group.items.map((item, iIndex) => (
                        <div key={iIndex}>{renderItem(item, false)}</div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {renderSection('work')}
          {renderSection('volunteering')}
          {renderSection('education')}
        </div>
      </div>
    </section>
  );
};
