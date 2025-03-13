import React from "react";
import TestimonialCard from "./testimonial-card";
import VideoTestimonial from "./video-testimonial";
import StatsCard from "./stats-card";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "I've been testing Wingman for the past two weeks, and it's genuinely helpful during sales calls. It quickly gives me insights that usually take minutes to find. Definitely makes conversations smoother!",
      name: "Alex Carter",
      title: "Sales Associate, Beta Tester",
      rating: 5,
      timeAgo: "2 weeks ago",
      initials: "AC",
      bgColor: "#4f46e5",
    },
    {
      quote:
        "Wingman helped me answer tough client questions faster during our beta testing. It's still early days, but I've noticed I'm more confident during presentations now.",
      name: "Priya Sharma",
      title: "Marketing Specialist, Test User",
      rating: 4,
      timeAgo: "1 week ago",
      initials: "PS",
      bgColor: "#10b981",
    },
    {
      quote:
        "I've used Wingman in internal demos and found it quite handy. There's room for improvement, but even in this early version, it's noticeably helpful with spontaneous questions.",
      name: "Rohan Verma",
      title: "Product Manager, Early Tester",
      rating: 4,
      timeAgo: "3 weeks ago",
      initials: "RV",
      bgColor: "#ef4444",
    },
  ];

  const videoTestimonial = {
    quote:
      "I've participated in Wingman's beta testing phase, and it's proven useful in navigating investor meetings. It provided real-time suggestions that enhanced my responses significantly during mock pitches.",
    name: "Jessica Lee",
    title: "Founder, Beta Tester",
    rating: 5,
    stats: [
      {
        amount: "10+",
        label: "Mock investor calls",
        sublabel: "handled smoothly",
      },
      {
        amount: "75%",
        label: "Improved response speed",
        sublabel: "to tough questions",
      },
      {
        amount: "80%",
        label: "Increased pitch confidence",
        sublabel: "during testing phase",
      },
    ],
    videoUrl: "https://youtube.com/embed/eeGUrAd05Rg?si=n25YqF9Kd3nN8RoU",
  };

  const stats = [
    {
      value: "100+",
      title: "Beta Testers",
      description: "Early users actively providing feedback",
      color: "text-blue-300",
    },
    {
      value: "90%",
      title: "Positive Feedback",
      description: "Beta testers reporting improved experiences",
      color: "text-blue-400",
    },
    {
      value: "70%",
      title: "Increased Comfort",
      description: "Testers feeling more prepared during interactions",
      color: "text-blue-500",
    },
    {
      value: "500+",
      title: "Questions Answered",
      description: "Real-time answers provided during beta tests",
      color: "text-blue-600",
    },
  ];

  return (
    <section
      id="stories"
      className="bg-dark py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-900/10 to-transparent opacity-30 blur-3xl"></div>

          <div className="inline-block mb-3 ">
            <span className="tag-pill bg-blue-500/10 text-blue-400 border border-blue-500/20 animate-pulse-soft">
              SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            What Our Users Say
          </h2>

          <p
            className="text-gray-400 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Discover how Wingman is transforming video calls for professionals
            across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>

        <div className="mb-12">
          <VideoTestimonial {...videoTestimonial} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
