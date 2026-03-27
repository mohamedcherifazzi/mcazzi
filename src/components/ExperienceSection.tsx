import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const timeline = [
    { type: 'work', title: t('exp1_title'), org: 'SARL ATAKOR CO', period: '2023 – 2025', desc: t('exp1_desc') },
    { type: 'work', title: t('exp2_title'), org: 'ÖZMERT ALGERIA', period: '2022 – 2023', desc: t('exp2_desc') },
    { type: 'work', title: t('exp3_title'), org: 'EURL MIK', period: '2021 – 2022', desc: t('exp3_desc') },
    { type: 'edu', title: t('exp4_title'), org: 'National Polytechnic School of Oran', period: '2016 – 2018', desc: t('exp4_desc') },
    { type: 'edu', title: t('exp5_title'), org: 'National Polytechnic School of Oran', period: '2015 – 2018', desc: t('exp5_desc') },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            {t('exp_title_1')} <span className="text-gradient">{t('exp_title_2')}</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-1.5 z-10" />
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'work' ? <Briefcase className="h-4 w-4 text-accent shrink-0" /> : <GraduationCap className="h-4 w-4 text-primary shrink-0" />}
                    <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm" style={{ fontFamily: 'Space Grotesk' }}>{item.title}</h3>
                  <p className="text-primary text-xs font-medium mb-2">{item.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
