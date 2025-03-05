import React from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./scroll-reveal";

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const AudienceCard: React.FC<AudienceCardProps> = ({
  icon,
  title,
  description,
  className,
  index = 0,
}) => {
  return (
    <ScrollReveal
      animation="slide-up"
      delay={(index % 4) * 100}
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-wingman-700 hover:to-wingman-800  hover:-translate-y-2 group bg-gray-800/60 backdrop-blur-sm  border border-gray-700/50 shadow-lg hover:shadow-blue-800/10 hover:border-blue-700/30",
        className
      )}
    >
      <div className="feature-icon-container group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-wingman-200 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </ScrollReveal>
  );
};

export default AudienceCard;
