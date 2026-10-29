import { Deposit, Goal } from "@/types/goals";

export function getGoalProgress(target: number, deposits: Deposit[]) {
  const saved = deposits.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0,
  );

  return { saved, percentage: (saved / target) * 100 };
}

export function getTotalSavings(goals: Goal[]) {
  const savedPerGoal = goals.map((goal) => {
    const { saved } = getGoalProgress(1000, goal?.deposits ?? []);
    return saved;
  });

  return savedPerGoal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
