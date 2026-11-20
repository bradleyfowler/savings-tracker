"use client";
import { SubmitEvent } from "react";
import { useParams } from "next/navigation";

import createDeposit from "@/actions/deposits";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

const AddDepositForm = () => {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    await createDeposit(new FormData(form), id);

    form.reset();
  };

  return (
    <div className="p-4">
      <h2 className="text-preset-4">Add deposit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col gap-2">
          <Input name="amount" label="Amount" placeholder="0.00" isRequired />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <Input
            name="note"
            label="Note (optional)"
            placeholder="e.g. Monthly savings"
          />
        </div>
        <div className="w-full">
          <Button variant="primary" fullWidth>
            Add funds
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDepositForm;
