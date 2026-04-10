export const styles = {
  trigger: 'flex items-center gap-2 text-primary-100 hover:text-primary-50 transition-colors text-xs uppercase tracking-[0.15em] font-light',
  flag: 'text-base',
  chevron: 'w-3 h-3 transition-transform',
  chevronOpen: 'w-3 h-3 transition-transform rotate-180',
  dropdown: 'absolute top-full right-0 mt-3 bg-neutral-800 border border-neutral-700 shadow-2xl min-w-[180px] z-50',
  option: 'flex items-center gap-3 px-4 py-3 transition-all text-xs tracking-wide',
  optionActive: 'bg-neutral-700 text-primary-50',
  optionInactive: 'text-primary-100 hover:bg-neutral-700/50',
  optionFlag: 'text-base',
  optionLabel: 'font-light',
} as const;
