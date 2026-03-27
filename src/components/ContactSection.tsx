import { Mail, Phone, MapPin, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mcazzi.prod@gmail.com', href: 'mailto:mcazzi.prod@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+213 798 575 603', href: 'tel:+213798575603' },
  { icon: MapPin, label: 'Location', value: 'Mostaganem, Algeria', href: '#' },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Interested in working together or have a project in mind? Feel free to reach out — I'd love to discuss how I can help.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/CV_Azzi_Mohamed_Cherif.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Contact Form (visual) */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <Input placeholder="Your name" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="flex w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
