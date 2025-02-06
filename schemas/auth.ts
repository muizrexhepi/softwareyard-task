import { z } from "zod";

export const StepOneSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
});

export const StepTwoSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^\d{4}\s\d{6}$/, { message: "Invalid phone number format" }),
  countryCode: z.string().min(2, { message: "Select a country code" }),
});
