type DepositHistoryItemProps = {
  note: string;
  amount: number;
  createdAt: Date;
};

const DepositHistoryItem = ({
  note,
  amount,
  createdAt,
}: DepositHistoryItemProps) => {
  return (
    <li className="grid grid-cols-2">
      <div className="flex gap-2 flex-row">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f]">
          <img
            src="/icon-arrow-down.svg"
            alt="Down Arrow"
            className="h-5 w-5"
          />
        </div>
        <div>
          <p className="text-preset-6">{note}</p>
          <p className="text-preset-6">
            {createdAt.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div>
        <p className="text-right text-[#4ADE80] text-preset-5-semi-bold">
          + £{amount}
        </p>
      </div>
    </li>
  );
};

export default DepositHistoryItem;
