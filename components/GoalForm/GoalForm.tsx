import type { Goal } from "@/types/goals";

import createGoal, { editGoal } from "@/actions/goals";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import type { SubmitEvent } from "react";

type ModalProps = {
  closeModal: () => void;
  goal?: Goal;
  action: "edit" | "add";
};

const GoalForm = ({ closeModal, goal, action }: ModalProps) => {
  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>,
    action: "edit" | "add",
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (action === "edit" && goal) {
      await editGoal(new FormData(form), goal?.id);
    }

    if (action === "add") {
      await createGoal(new FormData(form));
    }

    form.reset();

    closeModal();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, action)}>
      <div className="mb-6 flex flex-col gap-2">
        <Input
          name="name"
          defaultValue={goal?.name ?? ""}
          placeholder="e.g. Emergency Fund"
          isRequired
          label="Goal Name"
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <Input
          name="amount"
          defaultValue={goal?.target_amount ?? ""}
          placeholder="0.00"
          isRequired
          label="Target amount"
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <Input
          name="deadline"
          defaultValue={goal?.deadline ?? ""}
          label="Deadline (optional)"
          placeholder="Select a date"
        />
      </div>
      <div className="flex flex-row justify-end gap-4">
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary">
          {action === "edit" ? "Edit goal" : "Create goal"}
        </Button>
      </div>
    </form>
  );
};

export default GoalForm;
