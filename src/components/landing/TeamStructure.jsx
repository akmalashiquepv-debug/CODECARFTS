import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roles = [
{ num: "01", code: "FE", label: "Frontend" },
{ num: "02", code: "BE", label: "Backend" },
{ num: "03", code: "UX", label: "UI/UX" },
{ num: "04", code: "DB", label: "Database" },
{ num: "05", code: "QA", label: "Testing" }];


export default function TeamStructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20">
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            
            Team Structure
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {roles.map((role, i) =>
          <motion.div
            key={role.code}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-square rounded-2xl border border-border bg-card flex flex-col items-center justify-center cursor-default hover:border-primary/50 hover:bg-primary/10 transition-all duration-500">
            
              <span className="font-mono text-xs text-muted-foreground mb-2 group-hover:text-primary/70 transition-colors">
                {role.num}
              </span>
              <span className="font-mono font-bold text-3xl text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight">
                {role.code}
              </span>
              <span className="text-xs text-muted-foreground mt-2 font-medium">
                {role.label}
              </span>
            </motion.div>
          )}
        </div>

        






        
      </div>
    </section>);

}