import React from "react";
import { Github } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/69ea49e4576243328cb152c8/b54cddad6_ChatGPTImageApr23202610_12_03PM.png";
const COLLEGE_LOGO_URL = "https://media.base44.com/images/public/69ea49e4576243328cb152c8/4210368c8_logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Large Outlined Name */}
      <div className="overflow-hidden py-16 md:py-24">
        <h2
          className="font-heading font-extrabold text-center select-none leading-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1px hsl(var(--border))",
          }}
        >
          CODE CRAFTERS
        </h2>
      </div>

      {/* Info Row */}
      <div className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Club Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/20 bg-white/5 p-0.5">
              <img
                src={LOGO_URL}
                alt="Code Crafters Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-foreground text-sm block">
                Code Crafters Club
              </span>
              <span className="text-muted-foreground text-xs">
                Department of BCA
              </span>
            </div>
          </div>

          {/* College Logo */}
          <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div className="h-10 w-auto overflow-hidden rounded-lg bg-white/5 border border-border px-3 py-1 flex items-center">
              <img
                src={COLLEGE_LOGO_URL}
                alt="Harsha Institute of Management Studies"
                className="h-7 w-auto object-contain"
                style={{ filter: "brightness(0.9) saturate(0.8)" }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-mono hidden sm:block">
              Harsha Institute of Management Studies
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}