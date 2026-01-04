import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Get In Touch
          </h2>

          <p className="section-subheading mt-4">
            I am open to learning opportunities, academic collaborations,
            and project discussions. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button
              asChild
              variant="outline"
              className="gap-2"
            >
              <a href="mailto:satheeshadwaitha@gmail.com">
                <Mail size={18} />
                Email Me
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="gap-2"
            >
              <a
                href="https://github.com/Adwaitha31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="gap-2"
            >
              <a
                href="https://linkedin.com/in/adwaitha-satheesh-2aa999367"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
