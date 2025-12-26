import React from 'react';
import { ExternalLink, Github, Lock, Flame, Database, ShoppingBag } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "SOS-Service Platform",
    description:
      "Cross-platform safety application featuring real-time incident reporting, AES-256 encryption, and YOLOv8-based fire severity detection achieving 94% accuracy.",
    tags: ["Flutter", "React", "YOLOv8", "AES-256", "Supabase"],
    image: "src/SOS.jpeg",
    link: "https://github.com/aranya13/SOS-Website"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "End-to-end MERN stack system with Role-Based Access Control (RBAC), enabling secure CRUD operations and real-time inventory synchronization.",
    tags: ["MongoDB", "Express", "React", "Node.js", "RBAC"],
    image: "src/Inventory.png",
    link: "https://github.com/aranya13/Inventory_Management_grp97"
  },
  {
    id: 3,
    title: "AES Image Encryptor",
    description:
      "Client-side image encryption tool implementing optimized AES-256 cryptographic algorithms for secure, tamper-proof image handling.",
    tags: ["HTML5", "JavaScript", "AES-256", "Cryptography"],
    image: "src/AES.png",
    link: "https://github.com/aranya13/AES-encryption--Project"
  },
  {
    id: 4,
    title: "Novel AI",
    description:
      "AI-powered creative writing platform that generates personalized novels using machine learning algorithms. Features user authentication, story customization, and real-time collaborative editing with MERN stack architecture.",
    tags: ["MongoDB", "Express", "React", "Node.js", "AI/ML", "JWT"],
    image: "src/Novel.png",
    link: "https://github.com/aranya13/NovelCraftAI"
  },
  {
    id: 5,
    title: "HPCL Dashboard",
    description:
      "Comprehensive dashboard for Hindustan Petroleum Corporation Limited featuring real-time fuel station monitoring, inventory management, sales analytics, and employee management system built with MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Analytics", "Dashboard"],
    image: "src/hpcl.png",
    link: "https://github.com/aranya13/hpcl"
  },
  {
    id: 6,
    title: "ISL MERN Website",
    description:
      "Full-featured website for Indian Super League football tournament with live match updates, player statistics, team management, fan engagement features, and real-time notifications using MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Sports", "Real-time"],
    image: "src/ISL.png",
    link: "https://github.com/aranya13/ISL-"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-light dark:bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Showcasing my journey through code, from secure encryption algorithms to full-stack applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4 backdrop-blur-sm">
                   <a href={project.link} target="_blank" rel="noopener" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-lg">
                      <Github size={24} />
                   </a>
                </div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {project.id === 1 ? <Flame size={14} className="inline mr-1 text-orange-500" /> : null}
                    {project.id === 2 ? <Database size={14} className="inline mr-1 text-green-500" /> : null}
                    {project.id === 3 ? <Lock size={14} className="inline mr-1 text-blue-500" /> : null}
                    {project.id === 4 ? <Flame size={14} className="inline mr-1 text-orange-500" /> : null}
                    {project.id === 5 ? <Database size={14} className="inline mr-1 text-green-500" /> : null}
                    {project.id === 6 ? <Lock size={14} className="inline mr-1 text-blue-500" /> : null}
                    featured
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-100 dark:bg-slate-700/50 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;