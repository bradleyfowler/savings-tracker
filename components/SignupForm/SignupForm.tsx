"use client";
import { useActionState } from "react";

import { signup } from "@/actions/authentication";
import type { SignupState } from "@/actions/authentication";

import Button from "@/components/Button/Button";

const initialState: SignupState = {
  error: null,
  data: { user: null, session: null },
};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signup, initialState);

  if (!state.data?.session && state.data?.user) {
    return (
      <div className="mb-4">
        <h1 className="text-preset-2 mb-2">Check your inbox</h1>
        <p className="text-preset-5 mb-8">
          We sent a verification link to {state.data.user.email}
        </p>
        <Button variant="secondary" fullWidth>
          Open email app
        </Button>
      </div>
    );
  }

  return (
    <form className="mb-4" action={formAction}>
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="name">Full name</label>
        <input
          className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="email">Email address</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="email"
          type="email"
          id="email"
          required
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="password"
          type="password"
          id="password"
          required
        />
      </div>
      <div className="flex flex-row justify-end gap-4">
        <Button disabled={isPending} fullWidth>
          {isPending ? "Creating account..." : "Create account"}
        </Button>
      </div>
    </form>
  );
}
