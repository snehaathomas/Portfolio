import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    college: 'Saveetha Engineering College',
    degree: 'B.Tech — AI & DS',
    year: '1st Year',
    gpa: '9.3 CGPA',
    status: 'Ongoing'
  }
];

const achievements = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Hackathons', value: '1' },
  { label: 'Certifications', value: '3' }
];

export default function Timeline() {
  return (
    <section id="education" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Label */}
          <div className="md:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 flex items-center sticky top-32 text-sage-600">
              <span className="w-4 h-[1px] bg-sage-600 mr-2"></span> Curriculum
            </h2>
          </div>

          <div className="md:col-span-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Block - Dark */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sage-600 text-beige-50 p-10 md:p-16 rounded-[40px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-10 flex items-center opacity-60">
                   Education
                </h3>
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l border-beige-50/20">
                    <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-beige-50"></div>
                    <h4 className="font-serif italic text-3xl md:text-4xl mb-2">{edu.college}</h4>
                    <p className="text-[11px] uppercase tracking-widest opacity-60 mb-8">{edu.degree} • {edu.year}</p>
                    <p className="text-sm leading-relaxed opacity-70 max-w-sm">
                      Focusing on backend logic, CRUD operations, and advanced algorithms to master data architecture while maintaining a {edu.gpa}.
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid - Subtle */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-sage-100 rounded-[40px] bg-sage-50/30 flex justify-between items-center group hover:bg-sage-600 transition-colors duration-500"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage-300 group-hover:text-sage-200 transition-colors">
                    {stat.label}
                  </span>
                  <span className="text-5xl font-serif text-sage-600 group-hover:text-white transition-colors">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
