import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button/Button";

export default function Signup() {
  return (
    <div className="md:mx-auto md:flex md:max-w-7xl md:items-center md:gap-10">
      <div className="hidden md:flex md:h-205 md:flex-2 md:items-center md:justify-center md:self-stretch md:rounded-2xl md:bg-linear-to-r md:from-[#b92b09] md:to-[#ff5722] md:p-8">
        <p className="text-preset-1">
          &quot;A budget is telling your money where to go instead of wondering where
          it went.&quot; 
        </p>
      </div>
      <div className="md:flex-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-small.svg"
            alt="Savings Tracker Logo"
            width={32}
            height={32}
          />
          <h1 className="text-preset-3 font-heading">Savings Tracker</h1>
        </div>
        <div className="mb-8">
          <h1 className="text-preset-2 mb-4">Create your account</h1>
          <h2 className="text-preset-5">Start tracking your savings goals</h2>
        </div>
        <form className="mb-4">
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="name">Full name</label>
            <input
              className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
              name="name"
              required
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="amount">Email address</label>
            <input
              className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
              name="email"
              required
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="deadline">Password</label>
            <input
              className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
              name="password"
              required
            />
          </div>
          <div className="flex flex-row justify-end gap-4">
            <Button fullWidth>Create account</Button>
          </div>
        </form>

        <p className="text-center">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
