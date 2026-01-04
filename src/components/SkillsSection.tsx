const skills = {
  'Programming Languages': ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  'Web Development': ['HTML', 'CSS', 'React', 'Flask', 'Dart / Flutter'],
  'AI / ML': ['scikit-learn', 'NumPy', 'Pandas'],
  'Tools': ['GitHub', 'VS Code', 'Hardhat', 'Ganache'],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">
            <span className="text-primary code-font text-xl font-normal mr-2">02.</span>
            Tech Stack
          </h2>
          <p className="section-subheading">Technologies I work with</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card-glass rounded-xl p-6 hover-lift">
                <h3 className="text-primary code-font text-sm mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary px-3 py-1 rounded-full text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
