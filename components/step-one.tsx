"use client";

import { StepOneSchema } from "@/schemas/auth";
import { useRegistrationStore } from "@/stores/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const StepOne: React.FC<{ onContinue: () => void }> = ({
  onContinue,
}) => {
  const { firstName, lastName, setStepOneData } = useRegistrationStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof StepOneSchema>>({
    resolver: zodResolver(StepOneSchema),
    defaultValues: { firstName, lastName },
  });

  const onSubmit = (data: z.infer<typeof StepOneSchema>) => {
    setStepOneData(data);
    onContinue();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full">
      <div className="w-full">
        <h2 className="font-bold text-left mb-2 text-lg">Some introductions</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            {...register("firstName")}
            label="First name"
            placeholder="Your first name"
            error={errors.firstName?.message}
          />

          <Input
            {...register("lastName")}
            label="Last name"
            placeholder="Your last name"
            error={errors.lastName?.message}
          />

          <Button type="submit" className="mt-4">
            Continue
          </Button>

          <Button variant="secondary" className="font-bold" type="button">
            Already have an account?
          </Button>

          <div className="text-center text-gray-300 text-xs mt-4">
            Version 0.1
          </div>
        </form>
      </div>
    </div>
  );
};
