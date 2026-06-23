"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, 
  Palette, 
  Database, 
  Cpu, 
  GraduationCap, 
  Briefcase,
  Mail,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  Heart,
  Gamepad2,
  Music,
  Coffee,
  Home,
  User,
  FolderOpen,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sun,
  Moon,
  Users,
  Building,
  X,
  Server,
  Cloud,
  Wrench,
  Network,
  Shield,
  Smartphone,
  Laptop,
  Terminal,
  Router
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaGoogle, FaReact, FaNode, FaFilter, FaMicrosoft, FaWindows } from "react-icons/fa";
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiSharp,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiAdobephotoshop,
  SiCanva,
  SiLinux,
  SiUbuntu,
  SiCisco,
  SiVmware,
  SiPostman,
  SiWireshark
} from "react-icons/si";
import { 
  FiCpu, 
  FiHardDrive, 
  FiSettings,
  FiTool
} from "react-icons/fi";
import { FaFlutter } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";

// Define TechItem interface
export interface TechItem {
  name: string;
  icon: any;
  color: string;
}

// Your existing tech stack (colors won't be used for icons now)
export const techStack: TechItem[] = [
  // Web & Dev
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C#", icon: SiSharp, color: "#239120" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },

  // Design & Productivity
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Microsoft Office", icon: FaMicrosoft, color: "#D83B01" },

  // OS & Platforms
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "Windows", icon: FaWindows, color: "#0078D6" },

  // DevOps & Cloud
  { name: "VMware", icon: SiVmware, color: "#607078" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  // Networking
  { name: "Cisco", icon: SiCisco, color: "#1BA0E2" },
  { name: "Wireshark", icon: SiWireshark, color: "#0178B8" },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const controls = useAnimation();

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/projects", label: "Projects", icon: <Briefcase size={18} /> },
    { href: "/gallery", label: "Gallery", icon: <FolderOpen size={18} /> },
  ];

  const sectionNavItems = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "organizations", label: "Organizations", icon: Users },
    { id: "skills", label: "Skills", icon: Code },
  ];

  // Experience data
  const experiences = [
    {
      company: "BMG Outsourcing Inc.",
      location: "Cebu City, Philippines (Remote)",
      role: "IT Operations Intern",
      period: "2024 - Present",
      icon: Building,
      description: "Comprehensive IT internship covering networking engineering, software development, and technical support operations.",
      responsibilities: [
        {
          category: "Network Engineering",
          icon: Router,
          items: [
            "Assisted in network configuration, monitoring, and maintenance for client infrastructure",
            "Performed network troubleshooting and diagnostics using various tools",
            "Supported the implementation of network security protocols and best practices"
          ]
        },
        {
          category: "Software Engineering",
          icon: Terminal,
          items: [
            "Contributed to internal tool development and software maintenance projects",
            "Participated in code reviews and collaborative development sessions",
            "Assisted in debugging and optimizing existing applications"
          ]
        },
        {
          category: "IT Technical Support",
          icon: Laptop,
          items: [
            "Provided end-user technical support and resolved hardware/software issues",
            "Managed IT ticketing system and documented support procedures",
            "Assisted in system deployments and user account management"
          ]
        }
      ],
      technologies: ["Networking", "Troubleshooting", "Software Development", "IT Support", "System Administration"]
    }
  ];

  // Organizations data
  const organizations = [
    {
      name: "Google Developer Student Clubs",
      role: "Core Member",
      period: "2023 - Present",
      image: "/org2.jpg",
      description: "Collaborating with developers to build solutions using Google technologies",
      achievements: [
        "Participated in hackathons and tech workshops",
        "Collaborated on community projects using Google Cloud",
        "Engaged in knowledge sharing sessions with fellow developers"
      ]
    },
    {
     name: "NU Literates",
role: "Active Member",
period: "2022 - Present",
image: "/org1.jpg",
description: "University programming community focused on coding competitions and skill development",
achievements: [
  "Organized workshops for students",
  "Showcased my personal projects"

      ]
    },
    {
   name: "AWS Cloud Club National University Baliwag",
role: "Contributor",
period: "2022 - Present",
image: "/org7.jpg",
description: "Community of students exploring cloud computing, AWS services, and collaborative projects",
achievements: [
  "Conducted workshops on cloud computing and AWS services",
  "Built collaborative cloud projects with community members"
]

    }
  ];

  // Organize tech stack into categories using your existing techStack array
  const skills = {
    "Web Development": techStack.filter(tech => 
      ["JavaScript", "React", "Node.js", "Next.js", "HTML5", "CSS3", "TypeScript", "Tailwind", "Express"].includes(tech.name)
    ),
    "Mobile Development": [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: FaFlutter, color: "#02569B" }
    ],
    "Programming Languages": techStack.filter(tech =>
      ["Python", "C++", "C#", "PHP", "JavaScript", "TypeScript"].includes(tech.name)
    ),
    "Database Management": techStack.filter(tech =>
      ["MySQL", "MongoDB", "Firebase"].includes(tech.name)
    ),
    "DevOps & Cloud": techStack.filter(tech =>
      ["Git", "Docker", "AWS", "Postman", "VMware"].includes(tech.name)
    ),
    "Design Tools": techStack.filter(tech =>
      ["Figma", "Photoshop", "Canva", "Microsoft Office"].includes(tech.name)
    ),
    "Operating Systems": techStack.filter(tech =>
      ["Linux", "Ubuntu", "Windows"].includes(tech.name)
    ),
    "Networking": techStack.filter(tech =>
      ["Cisco", "Wireshark"].includes(tech.name)
    ),
    "Hardware & PC Building": [
      { name: "PC Assembly", icon: FiCpu, color: "#FFFFFF" },
      { name: "Troubleshooting", icon: FiTool, color: "#FFFFFF" },
      { name: "Performance Optimization", icon: FiSettings, color: "#FFFFFF" },
      { name: "Component Selection", icon: FiHardDrive, color: "#FFFFFF" }
    ]
  };

  const education = [
    {
      institution: "National University Baliwag",
      degree: "Bachelor of Science in Information Technology",
      status: "In Progress • 4th Year",
      period: "2021 - Present",
      icon: GraduationCap,
      achievements: [
        "Specializing in Web and Mobile Development",
      ]
    },
  ];

  const socialLinks = [
    { href: "https://github.com/aaroncarl", icon: FaGithub, label: "GitHub", color: "#333" },
    { href: "https://www.linkedin.com/in/aaron-villaroman/", icon: FaLinkedin, label: "LinkedIn", color: "#0077B5" },
    { href: "https://www.facebook.com/ac.villaroman", icon: FaFacebook, label: "Facebook", color: "#1877F2" },
    { href: "https://www.youtube.com/@AcVillaroman-k8r", icon: FaYoutube, label: "YouTube", color: "#FF0000" },
    { href: "https://twitter.com/blyrmn", icon: FaTwitter, label: "Twitter", color: "#1DA1F2" },
    { href: "https://www.instagram.com/_blyrmn/", icon: FaInstagram, label: "Instagram", color: "#E4405F" },
    { href: "eycivillaroman@gmail.com", icon: FaEnvelope, label: "Email", color: "#EA4335" }
  ];

  // Load Bebas Neue and Inter fonts
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
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = sectionNavItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setTimeout(() => setActiveSection(sectionId), 1000);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    controls.start({
      scale: [1, 0.95, 1],
      transition: { duration: 0.3, times: [0, 0.5, 1] }
    });
  }, [controls]);

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

      {/* Side Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sectionNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="group relative flex items-center" aria-label={item.label}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${darkMode ? (isActive ? 'border-white bg-white text-black scale-110' : 'border-gray-700 bg-black hover:border-white hover:scale-110') : (isActive ? 'border-gray-900 bg-gray-900 text-white scale-110' : 'border-gray-300 bg-white hover:border-gray-900 hover:scale-110')}`}>
                  <Icon size={20} />
                </div>
                <span className={`absolute left-16 whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${darkMode ? (isActive ? 'opacity-100 translate-x-0 bg-white text-black' : 'opacity-0 -translate-x-2 bg-gray-800 group-hover:opacity-100 group-hover:translate-x-0') : (isActive ? 'opacity-100 translate-x-0 bg-gray-900 text-white' : 'opacity-0 -translate-x-2 bg-gray-200 group-hover:opacity-100 group-hover:translate-x-0')} clean-font`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Section - Image Left, Content Right */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              opacity: darkMode ? 0.1 : 0.05,
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 60px rgba(255,255,255,0.3)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 2 
                    }}
                    className={`w-72 h-72 md:w-96 md:h-96 rounded-full border-4 flex items-center justify-center overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-white/30' : 'bg-gradient-to-br from-gray-200 to-gray-300 border-black/30'}`}
                  >
                  <Image
  src="/profile.png"
  alt="Aaron Carl Villaroman"
  width={384}
  height={384}
  className="rounded-full object-cover w-full h-full"
  style={{ objectPosition: 'center 30%' }}
