"use client";

import { useState } from "react";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { SuccessScreen } from "./success-screen";
import { useRegistrationStore } from "@/stores/auth-store";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProgressBar } from "./progress-bar";
import { ArrowLeft } from "lucide-react";

export const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const { resetForm } = useRegistrationStore();

  const handleRestart = () => {
    resetForm();
    setDirection(-1);
    setStep(1);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(1);
  };

  const DisplayStep = () => {
    return (
      <motion.div
        key={step}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        transition={transition}
        className="w-full mt-4"
      >
        {step === 1 && (
          <StepOne
            onContinue={() => {
              setDirection(1);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <StepTwo
            onContinue={() => {
              setDirection(1);
              setStep(3);
            }}
            onBack={() => {
              setDirection(-1);
              setStep(1);
            }}
          />
        )}
        {step === 3 && <SuccessScreen onRestart={handleRestart} />}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden w-full px-5 max-w-md gap-4 relative top-10 md:top-20">
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
      {step == 2 && (
        <ArrowLeft
          onClick={handleBack}
          className="absolute top-2 left-4 text-gray-600 cursor-pointer"
        />
      )}

      {DisplayStep()}
    </div>
  );
};
