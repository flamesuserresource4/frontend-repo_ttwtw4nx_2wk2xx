import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#252633] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group bg-[#2E333F] rounded-2xl overflow-hidden border border-white/10 hover:border-[#ffb32c]/60 shadow-xl/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transform hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-white/80 text-sm mb-4">{p.description}</p>
                <a
                  href={p.url}
                  className="inline-block px-4 py-2 rounded-full bg-[#ffb32c] text-black font-semibold shadow hover:shadow-[0_0_20px_rgba(255,179,44,0.5)] transition-shadow duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
