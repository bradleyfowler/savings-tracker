"use client";

import Button from "@/components/Button/Button";
import Link from "next/link";

const GoalPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <Link className="flex flex-row gap-1 text-preset-6 text-[#898A8B]" href="/">
            <img
              src="/icon-chevron-left.svg"
              alt="Chevron Left"
              className="h-5 w-5"
            />
            Back
          </Link>
        </div>
        <div className="flex gap-3">
          <Link className="text-preset-6 text-[#898A8B]" href="/">
            Edit goal
          </Link>
          <Link className="text-preset-6 text-[#EF4444]" href="/">
            Delete goal
          </Link>
        </div>
      </div>
      <h1 className="text-preset-1-mobile">Emergency Fund</h1>
      <div className="flex gap-4 mb-10">
        <p className="text-preset-6 text-[#898A8B]">Due 1 Jun 2026</p>
        <p className="text-preset-6 text-[#898A8B]">Created Nov 15, 2025</p>
      </div>
      <div className="rounded-2xl mb-6 bg-[#1f1f1f] border border-solid border-[#3C3B40]">
        <div className="p-4">
          <p className="mb-4 text-preset-1-mobile text-[#ff5722]">76%</p>
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-[#2D2B31]">
            <div
              className="h-3 rounded-full transition-all bg-[#ff5722]"
              style={{ width: `${Math.min(76, 100)}%` }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="flex flex-col text-preset-6">
              £1,900.00<span className="text-[#898A8B]">Saved so far</span>
            </p>
            <p className="flex flex-col text-preset-6">
              of £2,499.00 <span className="text-[#898A8B]">Target</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl mb-6 bg-[#1f1f1f] border border-solid border-[#3C3B40]">
        <div className="p-4">
          <h2 className="text-preset-4">Add deposit</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Amount</label>
              <input
                className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
                name="amount"
                placeholder="0.00"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="amount">Note (optional)</label>
              <input
                className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
                name="note"
                placeholder="e.g. Monthly savings"
              />
            </div>
            <div className="w-full">
              <Button type="primary" fullWidth>
                Add funds
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-preset-4">Deposit history</h2>
          <h2 className="text-preset-6">7 Deposits</h2>
        </div>
        <hr className="my-6 w-full border-[#3c3b40]" />

        <ul>
          <li className="grid grid-cols-2">
            <div className="flex gap-2 flex-row">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f]">
                <img
                  src="/icon-arrow-down.svg"
                  alt="Down Arrow"
                  className="h-5 w-5"
                />
              </div>
              <div>
                <p className="text-preset-6">Monthly savings</p>
                <p className="text-preset-6">Jan 1, 2026</p>
              </div>
            </div>

            <div>
              <p className="text-right text-[#4ADE80] text-preset-5-semi-bold">
                +£200.00
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoalPage;
