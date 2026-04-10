export const styles = {
  section: 'py-24 bg-neutral-900',
  container: 'container mx-auto px-8',
  title: 'text-xs uppercase tracking-[0.3em] text-primary-100 font-light mb-16 max-w-6xl mx-auto',
  groups: 'max-w-6xl mx-auto space-y-16',
  groupTitle: 'text-sm font-semibold text-primary-50 mb-8 tracking-tight',
  grid: 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8',
  skill: 'flex flex-col items-center gap-3 group',
  iconWrapper: 'w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform',
  icon: 'w-8 h-8 object-contain',
  skillName: 'text-[11px] text-primary-100 font-light text-center',
} as const;
