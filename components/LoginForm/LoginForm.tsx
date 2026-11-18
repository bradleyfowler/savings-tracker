"use client";
import Link from "next/link";
import { useActionState } from "react";

import { login } from "@/actions/authentication";

import Button from "@/components/Button/Button";

type LoginState = {
  error: string | null;
};

const initialState: LoginState = { error: null };

export default function LoginForm() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <form className="mb-4" action={formAction}>
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="amount">Email address</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="email"
          required
          type="email"
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="deadline">Password</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="password"
          required
          type="password"
        />
      </div>

      <div className="mb-6 flex items-center gap-4">
        {state.error && (
          <p className="text-sm text-red-500" role="alert">
            {state.error}
          </p>
        )}

        <p className="ml-auto whitespace-nowrap">
          <Link href="/forgot">Forgot Password</Link>
        </p>
      </div>

      <div className="flex flex-row justify-end gap-4">
        <Button fullWidth>Sign in</Button>
      </div>
    </form>
  );
}
