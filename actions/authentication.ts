"use server";
import { redirect } from "next/navigation";

import { Session, User } from "@supabase/supabase-js";

import { createClient } from "@/helpers/supabase/server";

export type SignupState = {
  error?: string | null;
  data?: { user: User | null; session: Session | null };
};

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

export async function signup(
  _previousState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const supabase = await createClient();

  const enteredSignupDetails = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp({
    email: enteredSignupDetails.email,
    password: enteredSignupDetails.password,
    options: {
      data: {
        full_name: enteredSignupDetails.name,
      },
    },
  });

  if (error) {
    return {
      error: "An unexpected issue happened.",
    };
  }

  return { data };
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
