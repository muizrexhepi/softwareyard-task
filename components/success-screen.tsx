import { CircleCheck } from "lucide-react";

export const SuccessScreen: React.FC<{ onRestart: () => void }> = ({
  onRestart,
}) => {
  return (
    <div className="pt-40">
      <div className="text-center">
        <div className="flex justify-center">
          <CircleCheck className="text-primary size-32" />
        </div>

        <h2 className="text-xl font-semibold mt-4">Congratulations</h2>
        <p className="text-gray-600 font-light mt-2">
          Welcome to your very own 25
        </p>

        <button onClick={onRestart} className="text-primary font-medium mt-2">
          Back to start
        </button>
      </div>
    </div>
  );
};
