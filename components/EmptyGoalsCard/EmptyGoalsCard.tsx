"use client";
import { useRef } from "react";
import Image from "next/image";

import Button from "@/components/Button/Button";
import GoalForm from "@/components/GoalForm/GoalForm";
import Modal from "@/components/Modal/Modal";

const EmptyGoalsCard = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onNewGoal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="rounded-2xl border border-dashed border-[#3C3B40] bg-[#101010]">
      <div className="flex flex-col items-center p-4">
        <Image
          src="/icon-target.svg"
          alt="Add Goal"
          width={40}
          height={40}
          className="mb-5"
        />
        <h1 className="text-preset-2 mb-5">No goals yet</h1>
        <p className="text-preset-5 mb-5 text-center text-[#b7b7b7]">
          Start saving for something that matters. Create your first goal and
          track your progress.
        </p>
        <>
          <Button variant="primary" onClick={onNewGoal}>
            + Create your first goal
          </Button>
          <Modal title="New goal" closeModal={closeModal} modalRef={modalRef}>
            <GoalForm action="add" closeModal={closeModal} />
          </Modal>
        </>
      </div>
    </div>
  );
};

export default EmptyGoalsCard;
