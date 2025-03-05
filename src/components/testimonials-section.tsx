import React from "react";
import TestimonialCard from "./testimonial-card";
import VideoTestimonial from "./video-testimonial";
import StatsCard from "./stats-card";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Wingman has completely transformed my sales calls. I used to scramble for information when clients asked tough questions, but now I have instant access to perfect answers. My close rate has increased by 34% since using this extension.",
      name: "James Davidson",
      title: "Sales Director, TechCorp",
      rating: 5,
      timeAgo: "2 months ago",
      initials: "JD",
      bgColor: "#4f46e5",
    },
    {
      quote:
        "As an educator teaching complex technical subjects, Wingman has been a game-changer. I upload my lecture notes, and when students ask questions, I get perfectly crafted responses that make me look like an expert on every topic. My student satisfaction scores have never been higher.",
      name: "Amanda Liu",
      title: "Computer Science Professor",
      rating: 5,
      timeAgo: "1 month ago",
      initials: "AL",
      bgColor: "#10b981",
    },
    {
      quote:
        "I was struggling with client presentations until I found Wingman. Now I upload my slides before meetings, and the extension provides me with perfect talking points for each slide. It's like having an expert co-presenter who whispers exactly what to say in your ear.",
      name: "Michael Johnson",
      title: "Marketing Consultant",
      rating: 4,
      timeAgo: "3 months ago",
      initials: "MJ",
      bgColor: "#ef4444",
    },
  ];

  const videoTestimonial = {
    quote:
      "As a startup founder, I'm constantly juggling multiple responsibilities, and my knowledge has gaps. Wingman fills those gaps during investor calls by providing me with real-time data and perfect explanations. During our last funding round, I was able to answer complex financial questions that would have stumped me before. We secured $2.5M in funding, and I credit Wingman with helping me appear more knowledgeable and confident.",
    name: "Sarah Lin",
    title: "CEO & Founder, NeuralTech",
    rating: 5,
    stats: [
      { amount: "$2.5M", label: "Funding secured", sublabel: "" },
      { amount: "87%", label: "Investor questions answered", sublabel: "" },
      { amount: "3 weeks", label: "Reduced fundraising time", sublabel: "" },
    ],
  };

  const stats = [
    {
      value: "5000+",
      title: "Active Users",
      description: "Professionals who rely on Wingman daily",
      color: "text-blue-300",
    },
    {
      value: "94%",
      title: "Satisfaction Rate",
      description: "Users reporting improved call performance",
      color: "text-blue-400",
    },
    {
      value: "65%",
      title: "Increased Confidence",
      description: "Users feeling more prepared for calls",
      color: "text-blue-500",
    },
    {
      value: "10M+",
      title: "Answers Provided",
      description: "Questions answered in real-time",
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
