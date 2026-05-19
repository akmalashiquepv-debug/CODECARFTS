import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/69ea49e4576243328cb152c8/b54cddad6_ChatGPTImageApr23202610_12_03PM.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Process", href: "#how-it-works" },
    { label: "Team", href: "#team" },
    { label: "Timeline", href: "#timeline" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/20 bg-white/5 backdrop-blur-md p-0.5 group-hover:border-primary/50 transition-all duration-300">
            <img
              src={LOGO_URL}
              alt="Code Crafters Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-heading font-bold text-foreground tracking-tight text-sm hidden sm:block">
            Code Crafters
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm border border-primary/30"
          >
            Submit Idea
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-primary/10"
          >
            <div className="p-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#submit"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-center mt-1"
              >
                Submit Idea
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}