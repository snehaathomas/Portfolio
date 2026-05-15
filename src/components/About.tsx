import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-beige-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Label */}
          <div className="md:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 flex items-center sticky top-32 text-sage-600">
              <span className="w-4 h-[1px] bg-sage-600 mr-2"></span> Biography
            </h2>
          </div>

          {/* Main Content */}
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic leading-tight text-sage-600 mb-8"
            >
              Solving complex problems with data-driven intelligence.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-sage-600/80 leading-relaxed text-sm text-justify max-w-xl"
            >
              <p>
                First-year B.Tech student in Artificial Intelligence and Data Science at Saveetha Engineering College with hands-on experience in Python and MySQL. I have worked on data-driven and database-backed applications, gaining practical exposure to backend logic, CRUD operations, and problem-solving.
              </p>
              <p>
                I am keen to explore AI and data science concepts, build real-world solutions, and gain industry experience through projects and internships. My career goal is to become a skilled technology professional in AI/data science or software engineering.
              </p>

              {/* Stats Row */}
              <div className="pt-8 flex justify-between border-t border-sage-100">
                <div className="text-center">
                  <div className="font-serif text-4xl text-sage-600">10+</div>
                  <div className="text-[9px] uppercase tracking-tighter font-bold text-sage-400">Projects</div>
                </div>
                <div className="text-center border-l border-r border-sage-100 px-8">
                  <div className="font-serif text-4xl text-sage-600">03</div>
                  <div className="text-[9px] uppercase tracking-tighter font-bold text-sage-400">Certs</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl text-sage-600">9.3</div>
                  <div className="text-[9px] uppercase tracking-tighter font-bold text-sage-400">CGPA</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detail Columns */}
          <div className="md:col-span-4 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-sage-50 rounded-3xl"
            >
              <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-sage-300 mb-4 flex justify-between items-center">
                Current Focus <span className="w-1.5 h-1.5 rounded-full bg-sage-600"></span>
              </h3>
              <p className="text-xs text-sage-600 leading-relaxed italic opacity-70">
                Building a solid academic and technical foundation while exploring real-world problem solving and discovering my career direction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-8 border border-sage-100 rounded-3xl"
            >
              <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-sage-300 mb-6 flex justify-between items-center">
                Interests <span className="w-1.5 h-1.5 rounded-full bg-sage-600"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Crocheting', 'Travelling', 'Music', 'Sports'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white border border-sage-100 rounded-full text-[9px] uppercase tracking-widest font-bold text-sage-600">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
