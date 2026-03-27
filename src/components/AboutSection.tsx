import { Cog, Cpu, Wrench, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const expertise = [
    { icon: Cog, title: t('expertise_gear'), desc: t('expertise_gear_desc') },
    { icon: Cpu, title: t('expertise_cnc'), desc: t('expertise_cnc_desc') },
    { icon: Wrench, title: t('expertise_design'), desc: t('expertise_design_desc') },
    { icon: Zap, title: t('expertise_switch'), desc: t('expertise_switch_desc') },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            {t('about_title_1')} <span className="text-gradient">{t('about_title_2')}</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('about_p1')}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">{t('about_p2')}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group">
                <item.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
