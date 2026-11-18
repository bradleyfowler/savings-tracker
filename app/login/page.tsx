import Image from "next/image";
import Link from "next/link";

import LoginForm from "@/components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="px-4 py-8 md:mx-auto md:flex md:max-w-7xl md:items-center md:gap-10">
      <div className="hidden md:flex md:h-205 md:flex-2 md:items-center md:justify-center md:self-stretch md:rounded-2xl md:bg-linear-to-r md:from-[#b92b09] md:to-[#ff5722] md:p-8">
        <p className="text-preset-1">
          &quot;The goal isn&apos;t to be rich. It&apos;s to have enough.&quot;
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
          <h1 className="text-preset-2 mb-4">Welcome back</h1>
          <h2 className="text-preset-5">Sign in to your account</h2>
        </div>
        <LoginForm />
        <p className="text-center">
          Don&apos;t have an account? <Link href="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
