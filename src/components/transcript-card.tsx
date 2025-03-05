import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TranscriptCardProps {
  className?: string;
}

const TranscriptCard: React.FC<TranscriptCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-wingman-card rounded-xl overflow-hidden max-w-md w-full shadow-xl transition-all duration-300 hover:shadow-2xl",
        className
      )}
    >
      {/* Card Header with macOS-like buttons */}
      <div className="px-4 py-2 flex items-center bg-black/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-gray-400 mx-auto">
          Wingman AI Assistant
        </span>
      </div>

      {/* Transcript Content */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-blue-400">Meeting Transcript</h3>

          <div className="space-y-3">
            <div
              className="space-y-1 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-blue-300 font-medium">John:</p>
              <p className="text-gray-300 text-sm">
                So what are the key metrics we should focus on for Q4?
              </p>
            </div>

            <div
              className="space-y-1 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-blue-300 font-medium">Sarah:</p>
              <p className="text-gray-300 text-sm">
                I think we should prioritize customer acquisition costs and
                retention rates.
              </p>
            </div>

            <div
              className="space-y-1 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-blue-300 font-medium">Michael:</p>
              <p className="text-gray-300 text-sm">
                What about our NPS scores? They've been trending up lately.
              </p>
            </div>
          </div>
        </div>

        {/* AI Answer */}
        <div
          className="bg-black/30 p-4 rounded-lg space-y-3 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-wingman-gold flex items-center justify-center text-black text-xs">
              AI
            </div>
            <p className="font-medium text-gray-200">Wingman AI Answer</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-300">
              Key metrics for Q4 should include:
            </p>
            <ul className="text-sm text-gray-300 space-y-1 list-inside">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>Customer Acquisition Cost (CAC)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>Customer Retention Rate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>Net Promoter Score (NPS)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <span>Revenue Growth Rate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                <span>Customer Lifetime Value (LTV)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="border-t border-gray-800 p-4">
        <Button
          variant="outline"
          className="w-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Transcript
        </Button>
      </div>
    </div>
  );
};

export default TranscriptCard;
