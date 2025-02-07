"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StepOneSchema } from "@/schemas/auth";
import { useRegistrationStore } from "@/stores/auth-store";

interface StepOneProps {
  onNext: () => void;
}

export const StepOne = ({ onNext }: StepOneProps) => {
  const { firstName, lastName, setRegistrationData } = useRegistrationStore();

  const form = useForm({
    resolver: zodResolver(StepOneSchema),
    defaultValues: { firstName, lastName },
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit((data) => {
    setRegistrationData(data);
    onNext();
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full">
      <div className="w-full">
        <h2 className="font-bold text-left mb-2 text-lg">Some introductions</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
          <Input
            {...form.register("firstName")}
            label="First name"
            placeholder="Your first name"
            error={form.formState.errors.firstName?.message}
            aria-invalid={!!form.formState.errors.firstName}
          />
          <Input
            {...form.register("lastName")}
            label="Last name"
            placeholder="Your last name"
            error={form.formState.errors.lastName?.message}
            aria-invalid={!!form.formState.errors.lastName}
          />
          <Button type="submit">Continue</Button>
          <Button variant="secondary" className="font-bold" type="button">
            Already have an account?
          </Button>
          <div className="text-center text-gray-300 text-xs mt-2">
            Version 0.1
          </div>
        </form>
      </div>
    </div>
  );
};
