import React from "react";
import {
  Mic,
  MessageSquare,
  PenTool,
  Search,
  Download,
  Target,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import FeatureCard from "./feature-card";
import { SparklesCore } from "./ui/sparkles";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6 text-wingman-600" />,
      title: "Real-Time Transcription",
      description:
        "Get instant, AI-powered transcriptions of your video calls, ensuring you never miss an important detail.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-wingman-600" />,
      title: "Instant Answers, As You Need Them",
      description:
        "As the conversation flows, Wingman provides relevant insights—helping you stay informed without disrupting the discussion.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-wingman-600" />,
      title: "Manual Query Refinement",
      description:
        "If the transcript isn't perfect, manually tweak the query to get the most accurate AI-generated responses. Precision, in your hands.",
    },
    {
      icon: <Search className="w-6 h-6 text-wingman-600" />,
      title: "Intelligent Search",
      description:
        "Need to revisit something? Search your entire transcript and find specific insights instantly—no more scrubbing through recordings.",
    },
    {
      icon: <Download className="w-6 h-6 text-wingman-600" />,
      title: "Download Full Transcripts",
      description:
        "At the end of your call, export the entire conversation and keep a permanent, organized record of everything discussed.",
    },
    {
      icon: <Target className="w-6 h-6 text-wingman-600" />,
      title: "A Smarter Way to Stay Prepared",
      description:
        "Wingman doesn't just assist in meetings and lectures—it helps you stay sharp in high-stakes conversations.",
    },
  ];

  return (
    <section
      id="features"
      className="section-container bg-background bg-transparent relative"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>

      <ScrollReveal>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="section-heading">
            Why <span className="text-gradient-wingman">Wingman</span>?
          </h2>
          <div className="w-[40rem] h-11 relative mb-3">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-in" delay={100}>
        <p className="section-subheading">
          Forget scrambling for notes or missing key details. Wingman
          transcribes, understands, and delivers answers—all in real time. Plus,
          with intelligent search and downloadable transcripts, you have every
          conversation at your fingertips, forever.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
