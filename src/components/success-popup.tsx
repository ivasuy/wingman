import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
  isOpen,
  onClose,
  title = "You're on the waitlist!",
  description = "We'll notify you when it's ready.",
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimationComplete(false);
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative w-full max-w-md overflow-hidden",
          "rounded-xl border border-slate-700/50",
          "bg-gradient-to-b from-slate-800 to-slate-900",
          "shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]",
          "animate-scale-in"
        )}
      >
        {/* Sparkle elements */}
        <div className="absolute top-4 left-4 text-blue-400 animate-sparkle opacity-70 scale-75">
          <Sparkles size={16} />
        </div>
        <div
          className="absolute top-12 right-12 text-blue-500 animate-sparkle opacity-90 scale-90"
          style={{ animationDelay: "0.4s" }}
        >
          <Sparkles size={20} />
        </div>
        <div
          className="absolute bottom-8 left-16 text-blue-500 animate-sparkle"
          style={{ animationDelay: "0.8s" }}
        >
          <Sparkles size={24} />
        </div>
        <div
          className="absolute top-1/2 right-8 text-blue-400 animate-sparkle opacity-80 scale-75"
          style={{ animationDelay: "1.2s" }}
        >
          <Sparkles size={16} />
        </div>

        {/* Success content */}
        <div className="relative px-6 py-8 flex flex-col items-center">
          <div className="mb-4 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-float">
                <Sparkles className="text-white" size={16} />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 animate-slide-up">
            {title}
          </h3>
          <p
            className="text-slate-300 text-center animate-slide-up opacity-0"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            {description}
          </p>

          <div
            className="mt-6 w-full max-w-[240px] h-1 bg-slate-700/50 rounded-full overflow-hidden animate-slide-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full transition-all duration-3000 ease-out"
              style={{
                width: animationComplete ? "100%" : "5%",
                transition: "width 3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
