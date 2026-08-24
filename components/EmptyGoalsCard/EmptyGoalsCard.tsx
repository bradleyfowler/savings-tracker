import Image from "next/image";
import Button from "@/components/Button/Button";

type EmptyGoalsCardProps = {
  onNewGoal: () => void;
};

const EmptyGoalsCard = ({ onNewGoal }: EmptyGoalsCardProps) => {
  return (
    <div className="rounded-2xl bg-[#101010] border border-dashed border-[#3C3B40]">
      <div className="flex flex-col items-center p-4">
        <Image
          src="/icon-target.svg"
          alt="Add Goal"
          width={40}
          height={40}
          className="mb-5"
        />
        <h1 className="text-preset-2 mb-5">No goals yet</h1>
        <p className="text-preset-5 text-center mb-5 text-[#b7b7b7]">
          Start saving for something that matters. Create your first goal and
          track your progress.
        </p>
        <Button type="primary" onClick={onNewGoal}>
          + Create your first goal
        </Button>
      </div>
    </div>
  );
};

export default EmptyGoalsCard;
