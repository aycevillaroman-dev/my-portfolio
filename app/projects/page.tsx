// app/projects/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, 
  Home,
  User,
  Briefcase,
  FolderOpen,
  Sun,
  Moon,
  ExternalLink,
  Github,
  Smartphone,
  Monitor,
  Filter,
  ChevronDown,
  X,
  Mail,
  Settings,
  Wrench
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <User size={18} /> },
    { href: "/gallery", label: "Gallery", icon: <FolderOpen size={18} /> },
  ];

  // Category filters
  const categories = [
    { id: "all", label: "All Projects", icon: Code },
    { id: "web", label: "Web Apps", icon: Monitor },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "tools", label: "Development Tools", icon: Wrench },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Harmony Haven",
      category: "web",
      description: "Wellness Retreat Reservation & Activity Platform",
      fullDescription: "Harmony Haven is a digital platform designed to simplify wellness retreat bookings and activity scheduling. It enables users to reserve retreats, schedule wellness activities, and explore curated programs for mind, body, and spirit well-being.",
      image: "/haven.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL"],
      keyFeatures: [
        "Seamless retreat reservations and activity scheduling",
        "Personalized recommendations and curated wellness programs",
        "Integrated calendar and wellness dashboard to track progress"
      ],
      featured: true,
      path: "/projects/harmony-haven"
    },
    {
      id: 2,
      title: "JoeBrew",
      category: "web",
      description: "Coffee Shop Platform",
      fullDescription: "JoeBrew is a modern web platform for a coffee shop that offers coffee, milk tea, frappes, and takoyaki. It provides an interactive menu, online ordering system, and product information, giving customers an easy and enjoyable way to browse and order their favorite items.",
      image: "/joebrew.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      keyFeatures: [
        "Interactive menu for coffee, milk tea, frappes, and takoyaki",
        "Online ordering with real-time updates",
        "Customer engagement through ratings, reviews, and recommendations"
      ],
      featured: true,
      path: "/projects/joe-brew"
    },
    {
      id: 3,
      title: "Plant.io",
      category: "web",
      description: "Community Platform for Plant Enthusiasts",
      fullDescription: "Plant.io is a comprehensive web application designed to connect and support plant enthusiasts. It integrates real-time discussions, plant care guides, and weather forecasting features, providing a community-driven hub where users can share tips, access resources, and engage in meaningful plant care discussions.",
      image: "/plant.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WebSockets"],
      keyFeatures: [
        "Real-time discussions for live conversations and ongoing threads",
        "Plant care guides with tutorials and best practices",
        "Weather forecasting for plant care recommendations"
      ],
      featured: false,
      path: "/projects/plant-io"
    },
    {
      id: 4,
      title: "Premiere Shots",
      category: "web",
      description: "Web Booking Reservation System",
      fullDescription: "Premiere Shots is a web booking system designed to make photography services more accessible. Clients can schedule photography sessions online, browse services, and manage reservations through a clean and intuitive interface.",
      image: "/premiere.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      keyFeatures: [
        "Online booking for photography sessions",
        "Service listings showing packages and details",
        "Database integration with PHP and MySQL"
      ],
      featured: false,
      path: "/projects/premiere-shots"
    },
    {
      id: 5,
      title: "WinConfig",
      category: "tools",
      description: "Windows Configuration & App Deployment Tool",
      fullDescription: "WinConfig is a powerful C# Windows application that automates user account creation and application deployment. It creates new Windows user profiles and automatically installs pre-configured applications, making system setup efficient and consistent across multiple machines.",
      image: "/winconfig.png",
      technologies: ["C#", ".NET Framework", "Windows Forms", "Windows API", "PowerShell"],
      keyFeatures: [
        "Automated Windows user account creation with customizable permissions",
        "Bulk installation of pre-configured applications (Chrome, Firefox, VS Code, Office, etc.)",
        "System configuration management for consistent setup across multiple machines",
        "User profile customization with default settings and preferences",
        "Installation logging and error handling for deployment tracking"
      ],
      featured: true,
      path: "/projects/winconfig"
    },
    {
      id: 6,
      title: "MindConnect",
      category: "mobile",
      description: "Mobile Platform for Mental Health Support",
      fullDescription: "MindConnect is a mobile application that provides personalized mental health support, advocacy, and guidance. It leverages an AI chatbot, self-assessment tools, and community forums to create a safe space for users to discuss mental health, access curated resources, and receive tailored recommendations.",
      image: "/mind.png",
      technologies: ["Flutter", "Node.js", "MySQL", "AI/NLP", "Firebase"],
      keyFeatures: [
        "AI Chatbot for personalized guidance and recommendations",
        "Self-assessment tools to track well-being over time",
        "Community forums for peer support and discussion"
      ],
      featured: true,
      path: "/projects/mind-connect"
    },
    {
      id: 7,
      title: "KamayTeks",
      category: "mobile",
      description: "Filipino Sign Language Translator & Learning App",
      fullDescription: "KamayTeks is a comprehensive mobile application designed to bridge communication gaps by translating between Filipino Sign Language (FSL) and spoken/written Filipino. It serves as both a translation tool and educational platform, helping users learn FSL through interactive lessons, gesture recognition, and community features.",
      image: "/kamay.png",
      technologies: ["React Native", "MediaPipe", "JavaScript", "Firebase", "Computer Vision"],
      keyFeatures: [
        "Real-time FSL to text/speech translation using camera input",
        "Text/speech to FSL visualization with animated sign demonstrations",
        "Interactive learning modules with quizzes and progress tracking",
        "Gesture recognition technology for practice and assessment",
        "Community forum for FSL learners and deaf community members"
      ],
      featured: true,
      path: "/projects/kamayteks"
    }
  ];

  // Load fonts
  useEffect(() => {
    const bebasLink = document.createElement('link');
    bebasLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap';
    bebasLink.rel = 'stylesheet';
    document.head.appendChild(bebasLink);
    return () => {};
  }, []);

  useEffect(() => {
    const updateClock = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowContactModal(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowContactModal(false);
    };

    if (showContactModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showContactModal]);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Using Web3Forms API - a free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5af9637a-5566-4e76-941e-655dc3d4b80c',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'ayce.villaroman@gmail.com'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setShowContactModal(false);
          setFormStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className={`font-sans min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white' : 'bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900'}`}>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6, .heading-font, .bold-font {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.05em;
        }
        body, p, span, li, a, .body-font, .clean-font {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }
        .light-font {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
        }
        .medium-font {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .semibold-font {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
      `}</style>

      {/* Top Navigation Bar */}
      <header className={`hidden md:flex w-full px-6 py-4 items-center justify-between sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-r from-black via-gray-900 to-black text-white' : 'bg-gradient-to-r from-white via-gray-50 to-white text-gray-900 border-b border-gray-200'}`}>
        <div className="text-lg font-bold heading-font">Aaron Carl</div>
        <nav className={`flex items-center gap-2 backdrop-blur-lg px-6 py-2 rounded-full border shadow-lg ${darkMode ? 'bg-black/80 border-gray-700' : 'bg-white/80 border-gray-300'}`}>
          {navItems.map((item, index) => (
            <span key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className={`transition flex items-center gap-2 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} clean-font`}>
                {item.icon} {item.label}
              </Link>
              {index < navItems.length - 1 && <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>}
            </span>
          ))}
          <span className={`mx-3 h-6 w-[1px] ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
          <button onClick={() => setDarkMode(!darkMode)} className={`transition flex items-center ${darkMode ? 'hover:text-yellow-400' : 'hover:text-orange-500'}`}>
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
        <div className="text-sm font-mono">{time}</div>
      </header>

      {/* Mobile Navigation Bar */}
      <nav className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 backdrop-blur-lg px-6 py-3 rounded-full border shadow-lg ${darkMode ? 'bg-black/80 border-gray-700' : 'bg-white/80 border-gray-300'}`}>
        {navItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className={`flex items-center gap-1 transition text-sm ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} clean-font`}>
              {item.icon}{item.label}
            </Link>
            {index < navItems.length - 1 && <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>}
          </span>
        ))}
        <span className={`mx-2 h-6 w-[1px] ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
        <button onClick={() => setDarkMode(!darkMode)} className={`flex items-center gap-1 transition text-sm ${darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-orange-500'}`}>
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>

      {/* Side Navigation - Desktop */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button 
                key={category.id} 
                onClick={() => setActiveCategory(category.id)} 
                className="group relative flex items-center" 
                aria-label={category.label}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${darkMode ? (isActive ? 'border-white bg-white text-black scale-110' : 'border-gray-700 bg-black hover:border-white hover:scale-110') : (isActive ? 'border-gray-900 bg-gray-900 text-white scale-110' : 'border-gray-300 bg-white hover:border-gray-900 hover:scale-110')}`}>
                  <Icon size={20} />
                </div>
                <span className={`absolute left-16 whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${darkMode ? (isActive ? 'opacity-100 translate-x-0 bg-white text-black' : 'opacity-0 -translate-x-2 bg-gray-800 group-hover:opacity-100 group-hover:translate-x-0') : (isActive ? 'opacity-100 translate-x-0 bg-gray-900 text-white' : 'opacity-0 -translate-x-2 bg-gray-200 group-hover:opacity-100 group-hover:translate-x-0')} clean-font`}>{category.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <main className="flex-1 pt-20 pb-32">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              opacity: darkMode ? 0.1 : 0.05,
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight heading-font">
                My <span className={`bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-white via-gray-300 to-white' : 'from-black via-gray-700 to-black'}`}>Projects</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A collection of my work showcasing web, mobile applications and development tools
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile Filter Menu */}
        <div className="lg:hidden px-6 mb-8">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-300 ${darkMode ? 'bg-black border-gray-800 hover:border-white' : 'bg-white border-gray-300 hover:border-black'}`}
          >
            <div className="flex items-center gap-3">
              <Filter size={20} />
              <span className="clean-font font-medium">
                {categories.find(c => c.id === activeCategory)?.label}
              </span>
            </div>
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-2 rounded-2xl border overflow-hidden ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'}`}
            >
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-300 ${darkMode ? (isActive ? 'bg-white text-black' : 'hover:bg-gray-900') : (isActive ? 'bg-black text-white' : 'hover:bg-gray-100')}`}
                  >
                    <Icon size={20} />
                    <span className="clean-font font-medium">{category.label}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Projects Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${darkMode ? 'border-gray-800 hover:border-white bg-black' : 'border-gray-300 hover:border-black bg-white'}`}
              >
                {/* Project Image */}
                <div className={`relative h-64 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    priority={project.id === 4}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 heading-font">{project.title}</h3>
                  <p className={`text-sm mb-4 clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs clean-font ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link 
                      href={project.path}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm clean-font ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                      <ExternalLink size={16} />
                      View More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Code size={64} className={`mx-auto mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-400'}`} />
              <p className={`text-xl clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No projects found in this category
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Want to Collaborate?</h2>
            <p className={`text-lg md:text-xl mb-8 clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <motion.button
              onClick={() => setShowContactModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-12 py-5 text-lg md:text-xl font-bold rounded-full transition-all duration-300 shadow-2xl heading-font ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              Start a Conversation
            </motion.button>
          </div>
        </section>
      </main>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-md w-full rounded-2xl shadow-xl p-6 border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <button
                onClick={() => setShowContactModal(false)}
                className={`absolute top-4 right-4 z-10 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              
              <div className="pt-6 pb-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Get In Touch</h3>
                <p className={`text-center mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Send me a direct email
                </p>
                
                {formStatus === 'sent' ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                      <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      I'll get back to you soon. Thanks for reaching out!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                          placeholder="Subject of your message"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={formStatus === 'sending'}
                          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                            formStatus === 'sending' 
                              ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' 
                              : darkMode 
                                ? 'bg-white text-black hover:bg-gray-200' 
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                        >
                          {formStatus === 'sending' ? 'Sending...' : 'Send Email'}
                        </button>
                        
                        {formStatus === 'error' && (
                          <p className="text-red-500 text-sm mt-2 text-center">
                            Error sending email. Please try again.
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`w-full border-t transition-colors duration-300 ${darkMode ? 'bg-black text-gray-300 border-gray-800' : 'bg-white text-gray-700 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between h-auto md:h-14 py-4 md:py-0 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-center md:text-left clean-font">
              <span>© <time dateTime="2025">2025</time> /</span>
              <span className="font-medium">Ac Villaroman</span>
              <span>/</span>
              <span>Code smart, not just hard.</span>
            </div>
            <div className="flex items-center">
              <Image src="/trademark.png" alt="Trademark" width={36} height={36} className="object-contain opacity-80 hover:opacity-100 transition-opacity" priority />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}