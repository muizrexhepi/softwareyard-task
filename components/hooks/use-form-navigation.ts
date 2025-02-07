import { useState } from "react";
import { useRegistrationStore } from "@/stores/auth-store";

export const useFormNavigation = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const { resetForm } = useRegistrationStore();

  const handleNext = () => {
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(1);
  };

  const handleRestart = () => {
    resetForm();
    setDirection(-1);
    setStep(1);
  };

  return { step, direction, handleNext, handleBack, handleRestart };
};
