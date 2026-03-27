import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import photo1 from '@/assets/photo_1.jpg';
import photo5 from '@/assets/photo_5.jpg';
import photo9 from '@/assets/photo_9.jpg';
import photo10 from '@/assets/photo_10.jpg';
import photo16 from '@/assets/photo_16.jpg';
import photo57 from '@/assets/photo_57.jpg';
import photo61 from '@/assets/photo_61.jpg';
import photo67 from '@/assets/photo_67.jpg';

type Category = 'all' | 'gear' | 'cnc' | 'mechanical';

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'gear', label: 'Gear Design' },
  { key: 'cnc', label: 'CNC Machining' },
  { key: 'mechanical', label: 'Mechanical Design' },
];

const projects = [
  {
    title: 'Spiral Bevel Gear Manufacturing',
    desc: 'Design and production of high-precision spiral bevel gears for industrial power transmission systems using advanced CAM strategies.',
    tools: ['SolidWorks', 'GearTeq', 'HSMWorks'],
    image: photo57,
    category: 'gear' as Category,
  },
  {
    title: 'Spur & Helical Gear Production',
    desc: 'Complete gear train design including spur and helical gears for gearbox assemblies with optimized tooth profiles.',
    tools: ['KISSsoft', 'SolidWorks', 'CNC Milling'],
    image: photo1,
    category: 'gear' as Category,
  },
  {
    title: 'Impeller & Turbine Disc Machining',
    desc: 'Multi-axis CNC machining of complex impeller geometries and turbine disc components for fluid dynamics applications.',
    tools: ['HSMWorks', 'SolidWorks', '5-Axis CNC'],
    image: photo5,
    category: 'cnc' as Category,
  },
  {
    title: 'Precision Shaft Manufacturing',
    desc: 'CNC turning and milling of precision shafts with tight tolerances for mechanical assemblies and rotating equipment.',
    tools: ['Mastercam', 'CNC Lathe', 'CMM Inspection'],
    image: photo9,
    category: 'cnc' as Category,
  },
  {
    title: 'Differential Gear Assembly',
    desc: 'Design and manufacture of differential gear assemblies including bevel gear sets for automotive and industrial applications.',
    tools: ['SolidWorks', 'GearTeq', 'HSMWorks'],
    image: photo67,
    category: 'gear' as Category,
  },
  {
    title: 'Custom Flange & Coupling Components',
    desc: 'Precision machining of custom flanges and coupling components for piping systems and mechanical connections.',
    tools: ['AutoCAD', 'CNC Milling', 'SolidWorks'],
    image: photo16,
    category: 'mechanical' as Category,
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Category>('all');
  const { ref, isVisible } = useScrollAnimation();

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === c.key
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: 'Space Grotesk' }}>{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
