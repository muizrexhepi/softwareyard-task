"use client";

export const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`size-8 flex items-center justify-center rounded-full font-medium ${
          step === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        1
      </div>
      <div className="size-1 rounded-full bg-gray-200" />
      <div
        className={`size-8 flex items-center justify-center rounded-full font-medium ${
          step === 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        2
      </div>
    </div>
  );
};
