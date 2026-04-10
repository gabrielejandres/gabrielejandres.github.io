export const styles = {
  card: 'group relative overflow-hidden bg-neutral-800 transition-all duration-300 hover:opacity-90',
  imageWrapper: 'aspect-video relative overflow-hidden',
  image: 'w-full h-full object-cover transition-all duration-500',
  imageOverlay: 'absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent',
  body: 'p-6',
  meta: 'flex items-center justify-between mb-3',
  category: 'text-[10px] uppercase tracking-[0.2em] text-primary-100 font-light',
  year: 'text-[10px] uppercase tracking-[0.15em] text-neutral-400',
  title: 'text-lg font-semibold text-primary-50 mb-2 tracking-tight',
  description: 'text-sm text-primary-100 font-light line-clamp-2 mb-4 leading-relaxed',
  techList: 'flex flex-wrap gap-2 mb-4',
  techTag: 'text-[10px] uppercase tracking-[0.1em] text-neutral-400 font-light',
} as const;
