import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Gyroscope-based Movement Controller (STM32F4)',
    description: 'Designed a gyroscope-based movement controller using STM32F4. Captured real-time orientation data and translated hand gestures into control signals.',
    tech: ['STM32F4', 'Embedded C', 'Gyroscope', 'Hardware'],
    github: 'https://github.com/Srividya-Manikandan/Gyroscope-based-Movement-Controller-STM32F4-',
  },
  {
    title: 'GA-Based Solution for 0/1 Knapsack Problem',
    description: 'Implemented a Genetic Algorithm to solve the 0/1 Knapsack optimization problem. Exported generation-wise results to Excel and visualized performance trends.',
    tech: ['Python', 'Genetic Algorithm', 'Excel', 'Optimization'],
    github: 'https://github.com/Srividya-Manikandan/0-1-Knapsack-GA',
  },
  {
    title: 'ValueCentric – Blockchain Supply Chain Tracking',
    description: 'Developed Solidity smart contracts to record and verify supply-chain events. Demonstrated functionality using Ganache, CLI tools, and Hardhat.',
    tech: ['Solidity', 'Blockchain', 'Hardhat', 'Ganache'],
    github: 'https://github.com/Srividya-Manikandan/Valuecentric',
  },
  {
    title: 'SmartPKU – Edge–Fog Simulation',
    description: 'Built an iFogSim-based edge–fog simulation with two-level threshold detection for real-time Phenylalanine monitoring. Implemented dietary alerts and emergency triggers.',
    tech: ['iFogSim', 'Edge Computing', 'Java', 'IoT'],
    github: 'https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-30_404-brain-not-found/tree/main',
  },
  {
    title: 'Habit Tracker Application',
    description: 'Developed a personal habit tracking application to monitor daily routines and consistency. Focused on clean UI design and simple progress tracking.',
    tech: ['React', 'JavaScript', 'CSS', 'UI/UX'],
    github: 'https://github.com/Adwaitha31/habittracker-web',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            <span className="text-primary code-font text-xl font-normal mr-2">03.</span>
            Projects
          </h2>
          <p className="section-subheading">Things I've built</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 hover-lift group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs code-font text-muted-foreground"
                    >
                      {tech}
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

export default ProjectsSection;
