import { deleteGoal } from "@/actions/goals";

import Button from "@/components/Button/Button";

type DeleteConfirmationProps = {
  goalId: string;
  closeModal: () => void;
};

const DeleteConfirmation = ({
  goalId,
  closeModal,
}: DeleteConfirmationProps) => {
  const handleDeleteClick = async () => {
    await deleteGoal(goalId);
  };

  const handleCancelClick = async () => {
    closeModal();
  };

  return (
    <div>
      <div className="flex flex-row gap-4 justify-end">
        <Button variant="secondary" onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button variant="delete" onClick={handleDeleteClick}>
          Delete Goal
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
