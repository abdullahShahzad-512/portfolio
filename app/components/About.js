'use client'

import React from 'react'
import { GraduationCap, Target, Award, User, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Software Engineer with hands-on experience in Web Development using the .NET technologies, and backend frameworks such as Flask, REST APIs and FastAPI. Skilled in
              Mobile App Development through academic coursework and real-world projects.
              Passionate about building scalable, efficient, and innovative solutions with
              growing interests in AI and system-level design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-shadow shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">B.S in Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">PUCIT Lahore</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-shadow shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full mr-4">
                  <Target className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Expertise</h3>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>ML & AI: Neural Networks, YOLO, PyTorch, Scikit-learn, LangChain, RAG</li>
                <li>Backend & Full-Stack: .NET, REST & FastAPI, Flask, Django</li>
                <li>Database Systems: SQL, Oracle, SQL Server, MongoDB</li>
                
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full mr-4">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Professional Highlights</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Built scalable web applications using REST/FastAPI, .NET, Django, and Flask.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <User size={20} className="text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Applied strong DBMS concepts with hands-on experience in SQL-based and NoSQL databases.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed mobile applications and backend systems as part of academic and practical projects.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Strong understanding of software engineering principles including design, quality assurance, and requirements engineering.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Collaborative team player focused on continuous learning, problem-solving, and impactful development.
                </p>
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About