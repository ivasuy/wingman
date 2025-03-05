import React from "react";
import TranscriptCard from "./transcript-card";
import { BackgroundLines } from "./ui/background-lines";
import WaitlistForm from "./waitlist-form";

const Hero: React.FC = () => {
  // Set countdown to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div id="hero" className="min-h-screen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="relative flex flex-col items-center">
            <BackgroundLines className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem]"></BackgroundLines>
            <div className="space-y-8 max-w-xl">
              <div
                className="space-y-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  Wingman – Your{" "}
                  <span className="text-gradient-wingman">AI-Powered</span>{" "}
                  Meeting Companion
                </h1>

                <h2 className="text-xl text-gray-300 font-light">
                  Never Miss a Word. Get Instant Answers. Stay Ahead.
                </h2>
              </div>

              <p
                className="text-gray-400 leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Wingman is your personal AI assistant for video
                calls—transcribing conversations in real-time, fetching instant
                answers, and letting you refine queries when needed.
              </p>

              <p className="text-wingman-300 mb-6 text-sm sm:text-base">
                Join our waitlist now to be among the{" "}
                <span className="font-bold text-wingman-500 decoration-wingman-400 hover:text-wingman-300 transition-colors animate-pulse">
                  first 100 users
                </span>{" "}
                to experience Wingman when we launch. Early adopters receive{" "}
                <span className="font-bold text-wingman-500 hover:text-wingman-300 transition-colors">
                  exclusive benefits
                </span>{" "}
                and{" "}
                <span className="font-bold text-wingman-500 hover:text-wingman-300 transition-colors">
                  priority access!
                </span>
              </p>
              <WaitlistForm className="mb-6" />
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse-subtle"></div>
            <TranscriptCard
              className="relative animate-fade-up"
              // style={{ animationDelay: "0.7s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
