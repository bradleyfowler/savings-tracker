"use server";
import { redirect } from "next/navigation";

import { createClient } from "@/helpers/supabase/server";

export async function login(
  _previousState: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      error:
        error.code === "invalid_credentials"
          ? "Your password or email is incorrect"
          : "An unexpected issue happened",
    };
  }

  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
