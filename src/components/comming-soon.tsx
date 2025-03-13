import React from "react";
import {
  Rocket,
  Plug,
  Notebook,
  Globe,
  Users,
  CalendarCheck,
  Eye,
  ListChecks,
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
          {/* OCR-Based Note Extraction */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Eye className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              OCR-Based Image Text Detection
            </h3>
            <p className="text-muted-foreground">
              If an image is displayed on your screen, Wingman will
              automatically detect and extract the text for you—no need for
              manual scanning.
            </p>
            <Meteors number={20} />
          </ScrollReveal>
          {/* Meeting Follow Mode */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Notebook className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Meeting Follow Mode</h3>
            <p className="text-muted-foreground">
              If you're inactive for a long time during a meeting, Wingman will
              detect it and prompt you with the latest agenda updates, ensuring
              you're always in sync.
            </p>
            <Meteors number={20} />
          </ScrollReveal>
          {/* AI-Powered Speaker Identification */}
          <ScrollReveal
            animation="slide-left"
            className="glass-card rounded-xl p-8 border border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <Users className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              AI-Powered Speaker Identification
            </h3>
            <p className="text-muted-foreground">
              Wingman will automatically detect and tag speakers in
              transcriptions, making it easier to follow multi-person
              discussions.
            </p>
            <Meteors number={20} />
          </ScrollReveal>
          {/* Schedule Meetings in the Extension */}
          <ScrollReveal
            animation="slide-right"
            className="glass-card rounded-xl p-8 border-2 border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <CalendarCheck className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Schedule & Manage Meetings
            </h3>
            <p className="text-muted-foreground">
              Plan, host, and manage meetings seamlessly within the Wingman
              extension—your all-in-one meeting solution.
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
              Connect with Notion, Evernote, and Google Drive to give Wingman
              the context it needs for better answers.
            </p>
            <Meteors number={20} />
          </ScrollReveal>
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
              Wingman seamlessly connects with your favorite tools and
              platforms, delivering the most relevant information during video
              calls.
            </p>
          </ScrollReveal>
          {/* Smart Action Suggestions (New Feature) */}
          <ScrollReveal
            animation="slide-left"
            className="glass-card rounded-xl p-8 border border-gray-700/50 hover:border-blue-700/30 bg-gray-800/60 h-full overflow-hidden"
          >
            <div className="feature-icon-container w-16 h-16 rounded-xl">
              <ListChecks className="w-8 h-8 text-wingman-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Smart Action Suggestions
            </h3>
            <p className="text-muted-foreground">
              Wingman will detect key action items in your meetings, generate
              task lists, assign responsibilities, and sync with your favorite
              productivity tools like Notion, Trello, or Asana.
            </p>
            <Meteors number={20} />
          </ScrollReveal>
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
