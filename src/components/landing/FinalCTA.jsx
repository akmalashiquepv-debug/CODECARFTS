import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_BG = "https://media.base44.com/images/public/69ea49e4576243328cb152c8/42fc7e276_generated_5b0cef6e.png";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-40 md:py-52 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt="Dark studio with indigo light"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading font-extrabold text-foreground tracking-tight leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Let's Build Something
          <br />
          <span className="text-shimmer">That Matters.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#submit"
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
          >
            Submit Your Idea
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}