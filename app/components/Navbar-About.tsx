"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  Award,
  Briefcase,
  Image as ImageIcon,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

export default function NavAbout() {
  const [time, setTime] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Update clock every second
  useEffect(() => {
    const updateClock = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} />, isSection: false },
    { href: "skills", label: "Skills", icon: <FileText size={18} />, isSection: true },
    { href: "organizations", label: "Organizations", icon: <Briefcase size={18} />, isSection: true },
    { href: "/gallery", label: "Gallery", icon: <ImageIcon size={18} />, isSection: false },
    { href: "awards", label: "Awards", icon: <Award size={18} />, isSection: true },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSection: boolean) => {
    if (isSection) {
      e.preventDefault();
      const section = document.getElementById(href);
      section?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="text-lg font-bold">About Me</div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-2 bg-black/80 dark:bg-gray-800/80 backdrop-blur-lg px-6 py-2 rounded-full border border-gray-700 shadow-lg">
        {navItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <Link
              href={item.isSection ? "#" + item.href : item.href}
              onClick={(e) => handleScroll(e, item.href, item.isSection)}
              className="hover:text-blue-400 transition flex items-center gap-2"
            >
              {item.icon} {item.label}
            </Link>
            {index < navItems.length - 1 && <span className="text-gray-500">|</span>}
          </span>
        ))}

        {/* Separator line */}
        <span className="mx-3 h-6 w-[1px] bg-gray-500"></span>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-yellow-400 transition flex items-center"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 dark:bg-gray-800/95 backdrop-blur-md flex flex-col items-center py-4 space-y-3 md:hidden border-t border-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.isSection ? "#" + item.href : item.href}
              onClick={(e) => handleScroll(e, item.href, item.isSection)}
              className="flex items-center gap-2 hover:text-blue-400 transition text-lg"
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {/* Separator line */}
          <span className="h-[1px] w-3/4 bg-gray-500 my-2"></span>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-yellow-400 transition flex items-center"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <div className="text-sm font-mono">{time}</div>
        </div>
      )}

      {/* Desktop clock */}
      <div className="hidden md:block text-sm font-mono">{time}</div>
    </header>
  );
}
