"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getAuthenticatedUser } from "@/helpers/auth";
import { addGoal, deleteGoalAndDeposits } from "@/helpers/queries";

export default async function createGoal(formData: FormData) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to create a goal." };
  }

  const name = String(formData.get("name"));
  const targetAmount = Number(formData.get("amount"));
  const deadlineValue = String(formData.get("deadline"));

  await addGoal(supabase, {
    name,
    target_amount: targetAmount,
    deadline: deadlineValue || null,
    user_id: user.id,
  });

  revalidatePath("/");

  return;
}

export async function deleteGoal(goalId: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to create a goal." };
  }

  await deleteGoalAndDeposits(supabase, user.id, goalId);

  redirect("/");
}
