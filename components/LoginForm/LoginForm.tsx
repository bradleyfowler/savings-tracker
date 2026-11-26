"use client";
import Link from "next/link";
import { useActionState } from "react";

import { login } from "@/actions/authentication";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

type LoginState = {
  error: string | null;
};

const initialState: LoginState = { error: null };

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form className="mb-4" action={formAction}>
      <div className="mb-4 flex flex-col gap-2">
        <Input name="email" label="Email address" type="email" isRequired />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <Input name="password" label="Password" type="password" isRequired />
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
        <Button disabled={isPending} fullWidth>
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
