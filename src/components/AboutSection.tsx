import { Code2, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">
            <span className="text-primary code-font text-xl font-normal mr-2">01.</span>
            About Me
          </h2>
          <p className="section-subheading">Get to know me better</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-glass rounded-xl p-6 hover-lift">
              <Code2 className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Developer</h3>
              <p className="text-muted-foreground text-sm">
                Building reliable, well-structured software solutions
              </p>
            </div>
            <div className="card-glass rounded-xl p-6 hover-lift">
              <Lightbulb className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground text-sm">
                Tackling optimization and real-world challenges
              </p>
            </div>
            <div className="card-glass rounded-xl p-6 hover-lift">
              <Rocket className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Researcher</h3>
              <p className="text-muted-foreground text-sm">
                Exploring AI, blockchain, and edge computing
              </p>
            </div>
          </div>
          
          <div className="card-glass rounded-xl p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hello! I'm Adwaitha S, a B.Tech Computer Science and Engineering student 
              with a passion for designing and building reliable, well-structured software 
              solutions. My focus is on clarity, usability, and real-world relevance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I have hands-on experience in diverse domains including embedded systems, 
              blockchain development, edge computing, and machine learning. From building 
              gyroscope-based controllers to implementing genetic algorithms and smart 
              contracts, I enjoy tackling challenging problems across the technology stack.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
