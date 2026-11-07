import createGoal from "@/actions/goals";

import Button from "@/components/Button/Button";

import type { SubmitEvent } from "react";

type ModalProps = {
  closeModal: () => void;
};

const GoalForm = ({ closeModal }: ModalProps) => {
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    await createGoal(new FormData(form));

    form.reset();

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="name">Goal name</label>
        <input
          className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="name"
          placeholder="e.g. Emergency Fund"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="amount">Target amount</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="amount"
          placeholder="0.00"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="deadline">Deadline (optional)</label>
        <input
          className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
          name="deadline"
        />
      </div>
      <div className="flex flex-row gap-4 justify-end">
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary">Create goal</Button>
      </div>
    </form>
  );
};

export default GoalForm;
