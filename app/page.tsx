"use client";
import Link from "next/link";

import DepositCard from "@/components/DepositCard/DepositCard";
import EmptyGoalsCards from "@/components/EmptyGoalsCard/EmptyGoalsCard";
import GoalCard from "@/components/GoalCard/GoalCard";
import ListControls from "@/components/ListControls/ListControls";
import MetricCard from "@/components/MetricCard/MetricCard";

import { useGoals } from "@/context/GoalsContext";
import { useModal } from "@/context/ModalContext";

import { getGoalProgress, getTotalSavings } from "@/helpers/goal-calculations";

export default function Home() {
  const { goals } = useGoals();
  const { openModal } = useModal();

  return (
    <div>
      <section>
        <MetricCard
          title="Total savings"
          value={`£${getTotalSavings(goals)}`}
        />
        <MetricCard title="Active goals" value={goals.length} />
        <MetricCard title="Goals completed" value={7} />
        <DepositCard />
      </section>
      <section>
        <div className="mb-5">
          <h1 className="text-preset-2">Your goals</h1>
          <ListControls />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.length === 0 ? (
            <EmptyGoalsCards onNewGoal={openModal} />
          ) : (
            goals.map((goal) => {
              const { saved, percentage } = getGoalProgress(
                1000,
                goal?.deposits ?? [],
              );

              return (
                <Link key={goal.id} href={`/goals/${goal.id}`}>
                  <GoalCard
                    title={goal.name}
                    progress={percentage}
                    amount={`£${saved} of £${goal.target}`}
                    dueDate={goal.deadline}
                  />
                </Link>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
