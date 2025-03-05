import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  className,
}) => {
  const calculateTimeLeft = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-4 sm:gap-6",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <div className="glass-card text-2xl sm:text-3xl md:text-4xl font-bold w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl text-blue-500">
          {formatNumber(timeLeft.days)}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">
          Days
        </span>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-muted-foreground">
        :
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card text-2xl sm:text-3xl md:text-4xl font-bold w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl text-blue-500">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">
          Hours
        </span>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-5 text-muted-foreground">
        :
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card text-2xl sm:text-3xl md:text-4xl font-bold w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl text-blue-500">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">
          Minutes
        </span>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-5 text-muted-foreground">
        :
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card text-2xl sm:text-3xl md:text-4xl font-bold w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl text-blue-500">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
