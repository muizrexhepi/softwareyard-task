"use client";

import { StepTwoSchema } from "@/schemas/auth";
import { useRegistrationStore } from "@/stores/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Select } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const COUNTRY_OPTIONS = [
  { value: "+44", label: "+44" },
  { value: "+1", label: "+1" },
  { value: "+91", label: "+91" },
];

export const StepTwo: React.FC<{
  onContinue: () => void;
  onBack: () => void;
}> = ({ onContinue, onBack }) => {
  const { phoneNumber, countryCode, setStepTwoData } = useRegistrationStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof StepTwoSchema>>({
    resolver: zodResolver(StepTwoSchema),
    defaultValues: { phoneNumber, countryCode },
  });

  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, "");
    return cleaned.length > 4
      ? `${cleaned.slice(0, 4)} ${cleaned.slice(4, 10)}`
      : cleaned;
  };

  const onSubmit = (data: z.infer<typeof StepTwoSchema>) => {
    setStepTwoData(data);
    onContinue();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold text-left mb-2">
          Let&apos;s validate your number
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xs font-extralight">Phone number</label>
          <div className="flex space-x-2 mt-1">
            <Select
              {...register("countryCode")}
              options={COUNTRY_OPTIONS}
              aria-label="Country code"
            />

            <Input
              {...register("phoneNumber")}
              type="tel"
              placeholder="7890 123456"
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setValue("phoneNumber", formatted);
              }}
              error={errors.phoneNumber?.message}
              className="flex-1"
              aria-label="Phone number"
            />
          </div>

          <div className="text-xs sm:text-sm text-gray-600 text-left mt-6">
            By clicking &apos;Continue&apos; you confirm that you agree to our
            <a href="#" className="text-primary ml-1">
              terms and conditions
            </a>{" "}
            and
            <a href="#" className="text-primary ml-1">
              privacy policy
            </a>
            .
          </div>

          <Button type="submit" className="mt-6">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};
