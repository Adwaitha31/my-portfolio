import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resume from "../assets/resume.pdf";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary code-font text-sm md:text-base mb-4 animate-fade-in">
            Hi, I am
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up">
            <span className="text-gradient">Adwaitha </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 animate-slide-up delay-100">
            B.Tech Computer Science and Engineering Student
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
            I design and build reliable, well-structured software solutions with a focus on clarity, usability, and real-world relevance.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-slide-up delay-400">
            <a
              href="https://github.com/Adwaitha31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adwaitha-satheesh-2aa999367/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:satheeshadwaitha@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
