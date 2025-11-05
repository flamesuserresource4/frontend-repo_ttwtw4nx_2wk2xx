import { motion } from 'framer-motion';
import { skills } from '../data';
import { Cloud, Cpu, Code2, Network, Server } from 'lucide-react';

const iconMap = {
  cloud: Cloud,
  cpu: Cpu,
  code: Code2,
  network: Network,
  linux: Server,
};

const Radial = ({ value }) => {
  const angle = Math.round((value / 100) * 360);
  return (
    <div
      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full grid place-items-center"
      style={{
        background: `conic-gradient(#ffb32c ${angle}deg, rgba(255,255,255,0.12) ${angle}deg)`,
      }}
    >
      <div className="absolute inset-[10px] sm:inset-[12px] bg-[#252633] rounded-full grid place-items-center">
        <span className="text-white font-semibold">{value}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#252633] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((s, idx) => {
            const Ico = iconMap[s.icon] || Code2;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group bg-[#2E333F] rounded-2xl p-6 border border-white/10 hover:border-[#ffb32c]/60 transition-colors duration-300 shadow-xl/10 hover:shadow-[0_0_24px_rgba(255,179,44,0.25)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-[#2E333F] group-hover:bg-[#ffb32c] transition-colors duration-300">
                    <Ico size={24} />
                  </span>
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <Radial value={s.value} />
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pengalaman praktis membangun solusi nyata dengan fokus reliability dan security.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
