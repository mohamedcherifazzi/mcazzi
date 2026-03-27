import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cog, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/lib/translations';

const langLabels: Record<Language, string> = { en: 'EN', fr: 'FR', ar: 'عر' };
const langOrder: Language[] = ['en', 'fr', 'ar'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('skills'), href: '#skills' },
    { label: t('experience'), href: '#experience' },
    { label: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const cycleLang = () => {
    const idx = langOrder.indexOf(lang);
    setLang(langOrder[(idx + 1) % langOrder.length]);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-foreground font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>
            <Cog className="h-6 w-6 text-accent animate-[spin_8s_linear_infinite]" />
            <span>MCA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <Button variant="ghost" size="icon" onClick={cycleLang} className="ml-1 text-muted-foreground hover:text-primary" title="Change language">
              <span className="text-xs font-bold">{langLabels[lang]}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-primary">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={cycleLang} className="text-muted-foreground">
              <span className="text-xs font-bold">{langLabels[lang]}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
