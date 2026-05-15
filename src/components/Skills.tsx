import { motion } from 'motion/react';

const skills = [
  { name: 'MySQL', percentage: 90 },
  { name: 'Python', percentage: 85 },
  { name: 'Problem Solving', percentage: 78 },
  { name: 'C Programming', percentage: 75 },
  { name: 'Data Science', percentage: 60 },
  { name: 'Machine Learning', percentage: 65 },
  { name: 'Javascript', percentage: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Label */}
          <div className="md:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 flex items-center sticky top-32 text-sage-600">
              <span className="w-4 h-[1px] bg-sage-600 mr-2"></span> Core Expertise
            </h2>
          </div>

          <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
            {skills.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, index }: { skill: typeof skills[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-2">
        <h4 className="text-[11px] font-bold italic tracking-wider text-sage-600 uppercase">
          {skill.name}
        </h4>
        <span className="text-[10px] font-mono text-sage-300 font-bold">{skill.percentage}%</span>
      </div>
      <div className="h-[1px] bg-sage-600/10 w-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-sage-600"
        />
      </div>
    </motion.div>
  );
}
