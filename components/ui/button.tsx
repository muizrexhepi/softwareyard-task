import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full py-3.5 rounded-full transition-colors font-light",
          {
            "bg-primary text-white hover:bg-blue-600": variant === "primary",
            "text-primary hover:bg-primary/5 font-light":
              variant === "secondary",
            "text-primary": variant === "link",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
