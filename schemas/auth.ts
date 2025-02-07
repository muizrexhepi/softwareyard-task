import { z } from "zod";

export const StepOneSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" }),
});

export const StepTwoSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{4}\s\d{6}$/, {
      message: "Phone number must be in format xxxx xxxxxx",
    }),
  countryCode: z
    .string()
    .min(2, { message: "Select a valid country code" })
    .max(5, { message: "Invalid country code" }),
});

export const RegistrationSchema = StepOneSchema.merge(StepTwoSchema);
