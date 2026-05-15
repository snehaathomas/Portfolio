import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Instagram, Twitter, Send } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-beige-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Label */}
          <div className="md:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 flex items-center sticky top-32 text-sage-600">
              <span className="w-4 h-[1px] bg-sage-600 mr-2"></span> Connection
            </h2>
          </div>

          <div className="md:col-span-6 space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-sage-600 leading-[0.9]"
            >
              Have a <span className="italic font-normal">vision</span>? <br />
              Let’s <span className="text-sage-400">build</span> it.
            </motion.h2>

            <div className="space-y-6 pt-12">
              <a href="mailto:snehathomasoff13@gmail.com" className="group block text-xl md:text-2xl font-serif italic text-sage-600 hover:text-sage-400 transition-all border-b border-sage-100 pb-4">
                snehathomasoff13@gmail.com
              </a>
              <a href="tel:+917358603399" className="group block text-xl md:text-2xl font-serif italic text-sage-600 hover:text-sage-400 transition-all border-b border-sage-100 pb-4">
                +91 7358603399
              </a>
            </div>

            <div className="flex gap-10 pt-8 uppercase text-[10px] tracking-[0.2em] font-bold text-sage-400">
               <a href="https://www.linkedin.com/in/snehathomas13" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 transition-colors">LinkedIn</a>
               <a href="https://github.com/snehaathomas" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 transition-colors">GitHub</a>
               <a href="#" className="hover:text-sage-600 transition-colors">Instagram</a>
               <a href="#" className="hover:text-sage-600 transition-colors">X / Twitter</a>
            </div>
          </div>

          <div className="md:col-span-4 bg-sage-50/50 p-10 rounded-[40px] border border-sage-100">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-extrabold text-sage-300">Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-sage-100 py-2 text-sm focus:outline-none focus:border-sage-600 transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-extrabold text-sage-300">Email</label>
                  <input type="email" placeholder="Your email" className="w-full bg-transparent border-b border-sage-100 py-2 text-sm focus:outline-none focus:border-sage-600 transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-extrabold text-sage-300">Message</label>
                  <textarea rows={3} placeholder="Your vision" className="w-full bg-transparent border-b border-sage-100 py-2 text-sm focus:outline-none focus:border-sage-600 transition-all resize-none"></textarea>
               </div>
               <button className="bg-sage-600 text-beige-50 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-sage-500 transition-all">
                 Inquire
               </button>
            </form>
          </div>
        </div>

        <footer className="mt-40 pt-10 border-t border-sage-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-sage-300">Sneha Thomas &copy; 2026 — All Rights Reserved</span>
           <div className="flex gap-10">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-sage-300">Chennai, TN</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-sage-400">Available Oct 2026</span>
           </div>
        </footer>
      </div>
    </section>
  );
}
