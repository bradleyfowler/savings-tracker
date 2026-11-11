import { redirect } from "next/navigation";

import { Deposit } from "@/types/goals";

import AddDepositForm from "@/components/AddDepositForm/AddDeposit";
import DepositHistoryItem from "@/components/DepositHistoryItem/DepositHistoryItem";
import GoalDetailsHeader from "@/components/GoalDetailsHeader/GoalDetailsHeader";

import { createClient } from "@/helpers/supabase/server";
import { getGoal, getGoalDeposits } from "@/helpers/queries";
import { getGoalProgress } from "@/helpers/goal-calculations";

const GoalPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No user")
  }

  const goal = await getGoal(id, user?.id, supabase);
  const goalDeposits = await getGoalDeposits(supabase, id);

  const { saved, percentage } = getGoalProgress(
    goal.target_amount,
    goalDeposits,
  );

  const renderDeposits = () => {
    const deposits: Deposit[] = goalDeposits ?? [];

    if (deposits.length === 0) {
      return null;
    }

    return deposits.map((deposit, index) => {
      return (
        <DepositHistoryItem
          key={index}
          note={deposit.note}
          amount={deposit.amount}
          createdAt={new Date(deposit.created_at)}
        />
      );
    });
  };

  return (
    <div>
      <GoalDetailsHeader goal={goal} />
      <h1 className="text-preset-1-mobile">{goal?.name}</h1>
      <div className="mb-10 flex gap-4">
        <p className="text-preset-6 text-[#898A8B]">{goal?.deadline}</p>
        <p className="text-preset-6 text-[#898A8B]">
          Created{" "}
          {new Date(goal?.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mb-6 rounded-2xl border border-solid border-[#3C3B40] bg-[#1f1f1f]">
        <div className="p-4">
          <p className="text-preset-1-mobile mb-4 text-[#ff5722]">
            {Math.round(percentage)}%
          </p>
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-[#2D2B31]">
            <div
              className="h-3 rounded-full bg-[#ff5722] transition-all"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-preset-6 flex flex-col">
              £{saved}
              <span className="text-[#898A8B]">Saved so far</span>
            </p>
            <p className="text-preset-6 flex flex-col">
              of £{goal?.target_amount}
              <span className="text-[#898A8B]">Target</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-solid border-[#3C3B40] bg-[#1f1f1f]">
        <AddDepositForm />
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-preset-4">Deposit history</h2>
          <h2 className="text-preset-6">7 Deposits</h2>
        </div>
        <hr className="my-6 w-full border-[#3c3b40]" />
        <ul>{renderDeposits()}</ul>
      </div>
    </div>
  );
};

export default GoalPage;
