import React from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./scroll-reveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  index = 0,
}) => {
  return (
    <ScrollReveal
      animation="slide-up"
      delay={(index % 3) * 100}
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-wingman-400 group  bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-lghover:shadow-blue-800/10 hover:border-blue-700/30",
        className
      )}
    >
      <div className="feature-icon-container group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-wingman-600 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-blue-300 transition-colors">
        {description}
      </p>
    </ScrollReveal>
  );
};

export default FeatureCard;
