import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const projects = [
  {
    title: 'Restaurant Website',
    description: 'A responsive restaurant website designed to showcase menu items, services, and customer engagement through a clean and modern web interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/snehaathomas/WebsiteRestaurant_Exp6.git',
    live: '#'
  },
  {
    title: 'Employee Salary Prediction',
    description: 'A machine learning project that predicts employee salaries using the Decision Tree Regressor algorithm by analyzing relevant employee data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/snehaathomas/Implementation-of-Decision-Tree-Regressor-Model-for-Predicting-the-Salary-of-the-Employee.git',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Label */}
          <div className="md:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 flex items-center sticky top-32 text-sage-600">
              <span className="w-4 h-[1px] bg-sage-600 mr-2"></span> Selected Work
            </h2>
          </div>

          <div className="md:col-span-10 space-y-32">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="group relative overflow-hidden rounded-3xl bg-sage-50 aspect-video md:aspect-[4/5] max-h-[500px]">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-sage-600/0 group-hover:bg-sage-600/10 transition-colors duration-500" />
                  </div>
                </div>

                <div className="pt-4 space-y-10">
                  <div className="space-y-4 border-b border-sage-100 pb-8">
                    <div className="flex justify-between items-center">
                       <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 2).map(t => (
                            <span key={t} className="text-[9px] uppercase tracking-[0.2em] font-bold text-sage-300">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-[9px] font-mono text-sage-300 font-bold">2024 / CASE STUDY</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-sage-600 italic leading-none">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sage-600/70 text-sm leading-loose max-w-sm">
                    {project.description}
                  </p>

                  <div className="flex gap-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest font-bold text-sage-600 border-b border-sage-600 pb-1 hover:text-sage-400 hover:border-sage-400 transition-all"
                    >
                      View Source code
                    </a>
                    {project.live !== '#' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-widest font-bold text-sage-600 border-b border-sage-600 pb-1 hover:text-sage-400 hover:border-sage-400 transition-all"
                      >
                        Live Experience
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
