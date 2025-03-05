import React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fade-in"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "scale-in";
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  once = true,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayClass = delay > 0 ? `animation-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        delayClass,
        "will-change-transform",
        className
      )}
      style={{ animationFillMode: "both" }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
