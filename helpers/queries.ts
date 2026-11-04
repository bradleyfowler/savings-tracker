import { SupabaseClient } from "@supabase/supabase-js";
import { TablesInsert } from "@/types/database.types";

export async function getAllGoals(supabase: SupabaseClient, user: string) {
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
) {
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
) {
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

export async function getAllDeposits(supabase: SupabaseClient, goalId: string) {
  const { data, error } = await supabase
    .from("deposits")
    .select("*")
    .eq("goal_id", goalId);

  if (error) {
    throw new Error("Failed to fetch deposits.");
  }

  return data;
}
