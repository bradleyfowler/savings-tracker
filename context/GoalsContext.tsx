import { createContext, useContext } from "react";
import type { Goal } from "@/types/goals";

export type GoalsContextType = {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
};

export const GoalsContext = createContext<GoalsContextType | null>(null);

export function useGoals(): GoalsContextType {
  return useContext(GoalsContext) as GoalsContextType;
}