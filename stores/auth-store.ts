import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegistrationState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  setRegistrationData: (
    data: Partial<Omit<RegistrationState, "setRegistrationData" | "resetForm">>
  ) => void;
  resetForm: () => void;
}

export const useRegistrationStore = create<RegistrationState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "+44",
      setRegistrationData: (data) => set(data),
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
