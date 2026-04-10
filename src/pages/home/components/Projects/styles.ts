export const styles = {
  section: 'py-24 bg-neutral-900',
  container: 'container mx-auto px-8',
  title: 'text-xs uppercase tracking-[0.3em] text-primary-100 font-light mb-12 max-w-7xl mx-auto',
  filters: 'flex flex-wrap justify-start gap-3 mb-12 max-w-7xl mx-auto',
  filterActive: 'px-5 py-2 text-xs uppercase tracking-[0.15em] font-light transition-all bg-primary-50 text-neutral-950',
  filterInactive: 'px-5 py-2 text-xs uppercase tracking-[0.15em] font-light transition-all text-primary-100 hover:text-primary-50 border border-neutral-700',
  grid: 'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  empty: 'text-center py-12',
  emptyText: 'text-neutral-400 text-sm font-light',
} as const;
