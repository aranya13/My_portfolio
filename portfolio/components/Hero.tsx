import React from 'react';
import { ArrowRight, Download, Code, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Blobs controlled in LayoutEffects, but adding local flair */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                Aranya Bahuguna
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
              A computer science enthusiast and <strong className="text-slate-900 dark:text-white font-medium">Full Stack Engineer</strong> crafting robust, user-centric applications. From optimizing UAV flight systems to building secure encryption tools.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1"><Code size={16} /> B.Tech CSE @ VIT Bhopal</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Dehradun, IN</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="/Aranya_oc.pdf" download="Aranya_Bahuguna_Resume.pdf" className="px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                Download Resume <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg"
          >
            <motion.img
              src="src/aranya.png"
              alt="Aranya Bahuguna"
              whileHover={{
                rotate: 0,
                scale: 1.03,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className=" w-full h-auto rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition-allduration-500 cursor-pointer "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;