import { SupabaseClient } from "@supabase/supabase-js";
import { TablesInsert, TablesUpdate } from "@/types/database.types";

import type { Deposit, Goal } from "@/types/goals";

export async function getAllGoals(
  supabase: SupabaseClient,
  user: string,
): Promise<Goal[]> {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", user);

  if (error) {
    throw new Error("Failed to fetch goals.");
  }

  return data;
}

export async function getGoal(
  id: string,
  userId: string,
  supabase: SupabaseClient,
): Promise<Goal> {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .single();

  if (error) {
    throw new Error("Failed to fetch goal.");
  }

  return data;
}

export async function addGoal(
  supabase: SupabaseClient,
  goal: TablesInsert<"goals">,
): Promise<Goal[]> {
  const { data, error } = await supabase
    .from("goals")
    .insert({
      ...goal,
    })
    .select()
    .single();

  if (error) {
    throw new Error("Failed to create goal.");
  }

  return data;
}

export async function editSingleGoal(
  userId: string,
  goalId: string,
  supabase: SupabaseClient,
  goal: TablesUpdate<"goals">,
): Promise<Goal> {
  const { data, error } = await supabase
    .from("goals")
    .update(goal)
    .eq("id", goalId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) {
    throw new Error("Failed to update goal.");
  }

  return data;
}

export async function deleteGoalAndDeposits(
  supabase: SupabaseClient,
  userId: string,
  goalId: string,
) {
  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", goalId)
    .eq("user_id", userId);

  if (error) {
    throw new Error("Failed to delete goal.");
  }
}

export async function addDeposit(
  supabase: SupabaseClient,
  deposit: TablesInsert<"deposits">,
) {
  const { data, error } = await supabase.from("deposits").insert(deposit);

  if (error) {
    throw new Error("Failed to create deposit.");
  }

  return data;
}

export async function getGoalDeposits(
  supabase: SupabaseClient,
  goalId: string,
): Promise<Deposit[]> {
  const { data, error } = await supabase
    .from("deposits")
    .select("*")
    .eq("goal_id", goalId);

  if (error) {
    throw new Error("Failed to fetch deposits.");
  }

  return data;
}

export async function getDepoitsForGoals(
  supabase: SupabaseClient,
  goalIds: string[],
): Promise<Deposit[]> {
  if (goalIds.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("deposits")
    .select("*")
    .in("goal_id", goalIds);

  if (error) {
    throw new Error("Failed to fetch deposits.");
  }

  return data;
}
