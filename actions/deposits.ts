"use server";
import { revalidatePath } from "next/cache";

import { getAuthenticatedUser } from "@/helpers/auth";

export default async function createDeposit(formData: FormData, id: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to create a deposit." };
  }

  const amount = Number(formData.get("amount"));
  const note = String(formData.get("note"));

  const { data, error } = await supabase.from("deposits").insert({
    amount,
    goal_id: id,
    note,
  });

  if (error) {
    throw new Error("Failed to create deposit.");
  }

  revalidatePath("/");

  return data;
}
