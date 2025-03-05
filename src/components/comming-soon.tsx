import React from "react";
import {
  FileText,
  Brain,
  Rocket,
  Plug,
  Notebook,
  Globe,
  MessageCircle,
  Presentation,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import { Meteors } from "./ui/meteors";

const ComingSoon: React.FC = () => {
  return (
    <section
      id="coming-soon"
      className="section-container relative overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 bg-gradient-to-br bg-background to-wingman-50 z-0 bg-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>

      <div className="relative z-10">
        <ScrollReveal>
          <div className="mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 mx-auto tag-pill flex items-center justify-center w-60 border-blue-500/20 ">
            <span className="text-sm font-medium text-blue-400 flex items-center justify-center">
              <Rocket className="w-4 h-4 mr-2 text-blue-400" />
              Future Updates
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading">
            Coming Soon: Unlock the Next Level of AI Assistance
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Smart Notes */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <FileText className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Smart Notes & Personalized Insights
            </h3>
            <p className="text-muted-foreground">
              Upload your notes, presentations, or reference materials, and
              Wingman will tailor its AI-generated answers to match your context
              perfectly.
            </p>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Adaptive AI */}
          <ScrollReveal
            animation="slide-left"
            className="glass-card rounded-xl p-8 border border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Brain className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Adaptive AI for Deeper Understanding
            </h3>
            <p className="text-muted-foreground">
              Wingman will soon understand your past conversations, learning and
              evolving to offer smarter, context-aware answers.
            </p>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Custom Prompting */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <MessageCircle className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Custom Prompting & File Transcription
            </h3>
            <p className="text-muted-foreground">
              Upload documents, and our AI will transcribe the content to
              generate precise, real-time answers based on your specific needs.
            </p>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Multi-Language Support */}
          <ScrollReveal
            animation="slide-left"
            className="glass-card rounded-xl p-8 border border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Globe className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Multi-Language Support
            </h3>
            <p className="text-muted-foreground">
              Wingman will support multiple languages, including Spanish,
              French, German, Japanese, and Mandarin.
            </p>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Notes Integration */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Notebook className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Notes Integration</h3>
            <p className="text-muted-foreground">
              Upload your notes or connect with Notion, Evernote, and Google
              Drive to give Wingman the context it needs for better answers.
            </p>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Presentation Support */}
          <ScrollReveal
            animation="slide-left"
            className="glass-card rounded-xl p-8 border border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="w-full relative max-w-xs">
              <div className="feature-icon-container w-16 h-16 rounded-xl">
                <Presentation className="w-8 h-8 text-wingman-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Presentation Support
              </h3>
              <p className="text-muted-foreground">
                Upload your slides, and Wingman will provide slide-specific
                talking points with one-click presentation mode.
              </p>
            </div>
            <Meteors number={20} />
          </ScrollReveal>

          {/* Powerful Integrations
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Plug className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Powerful Integrations
            </h3>
            <p className="text-muted-foreground">
              Wingman seamlessly connects with **your favorite tools and
              platforms**, delivering the most relevant information during video
              calls.
            </p>
          </ScrollReveal> */}
        </div>

        <ScrollReveal animation="slide-up" delay={200} className="mt-12">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-muted-foreground">
              We're constantly working to make Wingman smarter and more helpful
              for your specific needs. Stay tuned for these exciting updates!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComingSoon;
