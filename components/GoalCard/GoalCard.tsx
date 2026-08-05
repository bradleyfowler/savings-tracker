const GoalCard = ({
  amount,
  dueDate,
  progress,
  title,
  complete,
}: {
  amount: string;
  dueDate: string;
  progress: number;
  title: string;
  complete?: boolean;
}) => {
  const isComplete = progress === 100;

  return (
    <div className="rounded-2xl bg-[#1f1f1f] bg-[url('/pattern-grid.svg')] border border-solid border-[#3C3B40]">
      <div className="flex justify-between align-middle p-4 mb-8">
        <h1 className="text-xl font-bold">{title}</h1>
        {complete && (
          <span className="text-[#4ADE80] bg-[#1A3D2B] border-2 border-solid border-[#4ADE80] rounded-full font-bold py-1.5 px-2.5 text-sm">
            COMPLETE
          </span>
        )}
      </div>
      <div className="p-4">
        <p className={`mb-4 text-[44px] font-bold ${isComplete ? "text-[#4ADE80]" : "text-[#ff5722]"}`}>
          {progress}%
        </p>
        <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-[#2D2B31]">
          <div
            className={`h-3 rounded-full transition-all ${isComplete ? "bg-[#4ADE80]" : "bg-[#ff5722]"}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex gap-4">
          <p>{amount}</p>
          <p>Due {dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
