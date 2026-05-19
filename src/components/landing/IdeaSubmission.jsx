import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

export default function IdeaSubmission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", idea_title: "", idea_description: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.IdeaSubmission.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="submit" className="py-32 md:py-40 relative" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14">
          
          

          
          <h2
            className="font-heading font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            
            Submit Your Idea
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-3xl p-8 md:p-10">
          
          {submitted ?
          <div className="flex flex-col items-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                Idea Submitted!
              </h3>
              <p className="text-sm text-muted-foreground">
                Selected students will join Build Crew. We'll be in touch.
              </p>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block">NAME</label>
                  <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-secondary/50 border-border focus:border-primary/50 h-12 rounded-xl font-body" />
                
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block">EMAIL</label>
                  <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@college.edu"
                  className="bg-secondary/50 border-border focus:border-primary/50 h-12 rounded-xl font-body" />
                
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-mono text-muted-foreground mb-2 block">PHONE NUMBER</label>
                <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="bg-secondary/50 border-border focus:border-primary/50 h-12 rounded-xl font-body" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">IDEA TITLE</label>
                <Input
                name="idea_title"
                value={form.idea_title}
                onChange={handleChange}
                required
                placeholder="A short, punchy title"
                className="bg-secondary/50 border-border focus:border-primary/50 h-12 rounded-xl font-body" />
              
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">DESCRIBE YOUR IDEA</label>
                <Textarea
                name="idea_description"
                value={form.idea_description}
                onChange={handleChange}
                required
                placeholder="What problem does it solve? How would it work?"
                className="bg-secondary/50 border-border focus:border-primary/50 min-h-[120px] rounded-xl font-body resize-none" />
              
              </div>
              <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-heading font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
              
                {submitting ?
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> :

              <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Idea
                  </>
              }
              </Button>
              

            
            </form>
          }
        </motion.div>
      </div>
    </section>);

}