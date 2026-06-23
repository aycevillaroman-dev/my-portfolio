"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  Image as ImageIcon,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);

  // Update clock
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
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "about", label: "About", icon: <User size={18} /> },
    { href: "/projects", label: "Projects", icon: <Briefcase size={18} /> },
    { href: "#gallery", label: "Gallery", icon: <ImageIcon size={18} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-4 items-center justify-between sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="text-lg font-bold">Aaron Carl</div>

        <nav className="flex items-center gap-2 bg-black/80 dark:bg-gray-800/80 backdrop-blur-lg px-6 py-2 rounded-full border border-gray-700 shadow-lg">
          {navItems.map((item, index) => (
            <span key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="hover:text-blue-400 transition flex items-center gap-2"
              >
                {item.icon} {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="text-gray-500">|</span>
              )}
            </span>
          ))}

          {/* Separator line before dark mode toggle */}
          <span className="mx-3 h-6 w-[1px] bg-gray-500"></span>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-yellow-400 transition flex items-center"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Desktop clock */}
        <div className="text-sm font-mono">{time}</div>
      </header>

      {/* Mobile Floating Bottom Nav */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-black/80 dark:bg-gray-800/80 backdrop-blur-lg px-6 py-3 rounded-full border border-gray-700 shadow-lg">
        {navItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition text-sm"
            >
              {item.icon}
              {item.label}
            </Link>
            {index < navItems.length - 1 && (
              <span className="text-gray-500">|</span>
            )}
          </span>
        ))}

        {/* Separator line before dark mode toggle */}
        <span className="mx-2 h-6 w-[1px] bg-gray-500"></span>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition text-sm"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>
    </>
  );
}
