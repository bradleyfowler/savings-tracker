import Link from "next/link";
import { redirect } from "next/navigation";

import DepositCard from "@/components/DepositCard/DepositCard";
import EmptyGoalsCards from "@/components/EmptyGoalsCard/EmptyGoalsCard";
import GoalCard from "@/components/GoalCard/GoalCard";
import ListControls from "@/components/ListControls/ListControls";
import MetricCard from "@/components/MetricCard/MetricCard";
import { createClient } from "@/helpers/supabase/server";

import { getAllGoals, getDepoitsForGoals } from "@/helpers/queries";
import { getGoalProgress, getTotalSavings } from "@/helpers/goal-calculations";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {goals.length === 0 ? (
            <EmptyGoalsCards />
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
