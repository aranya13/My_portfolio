import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Construct email body
    const emailBody = `Hello Aranya,

You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Best regards,
Portfolio Contact Form`;

    // Construct mailto URL
    const mailtoUrl = `mailto:bahugunaaranya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
  };
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Currently open for internships and full-time opportunities. Feel free to reach out for collaborations or just a friendly chat about space tech!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100 dark:border-gray-700"
            >
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Name</label>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                              placeholder="Name" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                              placeholder="email" 
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Subject</label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                          placeholder="Project Inquiry" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                          placeholder="Hello Aranya, I'd like to discuss..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </motion.div>

            <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-10 lg:pl-12"
            >
                <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Email Me</h4>
                        <a href="mailto:bahugunaaranya@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-lg">bahugunaaranya@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <Phone size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Call Me</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">+91 82181 54757</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">Dehradun, India</p>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;