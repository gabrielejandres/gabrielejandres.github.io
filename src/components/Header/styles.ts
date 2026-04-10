export const styles = {
  header: 'fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm',
  nav: 'container mx-auto px-8 py-5',
  logoLink: 'text-xl font-bold text-primary-50 hover:opacity-70 transition-opacity tracking-tight',
  logoText: 'font-handwritten tracking-wide',
  desktopNav: 'hidden md:flex items-center gap-10',
  navButton: 'text-primary-100 hover:text-primary-50 transition-colors text-xs uppercase tracking-widest font-light',
  mobileMenuButton: 'md:hidden text-primary-50',
  mobileNav: 'md:hidden mt-6 pb-4 flex flex-col gap-5',
  mobileNavButton: 'text-primary-100 hover:text-primary-50 transition-colors text-left text-xs uppercase tracking-widest font-light',
  mobileDivider: 'pt-4 border-t border-white/10',
} as const;
