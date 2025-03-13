import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Instagram } from "lucide-react";

interface FoundersSectionProps {
  className?: string;
}

const FoundersSection: React.FC<FoundersSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="founders"
      ref={sectionRef}
      className={cn(
        "relative py-24 px-6 sm:px-8 md:px-16 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 "></div>

      <div className="container mx-auto max-w-6xl z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 ">
          <div className="px-6 py-2 rounded-full inline-flex items-center mb-6 animate-on-scroll animate-scale-in [animation-delay:0.1s] bg-blue-500/10">
            <span className="text-sm font-medium tracking-wider text-blue-400 uppercase">
              FROM THE FOUNDERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-on-scroll animate-scale-in [animation-delay:0.3s] text-center">
            Meet the Minds Behind Wingman
          </h2>
        </div>

        {/* Founders Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll animate-scale-in [animation-delay:0.5s]">
          {/* Animesh's Card */}
          <div className="founder-card p-8">
            <div className="flex flex-col items-center mb-6">
              <div className="w-48 h-48 overflow-hidden rounded-full mb-6 animate-image-glow">
                <img
                  src="/2.jpeg"
                  alt="Animesh Dhillon"
                  className="founder-image w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gradient-wingman">
                  Animesh Dhillon
                </h3>
                <p className="text-sm text-wingman-gold">Founder</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com/in/animesh-dhillon-a3387221b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/DhillonAnimesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/dhillonanimesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800/60 backdrop-blur-sm  p-5 rounded-lg border-l-4 border-wingman-500">
                <p className="text-gray-300/90 leading-relaxed italic">
                  "I’d sit through meetings, nodding along while secretly
                  panicking—too busy taking notes to actually process anything.
                  Later, I’d replay recordings, piece together scattered
                  thoughts, and still feel lost. One day, I thought—why am I
                  even here if I can’t fully engage? That’s why we built
                  Wingman. Now, I listen, and Wingman remembers."
                </p>
              </div>
            </div>
          </div>

          {/* Vasu's Card */}
          <div className="founder-card p-8">
            <div className="flex flex-col items-center mb-6">
              <div className="w-48 h-48 overflow-hidden rounded-full mb-6 animate-image-glow">
                <img
                  src="/1.jpg"
                  alt="Vasu Yadav"
                  className="founder-image w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gradient-wingman">
                  Vasu Yadav
                </h3>
                <p className="text-sm text-wingman-gold">Founder</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com/in/ivasuy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/ivasuyadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com/imvasuyadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800/60 backdrop-blur-sm  p-5 rounded-lg border-l-4 border-wingman-500">
                <p className="text-gray-300/90 leading-relaxed italic">
                  "I used to leave meetings drowning in notes—pages of scribbles
                  but no real clarity. It felt like I was working for my notes
                  instead of them working for me. That’s when it hit me—why
                  can’t tech do this for us? Wingman isn’t just transcription;
                  it understands, highlights what matters, and lets me stay
                  present. No more information overload, just effortless focus."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Joint Founders Message - Condensed Vision */}
        <div className="max-w-4xl mx-auto mt-16 bg-gray-800/60 backdrop-blur-sm p-8 rounded-lg border border-white/10 animate-on-scroll animate-scale-in [animation-delay:0.7s]">
          <div className="w-32 h-32 mx-auto mb-6 animate-on-scroll animate-scale-in [animation-delay:0.4s]">
            <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-wingman-gold/30 shadow-xl">
              <img
                src="/3.jpeg"
                alt="Animesh Dhillon and Vasu Yadav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gradient-wingman mb-6 text-center">
            Our Vision
          </h3>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300/90 leading-relaxed text-lg mb-6">
              <span className="text-gradient-wingman font-medium text-xl">
                We've all been there
              </span>
              —scrambling to take notes during a fast-paced meeting, struggling
              to recall key details, or wasting hours searching through old
              recordings. It’s frustrating, inefficient, and honestly, a
              productivity killer.
            </p>

            <div className="bg-black/20 p-6 rounded-lg border-l-4 border-wingman-700 mb-6">
              <p className="text-gray-300/90 leading-relaxed text-lg">
                One day, we looked at each other and said,
                <span className="text-gradient-wingman font-semibold">
                  {" "}
                  "This has to stop."{" "}
                </span>
                Meetings shouldn’t feel like a memory test. So we built{" "}
                <span className="text-gradient-wingman font-semibold">
                  Wingman
                </span>
                —an AI assistant that transcribes, understands, and helps you
                stay fully present in every conversation.
              </p>
            </div>

            <div className="flex items-center gap-4 my-8">
              <div className="h-px bg-wingman-gold/30 flex-grow"></div>
              <p className="text-xl text-gradient-wingman font-medium">
                We faced this problem ourselves—and we knew it had to be solved.
                For good.
              </p>
              <div className="h-px bg-wingman-gold/30 flex-grow"></div>
            </div>

            <p className="text-gray-300/90 leading-relaxed text-lg">
              <span className="text-gradient-wingman font-semibold text-2xl">
                Wingman
              </span>{" "}
              isn’t just another tool—it’s the sidekick we always wished we had.
              The one that ensures no idea gets lost, no key detail is
              forgotten, and no conversation feels like a blur.
            </p>

            <p className="text-gray-300/90 leading-relaxed text-lg">
              We built this for ourselves. We built this for you. Let’s redefine
              how we capture, recall, and act on conversations—together.
            </p>

            <p className="text-right mt-6 text-gradient-wingman font-medium text-xl">
              – Animesh & Vasu
            </p>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="mt-12 text-center animate-on-scroll animate-scale-in [animation-delay:0.9s]">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-wingman-blue hover:bg-wingman-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wingman-blue focus:ring-offset-wingman-background transition-all duration-300 transform hover:scale-105"
          >
            Try Wingman Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FoundersSection;
