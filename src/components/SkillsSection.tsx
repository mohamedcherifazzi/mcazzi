import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';
import { Pencil, Monitor, Code } from 'lucide-react';

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const skillGroups = [
    { icon: Pencil, title: t('skills_design'), skills: [{ name: 'SolidWorks', level: 90 }, { name: 'AutoCAD', level: 40 }, { name: 'Creo Parametric', level: 40 }] },
    { icon: Monitor, title: t('skills_cam'), skills: [{ name: 'HSMWorks', level: 85 }, { name: 'GearTeq', level: 85 }, { name: 'Mastercam', level: 50 }] },
    { icon: Code, title: t('skills_software'), skills: [{ name: 'Microsoft Office', level: 80 }, { name: 'KISSsoft', level: 50 }] },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            {t('skills_title_1')} <span className="text-gradient">{t('skills_title_2')}</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map(g => (
            <div key={g.title} className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10"><g.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-semibold text-lg text-foreground" style={{ fontFamily: 'Space Grotesk' }}>{g.title}</h3>
              </div>
              {g.skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} visible={isVisible} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
