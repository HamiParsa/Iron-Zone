"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, X, Menu, Home, Activity, Users, CreditCard, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Programs", href: "/programs", icon: <Activity size={18} /> },
    { name: "Trainers", href: "/trainers", icon: <Users size={18} /> },
    { name: "Pricing", href: "/pricing", icon: <CreditCard size={18} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Dumbbell className="text-red-600" />
          <span className="font-bold text-2xl">IronZone</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 hover:text-red-600 transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Join Button Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-red-600/30">
              Join Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 border-t border-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 text-gray-300">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 py-2 hover:text-red-600 transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full mt-2 transition-all">
                    Join Now
                  </button>
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
