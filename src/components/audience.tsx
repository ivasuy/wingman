import React from "react";
import { BarChart, GraduationCap, MessageCircle, User } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import AudienceCard from "./audience-card";

const Audience: React.FC = () => {
  const audiences = [
    {
      icon: <BarChart className="w-6 h-6 text-wingman-600" />,
      title: "Sales Professionals",
      description:
        "Close more deals with accurate product information and compelling answers during client pitches.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-wingman-600" />,
      title: "Customer Support Representatives",
      description:
        "Deliver faster, more accurate support with access to product documentation and troubleshooting steps.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-wingman-600" />,
      title: "Educators & Trainers",
      description:
        "Deliver engaging virtual lessons with accurate information and seamless presentation support.",
    },
    {
      icon: <User className="w-6 h-6 text-wingman-600" />,
      title: "Project Managers",
      description:
        "Run more efficient virtual meetings with instant access to project data, timelines, and reports.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-wingman-600" />,
      title: "Consultants & Advisors",
      description:
        "Deliver expert advice with confidence backed by research, analysis, and client-specific information.",
    },
    {
      icon: <User className="w-6 h-6 text-wingman-600" />,
      title: "Job Seekers",
      description:
        "Ace your virtual interviews with perfectly crafted answers to technical and behavioral questions.",
    },
  ];

  return (
    <section
      id="audience"
      className="section-container bg-background relative bg-transparent"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>

      <ScrollReveal>
        <h2 className="section-heading">
          Who is <span className="text-gradient-wingman">Wingman</span> For?
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {audiences.map((audience, index) => (
          <AudienceCard
            key={index}
            icon={audience.icon}
            title={audience.title}
            description={audience.description}
            index={index}
          />
        ))}
      </div>

      <ScrollReveal
        animation="fade-in"
        delay={300}
        className="mt-20 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Make Every Conversation Count
        </h3>
        <p className="text-muted-foreground mb-8">
          Wingman isn't just a tool. It's your AI-powered assistant, built to
          keep you informed, organized, and ahead of the curve. Ready to take
          your meetings, lectures, and discussions to the next level?
        </p>
        {/* <a href="#waitlist" className="wingman-button">
          Join Waitlist
        </a> */}
      </ScrollReveal>
    </section>
  );
};

export default Audience;
