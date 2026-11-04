import { createClient } from "@/helpers/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not found", { status: 404 });
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: process.env.SUPABASE_EMAIL!,
    password: process.env.SUPABASE_PASSWORD!,
  });

  if (error) {
    return new NextResponse(error.message, { status: 401 });
  }

  return new NextResponse("Signed in.");
}
