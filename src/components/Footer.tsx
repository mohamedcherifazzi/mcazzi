import { Cog, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground font-bold" style={{ fontFamily: 'Space Grotesk' }}>
          <Cog className="h-5 w-5 text-accent" />
          <span>Azzi Mohamed Cherif</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a href="mailto:mcazzi.prod@gmail.com" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
