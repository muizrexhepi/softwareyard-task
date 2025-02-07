import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPhoneNumber = (input: string) => {
  const cleaned = input.replace(/\D/g, "");
  return cleaned.length > 4
    ? `${cleaned.slice(0, 4)} ${cleaned.slice(4, 10)}`
    : cleaned;
};
