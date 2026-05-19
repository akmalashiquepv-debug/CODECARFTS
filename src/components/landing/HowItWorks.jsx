import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, MessageCircle, CheckCircle, Trophy } from "lucide-react";

const steps = [
{
  icon: Lightbulb,
  label: "Submit Idea",
  description: "Share your vision with the community",
  num: "01"
},
{
  icon: MessageCircle,
  label: "Open Discussion",
  description: "Collaborate and refine with peers",
  num: "02"
},
{
  icon: CheckCircle,
  label: "Feasibility Check",
  description: "Technical and impact assessment",
  num: "03"
},
{
  icon: Trophy,
  label: "Final Selection",
  description: "Top ideas move to production",
  num: "04"
}];


export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20">
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/40 to-primary/50" />

          {steps.map((step, i) =>
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative flex flex-col items-center text-center">
            
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 relative z-10">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-mono text-xs text-muted-foreground mb-2">{step.num}</span>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                {step.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 text-sm text-muted-foreground font-mono">
          
          Every idea matters — decisions are made by students.
        </motion.p>
      </div>
    </section>);

}