import type { Deposit, Goal } from "@/types/goals";

export function getGoalProgress(targetAmount: number, deposits: Deposit[]) {
  const saved = deposits.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0,
  );

  return { saved, percentage: (saved / targetAmount) * 100 };
}

export function getTotalSavings(goals: Goal[], deposits: Deposit[]) {
  const savedPerGoal = goals.map((goal) => {
    const goalDeposits = deposits.filter(
      (deposit) => deposit.goal_id === goal.id,
    );

    const { saved } = getGoalProgress(goal.target_amount, goalDeposits);

    return saved;
  });

  return savedPerGoal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
