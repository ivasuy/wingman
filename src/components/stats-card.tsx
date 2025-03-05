import React, { useState } from "react";

interface StatsCardProps {
  value: string;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  title,
  description,
  color,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="stats-item text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        className={`text-2xl lg:text-3xl font-bold mb-2 transition-all duration-300 ${
          isHovered ? color : "text-white"
        }`}
        style={{
          textShadow: isHovered
            ? `0 0 12px ${color.replace("text-", "var(--tw-")})`
            : "none",
        }}
      >
        {value}
      </h3>
      <p className="text-sm font-medium text-gray-300 mb-1">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default StatsCard;
