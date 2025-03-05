import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  timeAgo: string;
  initials: string;
  bgColor: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  rating,
  timeAgo,
  initials,
  bgColor,
  delay = 0,
}) => {
  return (
    <div
      className="testimonial-card animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <span className="quote-mark text-blue-400">"</span>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{quote}</p>

      <div className="flex items-center mt-6">
        <div
          className="avatar-circle mr-3"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>

        <div className="flex-1">
          <p className="font-medium text-white text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{title}</p>
        </div>

        <div className="text-right text-xs text-gray-500">
          <div className="flex mb-1 justify-end">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-blue-400" : "text-gray-600"
                } 
                  transition-transform hover:scale-110 duration-200 ease-in-out`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p>{timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
