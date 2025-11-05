import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-[#252633] text-white">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-white/85 leading-relaxed mb-8"
      >
        Saya Refan Maulana, Network Engineer dan Web Maker yang berpengalaman dalam membangun infrastruktur jaringan berbasis Cisco & MikroTik, serta mengembangkan website modern dengan HTML5, TailwindCSS, PHP, dan JavaScript. Saya juga tertarik dengan dunia IoT dan Cloud Computing (AWS).
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        href="#"
        className="inline-block px-5 py-3 rounded-full bg-[#ffb32c] text-black font-semibold shadow hover:shadow-[0_0_20px_rgba(255,179,44,0.5)] transition-shadow duration-300"
      >
        Download CV
      </motion.a>
    </div>
  </section>
);

function App() {
  useEffect(() => {
    document.title = 'Refan Maulana — Network Engineer & Web Developer Portfolio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Refan Maulana — Network Engineer & Web Developer Portfolio. A showcase of modern networking, IoT, and web development projects.'
      );
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content =
        'Refan Maulana — Network Engineer & Web Developer Portfolio. A showcase of modern networking, IoT, and web development projects.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="font-sans text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
