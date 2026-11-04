"use server";
import { revalidatePath } from "next/cache";

import { getAuthenticatedUser } from "@/helpers/auth";
import { addDeposit } from "@/helpers/queries";

export default async function createDeposit(formData: FormData, id: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { error: "You must be signed in to create a deposit." };
  }
  
  const amount = Number(formData.get("amount"));
  const note = String(formData.get("note"));

  await addDeposit(supabase, {
    amount,
    goal_id: id,
    note,
  });

  revalidatePath("/");

  return;
}
