import { Cog, Cpu, Wrench, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const expertise = [
  { icon: Cog, title: 'Gear Manufacturing', desc: 'Spiral bevel, spur & helical gear design and production' },
  { icon: Cpu, title: 'CNC Programming', desc: 'Multi-axis CNC machining with HSMWorks & Mastercam' },
  { icon: Wrench, title: 'Mechanical Design', desc: 'Complete product design with SolidWorks & Creo Parametric' },
  { icon: Zap, title: 'Switchgear Design', desc: 'Medium & low voltage switchgear cabin design' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Azzi Mohamed Cherif</span>, a Mechanical Engineer
              with expertise in gear manufacturing, CNC programming, and mechanical systems design. I hold a State
              Engineer and Master's degree from the National Polytechnic School of Oran.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With professional experience across industrial design, switchgear engineering, and precision machining,
              I bring complex mechanical concepts to life — from CAD modeling to final production.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
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
