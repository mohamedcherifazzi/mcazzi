import { ArrowDown, FolderOpen, Mail, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Cog className="absolute -top-20 -right-20 h-80 w-80 text-primary/5 animate-[spin_20s_linear_infinite]" />
        <Cog className="absolute -bottom-16 -left-16 h-60 w-60 text-accent/5 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
          {t('hero_badge')}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk' }}>
          {t('hero_title_1')}{' '}
          <span className="text-gradient">{t('hero_title_2')}</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero_desc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#projects">
              <FolderOpen className="mr-2 h-5 w-5" />
              {t('view_projects')}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-border hover:bg-secondary">
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              {t('contact_me')}
            </a>
          </Button>
        </div>

        <a href="#about" className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
