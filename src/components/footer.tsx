import React from "react";
import { Sparkles } from "lucide-react";
import WaitlistForm from "./waitlist-form";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="waitlist" className="relative bg-background text-white py-8">
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4 md:px-6">
          {/* Heading with Sparkles */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 flex flex-col sm:flex-row items-center justify-center">
            <div className="flex items-center justify-center mb-2 sm:mb-0">
              <Sparkles className="w-5 h-5 mr-2 text-wingman-300 animate-pulse-subtle hidden sm:inline" />
              Ready to Transform Your Conversations?
              <Sparkles className="w-5 h-5 ml-2 text-wingman-300 animate-pulse-subtle animation-delay-500 hidden sm:inline" />
            </div>
            {/* Mobile-specific sparkles */}
            <div className="flex items-center justify-center sm:hidden">
              <Sparkles className="w-4 h-4 mr-2 text-wingman-300 animate-pulse-subtle" />
              <Sparkles className="w-4 h-4 ml-2 text-wingman-300 animate-pulse-subtle animation-delay-500" />
            </div>
          </h2>

          {/* Footer Content */}
          <div className="border-t border-wingman-800 pt-4">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between text-sm">
              {/* Brand */}
              <div className="text-center sm:text-left w-full sm:w-auto mb-4 sm:mb-0">
                <span className="text-lg font-bold bg-gradient-to-r text-gradient-wingman bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">
                  Wingman
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 mb-4 sm:mb-0 w-full sm:w-auto">
                <a
                  href="#features"
                  className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                >
                  Features
                </a>
                <a
                  href="#coming-soon"
                  className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                >
                  Coming Soon
                </a>
                <a
                  href="#audience"
                  className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                >
                  Who Is It For
                </a>
                <a
                  href="#stories"
                  className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                >
                  Stories
                </a>
              </div>

              {/* Copyright */}
              <div className="text-xs text-wingman-300 text-center sm:text-left w-full sm:w-auto">
                © {currentYear} Wingman AI. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
