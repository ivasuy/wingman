import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { addEmailToWaitlist } from "@/service/firestoreService";
import SuccessPopup from "./success-popup";

interface WaitlistFormProps {
  className?: string;
}

const placeholders = ["Enter your email address!"];

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const response = await addEmailToWaitlist(email);
    if (response.success) {
      setEmail("");
      setShowSuccessPopup(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div
      id="waitlist"
      className={cn("flex flex-col items-start text-left w-full", className)}
    >
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <p className="text-wingman-300 ml-3 mt-5">
        Join <span className="text-wingman-200 font-semibold">127 others</span>{" "}
        waiting for early access!
      </p> */}
      {showSuccessPopup && (
        <SuccessPopup
          isOpen={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </div>
  );
};

export default WaitlistForm;
