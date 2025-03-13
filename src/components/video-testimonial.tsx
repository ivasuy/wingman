import React, { useState } from "react";
import { Play } from "lucide-react";

interface VideoTestimonialProps {
  quote: string;
  name: string;
  title: string;
  stats: {
    amount: string;
    label: string;
    sublabel: string;
  }[];
  rating: number;
  videoUrl: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  quote,
  name,
  title,
  stats,
  rating,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden border border-gray-700/50">
      <div
        className="lg:w-1/2 relative bg-gray-800/80 flex items-center justify-center p-10 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <div className="absolute inset-0 w-full h-full rounded overflow-hidden shadow-lg">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Testimonial Video"
            />
          </div>
        ) : (
          <div className="text-center pointer-events-none">
            <div className="relative inline-block animate-scale-up">
              <div
                className={`w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 mx-auto transition-all duration-500 ${
                  isHovered ? "scale-110 bg-blue-500/30" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full bg-blue-500/40 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "scale-110" : ""
                  }`}
                >
                  <Play
                    className={`w-8 h-8 text-white transition-transform duration-300 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              See Wingman in Action
            </h3>
            <p className="text-gray-400 text-sm">
              See why everyone's talking about it!
            </p>

            <button
              className={`mt-6 inline-flex items-center px-4 py-2 rounded-md border border-blue-600 text-blue-400 transition-all duration-300 ${
                isHovered ? "bg-blue-900/20 shadow-lg shadow-blue-900/20" : ""
              }`}
            >
              <Play className="w-4 h-4 mr-2" /> Play Video
            </button>
          </div>
        )}
      </div>

      <div className="lg:w-1/2 bg-gray-800/40 p-8">
        <div
          className="mb-6 animate-fade-in-right"
          style={{ animationDelay: "100ms" }}
        >
          <span className="quote-mark text-blue-400">"</span>
          <p className="text-gray-300 my-4 text-sm leading-relaxed">{quote}</p>
        </div>

        <div
          className="flex items-center mb-8 animate-fade-in-right"
          style={{ animationDelay: "200ms" }}
        >
          <div className="avatar-circle mr-3 bg-blue-700">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>
            <p className="font-medium text-white text-sm">{name}</p>
            <p className="text-gray-400 text-xs">{title}</p>
          </div>

          <div className="ml-auto">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`inline-block ${
                  i < rating ? "text-blue-400" : "text-gray-600"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div
          className="border-t border-gray-700/50 pt-4 animate-fade-in-right"
          style={{ animationDelay: "300ms" }}
        >
          <p className="text-sm text-gray-300 mb-4">Results with Wingman:</p>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <p className="text-blue-400 text-xl font-semibold">
                  {stat.amount}
                </p>
                <p className="text-gray-300 text-xs">{stat.label}</p>
                <p className="text-gray-500 text-xs">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
