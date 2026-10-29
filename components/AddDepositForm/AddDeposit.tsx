import { SubmitEvent } from "react";
import { useParams } from "next/navigation";

import { Deposit } from "@/types/goals";

import { useGoals } from "@/context/GoalsContext";

import Button from "@/components/Button/Button";

const AddDepositForm = () => {
  const { id } = useParams<{ id: string }>();

  const { addDeposit } = useGoals();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    const date = new Date();

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newDeposit: Deposit = {
      id: crypto.randomUUID(),
      createdAt: date,
      amount: Number(formData.get("amount")),
      note: String(formData.get("note")),
    };

    addDeposit(newDeposit, id);
    event.currentTarget.reset();
  };

  return (
    <div className="p-4">
      <h2 className="text-preset-4">Add deposit</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="name">Amount</label>
          <input
            className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
            name="amount"
            placeholder="0.00"
          />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="note">Note (optional)</label>
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
  );
};

export default AddDepositForm;
