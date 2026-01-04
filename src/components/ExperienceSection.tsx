import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'Metatron Cube Software Solutions',
    period: 'June 2025 – Present',
    description: [
      'Contributed to software development tasks involving web technologies',
      'Assisted in building and maintaining real-world application features',
      'Gained hands-on experience with collaborative development workflows',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">
            <span className="text-primary code-font text-xl font-normal mr-2">05.</span>
            Internships
          </h2>
          <p className="section-subheading">Where I've worked</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className="pl-8">
                    <div className="card-glass rounded-xl p-6 hover-lift">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="text-primary" size={18} />
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                      </div>
                      <p className="text-primary code-font text-sm mb-1">{exp.company}</p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