/>

                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                  <span className="heading-font">Aaron Carl</span>{" "}
                  <span className={`block bg-gradient-to-r bg-clip-text text-transparent bold-font ${darkMode ? 'from-white via-gray-300 to-white' : 'from-black via-gray-700 to-black'}`}>
                    Villaroman
                  </span>
                </h1>
                
                <motion.div 
                  className={`text-2xl md:text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  animate={controls}
                >
                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.3)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3 
                    }}
                    className={`inline-block px-4 py-1 rounded heading-font ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    Software Engineer
                  </motion.span>
                </motion.div>
                
                <div className={`flex items-center justify-center md:justify-start gap-2 mb-8 text-base clean-font ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  <MapPin size={20} />
                  <span>Baliwag, Bulacan, Philippines</span>
                </div>
                
<p className={`text-base md:text-lg leading-relaxed mb-8 clean-font ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  Hi, I’m <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}>Aaron Carl Villaroman</span>, 
  a 4th-year <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}>BS Information Technology</span> student at 
  <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}> National University Baliwag</span>, specializing in 
  <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}> Web and Mobile Application Development</span>. 
  My journey began with a deep interest in <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}>frontend development</span>, 
  where I gradually expanded my skills and developed myself into a 
  <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}> full-stack developer</span>. 
  I’m driven by a strong <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}>will to learn and adapt</span>, 
  constantly seeking opportunities that challenge me and 
  <span className={`semibold-font ${darkMode ? 'text-white' : 'text-black'}`}> push me beyond my own capabilities</span>.
