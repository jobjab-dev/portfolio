'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-green-500" },
        { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5 / CSS3", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Framer Motion", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87, color: "from-green-500 to-emerald-500" },
        { name: "Express.js", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "MongoDB", level: 82, color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 80, color: "from-blue-700 to-indigo-700" },
        { name: "REST APIs", level: 90, color: "from-indigo-500 to-purple-500" },
        { name: "GraphQL", level: 78, color: "from-pink-500 to-rose-500" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git / GitHub", level: 92, color: "from-gray-800 to-black" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 70, color: "from-orange-500 to-yellow-500" },
        { name: "Vercel", level: 90, color: "from-gray-900 to-black" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 95, color: "from-blue-600 to-blue-700" }
      ]
    }
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {skillCategories[activeTab as keyof typeof skillCategories].title}
            </h3>

            <div className="grid gap-6">
              {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends, 
                frameworks, and best practices. I regularly take courses, attend conferences, and 
                contribute to open-source projects to sharpen my skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 