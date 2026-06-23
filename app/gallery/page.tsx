"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Home,
  User,
  Briefcase,
  Award,
  Trophy,
  GraduationCap,
  Sun,
  Moon,
  ExternalLink,
  Download,
  Calendar,
  Building,
  Filter,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
  BriefcaseBusiness
} from "lucide-react";

export default function AchievementsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEventModal, setIsEventModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <User size={18} /> },
    { href: "/projects", label: "Projects", icon: <Briefcase size={18} /> },
  ];

  // Category filters
  const categories = [
    { id: "all", label: "All Items", icon: Award },
    { id: "certifications", label: "Certifications", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "internships", label: "Internships", icon: BriefcaseBusiness },
  ];

  // Items data
  const items = [
    {
      id: 1,
      title: "IRcite 2025 Certification of Appreciation",
      category: "certifications",
      type: "Recognition",
      issuer: "IRcite Conference",
      date: "2025",
      description: "Recognized for outstanding contribution to research and innovation",
      image: "/ircite1.jpg",
      relatedImages: ["/Bsu1.jpg", "/Bsu2.jpg", "/Bsu3.jpg"],
      credentialId: "IR-2025-001",
      skills: ["Research", "Innovation", "Academic Excellence"],
      featured: false
    },
    {
      id: 2,
      title: "Dean's List",
      category: "achievements",
      type: "Academic Honor",
      issuer: "National University Baliwag",
      date: "2022–2025",
      description: "Maintained GPA of 3.8+ for four consecutive semesters",
      image: "/deanlist.jpg",
      relatedImages: ["/Dean1.jpg", "/Dean2.jpg"],
      skills: ["Academic Excellence", "Consistency", "Dedication"],
      featured: false
    },
    {
      id: 3,
      title: "BMG Outsourcing Internship Completion",
      category: "internships",
      type: "Professional Internship",
      issuer: "BMG Outsourcing",
      date: "2024",
      description: "Successfully completed internship program at BMG Outsourcing, gaining valuable experience in business process outsourcing and professional workplace practices.",
      image: "/internship1.png",
      relatedImages: ["/bmg1.jpg", "/bmg2.jpg", "/bmg3.jpg", "/bmg-team.jpg"],
      credentialId: "BMG-2024-INT-001",
      skills: ["BPO Operations", "Client Communication", "Data Management", "Professional Ethics", "Team Collaboration"],
      featured: true,
      position: "Intern",
      duration: "3 months",
      supervisor: "Jane Doe"
    }
  ];

  // Load fonts
  useEffect(() => {
    const bebasLink = document.createElement('link');
    bebasLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap';
    bebasLink.rel = 'stylesheet';
    document.head.appendChild(bebasLink);
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

  // Close modal on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedItem(null);
        setCurrentImageIndex(0);
        setIsEventModal(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
        setCurrentImageIndex(0);
        setIsEventModal(false);
      }
    };

    if (selectedItem) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedItem]);

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  // Function to open the certificate modal
  const openCertificate = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setIsEventModal(false);
  };

  // Function to open the event details modal
  const openEventDetails = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setIsEventModal(true);
  };

  // Function to handle image navigation
  const goToPreviousImage = () => {
    if (selectedItem.relatedImages) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedItem.relatedImages.length - 1 : prev - 1
      );
    }
  };

  const goToNextImage = () => {
    if (selectedItem.relatedImages) {
      setCurrentImageIndex(prev => 
        prev === selectedItem.relatedImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Determine which image to display
  const getCurrentImageSrc = () => {
    if (isEventModal && selectedItem.relatedImages && selectedItem.relatedImages.length > 0) {
      return selectedItem.relatedImages[currentImageIndex];
    }
    return selectedItem.image;
  };

  // Get image count for display
  const getImageCount = () => {
    if (isEventModal && selectedItem.relatedImages && selectedItem.relatedImages.length > 0) {
      return `${currentImageIndex + 1} / ${selectedItem.relatedImages.length}`;
    }
    return "1 / 1";
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
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight heading-font">
                Achievements & <span className={`bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-white via-gray-300 to-white' : 'from-black via-gray-700 to-black'}`}>Certifications</span>
              </h1>
              <p className={`text-lg max-w-3xl mx-auto clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A showcase of professional milestones, certifications, internships, and recognitions earned throughout my journey
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
            <div className="flex items-center gap-3 overflow-hidden">
              <Filter size={20} />
              <span className="clean-font font-medium truncate">
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
                    <span className="clean-font font-medium whitespace-nowrap truncate">{category.label}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Items Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col h-full ${darkMode ? 'border-gray-800 hover:border-white bg-black' : 'border-gray-300 hover:border-black bg-white'}`}
              >
                {/* Item Image */}
                <div 
                  className={`relative h-64 overflow-hidden cursor-pointer flex-shrink-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}
                  onClick={() => openCertificate(item)}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  ) : item.category === "certifications" ? (
                    <GraduationCap size={64} className={darkMode ? 'text-gray-700' : 'text-gray-400'} />
                  ) : item.category === "internships" ? (
                    <BriefcaseBusiness size={64} className={darkMode ? 'text-gray-700' : 'text-gray-400'} />
                  ) : (
                    <Trophy size={64} className={darkMode ? 'text-gray-700' : 'text-gray-400'} />
                  )}
                </div>

                {/* Item Content - Fixed layout with consistent spacing */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Top section - always visible */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                      <span className={`text-xs clean-font ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {item.issuer}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 heading-font line-clamp-2">{item.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                      <span className={`text-xs clean-font ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {item.date}
                      </span>
                    </div>

                    {/* Additional details for internships */}
                    {item.category === "internships" && item.position && (
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                        <span className={`text-xs clean-font ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          {item.position}
                        </span>
                      </div>
                    )}

                    {/* Description - fixed height area */}
                    <div className="mb-4 h-[60px]">
                      <p className={`text-sm clean-font line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills section - fixed height to ensure consistency */}
                  <div className="mb-4 h-[48px]">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs clean-font whitespace-nowrap ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {item.skills.length > 3 && (
                        <span className={`px-3 py-1 rounded-full text-xs clean-font ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                          +{item.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Credential ID - fixed height */}
                  <div className="h-[20px] mb-4">
                    {item.credentialId && (
                      <span className={`text-xs clean-font ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                        ID: {item.credentialId}
                      </span>
                    )}
                  </div>

                  {/* Actions - Consistent button layout pushed to bottom with mt-auto */}
                  <div className="flex gap-3 mt-auto pt-2">
                    {/* View Button */}
                    <button
                      onClick={() => openCertificate(item)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-300 text-sm clean-font font-medium ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                    
                    {/* Gallery/Event Button or placeholder */}
                    {item.relatedImages && item.relatedImages.length > 0 ? (
                      <button
                        onClick={() => openEventDetails(item)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-300 text-sm clean-font font-medium ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                      >
                        <ExternalLink size={16} />
                        <span>{item.category === "internships" ? "Gallery" : "Event"}</span>
                      </button>
                    ) : (
                      <div className="flex-1" />
                    )}
                    
                    {/* Download Button - Fixed width */}
                    <button
                      className={`w-10 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
                      aria-label="Download"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Award size={64} className={`mx-auto mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-400'}`} />
              <p className={`text-xl clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No items found in this category
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <div ref={modalRef} className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setCurrentImageIndex(0);
                  setIsEventModal(false);
                }}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              
              {/* Slideshow Navigation */}
              {isEventModal && selectedItem.relatedImages && selectedItem.relatedImages.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                    aria-label="Next"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
              
              <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                <Image
                  src={getCurrentImageSrc()}
                  alt={`${selectedItem.title} - ${isEventModal ? (selectedItem.category === "internships" ? 'Internship Gallery' : 'Event') : 'Certificate'} - ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] max-w-full"
                  unoptimized
                />
              </div>
              
              {/* Image Counter */}
              {isEventModal && selectedItem.relatedImages && selectedItem.relatedImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono bg-black/50 px-3 py-1 rounded-full">
                  {getImageCount()}
                </div>
              )}
              
              {/* Modal Title */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold text-center whitespace-nowrap bg-black/50 px-4 py-2 rounded-full">
                {isEventModal 
                  ? (selectedItem.category === "internships" ? "Internship Gallery" : "Event Details") 
                  : "Certificate View"}: {selectedItem.title.length > 40 ? selectedItem.title.substring(0, 40) + "..." : selectedItem.title}
              </div>
            </div>
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
              <Image src="/trademark.png" alt="Trademark" width={36} height={36} className="object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}