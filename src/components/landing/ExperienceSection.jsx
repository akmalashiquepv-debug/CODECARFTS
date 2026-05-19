import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Code, Users, GraduationCap } from "lucide-react";

const cards = [
{
  icon: Rocket,
  title: "Work like a startup",
  description: "Ship fast, iterate, and own your work from day one."
},
{
  icon: Code,
  title: "Build real applications",
  description: "Production-grade products, not just college projects."
},
{
  icon: Users,
  title: "Collaborate in teams",
  description: "Cross-functional squads with real roles and real stakes."
},
{
  icon: GraduationCap,
  title: "Learn beyond the classroom",
  description: "Industry tools, agile workflows, and startup culture."
}];


export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20">
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            
            What You Get
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) =>
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group glass rounded-2xl p-8 hover:bg-secondary/60 hover:border-primary/30 transition-all duration-500 cursor-default">
            
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}