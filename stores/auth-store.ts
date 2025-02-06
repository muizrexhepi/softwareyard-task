import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegistrationState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  setStepOneData: (data: { firstName: string; lastName: string }) => void;
  setStepTwoData: (data: { phoneNumber: string; countryCode: string }) => void;
  resetForm: () => void;
}

export const useRegistrationStore = create<RegistrationState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "+44",
      setStepOneData: (data) => set(data),
      setStepTwoData: (data) => set(data),
      resetForm: () =>
        set({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          countryCode: "+44",
        }),
    }),
    {
      name: "registration-storage",
    }
  )
);
