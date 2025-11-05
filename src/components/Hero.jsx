import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#2E333F] overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>

      {/* Soft gradient vignette to increase contrast over 3D background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2E333F]/70 via-[#2E333F]/60 to-[#2E333F]/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          {/* Glowing rotating ring around avatar */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
              style={{
                background:
                  'conic-gradient(from 0deg, #ffb32c, rgba(255,255,255,0.9), #ffb32c, rgba(255,255,255,0.9), #ffb32c)'
              }}
            />
            <div className="absolute inset-[6px] sm:inset-[8px] rounded-full bg-[#2E333F] shadow-[0_0_40px_6px_rgba(255,179,44,0.35)]" />
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328d13bf?q=80&w=800&auto=format&fit=crop"
              alt="Refan Maulana"
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            >
              Hi, I’m Refan Maulana 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-white/85 text-sm sm:text-base md:text-lg"
            >
              Network Engineer | Web Developer | IoT Maker
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-full bg-[#ffb32c] text-black font-semibold shadow hover:shadow-[0_0_25px_rgba(255,179,44,0.6)] transition-shadow duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:border-[#ffb32c] hover:text-[#ffb32c] transition-colors duration-300"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
