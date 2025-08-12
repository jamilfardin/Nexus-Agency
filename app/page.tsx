"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Play, ArrowRight, Menu, X, Star, Users, Award, Zap } from "lucide-react"

export default function CreativeAgencyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCase, setActiveCase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const caseStudies = [
    {
      id: 1,
      title: "Ethereal Fashion",
      category: "Brand Identity",
      image: "/luxury-fashion-brand-identity.png",
      description:
        "Complete brand transformation for a luxury fashion house, including logo design, packaging, and digital presence.",
    },
    {
      id: 2,
      title: "TechFlow App",
      category: "Digital Experience",
      image: "/modern-mobile-app-interface.png",
      description:
        "Revolutionary fintech app design that increased user engagement by 340% and won the Design Excellence Award.",
    },
    {
      id: 3,
      title: "Artisan Coffee Co.",
      category: "Packaging Design",
      image: "/placeholder-6spkt.png",
      description: "Sustainable packaging design that tells the story of ethically sourced coffee from bean to cup.",
    },
    {
      id: 4,
      title: "Urban Spaces",
      category: "Web Design",
      image: "/modern-architecture-website.png",
      description:
        "Interactive website for an architecture firm featuring 3D visualizations and immersive project galleries.",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "/creative-director-portrait.jpg",
      bio: "15+ years crafting award-winning brand experiences",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Designer",
      image: "/professional-designer-portrait.jpg",
      bio: "Specializes in digital experiences and user interface design",
    },
    {
      name: "Elena Kowalski",
      role: "Strategy Director",
      image: "/strategy-director-portrait.jpg",
      bio: "Data-driven creative strategies that deliver measurable results",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* Animated SVG Logo */}
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="text-orange-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.path
                d="M20 5L35 15L35 25L20 35L5 25L5 15L20 5Z"
                fill="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="20"
                cy="20"
                r="8"
                fill="white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </motion.svg>
            <span className="font-serif text-2xl font-bold text-gray-900">Nexus</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Work", "About", "Services", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-4">
                {["Work", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  className="font-serif text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  We Create
                  <span className="text-orange-500 block">Extraordinary</span>
                  Experiences
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Award-winning creative agency specializing in brand identity, digital experiences, and innovative
                  design solutions that drive results.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium group"
                >
                  View Our Work
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative border-2 border-gray-300 hover:border-orange-500 px-8 py-6 text-lg font-medium group bg-transparent overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  <div className="relative flex items-center">
                    <div className="relative mr-2">
                      <Play
                        className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10"
                        size={20}
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-0 group-hover:scale-200 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                    </div>

                    <span className="relative bg-gradient-to-r from-gray-900 via-orange-500 to-gray-900 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shimmer transition-all duration-300">
                      Watch Reel
                    </span>
                  </div>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { number: "150+", label: "Projects" },
                  { number: "50+", label: "Clients" },
                  { number: "15+", label: "Awards" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-serif text-3xl font-bold text-orange-500">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/creative-agency-team.png"
                    alt="Creative team at work"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ y }}
                >
                  <Star className="text-orange-500" size={32} />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                >
                  <Zap className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section with Scroll Snap */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-orange-500">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped brands tell their stories and achieve extraordinary results through innovative
              design and strategic thinking.
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto snap-container pb-8">
            <div className="flex space-x-8 w-max">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="snap-item w-80 lg:w-96 flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <Button variant="secondary" size="sm" className="m-4 bg-white/90 hover:bg-white">
                          View Case Study
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-orange-500 font-medium mb-2">{study.category}</div>
                      <h3 className="font-serif text-2xl font-bold mb-3">{study.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We believe that great design has the power to transform businesses and create meaningful connections
                  between brands and their audiences.
                </p>
                <p>
                  Our team of passionate creatives, strategists, and technologists work together to craft experiences
                  that not only look beautiful but drive real business results.
                </p>
                <p>
                  From startups to Fortune 500 companies, we've helped brands across industries tell their stories in
                  ways that resonate, inspire, and convert.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { icon: Users, title: "Client-Focused", desc: "Your success is our priority" },
                  { icon: Award, title: "Award-Winning", desc: "15+ industry recognitions" },
                  { icon: Zap, title: "Innovation-Driven", desc: "Cutting-edge solutions" },
                  { icon: Star, title: "Results-Oriented", desc: "Measurable impact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/placeholder-4r5st.png"
                    alt="Office workspace"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="/design-brainstorming.png"
                    alt="Team brainstorming"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/creative-design-sketches.png"
                    alt="Design process"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img
                    src="/placeholder-toovz.png"
                    alt="Meeting room"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The creative minds behind our award-winning work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8">
              Ready to Create Something
              <span className="text-orange-500 block">Extraordinary?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss your project and explore how we can help bring your vision to life.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-medium animate-pulse-glow"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-medium bg-transparent"
              >
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                className="text-orange-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <path d="M20 5L35 15L35 25L20 35L5 25L5 15L20 5Z" fill="currentColor" />
                <circle cx="20" cy="20" r="8" fill="white" />
              </motion.svg>
              <span className="font-serif text-xl font-bold">Nexus Creative</span>
            </div>
            <div className="text-gray-400 text-sm">© 2025 Abdul Jamil Fardin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
