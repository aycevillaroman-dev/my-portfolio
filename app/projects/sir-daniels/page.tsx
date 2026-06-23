"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ExternalLink,
  ChevronDown,
  Check,
  Sun,
  Moon,
  BookOpen,
  Wrench,
  Code,
  ShoppingCart,
} from "lucide-react";
import { FaEnvelope, FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";

// ─── Project Data ──────────────────────────────────────────────────────────────
const project = {
  title: "Harmony Haven",
  subtitle: "Wellness Retreat & Activity Platform",
  publishedAt: "2024-10-15",
  summary:
    "A full-stack wellness platform enabling users to book retreats, schedule activities, and track their wellness journey — with real-time availability, personalized recommendations, and a comprehensive dashboard.",
  overview: `Harmony Haven is a wellness retreat reservation platform built to simplify the process of discovering and booking transformative experiences. The platform addresses the growing need for accessible wellness services by providing a centralized hub where users can explore retreats, book activities, and track their personal wellness journey.

The frontend is built with HTML5, CSS3, and vanilla JavaScript, delivering a serene and intuitive interface that guides users through the booking process. The design emphasizes calmness and clarity, with smooth animations and a clean visual hierarchy that makes complex scheduling feel effortless.

The backend leverages PHP for server-side logic and API routing, with MySQL handling user profiles, booking records, and activity data. The system features a real-time availability engine that prevents double-booking and provides instant feedback to users. PHP sessions manage user authentication, while prepared statements ensure data security against SQL injection.

Key technical highlights include a dynamic calendar interface for activity scheduling, a personalized wellness dashboard that visualizes progress, and an automated notification system that sends reminders and confirmations via email. The platform was built as part of a three-person team for a Data Structures and Algorithms course, with a focus on efficient data management and algorithmic problem-solving.

This project pushed me to think deeply about data modeling for complex scheduling scenarios, implementing efficient search algorithms for activity recommendations, and designing a system that feels responsive and reliable even under concurrent booking loads. All development was done using XAMPP as the local server environment, with PHP handling the business logic and MySQL managing the relational data.`,
  features: [
    "Real-time retreat booking with conflict detection and instant availability confirmation using PHP and MySQL",
    "Dynamic calendar interface for scheduling wellness activities with JavaScript",
    "Personalized wellness dashboard tracking user progress and activity history",
    "Curated activity recommendations based on user preferences and past bookings",
    "Secure user authentication with PHP sessions and encrypted password storage",
    "Automated email notifications for booking confirmations and reminders using PHP mailer",
    "Responsive design optimized for both desktop and mobile wellness seekers",
    "Admin dashboard for managing retreats, activities, and user bookings",
  ],
  technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP", "phpMyAdmin"],
  outcome: `Delivered a fully functional wellness platform that successfully handles complex scheduling scenarios, real-time availability management, and personalized user experiences — demonstrating how thoughtful data structures and algorithms can create a seamless booking experience. Built entirely with open-source technologies on the LAMP stack using XAMPP as the development environment.`,
};

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HarmonyHavenPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [footerCopyStatus, setFooterCopyStatus] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setFooterCopyStatus(text);
        setTimeout(() => setFooterCopyStatus(null), 2000);
      });
    } else {
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
      setFooterCopyStatus(text);
      setTimeout(() => setFooterCopyStatus(null), 2000);
    }
  };

  const sectionNavItems = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "tech", label: "Tech Stack" },
  ];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

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

  const scrollToSection = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
      setTimeout(() => setActiveSection(id), 800);
    }
  };

  // ─── Theme tokens ───────────────────────────────────────────────────────────
  const bg = darkMode ? "bg-[#080808] text-white" : "bg-[#fafafa] text-black";
  const borderColor = darkMode ? "border-white/[0.07]" : "border-black/[0.07]";
  const muted = darkMode ? "text-white/30" : "text-black/30";
  const mutedText = darkMode ? "text-white/50" : "text-black/50";
  const cardBg = darkMode ? "bg-white/[0.03]" : "bg-black/[0.02]";
  const cardHover = darkMode
    ? "hover:bg-white/[0.05] hover:border-white/[0.12]"
    : "hover:bg-black/[0.04] hover:border-black/[0.12]";
  const tagStyle = darkMode
    ? "bg-white/[0.06] text-white/40 border border-white/[0.08]"
    : "bg-black/[0.05] text-black/40 border border-black/[0.08]";
  const btnOutline = darkMode
    ? "border border-white/20 text-white/70 hover:border-white/50 hover:text-white active:scale-[0.98]"
    : "border border-black/20 text-black/70 hover:border-black/50 hover:text-black active:scale-[0.98]";

  const displayHeading =
    "text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tight leading-[0.92] mt-3";

  const iconClass = (id: string) =>
    activeSection === id
      ? darkMode ? "text-white" : "text-black"
      : darkMode ? "text-gray-500" : "text-gray-400";

  const dockItems = [
    {
      title: "Overview",
      icon: <BookOpen size={18} className={iconClass("overview")} />,
      href: "#overview",
      onClick: scrollToSection("overview"),
    },
    {
      title: "Features",
      icon: <Wrench size={18} className={iconClass("features")} />,
      href: "#features",
      onClick: scrollToSection("features"),
    },
    {
      title: "Tech Stack",
      icon: <Code size={18} className={iconClass("tech")} />,
      href: "#tech",
      onClick: scrollToSection("tech"),
    },
    {
      title: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode
        ? <Sun size={18} className="text-yellow-400" />
        : <Moon size={18} className="text-gray-500" />,
      href: "#",
      onClick: (e?: React.MouseEvent) => { e?.preventDefault(); setDarkMode(!darkMode); },
    },
  ];

  return (
    <div className={`font-sans min-h-screen flex flex-col transition-colors duration-500 pb-16 sm:pb-0 ${bg}`}>

      {/* ── Floating Dock ─────────────────────────────────────────────────────── */}
      <div className="hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName={darkMode ? "bg-[#111]/90 backdrop-blur-md border border-white/[0.08]" : "bg-white/90 backdrop-blur-md border border-black/[0.08]"}
          mobileClassName={darkMode ? "bg-[#111]/90 backdrop-blur-md border border-white/[0.08]" : "bg-white/90 backdrop-blur-md border border-black/[0.08]"}
        />
      </div>

      {/* ── Mobile nav bar ────────────────────────────────────────────────────── */}
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

        {/* ── HERO ──────────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 overflow-hidden">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: darkMode
                ? "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(255,255,255,0.025) 0%, transparent 70%)"
                : "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(0,0,0,0.03) 0%, transparent 70%)",
            }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: darkMode
                ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
                : "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative z-10 w-full max-w-5xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <Link
                href="/"
                className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${muted}`}
              >
                <ArrowLeft size={12} />
                Back to Portfolio
              </Link>
            </motion.div>

            {/* Tag + date */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className={`font-mono text-[10px] px-2 py-1 tracking-widest border ${tagStyle}`}>
                Academic Project
              </span>
              <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${muted}`}>
                {new Date(project.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(3rem,12vw,9.5rem)] font-black tracking-tighter leading-[0.88] mb-6 select-none"
            >
              <span className={darkMode ? "text-white" : "text-black"}>Harmony</span>
              <br />
              <span className={darkMode ? "text-white/20" : "text-black/40"}>Haven</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`font-mono text-xs tracking-[0.25em] uppercase mb-6 ${muted}`}
            >
              {project.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`max-w-md text-sm leading-relaxed mb-10 ${mutedText}`}
            >
              {project.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={scrollToSection("overview")}
                className={`px-6 py-2.5 text-xs font-mono tracking-[0.18em] uppercase transition-all duration-200 rounded-sm ${btnOutline}`}
              >
                Explore Project
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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
            <span
              className="font-mono text-[9px] tracking-[0.3em] uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              scroll
            </span>
          </motion.div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────────────────────────── */}
        <section id="overview" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Project</span>
              <h2 className={displayHeading}>Overview</h2>
            </div>

            <div className="grid md:grid-cols-[1fr_340px] gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={i} className={`text-base leading-[1.85] ${mutedText}`}>{para}</p>
                ))}
              </motion.div>

              {/* Outcome card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`border p-7 transition-all duration-300 ${borderColor} ${cardBg} ${cardHover}`}
              >
                <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${muted}`}>Outcome</span>
                <h3 className="text-base font-black tracking-tight mt-2 mb-4 leading-tight">
                  Built &amp; Delivered
                </h3>
                <div className={`flex items-center justify-between pb-5 mb-5 border-b ${borderColor}`}>
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${borderColor} ${muted}`}>
                    Web · Wellness
                  </span>
                  <span className={`font-mono text-xs ${muted}`}>2024</span>
                </div>
                <p className={`text-sm leading-relaxed ${mutedText}`}>{project.outcome}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────────────── */}
        <section id="features" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>What it does</span>
              <h2 className={displayHeading}>Features</h2>
            </div>

            <div className={`border ${borderColor} ${cardBg} divide-y ${darkMode ? "divide-white/[0.05]" : "divide-black/[0.05]"}`}>
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-start gap-4 px-5 py-3.5"
                >
                  <span className={`font-mono text-xs font-bold flex-shrink-0 w-10 ${darkMode ? "text-white/40" : "text-black/40"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className={`text-sm ${mutedText}`}>{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ────────────────────────────────────────────────────────── */}
        <section id="tech" className={`border-t ${borderColor} py-28 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Built with</span>
              <h2 className={displayHeading}>Tech Stack</h2>
            </div>

            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-3 py-2 border transition-all duration-200 cursor-default group ${
                    darkMode
                      ? "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]"
                      : "border-black/[0.06] hover:border-black/20 hover:bg-black/[0.03]"
                  }`}
                >
                  <span className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-200 ${
                    darkMode
                      ? "text-white/25 group-hover:text-white/60"
                      : "text-black/25 group-hover:text-black/60"
                  }`}>
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT ──────────────────────────────────────────────────────── */}
        <section className={`border-t ${borderColor} py-28 sm:py-36 px-8 sm:px-16 lg:px-24`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${muted}`}>Up next</span>
              <h2 className={displayHeading}>
                What's
                <br />
                <span className={darkMode ? "text-white/20" : "text-black/15"}>Next</span>
              </h2>
            </div>

            <Link href="/projects/usb-automation">
              <motion.div
                whileHover={{ x: 4 }}
                className={`group flex items-center justify-between p-8 border transition-all duration-300 ${borderColor} ${cardBg} ${cardHover}`}
              >
                <div>
                  <span className={`font-mono text-[9px] uppercase tracking-widest ${muted}`}>Next Project</span>
                  <h3 className="text-2xl font-black tracking-tight mt-1">USB Automation</h3>
                  <p className={`font-mono text-xs mt-1 ${muted}`}>Python · Automation · USB Management</p>
                </div>
                <ArrowRight size={20} className={`transition-all duration-200 group-hover:translate-x-2 ${muted}`} />
              </motion.div>
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className={`border-t ${borderColor} py-8 px-8 sm:px-16 lg:px-24`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className={`font-mono text-[10px] ${muted}`}>© 2025 Aaron Carl Villaroman</span>
            <span className={`font-mono text-[10px] ml-3 ${muted} hidden sm:inline`}>Code smart, not just hard.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Email", icon: FaEnvelope, text: "ayce.villaroman@gmail.com" },
              { label: "Gmail", icon: FaGoogle, text: "eyci.dev@gmail.com" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleCopy(item.text)}
                className={`font-mono text-[10px] transition-colors flex items-center gap-1.5 ${darkMode ? "text-white/30 hover:text-white" : "text-black/30 hover:text-black"}`}
                type="button"
              >
                <item.icon size={10} />
                {item.label}
                {footerCopyStatus === item.text && <Check size={9} className="text-emerald-400" />}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className={`w-6 h-6 flex items-center justify-center border transition-all duration-200 ${darkMode ? "border-white/[0.08] text-white/30 hover:border-white/30 hover:text-white" : "border-black/[0.08] text-black/30 hover:border-black/30 hover:text-black"}`}
              type="button"
            >
              <ArrowUp size={11} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}