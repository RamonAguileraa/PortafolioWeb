'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Rocket, X, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function Experience() {
  const [selectedEvent, setSelectedEvent] = useState<{ event: string; images: string[] } | null>(null)
  const { theme } = useTheme()
  const { t } = useLanguage()

  const workExperience = [
    {
      role: t.workExp.secEdu.role,
      company: 'Secretaría de Educación del Estado de Chihuahua',
      logo: '/logoSeyd.png',
      location: 'Chihuahua, México',
      period: t.workExp.secEdu.period,
      current: true,
      description: t.workExp.secEdu.descriptions,
      technologies: ['C#', 'ASP.NET MVC', '.NET', 'Oracle', 'jQuery', 'Bootstrap', 'TFS/TFVC']
    },
    {
      role: t.workExp.vendex.role,
      company: 'Vendex.mx',
      logo: '/vendex.png',
      location: 'Chihuahua, México',
      period: t.workExp.vendex.period,
      current: false,
      description: t.workExp.vendex.descriptions,
      technologies: ['React', 'Node.js', 'AI/ML', 'APIs', 'Scrum']
    },
    {
      role: t.workExp.studioko.role,
      company: 'Studioko',
      logo: '/studioko.png',
      location: 'Chihuahua, México',
      period: t.workExp.studioko.period,
      current: true,
      link: 'https://studioko.dev',
      description: t.workExp.studioko.descriptions,
      technologies: ['Next.js', 'React', 'UI/UX', 'Branding']
    },
    {
      role: t.workExp.canal28.role,
      company: 'Canal 28 Chihuahua',
      logo: '/canal 28.webp',
      location: 'Chihuahua, México',
      period: t.workExp.canal28.period,
      description: t.workExp.canal28.descriptions,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'CMS']
    },
    {
      role: t.workExp.thezen.role,
      company: 'TheZenCorp',
      logo: '/thezen.jpg',
      location: t.workExp.thezen.location,
      period: t.workExp.thezen.period,
      description: t.workExp.thezen.descriptions,
      technologies: ['React Native', 'Web3', 'Blockchain', 'Smart Contracts']
    }
  ]

  const leadership = [
    {
      role: t.leadershipData.innova.role,
      organization: 'Comunidad Innova — Innovación y Tecnología',
      logo: '/innova.jpg',
      period: t.leadershipData.innova.period,
      highlights: t.leadershipData.innova.highlights
    },
    {
      role: t.leadershipData.bosozoku.role,
      organization: 'BosoZoku Studio',
      logo: '/Bosozoku.jpg',
      period: t.leadershipData.bosozoku.period,
      highlights: t.leadershipData.bosozoku.highlights,
      images: ['/beca.png']
    }
  ]

  const mentorship = [
    {
      event: t.mentorshipData.nasa.event,
      location: 'Chihuahua',
      years: ['2023', '2024', '2025'],
      role: t.mentorshipData.nasa.role,
      images: ['/recospace.png', '/recospace2.png', '/spaceapps2025.pdf', '/spaceapps2025.2.pdf']
    },
    {
      event: t.mentorshipData.mit.event,
      location: 'Tec de Monterrey',
      years: ['2024'],
      role: t.mentorshipData.mit.role,
      images: ['/mentor.png']
    },
    {
      event: t.mentorshipData.aim.event,
      location: 'Chihuahua',
      years: ['2025'],
      role: t.mentorshipData.aim.role,
      description: t.mentorshipData.aim.description,
      images: ['/reconocimiento.png']
    }
  ]

  const startups = [
    {
      name: 'Serena',
      logo: '/serena.jpg',
      type: t.startupsData.serena.type,
      description: t.startupsData.serena.description,
      status: t.startupsData.serena.status
    },
    {
      name: 'PetKeeper',
      logo: '/PetKeeperquitarfondo.png',
      type: t.startupsData.petkeeper.type,
      description: t.startupsData.petkeeper.description,
      status: t.startupsData.petkeeper.status
    },
    {
      name: 'BosoZoku Studio',
      logo: '/Bosozoku.jpg',
      type: t.startupsData.bosozokuStudio.type,
      description: t.startupsData.bosozokuStudio.description,
      status: t.startupsData.bosozokuStudio.status,
      highlight: t.startupsData.bosozokuStudio.highlight
    },
    {
      name: 'IBENTEU',
      logo: '/ibenteu.jpg',
      type: t.startupsData.ibenteu.type,
      description: t.startupsData.ibenteu.description,
      status: t.startupsData.ibenteu.status
    }
  ]

  return (
    <section id="experience" className={`relative py-16 sm:py-20 lg:py-32 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className="text-pink-500 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            {t.experience.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.1 }}
            className={`text-2xl sm:text-3xl lg:text-5xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            {t.experience.title} <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.experience.titleItalic}</span>
          </motion.h2>
        </div>

        {/* Work Experience */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className={`flex items-center gap-3 text-lg sm:text-xl mb-8 sm:mb-10 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            <Briefcase className="w-5 h-5 text-pink-500" />
            {t.experience.workExperience}
          </motion.h3>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative pl-6 sm:pl-8 border-l ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}
              >
                {/* Dot */}
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${job.current ? 'bg-pink-500' : theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-400'}`} />

                <div className={`p-5 sm:p-6 border transition-colors ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700' : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div className="flex items-start gap-3">
                      {job.logo && (
                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
                          <Image
                            src={job.logo}
                            alt={job.company}
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className={`text-lg sm:text-xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{job.role}</h4>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                          {job.link ? (
                            <a
                              href={job.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1"
                            >
                              {job.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>{job.company}</span>
                          )}
                          <span className={`text-sm flex items-center gap-1 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                      <Calendar className="w-4 h-4" />
                      {job.period}
                      {job.current && (
                        <span className="px-2 py-0.5 text-[10px] bg-pink-500/20 text-pink-400 rounded">{t.experience.current}</span>
                      )}
                    </div>
                  </div>

                  <ul className={`space-y-1.5 text-sm mb-4 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className={`px-2.5 py-1 text-[10px] sm:text-xs border tracking-wider uppercase ${theme === 'dark' ? 'text-neutral-500 border-neutral-800' : 'text-neutral-600 border-neutral-300'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Community */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className={`flex items-center gap-3 text-lg sm:text-xl mb-8 sm:mb-10 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            <Users className="w-5 h-5 text-pink-500" />
            {t.experience.leadership}
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: index * 0.1 }}
                onClick={() => item.images && setSelectedEvent({ event: item.organization, images: item.images })}
                className={`p-5 sm:p-6 border transition-colors ${item.images ? 'cursor-pointer group' : ''} ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700' : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    {item.logo && (
                      <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
                        <Image
                          src={item.logo}
                          alt={item.organization}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className={`text-lg sm:text-xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{item.role}</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{item.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.images && (
                      <ImageIcon className={`w-4 h-4 group-hover:text-pink-400 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`} />
                    )}
                    <span className={`text-xs whitespace-nowrap ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{item.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      <span className="text-pink-500 mt-0.5">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                {item.images && (
                  <p className={`text-[10px] mt-3 group-hover:text-neutral-500 transition-colors ${theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'}`}>{t.experience.viewRecognitions}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mentorship & Events */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className={`flex items-center gap-3 text-lg sm:text-xl mb-8 sm:mb-10 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            <Award className="w-5 h-5 text-pink-500" />
            {t.experience.mentorship}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentorship.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: index * 0.1 }}
                onClick={() => item.images && setSelectedEvent({ event: item.event, images: item.images })}
                className={`p-5 border transition-colors ${item.images ? 'cursor-pointer group' : ''} ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700' : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'}`}
              >
                <div className="flex items-start justify-between">
                  <h4 className={`font-light mb-1 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{item.event}</h4>
                  {item.images && (
                    <ImageIcon className={`w-4 h-4 group-hover:text-pink-400 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`} />
                  )}
                </div>
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{item.location}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.years.map((year, i) => (
                    <span key={i} className={`px-2 py-0.5 text-[10px] rounded ${theme === 'dark' ? 'bg-neutral-800 text-neutral-400' : 'bg-neutral-200 text-neutral-600'}`}>
                      {year}
                    </span>
                  ))}
                </div>
                <p className="text-pink-400 text-sm">{item.role}</p>
                {item.description && (
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>{item.description}</p>
                )}
                {item.images && (
                  <p className={`text-[10px] mt-2 group-hover:text-neutral-500 transition-colors ${theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'}`}>{t.experience.viewRecognitions}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Startups & Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className={`flex items-center gap-3 text-lg sm:text-xl mb-8 sm:mb-10 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            <Rocket className="w-5 h-5 text-pink-500" />
            {t.experience.startups}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 border hover:border-pink-500/30 transition-colors group ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {startup.logo && (
                    <div className={`relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
                      <Image
                        src={startup.logo}
                        alt={startup.name}
                        fill
                        sizes="40px"
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h4 className={`font-light group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{startup.name}</h4>
                      {startup.highlight && (
                        <span className="px-2 py-0.5 text-[9px] bg-pink-500/20 text-pink-400 rounded whitespace-nowrap">
                          {startup.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-pink-400/70 text-xs uppercase tracking-wider">{startup.type}</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{startup.description}</p>
                <div className={`mt-3 pt-3 border-t ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                  <span className={`text-[10px] uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>{startup.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal de reconocimientos */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto border p-6 ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className={`absolute top-4 right-4 transition-colors ${theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className={`text-xl font-light mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{selectedEvent.event}</h3>

              <div className={`grid gap-4 ${selectedEvent.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                {selectedEvent.images.map((img, i) => (
                  <div key={i} className={`relative overflow-hidden ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
                    {img.endsWith('.pdf') ? (
                      <div className="aspect-[4/3] flex flex-col items-center justify-center gap-4">
                        <iframe
                          src={img}
                          className="w-full h-full absolute inset-0"
                          title={`Documento ${i + 1}`}
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={img}
                          alt={`Reconocimiento ${i + 1}`}
                          fill
                          className="object-contain"
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
