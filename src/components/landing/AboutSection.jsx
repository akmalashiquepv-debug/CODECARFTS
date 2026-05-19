import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
            
            A student-driven startup experience —{" "}
            <span className="text-accent">from idea to real product.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>);

}