"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Deposit } from "@/types/goals";

import AddDepositForm from "@/components/AddDepositForm/AddDeposit";
import DepositHistoryItem from "@/components/DepositHistoryItem/DepositHistoryItem";

import { useGoals } from "@/context/GoalsContext";

import { getGoalProgress } from "@/helpers/goal-calculations";

const GoalPage = () => {
  const { id } = useParams<{ id: string }>();

  const { goals } = useGoals();

  const goal = goals.find((goal) => goal.id == id);

  const { saved, percentage } = getGoalProgress(1000, goal?.deposits ?? []);

  const renderDeposits = () => {
    const deposits: Deposit[] = goal?.deposits ?? [];

    if (deposits.length === 0) {
      return null;
    }

    return deposits.map((deposit, index) => {
      return (
        <DepositHistoryItem
          key={index}
          note={deposit.note}
          amount={deposit.amount}
          createdAt={deposit.createdAt}
        />
      );
    });
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <Link
            className="flex flex-row gap-1 text-preset-6 text-[#898A8B]"
            href="/"
          >
            <img
              src="/icon-chevron-left.svg"
              alt="Chevron Left"
              className="h-5 w-5"
            />
            Back
          </Link>
        </div>
        <div className="flex gap-3">
          <Link className="text-preset-6 text-[#898A8B]" href="/">
            Edit goal
          </Link>
          <Link className="text-preset-6 text-[#EF4444]" href="/">
            Delete goal
          </Link>
        </div>
      </div>
      <h1 className="text-preset-1-mobile">{goal?.name}</h1>
      <div className="flex gap-4 mb-10">
        <p className="text-preset-6 text-[#898A8B]">{goal?.deadline}</p>
        <p className="text-preset-6 text-[#898A8B]">
          Created{" "}
          {goal?.createdAt.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="rounded-2xl mb-6 bg-[#1f1f1f] border border-solid border-[#3C3B40]">
        <div className="p-4">
          <p className="mb-4 text-preset-1-mobile text-[#ff5722]">
            {percentage}%
          </p>
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-[#2D2B31]">
            <div
              className="h-3 rounded-full transition-all bg-[#ff5722]"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="flex flex-col text-preset-6">
              £{saved}
              <span className="text-[#898A8B]">Saved so far</span>
            </p>
            <p className="flex flex-col text-preset-6">
              of £{goal?.target} <span className="text-[#898A8B]">Target</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl mb-6 bg-[#1f1f1f] border border-solid border-[#3C3B40]">
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
