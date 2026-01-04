import { FileText, Presentation, Clock } from 'lucide-react';

const publications = [
  {
    title: 'Empowering STEM Education Through Robotics: Tools, Applications, and Challenges',
    venue: 'Online Presentation — National Institute of Technology, Goa',
    sponsor: 'Sponsored by the Soft Computing Research Society',
    year: 'June 2025',
    description: [
      'Presented a study on the role of robotics in STEM education',
      'Analyzed instructional tools, educational applications, and implementation challenges',
    ],
    type: 'presentation',
  },
  {
    title: 'A Comparative Performance Analysis of Classical Genetic Algorithm on Solving Different 0/1 Knapsack Problem Instances',
    venue: 'Research Paper',
    year: 'Submitted',
    description: [
      'Conducted a comparative analysis of classical Genetic Algorithms across multiple 0/1 Knapsack problem instances',
      'Evaluated solution quality, convergence behavior, and computational efficiency',
    ],
    type: 'paper',
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">
            <span className="text-primary code-font text-xl font-normal mr-2">04.</span>
            Publications
          </h2>
          <p className="section-subheading">Research & Academic Work</p>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    {pub.type === 'presentation' ? (
                      <Presentation className="text-primary" size={24} />
                    ) : (
                      <FileText className="text-primary" size={24} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-primary text-sm code-font mt-1">
                      {pub.venue}
                    </p>
                    {pub.sponsor && (
                      <p className="text-muted-foreground text-xs mt-1">
                        {pub.sponsor}
                      </p>
                    )}
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-2">
                      <Clock size={14} />
                      <span>{pub.year}</span>
                    </div>
                    <ul className="mt-3 space-y-1">
                      {pub.description.map((item, i) => (
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
    </section>
  );
};

export default PublicationsSection;
