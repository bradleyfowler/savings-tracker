import Link from "next/link";

import DepositCard from "@/components/DepositCard/DepositCard";
import EmptyGoalsCards from "@/components/EmptyGoalsCard/EmptyGoalsCard";
import GoalCard from "@/components/GoalCard/GoalCard";
import ListControls from "@/components/ListControls/ListControls";
import MetricCard from "@/components/MetricCard/MetricCard";

import { getAllGoals, getDepoitsForGoals } from "@/helpers/queries";
import { getAuthenticatedUser } from "@/helpers/auth";
import { getGoalProgress, getTotalSavings } from "@/helpers/goal-calculations";

export default async function Home() {
  const { supabase, user } = await getAuthenticatedUser();
  const isAuthenticated = Boolean(user);
  const goals = user ? await getAllGoals(supabase, user.id) : [];
  const depositsForGoals = await getDepoitsForGoals(
    supabase,
    goals.map((goal) => goal.id),
  );

  return (
    <div>
      <section>
        <MetricCard
          title="Total savings"
          value={`£${getTotalSavings(goals, depositsForGoals)}`}
        />
        <MetricCard title="Active goals" value={goals.length} />
        <MetricCard title="Goals completed" value={0} />
        <DepositCard />
      </section>
      <section>
        <div className="mb-5">
          <h1 className="text-preset-2">Your goals</h1>
          <ListControls />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.length === 0 ? (
            <EmptyGoalsCards isAuthenticated={isAuthenticated} />
          ) : (
            goals.map((goal) => {
              const goalDeposits = depositsForGoals.filter(
                (deposit) => deposit.goal_id === goal.id,
              );
              const { saved, percentage } = getGoalProgress(
                goal.target_amount,
                goalDeposits,
              );

              return (
                <Link key={goal.id} href={`/goals/${goal.id}`}>
                  <GoalCard
                    title={goal.name}
                    progress={Math.round(percentage)}
                    amount={`£${saved} of £${goal.target_amount}`}
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
