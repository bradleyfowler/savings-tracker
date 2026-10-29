import type { RefObject, SubmitEvent } from "react";
import { Goal } from "@/types/goals";
import { useGoals } from "@/context/GoalsContext";

import Button from "../Button/Button";

type ModalProps = {
  modalRef: RefObject<HTMLDialogElement | null>;
};

const Modal = ({ modalRef }: ModalProps) => {
  const { addGoal } = useGoals();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const date = new Date();

    const newGoal: Goal = {
      id: crypto.randomUUID(),
      createdAt: date,
      name: String(formData.get("name")),
      target: Number(formData.get("amount")),
      deadline: String(formData.get("deadline")),
      deposits: [],
    }

    addGoal(newGoal);
    event.currentTarget.reset();
    closeModal();
  }

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <dialog
      ref={modalRef}
      className="fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-140 rounded-2xl border border-[#3c3b40] bg-[#1f1f1f] p-6 text-white"
    >
      <div className="flex justify-between">
        <h2 className="text-preset-4">New goal</h2>
        <button
          type="button"
          className="hover:cursor-pointer"
          onClick={closeModal}
        >
          <img src="/icon-cross.svg" alt="Close" />
        </button>
      </div>
      <hr className="my-6 w-full border-[#3c3b40]" />
      <form onSubmit={handleSubmit}> 
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="name">Goal name</label>
          <input
            className="rounded-lg border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
            name="name"
            placeholder="e.g. Emergency Fund"
          />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="amount">Target amount</label>
          <input
            className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
            name="amount"
            placeholder="0.00"
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
          <Button type="primary" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="primary">Create goal</Button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
