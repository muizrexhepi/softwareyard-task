"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import {
  COUNTRY_OPTIONS,
  CountryCodeSelect,
} from "@/components/country-code-select";
import { useRegistrationStore } from "@/stores/auth-store";
import { StepTwoSchema } from "@/schemas/auth";
import { formatPhoneNumber } from "@/lib/utils";
import { useState } from "react";
import TermsDrawer from "@/components/terms-drawer";
import PrivacyDrawer from "@/components/privacy-drawer";
import useIsMobile from "./hooks/use-mobile";

interface StepTwoProps {
  onNext: () => void;
  onBack: () => void;
}

export const StepTwo = ({ onNext }: StepTwoProps) => {
  const { phoneNumber, countryCode, setRegistrationData } =
    useRegistrationStore();
  const isMobile = useIsMobile();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(StepTwoSchema),
    defaultValues: { phoneNumber, countryCode },
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit((data) => {
    setRegistrationData(data);
    onNext();
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold text-left mb-2">
          Let&apos;s validate your number
        </h2>
        <form onSubmit={onSubmit}>
          <label className="text-xs font-extralight">Phone number</label>
          <div className="flex space-x-2 mt-1">
            {isMobile ? (
              <CountryCodeSelect />
            ) : (
              <Select
                {...form.register("countryCode")}
                options={COUNTRY_OPTIONS}
                aria-label="Country code"
                onChange={(e) => form.setValue("countryCode", e.target.value)}
              />
            )}
            <Input
              {...form.register("phoneNumber")}
              type="tel"
              placeholder="7890 123456"
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setRegistrationData({ phoneNumber: formatted });
                form.setValue("phoneNumber", formatted);
              }}
              error={form.formState.errors.phoneNumber?.message}
              className="flex-1"
              aria-label="Phone number"
            />
          </div>
          <div className="text-xs sm:text-sm text-gray-600 text-left mt-6">
            By clicking &apos;Continue&apos; you confirm that you agree to our{" "}
            {isMobile ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(true)}
                  className="text-primary "
                >
                  terms and conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-primary "
                >
                  privacy policy
                </button>
              </>
            ) : (
              <>
                <a href="/terms-and-conditions" className="text-primary">
                  terms and conditions{" "}
                </a>
                and{" "}
                <a href="/privacy-policy" className="text-primary">
                  privacy policy
                </a>
              </>
            )}
          </div>
          <Button type="submit" className="mt-6">
            Continue
          </Button>
        </form>
      </div>

      {/* Mobile Drawers */}
      {isMobile && (
        <>
          <TermsDrawer
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
          />
          <PrivacyDrawer
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
          />
        </>
      )}
    </div>
  );
};
