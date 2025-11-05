import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#252633] text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold mb-10"
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-2 bg-[#2E333F] p-6 rounded-2xl border border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-[#252633] border border-white/10 focus:border-[#ffb32c] outline-none transition-colors"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#252633] border border-white/10 focus:border-[#ffb32c] outline-none transition-colors"
                  placeholder="email@domain.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-2">Pesan</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-[#252633] border border-white/10 focus:border-[#ffb32c] outline-none transition-colors"
                placeholder="Tulis pesan Anda..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-6 py-3 rounded-full bg-[#ffb32c] text-black font-semibold shadow hover:shadow-[0_0_20px_rgba(255,179,44,0.5)] transition-shadow duration-300"
            >
              Kirim Pesan
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#2E333F] p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center"
          >
            <p className="text-white/80 mb-4 text-center">
              Temui saya di media sosial:
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#ffb32c] hover:text-[#ffb32c] transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#ffb32c] hover:text-[#ffb32c] transition-colors">
                <Github />
              </a>
              <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#ffb32c] hover:text-[#ffb32c] transition-colors">
                <Instagram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
