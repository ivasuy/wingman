import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50); // Increased threshold for more stable scrolling
      });
    };

    // Throttle scroll event
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", optimizedHandleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#coming-soon", label: "Coming Soon" },
    { href: "#audience", label: "Who Is It For" },
    { href: "#stories", label: "Stories" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mb-10">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent",
          "py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="relative flex flex-col items-center">
            <a href="#" className="flex items-center">
              <Image
                src="/xoegan.png"
                alt="Wingman Logo"
                width={80}
                height={50}
              />
            </a>

            {/* Gradient Line */}
            <div className="w-[15rem] md:w-[20rem] h-2 relative flex justify-center mt-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-wingman-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-wingman-600 transition-colors z-60"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Desktop Waitlist Button */}
          <a
            href="#hero"
            className="hidden md:inline-block wingman-button text-sm"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/90 backdrop-blur-md z-40 pt-20 overflow-hidden"
          onClick={toggleMobileMenu} // Close menu when clicking outside
        >
          <nav
            className="flex flex-col items-center space-y-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on menu
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-wingman-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="wingman-button text-base mt-4"
              onClick={toggleMobileMenu}
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
