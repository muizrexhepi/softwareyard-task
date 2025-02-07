import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, error, ...props }, ref) => {
    return (
      <div className="space-y-1 relative">
        <select
          ref={ref}
          className={cn(
            "w-24 px-5 h-14 border rounded-full font-light appearance-none outline-primary",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <div className="absolute top-3.5 right-0 flex items-center pr-5 pointer-events-none">
          <ChevronDown size={18} />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
