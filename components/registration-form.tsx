"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { slideVariants, transition } from "./animations/variants";
import { ProgressBar } from "./progress-bar";
import { useFormNavigation } from "./hooks/use-form-navigation";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { SuccessScreen } from "./success-screen";

export const RegistrationForm = () => {
  const { step, direction, handleNext, handleBack, handleRestart } =
    useFormNavigation();

  return (
    <div className="flex flex-col justify-start items-center max-h-screen w-full px-5 max-w-md gap-4 relative">
      {step < 3 && (
        <>
          <Image
            src="/assets/icons/logo.svg"
            width={50}
            height={50}
            alt="Logo"
          />
          <ProgressBar step={step} />
        </>
      )}
      {step === 2 && (
        <ArrowLeft
          onClick={handleBack}
          className="absolute top-2 left-4 text-gray-600 cursor-pointer"
        />
      )}
      <motion.div
        key={step}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        transition={transition}
        className="w-full mt-4"
      >
        {step === 1 && <StepOne onNext={handleNext} />}
        {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <SuccessScreen onRestart={handleRestart} />}
      </motion.div>
    </div>
  );
};
