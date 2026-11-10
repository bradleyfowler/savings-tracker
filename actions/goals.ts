"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getAuthenticatedUser } from "@/helpers/auth";

export default async function createGoal(formData: FormData) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to create a goal." };
  }

  const name = String(formData.get("name"));
  const targetAmount = Number(formData.get("amount"));
  const deadlineValue = String(formData.get("deadline"));

  const { data, error } = await supabase
    .from("goals")
    .insert({
      name,
      target_amount: targetAmount,
      deadline: deadlineValue || null,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw new Error("Failed to create goal.");
  }

  revalidatePath("/");

  return data;
}

export async function editGoal(formData: FormData, goalId: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to edit a goal." };
  }

  const name = String(formData.get("name"));
  const targetAmount = Number(formData.get("amount"));
  const deadlineValue = String(formData.get("deadline"));

  const { data, error } = await supabase
    .from("goals")
    .update({
      name,
      target_amount: targetAmount,
      deadline: deadlineValue || null,
      user_id: user.id,
    })
    .eq("id", goalId)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) {
    throw new Error("Failed to update goal.");
  }

  revalidatePath("/");

  return data;
}

export async function deleteGoal(goalId: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to delete a goal." };
  }

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", goalId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error("Failed to delete goal.");
  }

  redirect("/");
}