</p>

                
                <div className="flex gap-3 justify-center md:justify-start flex-wrap relative">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      className="relative"
                      onMouseEnter={() => setActiveTooltip(social.label)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <motion.a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 clean-font ${darkMode ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'}`}
                        style={{
                          boxShadow: `0 0 0px ${social.color}00`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 0px ${social.color}00`;
                        }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                      
                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ 
                          opacity: activeTooltip === social.label ? 1 : 0,
                          y: activeTooltip === social.label ? 0 : 10,
                          scale: activeTooltip === social.label ? 1 : 0.8
                        }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 text-xs clean-font font-medium rounded-md shadow-lg border whitespace-nowrap z-50 ${darkMode ? 'bg-white text-black border-gray-200' : 'bg-black text-white border-gray-700'}`}
                        style={{
                          pointerEvents: 'none'
                        }}
                      >
                        {social.label}
                        <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border-l border-t rotate-45 ${darkMode ? 'bg-white border-gray-200' : 'bg-black border-gray-700'}`}></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center heading-font">Education</h2>
            <p className={`text-center mb-16 text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>

            </p>

            <div className="space-y-8">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`border rounded-2xl p-8 transition-all duration-300 ${darkMode ? 'border-gray-800 hover:border-white bg-black' : 'border-gray-300 hover:border-black bg-white'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 heading-font">{edu.institution}</h3>
                          <p className={`text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.degree}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm clean-font ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                          {edu.status}
                        </span>
                        <div className={`flex items-center gap-2 text-sm clean-font ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-3 text-sm md:text-base clean-font ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${darkMode ? 'bg-white' : 'bg-black'}`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center heading-font">Professional Experience</h2>
            <p className={`text-center mb-16 text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Real-world experience in IT operations and development
            </p>

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`border rounded-2xl p-8 transition-all duration-300 ${darkMode ? 'border-gray-800 hover:border-white bg-black' : 'border-gray-300 hover:border-black bg-white'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 heading-font">{exp.company}</h3>
                          <p className={`text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.role}</p>
                          <p className={`text-sm clean-font ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{exp.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm clean-font ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                          Internship
                        </span>
                        <div className={`flex items-center gap-2 text-sm clean-font ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mb-6 text-base clean-font ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-6">
                      {exp.responsibilities.map((category, catIndex) => {
                        const CatIcon = category.icon;
                        return (
                          <div key={catIndex} className="space-y-3">
                            <h4 className={`text-lg font-semibold flex items-center gap-2 clean-font ${darkMode ? 'text-white' : 'text-black'}`}>
                              <CatIcon size={18} />
                              {category.category}
                            </h4>
                            <ul className="space-y-2 ml-6">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={`flex items-start gap-3 text-sm md:text-base clean-font ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${darkMode ? 'bg-white' : 'bg-black'}`} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full clean-font ${darkMode ? 'bg-white/10 text-gray-300' : 'bg-black/10 text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Organizations Section */}
        <section id="organizations" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center heading-font">Organizations</h2>
            <p className={`text-center mb-16 text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Communities and groups I'm actively involved with
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${darkMode ? 'border-gray-800 hover:border-white bg-black' : 'border-gray-300 hover:border-black bg-white'}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                      <Image
                        src={org.image}
                        alt={org.name}
                        width={64}
                        height={64}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-1 heading-font">{org.name}</h3>
                      <p className={`text-sm clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{org.role}</p>
                      <div className={`flex items-center gap-2 mt-1 text-xs clean-font ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        <Calendar size={12} />
                        <span>{org.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`mb-4 text-sm clean-font ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {org.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className={`text-sm font-semibold clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Key Contributions:</h4>
                    <ul className="space-y-1">
                      {org.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 text-xs clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - PLAIN ICONS that work in both dark and light mode */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center heading-font">Technical Skills</h2>
            <p className={`text-center mb-16 text-base md:text-lg clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A comprehensive toolkit for building modern digital experiences
            </p>

            <div className="space-y-16">
              {Object.entries(skills).map(([category, items], catIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 justify-center heading-font">
                    {category === "Web Development" && <Code size={32} />}
                    {category === "Mobile Development" && <Smartphone size={32} />}
                    {category === "Programming Languages" && <Cpu size={32} />}
                    {category === "Database Management" && <Database size={32} />}
                    {category === "DevOps & Cloud" && <Cloud size={32} />}
                    {category === "Design Tools" && <Palette size={32} />}
                    {category === "Operating Systems" && <Server size={32} />}
                    {category === "Networking" && <Network size={32} />}
                    {category === "Hardware & PC Building" && <Cpu size={32} />}
                    {category}
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {items.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="group flex flex-col items-center justify-center gap-4 p-4"
                        >
                          <Icon 
                            size={48} 
                            className={`transition-all duration-300 group-hover:scale-110 ${
                              darkMode ? 'text-white' : 'text-gray-700'
                            }`}
                          />
                          <p className={`text-center text-sm md:text-base font-semibold transition-colors clean-font ${
                            darkMode 
                              ? 'text-gray-300 group-hover:text-white' 
                              : 'text-gray-600 group-hover:text-black'
                          }`}>
                            {skill.name}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Let's Create Something Amazing</h2>
            <p className={`text-lg md:text-xl mb-8 clean-font ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Interested in working together? I'm always open to discussing new projects and opportunities.
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