import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HERO_BG = "https://media.base44.com/images/public/69ea49e4576243328cb152c8/d2924b306_generated_86d410e0.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Abstract crystalline structure"
          className="w-full h-full object-cover opacity-20" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* College Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <img
            src="https://media.base44.com/images/public/69ea49e4576243328cb152c8/2af05b497_logo.png"
            alt="Harsha Institute of Management Studies"
            className="h-24 md:h-32 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 16px rgba(99,102,241,0.2))" }}
          />
        </motion.div>

        {/* Department Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              backdropFilter: "blur(12px)",
              color: "hsl(var(--accent))",
              boxShadow: "0 0 20px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
            Department of BCA
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Badge */}
        









        

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading font-extrabold text-foreground leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.04em" }}>
          
          <span className="text-shimmer">Built by Students.</span>
          <br />
          <span className="text-foreground">Built for Impact.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
          
          Got an idea? This is where it becomes real.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="#submit"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105">
            
            Submit Your Idea
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#team"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-heading font-bold text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-300">
            
            Join the Crew
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>);

}