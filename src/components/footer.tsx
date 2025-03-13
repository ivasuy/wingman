import React from "react";
import { Sparkles } from "lucide-react";
import WaitlistForm from "./waitlist-form";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white py-8">
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
          <div className=" pt-4 flex flex-col items-center">
            {/* Brand */}
            <div className="relative flex flex-col items-center mb-8">
              <Image
                src="/xoegan.png"
                alt="Wingman Logo"
                width={80}
                height={50}
              />
              <div className="w-[15rem] md:w-[20rem] h-2 relative flex justify-center mt-1">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
              </div>
            </div>

            {/* Navigation Links - Now Centered and Aligned Properly */}
            <nav className="w-full">
              <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-8 text-sm mb-4 sm:mb-6">
                <li>
                  <a
                    href="#features"
                    className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#audience"
                    className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                  >
                    Who Is It For
                  </a>
                </li>
                <li>
                  <a
                    href="#stories"
                    className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                  >
                    Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#coming-soon"
                    className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                  >
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a
                    href="#founders"
                    className="text-wingman-200 hover:text-white transition-colors hover:scale-105"
                  >
                    Founders
                  </a>
                </li>
              </ul>
            </nav>

            {/* Copyright at the Bottom */}
            <div className="text-xs text-wingman-300 text-center w-full pt-4">
              © {currentYear} Wingman AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
