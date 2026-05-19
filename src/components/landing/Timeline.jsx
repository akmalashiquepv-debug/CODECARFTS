import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const weeks = [
{ week: "Week 1", title: "Idea Discussion", description: "Selection and deep-dive into submitted ideas" },
{ week: "Week 2", title: "Planning & Design", description: "System architecture and sprint planning" },
{ week: "Weeks 3–5", title: "Development", description: "Building the product in agile sprints" },
{ week: "Week 6", title: "Testing & QA", description: "Quality assurance and bug fixes" },
{ week: "Week 7", title: "Deploy & Launch", description: "Ship it to production" }];


export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20">
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            
            Development Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />

          <div className="space-y-10">
            {weeks.map((item, i) =>
            <motion.div
              key={item.week}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`
              }>
              
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500">
                    <span className="font-mono text-xs text-primary font-medium">
                      {item.week}
                    </span>
                    <h3 className="font-heading font-bold text-foreground text-lg mt-1 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}