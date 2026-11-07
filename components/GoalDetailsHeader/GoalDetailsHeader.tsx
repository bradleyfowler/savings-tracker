"use client";
import Link from "next/link";
import { useRef, useState } from "react";

import DeleteConfirmation from "@/components/DeleteConfirmation/DeleteConfirmation";
import GoalForm from "@/components/GoalForm/GoalForm";
import Modal from "@/components/Modal/Modal";

type GoalDetailsProps = {
  goalName: string;
};

const GoalDetailsHeader = ({ goalName }: GoalDetailsProps) => {
  const [action, setAction] = useState<"edit" | "delete" | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (selectedAction: "edit" | "delete") => {
    setAction(selectedAction);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const modalDescription =
    "This will permanently delete this goal and all its deposit history. This cannot be undone.";

  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link
          className="flex flex-row gap-1 text-preset-6 text-[#898A8B]"
          href="/"
        >
          <img
            src="/icon-chevron-left.svg"
            alt="Chevron Left"
            className="h-5 w-5"
          />
          Back
        </Link>
      </div>
      <div className="flex gap-3">
        <button
          className="text-preset-6 text-[#898A8B] hover:cursor-pointer"
          onClick={() => openModal("edit")}
        >
          Edit goal
        </button>
        <button
          className="text-preset-6 text-[#EF4444] hover:cursor-pointer"
          onClick={() => openModal("delete")}
        >
          Delete goal
        </button>
      </div>
      <Modal
        title={action === "edit" ? "Edit goal" : `Delete ${goalName}?`}
        modalRef={modalRef}
        closeModal={closeModal}
        description={action === "delete" ? modalDescription : ""}
      >
        {action === "edit" && <GoalForm closeModal={closeModal} />}
        {action === "delete" && <DeleteConfirmation />}
      </Modal>
    </div>
  );
};

export default GoalDetailsHeader;
