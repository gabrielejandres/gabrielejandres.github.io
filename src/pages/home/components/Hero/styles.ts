export const styles = {
  section: 'min-h-screen flex items-center bg-neutral-900 text-neutral-100 pt-24',
  container: 'container mx-auto px-8',
  layout: 'flex justify-start',
  content: 'w-full max-w-4xl flex flex-col justify-center',
  subtitle: 'text-xs uppercase tracking-[0.3em] text-primary-100 mb-6 font-light',
  title: 'text-6xl md:text-8xl font-bold text-primary-50 leading-[0.9] tracking-tight mb-8',
  lastName: 'font-light italic inline-flex items-end',
  dot: 'not-italic font-semibold ml-1',
  divider: 'w-16 h-px bg-primary-50 mb-8',
  cta: 'flex flex-wrap gap-4',
  primaryButton: 'min-w-[140px] px-8 py-4 text-xs uppercase tracking-[0.3em] bg-primary-50 text-neutral-950 border border-neutral-800 text-center transition-colors hover:bg-neutral-700',
  secondaryButton: 'min-w-[140px] px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-50 border border-primary-50 text-center transition-colors hover:bg-neutral-800/40',
} as const;
