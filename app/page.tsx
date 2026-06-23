"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUp,
  X,
  Copy,
  Check,
  ExternalLink,
  GraduationCap,
  Sun,
  Moon,
  FolderOpen,
  BookOpen,
  Wrench,
  Users,
  ImageIcon,
  MessageCircle,
  Send,
  ChevronDown,
  Cpu,
  HardDrive,
  Monitor,
  LifeBuoy,
  Cable,
} from "lucide-react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
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
  SiWireshark,
  SiDart,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaFlutter, FaWindows, FaMicrosoft } from "react-icons/fa6";

// Typing Animation
const TypedText = ({ darkMode }: { darkMode: boolean }) => {
  const titles = ["Software Engineer", "Network Engineer", "IT Operations"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(60);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(130);
      }
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setTypingSpeed(130);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <span className={`font-mono text-xs tracking-[0.25em] uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
      {currentText}
      <span className={`inline-block w-0.5 h-3.5 ml-0.5 align-middle animate-pulse ${darkMode ? "bg-gray-400" : "bg-gray-500"}`} />
    </span>
  );
};

// Skill Groups
const skillGroups = [
  {
    label: "Web",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", icon: FaFlutter },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
      { name: "C++", icon: SiCplusplus },
      { name: "C#", icon: SiSharp },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon },
      { name: "VMware", icon: SiVmware },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    label: "Networking & OS",
    items: [
      { name: "Cisco", icon: SiCisco },
      { name: "Wireshark", icon: SiWireshark },
      { name: "Linux", icon: SiLinux },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Windows", icon: FaWindows },
    ],
  },
  {
    label: "Design & Tools",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Canva", icon: SiCanva },
      { name: "MS Office", icon: FaMicrosoft },
    ],
  },
  {
    label: "Hardware & IT",
    items: [
      { name: "PC Assembly", icon: Cpu },
      { name: "HW Diagnosis", icon: HardDrive },
      { name: "OS Imaging", icon: Monitor },
      { name: "IT Support", icon: LifeBuoy },
      { name: "Cabling", icon: Cable },
    ],
  },
];

// Gallery Photos
const galleryPhotos = [
  { src: "/deanlist.jpg", caption: "Dean's List Award", tag: "Academic" },
  { src: "/ircite1.jpg", caption: "IRCITE Research Citation", tag: "Research" },
  { src: "/html.jpg", caption: "HTML Certification", tag: "Certification" },
  { src: "/peso.png", caption: "PESO Certification", tag: "Certification" },
  { src: "/internship1.jpg", caption: "Internship Experience", tag: "Career" },
];

// Projects
const projects = [
  {
    title: "MindConnect",
    subtitle: "Mobile · Mental Health",
    description: "Personalized mental health support with an AI chatbot, self-assessment tools, and community forums.",
    liveProject: "/projects/mind-connect",
    image: "/mind.png",
    index: "01",
    tag: "Flutter",
    type: "mobile",
  },
  {
    title: "Plant.io",
    subtitle: "Web · Community",
    description: "Plant enthusiast hub with real-time discussions, care guides, and weather forecasting.",
    liveProject: "/projects/plant-io",
    image: "/plant.png",
    index: "02",
    tag: "React",
    type: "web",
  },
  {
    title: "KamayTeks",
    subtitle: "Mobile · Accessibility",
    description: "Real-time FSL translation bridging communication between Deaf and hearing individuals.",
    liveProject: "/projects/kamayteks",
    image: "/kamay.png",
    index: "03",
    tag: "Flutter",
    type: "mobile",
  },
  {
    title: "JoeBrew",
    subtitle: "Web · E-commerce",
    description: "Coffee shop platform with online ordering for coffee, milk tea, frappes, and takoyaki.",
    liveProject: "/projects/joe-brew",
    image: "/joebrew.png",
    index: "04",
    tag: "Next.js",
    type: "web",
  },
  {
    title: "Premiere Shots",
    subtitle: "Web · Booking System",
    description: "Photography booking platform for clients to schedule sessions with a clean interface.",
    liveProject: "/projects/premiere-shots",
    image: "/premiere.png",
    index: "05",
    tag: "PHP",
    type: "web",
  },
  {
    title: "Sir-Daniels",
    subtitle: "Web · Wholesale",
    description: "Wholesale store with interactive catalog, online ordering, and inventory management.",
    liveProject: "/projects/sir-daniels",
    image: "/daniel.png",
    index: "06",
    tag: "Laravel",
    type: "web",
  },
  {
    title: "Harmony Haven",
    subtitle: "Web · Wellness",
    description: "Wellness platform connecting users to mental health resources, mood tracking, and guided meditation sessions.",
    liveProject: "/projects/harmony-haven",
    image: "/haven.png",
    index: "07",
    tag: "React",
    type: "web",
  },
  {
    title: "USB Provisioning",
    subtitle: "Tool · IT Operations",
    description: "Automated USB provisioning system for rapid device configuration and OS deployment in enterprise environments.",
    liveProject: "/projects/usb-provisioning",
    image: "/usb.png",
    index: "08",
    tag: "Python",
    type: "automation",
  },
  {
    title: "Accountability System",
    subtitle: "Web · Internal Tool",
    description: "Internal accountability and task tracking system for teams, with progress monitoring and reporting dashboards.",
    liveProject: "/projects/accountability-system",
    image: "/acc.png",
    index: "09",
    tag: "Next.js",
    type: "web",
  },
  {
    title: "BMG-HMO Automation",
    subtitle: "Automation · HR Ops",
    description: "End-to-end HMO enrollment automation for BMG Outsourcing — eliminating manual data entry and reducing processing time by 80%.",
    liveProject: "/projects/bmg-hmo-automation",
    image: "/hmo.png",
    index: "10",
    tag: "Python",
    type: "automation",
  },
];

// Main Page
export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [activeProjectFilter, setActiveProjectFilter] = useState<"all" | "web" | "mobile" | "automation">("all");
  const [showContactModal, setShowContactModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "👋 Hey! I'm Aaron's assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ src: string; caption: string } | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [scheduleData, setScheduleData] = useState({ name: "", email: "", date: "", time: "", topic: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [footerCopyStatus, setFooterCopyStatus] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const scheduleModalRef = useRef<HTMLDivElement>(null);
  const chatModalRef = useRef<HTMLDivElement>(null);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  const sectionNavItems = [
    { id: "background", label: "Background" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "organizations", label: "Organizations" },
    { id: "gallery", label: "Gallery" },
  ];

  const scrollToSection = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
      setTimeout(() => setActiveSection(id), 800);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const iconClass = (id: string) =>
    activeSection === id
      ? darkMode ? "text-white" : "text-black"
      : darkMode ? "text-gray-500" : "text-gray-400";

  const dockItems = [
    { title: "Background", icon: <BookOpen size={18} className={iconClass("background")} />, href: "#background", onClick: scrollToSection("background") },
    { title: "Projects", icon: <FolderOpen size={18} className={iconClass("projects")} />, href: "#projects", onClick: scrollToSection("projects") },
    { title: "Skills", icon: <Wrench size={18} className={iconClass("skills")} />, href: "#skills", onClick: scrollToSection("skills") },
    { title: "Organizations", icon: <Users size={18} className={iconClass("organizations")} />, href: "#organizations", onClick: scrollToSection("organizations") },
    { title: "Gallery", icon: <ImageIcon size={18} className={iconClass("gallery")} />, href: "#gallery", onClick: scrollToSection("gallery") },
    {
      title: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-500" />,
      href: "#",
      onClick: (e?: React.MouseEvent) => { e?.preventDefault(); setDarkMode(!darkMode); },
    },
  ];

  const organizations = [
    {
      name: "Google Developer Student Clubs",
      role: "Core Member",
      period: "2022 to 2023",
      contributions: ["Hackathons and Google tech workshops", "Google Cloud community projects"],
    },
    {
      name: "NU Literates",
      role: "Active Member",
      period: "2022 to 2025",
      contributions: ["Student coding workshops", "Project showcases"],
    },
    {
      name: "AWS Cloud Club NU Baliwag",
      role: "Contributor",
      period: "2025 to 2026",
      contributions: ["AWS services workshops", "Collaborative cloud projects"],
    },
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "ayce.villaroman@gmail.com", copyable: true, action: "copy" },
    { icon: FaGoogle, label: "Gmail", value: "eyci.dev@gmail.com", copyable: true, action: "copy" },
    { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/aaron-villaroman", url: "https://www.linkedin.com/in/aaron-villaroman/", copyable: false, action: "link" },
    { icon: FaGithub, label: "GitHub", value: "github.com/ac-villaroman", url: "https://github.com/ac-villaroman", copyable: false, action: "link" },
  ];

  const handleCopy = (text: string, source: string = "general") => {
    if (typeof window === "undefined") return;
    const set = source === "footer" ? setFooterCopyStatus : setCopiedText;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => set(text)).catch(() => fallbackCopy(text, source));
    } else {
      fallbackCopy(text, source);
    }
  };

  const fallbackCopy = (text: string, source: string = "general") => {
    const set = source === "footer" ? setFooterCopyStatus : setCopiedText;
    try {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    } catch {}
    set(text);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;
    const userMessage = chatInput.trim();
    setChatInput("");
    setChatMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsChatLoading(true);
    setTimeout(() => {
      const responses = [
        "Aaron's stack is React, Next.js, Node.js, and Flutter — full-stack web and mobile.",
        "His projects include MindConnect (mental health), Plant.io (community), and KamayTeks (FSL accessibility).",
        "He's currently interning at BMG Outsourcing Inc. as an IT Operations intern in Clark, Pampanga.",
        "You can reach Aaron at ayce.villaroman@gmail.com or schedule a call through the contact form.",
      ];
      setChatMessages((prev) => [...prev, { role: "bot", content: responses[Math.floor(Math.random() * responses.length)] }]);
      setIsChatLoading(false);
    }, 900);
  };

  useEffect(() => { chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMessages]);
  useEffect(() => { if (darkMode) document.documentElement.classList.add("dark"); else document.documentElement.classList.remove("dark"); }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const midpoint = window.scrollY + window.innerHeight / 2;
      let current = "";
      for (const s of sectionNavItems) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          if (top <= midpoint) current = s.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setShowContactModal(false);
      if (scheduleModalRef.current && !scheduleModalRef.current.contains(e.target as Node)) setShowScheduleModal(false);
      if (chatModalRef.current && !chatModalRef.current.contains(e.target as Node)) setShowChatModal(false);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setShowContactModal(false); setShowScheduleModal(false); setShowChatModal(false); setLightboxPhoto(null); setShowResumeModal(false); }
    };
    if (showContactModal || showScheduleModal || showChatModal) document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => { document.removeEventListener("mousedown", handleClickOutside); document.removeEventListener("keydown", handleEscape); };
  }, [showContactModal, showScheduleModal, showChatModal]);

  useEffect(() => { if (copiedText) { const t = setTimeout(() => setCopiedText(null), 2000); return () => clearTimeout(t); } }, [copiedText]);
  useEffect(() => { if (footerCopyStatus) { const t = setTimeout(() => setFooterCopyStatus(null), 2000); return () => clearTimeout(t); } }, [footerCopyStatus]);

  const handleResumeClick = () => window.open("/resume/CV-Villaroman.pdf", "_blank");

  const submitForm = async (payload: object, onSuccess: () => void) => {
    setFormStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "5af9637a-5566-4e76-941e-655dc3d4b80c", to: "ayce.villaroman@gmail.com", ...payload }),
      });
      const result = await res.json();
      if (result.success) {
        setFormStatus("sent");
        onSuccess();
        setTimeout(() => { setShowContactModal(false); setShowScheduleModal(false); setFormStatus("idle"); }, 3000);
      } else throw new Error();
    } catch { setFormStatus("error"); setTimeout(() => setFormStatus("idle"), 3000); }
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); submitForm(formData, () => setFormData({ name: "", email: "", subject: "", message: "" })); };
  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(
      { ...scheduleData, subject: `Scheduled Call: ${scheduleData.topic}`, message: `Name: ${scheduleData.name}\nEmail: ${scheduleData.email}\nDate: ${scheduleData.date}\nTime: ${scheduleData.time}\nTopic: ${scheduleData.topic}` },
      () => setScheduleData({ name: "", email: "", date: "", time: "", topic: "" })
    );
  };

  // Theme tokens
  const bg = darkMode ? "bg-[#080808] text-white" : "bg-[#fafafa] text-black";
  const borderColor = darkMode ? "border-white/[0.07]" : "border-black/[0.07]";
  const muted = darkMode ? "text-white/30" : "text-black/30";
  const mutedText = darkMode ? "text-white/50" : "text-black/50";
  const cardBg = darkMode ? "bg-white/[0.03]" : "bg-black/[0.02]";
  const cardHover = darkMode ? "hover:bg-white/[0.05] hover:border-white/[0.12]" : "hover:bg-black/[0.04] hover:border-black/[0.12]";
  const inputBase = darkMode
    ? "bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-white/25 focus:bg-white/[0.06]"
    : "bg-black/[0.03] border-black/[0.08] text-black placeholder:text-black/25 focus:border-black/25 focus:bg-black/[0.05]";
  const btnPrimary = darkMode
    ? "bg-white text-black hover:bg-gray-100 active:scale-[0.98]"
    : "bg-black text-white hover:bg-gray-900 active:scale-[0.98]";
  const btnOutline = darkMode
    ? "border border-white/20 text-white/70 hover:border-white/50 hover:text-white active:scale-[0.98]"
    : "border border-black/20 text-black/70 hover:border-black/50 hover:text-black active:scale-[0.98]";
  const tagStyle = darkMode
    ? "bg-white/[0.06] text-white/40 border border-white/[0.08]"
    : "bg-black/[0.05] text-black/40 border border-black/[0.08]";

  const displayHeading = "text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tight leading-[0.92] mt-3";

  // Filtered projects
  const filteredProjects = projects.filter(
    (p) => activeProjectFilter === "all" || p.type === activeProjectFilter
  );

  const filterCounts = {
    all: projects.length,
    web: projects.filter((p) => p.type === "web").length,
    mobile: projects.filter((p) => p.type === "mobile").length,
    automation: projects.filter((p) => p.type === "automation").length,
  };

  return (
    <div className={`font-sans min-h-screen flex flex-col transition-colors duration-500 pb-16 sm:pb-0 ${bg}`}>

      {/* Floating Dock */}
      <div className="hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName={darkMode ? "bg-[#111]/90 backdrop-blur-md border border-white/[0.08]" : "bg-white/90 backdrop-blur-md border border-black/[0.08]"}
          mobileClassName={darkMode ? "bg-[#111]/90 backdrop-blur-md border border-white/[0.08]" : "bg-white/90 backdrop-blur-md border border-black/[0.08]"}
        />
      </div>

      {/* Mobile nav */}
      <div className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t ${darkMode ? "bg-[#0a0a0a]/95 backdrop-blur-md border-white/[0.08]" : "bg-white/95 backdrop-blur-md border-black/[0.08]"}`}>
        <div className="flex items-center justify-around px-2 py-2">
          {dockItems.map((item, i) => (
            <button
              key={i}
              onClick={(e) => item.onClick?.(e)}
              title={item.title}
              className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg transition-all duration-200 min-w-0 ${darkMode ? "hover:bg-white/[0.06] active:bg-white/[0.1]" : "hover:bg-black/[0.04] active:bg-black/[0.08]"}`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className={`font-mono text-[8px] uppercase tracking-wider leading-none truncate max-w-[48px] ${darkMode ? "text-white/30" : "text-black/30"}`}>
                {item.title === "Light Mode" || item.title === "Dark Mode" ? "Theme" : item.title}
              </span>
            </button>
          ))}
        </div>
        <div className="h-safe-bottom" style={{ height: "env(safe-area-inset-bottom, 0px)" }} />
      </div>

      <main className="flex-1">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: darkMode
                ? "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(255,255,255,0.025) 0%, transparent 70%)"
                : "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(0,0,0,0.03) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: darkMode
                ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
                : "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative z-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-10"
            >
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${darkMode ? "border-white/[0.08] bg-white/[0.04]" : "border-black/[0.08] bg-black/[0.03]"}`}>
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                />
                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${darkMode ? "text-emerald-400/80" : "text-emerald-600"}`}>
                  Open for hire
                </span>
              </div>
              <span className={`font-mono text-[10px] tracking-widest uppercase ${muted}`}>Baliwag, Bulacan, PH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(4rem,14vw,11rem)] font-black tracking-tighter leading-[0.88] mb-6 select-none"
            >
              <span className={darkMode ? "text-white" : "text-black"}>Aaron</span>
              <br />
              <span className={darkMode ? "text-white/20" : "text-black/15"}>Carl</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 h-5"
            >
              <TypedText darkMode={darkMode} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`max-w-md text-sm leading-relaxed mb-10 ${mutedText}`}
            >
              <span className={darkMode ? "text-white/80" : "text-black/80"}>Software Engineer</span> | Going Beyond Technology's Limits.{" "}
              Fresh <span className={darkMode ? "text-white/80" : "text-black/80"}>BS Information Technology</span> graduate from{" "}
              <span className={darkMode ? "text-white/80" : "text-black/80"}>National University Baliwag</span>, Class of 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <button onClick={handleResumeClick} className={`px-6 py-2.5 text-xs font-mono tracking-[0.18em] uppercase transition-all duration-200 rounded-sm ${btnPrimary}`}>
                Resume
              </button>
              <button onClick={() => setShowContactModal(true)} className={`px-6 py-2.5 text-xs font-mono tracking-[0.18em] uppercase transition-all duration-200 rounded-sm ${btnOutline}`}>
                Contact
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className={`absolute bottom-10 left-8 sm:left-16 lg:left-24 flex flex-col items-center gap-2 ${muted}`}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.div>
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="background" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Who I am</span>
              <h2 className={displayHeading}>About</h2>
            </div>

            <div className="grid md:grid-cols-[1fr_380px] gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className={`text-base leading-[1.85] ${mutedText}`}>
                  I'm <span className={darkMode ? "text-white/90" : "text-black/90"}>Aaron Carl Villaroman</span>, a fresh BS Information Technology graduate from National University Baliwag, Class of 2026. I go beyond technology's limits — building polished web and mobile interfaces while maintaining stable, secure network infrastructure.
                </p>
                <p className={`text-base leading-[1.85] ${mutedText}`}>
                  My journey started with curiosity about how websites are built, which grew into a passion for full-stack development, systems design, and networking. I work at the intersection of software and infrastructure — understanding not just how to build an app, but how it runs, scales, and stays secure.
                </p>
                <p className={`text-base leading-[1.85] ${mutedText}`}>
                  On the hardware side, I handle full <span className={darkMode ? "text-white/80" : "text-black/80"}>PC assembly and custom builds</span>, component-level <span className={darkMode ? "text-white/80" : "text-black/80"}>diagnosis and troubleshooting</span>, and repair across desktops and laptops. I configure routers, switches, and network equipment, perform OS installations and system imaging, and diagnose both hardware and software faults across enterprise environments.
                </p>
                <p className={`text-base leading-[1.85] ${mutedText}`}>
                  Outside code, I play <span className={darkMode ? "text-white/80" : "text-black/80"}>pickleball</span> and stay sharp through <span className={darkMode ? "text-white/80" : "text-black/80"}>competitive gaming</span>. Running is also a part of my life — something I make time for every week as a way to rest both body and mind.
                </p>
                <p className={`text-base leading-[1.85] ${mutedText}`}>
                  Fresh graduate from <span className={darkMode ? "text-white/80" : "text-black/80"}>National University Baliwag</span>, Class of 2026. I completed my internship at <span className={darkMode ? "text-white/80" : "text-black/80"}>BMG Outsourcing Inc.</span> where I worked across network engineering, software development, IT support, and hardware operations. Now open for full-time opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className={`border p-7 transition-all duration-300 ${borderColor} ${cardBg} ${cardHover}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-11 h-11 flex items-center justify-center flex-shrink-0 border ${borderColor} ${cardBg}`}>
                      <GraduationCap size={20} className={muted} />
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${muted}`}>Education</span>
                      <h3 className="text-base font-black tracking-tight mt-1 leading-tight">National University<br />Baliwag</h3>
                      <p className={`text-xs font-mono mt-1 ${muted}`}>BS Information Technology</p>
                    </div>
                  </div>
                  <div className={`flex items-center justify-between mb-5 pb-5 border-b ${borderColor}`}>
                    <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${borderColor} ${muted}`}>
                      BS IT · Completed
                    </span>
                    <span className={`font-mono text-xs ${muted}`}>2022 to 2026</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${mutedText}`}>
                    Graduated with a focus on <span className={darkMode ? "text-white/80" : "text-black/80"}>Mobile and Web Development</span>. Dean's List Awardee. Active in GDSC, NU Literates, and AWS Cloud Club.
                  </p>
                </div>

                <div className={`border border-t-0 p-7 transition-all duration-300 ${borderColor} ${cardBg} ${cardHover}`}>
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <div className={`w-11 h-11 flex items-center justify-center border ${borderColor} ${cardBg}`}>
                        <GraduationCap size={18} className={muted} />
                      </div>
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400"
                      />
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${muted}`}>Status</span>
                      <h3 className="text-base font-black tracking-tight mt-1">Fresh Graduate</h3>
                      <p className={`text-xs font-mono mt-1 ${muted}`}>BS Information Technology · National University Baliwag</p>
                      <p className={`text-xs font-mono mt-0.5 ${muted}`}>Class of 2026 · Open for hire</p>
                    </div>
                  </div>
                </div>

                {/* Services Card */}
                <div className={`border border-t-0 p-7 transition-all duration-300 ${borderColor} ${cardBg} ${cardHover}`}>
                  <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${muted}`}>Services I Offer</span>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Web & Mobile Dev", desc: "End-to-end application development across web and mobile platforms" },
                      { label: "PC Assembly & Repair", desc: "Custom builds, component-level diagnosis, and hardware troubleshooting" },
                      { label: "Network Engineering", desc: "Infrastructure setup, device configuration, cabling, and connectivity management" },
                      { label: "IT Support & Ops", desc: "Helpdesk, system provisioning, asset management, and process automation" },
                    ].map((item, i) => (
                      <div key={i} className={`flex flex-col gap-0.5 pb-3 border-b last:border-0 last:pb-0 ${darkMode ? "border-white/[0.05]" : "border-black/[0.05]"}`}>
                        <span className={`text-xs font-bold tracking-tight ${darkMode ? "text-white/70" : "text-black/70"}`}>{item.label}</span>
                        <span className={`text-[11px] leading-relaxed ${mutedText}`}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Work</span>
              <h2 className={displayHeading}>Experience</h2>
            </div>

            <div className="relative">
              <div className={`absolute left-[7px] top-2 bottom-2 w-px ${darkMode ? "bg-white/[0.06]" : "bg-black/[0.06]"}`} />
              <div className="space-y-14 pl-10">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute -left-10 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${darkMode ? "bg-white border-white" : "bg-black border-black"}`}>
                    <motion.div
                      animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`font-mono text-xs ${muted}`}>2024 to Present</span>
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
                    >
                      Current
                    </motion.span>
                  </div>

                  <h3 className="text-xl font-black tracking-tight mb-1">IT Operations Intern</h3>
                  <p className={`font-mono text-xs mb-6 ${muted}`}>BMG Outsourcing Inc. · On-Site, Clark Freeport Zone, Pampanga</p>

                  <div className={`border ${borderColor} ${cardBg} divide-y ${darkMode ? "divide-white/[0.05]" : "divide-black/[0.05]"}`}>
                    {[
                      { num: "40%", text: "Reduction in manual effort via automation scripts for system monitoring and reporting." },
                      { num: "∞", text: "Designed and implemented internal tools for IT ticketing and asset management." },
                      { num: "100+", text: "Employees supported across multiple departments with technical troubleshooting." },
                      { num: "Net", text: "Configured and maintained network infrastructure including routers, switches, and firewalls." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 px-5 py-3.5">
                        <span className={`font-mono text-xs font-bold flex-shrink-0 w-10 ${darkMode ? "text-white/40" : "text-black/40"}`}>{item.num}</span>
                        <p className={`text-sm ${mutedText}`}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Selected Work</span>
              <h2 className={displayHeading}>Projects</h2>
            </div>

            {/* Filter tabs */}
            <div className={`flex flex-wrap items-center gap-2 mb-10 pb-10 border-b ${borderColor}`}>
              {(["all", "web", "mobile", "automation"] as const).map((f) => {
                const isActive = activeProjectFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveProjectFilter(f)}
                    className={`flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] uppercase tracking-widest border transition-all duration-200 ${
                      isActive
                        ? darkMode
                          ? "bg-white text-black border-white"
                          : "bg-black text-white border-black"
                        : `${borderColor} ${muted} ${darkMode ? "hover:border-white/30 hover:text-white/70" : "hover:border-black/30 hover:text-black/70"}`
                    }`}
                  >
                    {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                    <span className={`ml-0.5 ${isActive ? darkMode ? "text-black/40" : "text-white/40" : ""}`}>
                      {filterCounts[f]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-r-0 border-b-0" style={{ borderColor: darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)" }}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`group relative flex flex-col border-r border-b overflow-hidden transition-all duration-300 ${darkMode ? "border-white/[0.07] bg-[#080808] hover:bg-white/[0.03]" : "border-black/[0.07] bg-[#fafafa] hover:bg-black/[0.02]"}`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`aspect-[4/3] overflow-hidden relative flex items-center justify-center ${darkMode ? "bg-[#0d0d0d]" : "bg-[#f0f0f0]"}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-16 h-16 opacity-20">
                        <FolderOpen size={64} strokeWidth={1} />
                      </div>
                    )}

                    {activeProjectFilter === "all" && (
                      <div className="absolute top-2 left-3 flex items-baseline leading-none select-none" style={{ fontSize: "clamp(2.8rem, 6.5vw, 4.5rem)" }}>
                        <span className={`font-black tracking-tighter ${darkMode ? "text-white" : "text-black"}`}>
                          {project.index[0]}
                        </span>
                        <span className={`font-black tracking-tighter ${darkMode ? "text-white/15" : "text-black/12"}`}>
                          {project.index[1]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${muted}`}>{project.subtitle}</span>
                    <h3 className="text-lg font-black tracking-tight mb-2">{project.title}</h3>
                    <p className={`text-xs leading-relaxed flex-1 mb-4 ${mutedText}`}>{project.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`font-mono text-[10px] px-2 py-1 tracking-widest border ${tagStyle}`}>
                        {project.tag}
                      </span>
                      <a
                        href={project.liveProject ?? "#"}
                        className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-200 group/link w-fit ${darkMode ? "text-white/30 hover:text-white" : "text-black/30 hover:text-black"}`}
                      >
                        View Project
                        <ArrowRight size={10} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Toolkit</span>
              <h2 className={displayHeading}>Skills</h2>
            </div>
            <div className="space-y-12">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 }}
                >
                  <div className="flex items-center gap-4 mb-7">
                    <span className={`font-mono text-[10px] uppercase tracking-widest flex-shrink-0 ${muted}`}>{group.label}</span>
                    <div className={`h-px flex-1 ${darkMode ? "bg-white/[0.06]" : "bg-black/[0.06]"}`} />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        whileHover={{ y: -2 }}
                        className={`flex items-center gap-2 px-3 py-2 border transition-all duration-200 cursor-default group ${darkMode ? "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]" : "border-black/[0.06] hover:border-black/20 hover:bg-black/[0.03]"}`}
                      >
                        <skill.icon
                          size={14}
                          className={`flex-shrink-0 transition-colors duration-200 ${darkMode ? "text-white/25 group-hover:text-white/70" : "text-black/25 group-hover:text-black/70"}`}
                        />
                        <span className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-200 ${darkMode ? "text-white/25 group-hover:text-white/60" : "text-black/25 group-hover:text-black/60"}`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ORGANIZATIONS */}
        <section id="organizations" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Community</span>
              <h2 className={displayHeading}>Organizations</h2>
            </div>
            <div>
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className={`grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 py-8 border-t transition-all duration-200 group ${borderColor} ${cardHover} px-2 -mx-2`}
                >
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">{org.name}</h3>
                    <p className={`font-mono text-[10px] mt-1 ${muted}`}>{org.period}</p>
                  </div>
                  <div>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${muted}`}>{org.role}</span>
                    <ul className="mt-2 space-y-1">
                      {org.contributions.map((c, i) => (
                        <li key={i} className={`text-xs flex items-start gap-2 ${mutedText}`}>
                          <span className={`mt-1.5 w-2.5 h-px flex-shrink-0 ${darkMode ? "bg-white/15" : "bg-black/15"}`} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 border self-start ${darkMode ? "border-emerald-400/30 text-emerald-400/60" : "border-emerald-600/30 text-emerald-600/60"}`}>
                    Active
                  </span>
                </motion.div>
              ))}
              <div className={`border-t ${borderColor}`} />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Achievements</span>
              <h2 className={displayHeading}>Gallery</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {galleryPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className={`relative group cursor-pointer overflow-hidden aspect-[3/4] ${darkMode ? "bg-[#0d0d0d]" : "bg-[#f0f0f0]"}`}
                  onClick={() => setLightboxPhoto({ src: photo.src, caption: photo.caption })}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className={`absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? "bg-gradient-to-t from-black/70 to-transparent" : "bg-gradient-to-t from-white/70 to-transparent"}`}>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${tagStyle} w-fit px-2 py-0.5 mb-1.5`}>{photo.tag}</span>
                    <p className={`font-mono text-[10px] ${darkMode ? "text-white/80" : "text-black/80"}`}>{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className={`border-t ${borderColor} py-28 sm:py-36 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Let's talk</span>
              <h2 className={displayHeading}>
                Let's Work<br />
                <span className={darkMode ? "text-white/20" : "text-black/15"}>Together</span>
              </h2>
              <p className={`mt-6 text-sm leading-relaxed max-w-sm ${mutedText}`}>
                Have a project in mind or an opportunity? I'd love to hear about it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button onClick={() => setShowContactModal(true)} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} className={`px-7 py-3 text-xs font-mono tracking-[0.18em] uppercase transition-all duration-200 rounded-sm ${btnPrimary}`}>
                Send Message
              </motion.button>
              <motion.button onClick={() => setShowScheduleModal(true)} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} className={`px-7 py-3 text-xs font-mono tracking-[0.18em] uppercase transition-all duration-200 rounded-sm ${btnOutline}`}>
                Schedule Call
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setShowResumeModal(false)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-4xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className={`flex items-center justify-between px-4 py-3 border-b ${darkMode ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}>
                <span className={`font-mono text-xs uppercase tracking-widest ${muted}`}>CV · Villaroman</span>
                <div className="flex items-center gap-3">
                  <a href="/resume/CV-Villaroman.pdf" download="CV-Villaroman.pdf" className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 border transition-all ${btnOutline}`}>Download</a>
                  <button onClick={() => setShowResumeModal(false)} className={`${muted} hover:text-white transition-colors`}><X size={18} /></button>
                </div>
              </div>
              <iframe src="/resume/CV-Villaroman.pdf#toolbar=0&navpanes=0&scrollbar=0" className="flex-1 w-full" title="Resume" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/96 backdrop-blur-sm p-4" onClick={() => setLightboxPhoto(null)}>
            <motion.div initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }} className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightboxPhoto(null)} className="absolute -top-10 right-0 text-white/40 hover:text-white transition-colors"><X size={20} /></button>
              <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} className="w-full h-auto max-h-[80vh] object-contain" />
              <p className={`font-mono text-[10px] uppercase tracking-widest mt-4 text-center ${muted}`}>{lightboxPhoto.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {showChatModal && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 sm:bottom-6"
          >
            <div
              ref={chatModalRef}
              className={`relative w-[360px] h-[480px] flex flex-col shadow-2xl border overflow-hidden ${darkMode ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}
            >
              <div className={`flex items-center justify-between px-4 py-3 border-b ${borderColor} flex-shrink-0`}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-8 h-8 flex items-center justify-center border ${borderColor} ${cardBg}`}>
                      <MessageCircle size={14} className={muted} />
                    </div>
                    <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#0a0a0a]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-tight">AC's Assistant</h3>
                    <span className={`text-[9px] font-mono ${muted}`}>Online · Powered by AI</span>
                  </div>
                </div>
                <button onClick={() => setShowChatModal(false)} className={`${muted} hover:text-white transition-colors`}><X size={16} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-3.5 py-2 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? darkMode ? "bg-white text-black" : "bg-black text-white"
                        : `border ${borderColor} ${cardBg} ${mutedText}`
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className={`px-3.5 py-2 border ${borderColor} ${cardBg}`}>
                      <span className="flex gap-1.5 items-center">
                        {[0, 0.2, 0.4].map((d, i) => (
                          <motion.span key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: d }} className={`w-1 h-1 rounded-full ${darkMode ? "bg-white/40" : "bg-black/40"}`} />
                        ))}
                      </span>
                    </div>
                  </div>
                )}
                <div ref={chatMessagesEndRef} />
              </div>

              <form onSubmit={handleChatSubmit} className={`flex items-center gap-2 p-3 border-t ${borderColor} flex-shrink-0`}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-3 py-2 text-xs border transition-all duration-200 focus:outline-none ${inputBase}`}
                  disabled={isChatLoading}
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isChatLoading}
                  className={`p-2 border transition-all duration-200 flex-shrink-0 ${
                    !chatInput.trim() || isChatLoading
                      ? `${borderColor} ${muted} cursor-not-allowed`
                      : darkMode ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/10"
                  }`}
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setShowContactModal(false)}>
            <motion.div ref={modalRef} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className={`relative max-w-sm w-full shadow-2xl p-6 border ${darkMode ? "bg-[#0a0a0a] border-white/[0.1]" : "bg-white border-black/[0.1]"}`} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowContactModal(false)} className={`absolute top-3 right-3 ${muted} hover:text-white transition-colors`}><X size={16} /></button>
              <span className={`font-mono text-[9px] tracking-widest uppercase ${muted}`}>Contact</span>
              <h3 className="text-xl font-black tracking-tight mt-0.5 mb-5">Get in Touch</h3>
              <div className="space-y-2">
                {contactInfo.map((item, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 border transition-all duration-200 ${borderColor} ${cardHover}`}>
                    <div className="flex items-center gap-3 min-w-0">
                      <item.icon size={13} className={`flex-shrink-0 ${muted}`} />
                      <div className="min-w-0">
                        <p className={`text-[9px] font-mono uppercase tracking-widest ${muted}`}>{item.label}</p>
                        <p className="text-xs truncate">{item.value}</p>
                      </div>
                    </div>
                    {item.action === "copy" ? (
                      <button onClick={() => handleCopy(item.value)} className={`p-1.5 border flex-shrink-0 transition-all duration-200 ${darkMode ? "border-white/[0.08] hover:border-white/30 text-white/40 hover:text-white" : "border-black/[0.08] hover:border-black/30 text-black/40 hover:text-black"}`}>
                        {copiedText === item.value ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      </button>
                    ) : (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className={`p-1.5 border flex-shrink-0 transition-all duration-200 ${darkMode ? "border-white/[0.08] hover:border-white/30 text-white/40 hover:text-white" : "border-black/[0.08] hover:border-black/30 text-black/40 hover:text-black"}`}>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schedule Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <motion.div ref={scheduleModalRef} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className={`relative max-w-md w-full shadow-2xl p-7 border ${darkMode ? "bg-[#0a0a0a] border-white/[0.1]" : "bg-white border-black/[0.1]"}`}>
              <button onClick={() => setShowScheduleModal(false)} className={`absolute top-4 right-4 ${muted} transition-colors hover:text-white`}><X size={18} /></button>
              <span className={`font-mono text-[9px] tracking-widest uppercase ${muted}`}>Book a Time</span>
              <h3 className="text-2xl font-black tracking-tight mt-1 mb-6">Schedule a Call</h3>
              {formStatus === "sent" ? (
                <div className="py-10 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 border mb-4 ${borderColor}`}><Check size={20} className="text-emerald-400" /></div>
                  <p className="font-bold">Scheduled!</p>
                  <p className={`text-sm mt-1 ${mutedText}`}>I'll confirm via email.</p>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "date", label: "Date", type: "date" },
                    { name: "time", label: "Time", type: "time" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className={`block font-mono text-[9px] uppercase tracking-widest mb-1.5 ${muted}`}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={scheduleData[f.name as keyof typeof scheduleData]}
                        onChange={(e) => setScheduleData((prev) => ({ ...prev, [f.name]: e.target.value }))}
                        required
                        min={f.type === "date" ? new Date().toISOString().split("T")[0] : undefined}
                        className={`w-full px-3 py-2.5 border text-sm focus:outline-none transition-all duration-200 ${inputBase}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className={`block font-mono text-[9px] uppercase tracking-widest mb-1.5 ${muted}`}>Topic</label>
                    <select
                      name="topic"
                      value={scheduleData.topic}
                      onChange={(e) => setScheduleData((prev) => ({ ...prev, topic: e.target.value }))}
                      required
                      className={`w-full px-3 py-2.5 border text-sm focus:outline-none transition-all duration-200 ${inputBase}`}
                    >
                      <option value="">Select a topic</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className={`w-full py-3 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-200 rounded-sm ${formStatus === "sending" ? `opacity-50 cursor-not-allowed ${btnPrimary}` : btnPrimary}`}
                  >
                    {formStatus === "sending" ? "Scheduling..." : "Confirm Schedule"}
                  </button>
                  {formStatus === "error" && <p className="text-red-400 text-xs text-center font-mono">Something went wrong. Please try again.</p>}
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`border-t ${borderColor} py-8 px-8 sm:px-16 lg:px-24`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className={`font-mono text-[10px] ${muted}`}>© 2025 Aaron Carl Villaroman</span>
            <span className={`font-mono text-[10px] ml-3 ${muted} hidden sm:inline`}>Code smart, not just hard.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Email", icon: FaEnvelope, action: () => handleCopy("ayce.villaroman@gmail.com", "footer"), copied: footerCopyStatus === "ayce.villaroman@gmail.com" },
              { label: "Gmail", icon: FaGoogle, action: () => handleCopy("eyci.dev@gmail.com", "footer"), copied: footerCopyStatus === "eyci.dev@gmail.com" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`font-mono text-[10px] transition-colors flex items-center gap-1.5 ${darkMode ? "text-white/30 hover:text-white" : "text-black/30 hover:text-black"}`}
                type="button"
              >
                <item.icon size={10} />
                {item.label}
                {item.copied && <Check size={9} className="text-emerald-400" />}
              </button>
            ))}

            <span className={`text-[10px] ${muted}`}>·</span>

            {[
              { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/aaron-villaroman/" },
              { label: "GitHub", icon: FaGithub, href: "https://github.com/ac-villaroman" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-[10px] transition-colors flex items-center gap-1.5 ${darkMode ? "text-white/30 hover:text-white" : "text-black/30 hover:text-black"}`}
              >
                <item.icon size={10} />
                {item.label}
                <ExternalLink size={8} className="opacity-40" />
              </a>
            ))}

            <span className={`text-[10px] ${muted}`}>·</span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`w-6 h-6 flex items-center justify-center border transition-all duration-200 ${darkMode ? "border-white/[0.08] text-white/30 hover:border-white/30 hover:text-white" : "border-black/[0.08] text-black/30 hover:border-black/30 hover:text-black"}`}
              type="button"
            >
              <ArrowUp size={11} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <AnimatePresence>
        {!showChatModal && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowChatModal(true)}
            aria-label="Chat with AC"
            className={`fixed bottom-6 right-6 z-40 sm:bottom-6 flex items-center gap-2.5 px-4 py-3 border shadow-lg transition-all duration-200 ${darkMode ? "bg-[#0a0a0a] border-white/[0.12] text-white/60 hover:text-white hover:border-white/30" : "bg-white border-black/[0.12] text-black/60 hover:text-black hover:border-black/30"}`}
          >
            <MessageCircle size={15} />
            <span className="font-mono text-[10px] uppercase tracking-widest">Chat with AC</span>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
