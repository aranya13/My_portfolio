import React from 'react';
import { Briefcase, Code, GraduationCap, Server, Database, Trophy, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        I am a final-year Computer Science student at VIT Bhopal University with a strong foundation in algorithms and full-stack development. My passion lies in solving complex real-world problems through code, whether it's optimizing UAV flight systems or creating secure data applications.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm currently looking for full-time opportunities where I can leverage my skills in React, Node.js, and Cloud technologies to build impactful software.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                        <Code className="text-primary mb-3" size={28} />
                        <h4 className="font-bold text-lg mb-1">Languages</h4>
                        <p className="text-sm text-gray-500">Java, JavaScript, SQL, HTML/CSS</p>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-secondary/30 transition-colors">
                        <Globe className="text-secondary mb-3" size={28} />
                        <h4 className="font-bold text-lg mb-1">Web</h4>
                        <p className="text-sm text-gray-500">ReactJS, Tailwind, Node.js, Express</p>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-accent/30 transition-colors">
                        <Database className="text-accent mb-3" size={28} />
                        <h4 className="font-bold text-lg mb-1">Data</h4>
                        <p className="text-sm text-gray-500">MongoDB, MySQL, Firebase, Supabase</p>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-green-500/30 transition-colors">
                        <Server className="text-green-500 mb-3" size={28} />
                        <h4 className="font-bold text-lg mb-1">Tools</h4>
                        <p className="text-sm text-gray-500">AWS, Figma, Git, Postman</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                 {/* Experience Section */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl relative overflow-hidden"
                 >
                     <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                     <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
                        <Briefcase className="text-primary" /> Experience
                     </h3>

                     <div className="space-y-8 relative before:absolute before:left-3 before:top-10 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 z-10">
                        <div className="relative pl-10">
                            <div className="absolute left-0 top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-slate-800 shadow-md"></div>
                            <h4 className="text-lg font-bold">Learning Intern</h4>
                            <p className="text-primary text-sm font-medium mb-1">Indian Space Lab (ISL) • Dec 2024 - Jan 2024</p>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc ml-4 space-y-1">
                                <li>Enhanced UAV flight stability by 30% through code modification.</li>
                                <li>Resolved critical sensor calibration errors improving data analysis by 40%.</li>
                                <li>Optimized CubeSat module processes improving data accuracy by 15%.</li>
                            </ul>
                        </div>
                     </div>
                 </motion.div>
                
                 {/* Education Section */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl relative overflow-hidden"
                 >
                     <div className="absolute bottom-0 left-0 p-32 bg-secondary/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                     <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
                        <GraduationCap className="text-secondary" /> Education
                     </h3>
                     
                     <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-start">
                             <div>
                                <h4 className="text-lg font-bold">Bachelor of Technology (CSE)</h4>
                                <p className="text-gray-500">VIT Bhopal University</p>
                             </div>
                             <div className="text-right">
                                <span className="block text-sm font-bold text-secondary">Aug 2022 - May 2026</span>
                                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">GPA: 8.72</span>
                             </div>
                        </div>
                     </div>
                 </motion.div>

                 {/* Achievements */}
                 <div className="flex gap-4 overflow-x-auto pb-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm whitespace-nowrap border border-yellow-500/20">
                        <Trophy size={14} /> Ecom-Thon Runner-up
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm whitespace-nowrap border border-blue-500/20">
                        <Trophy size={14} /> NSS Core Member
                    </span>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;