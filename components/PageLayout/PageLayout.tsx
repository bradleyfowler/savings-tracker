"use client";

import { useRef, useState } from "react";
import type { Goal } from "@/types/goals";

import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import { GoalsContext, type GoalsContextType } from "@/context/GoalsContext";
import { ModalContext } from "@/context/ModalContext";

const PageLayout = ({ children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (newGoal: Goal) => {
    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const goalsContextValue: GoalsContextType = {
    goals,
    addGoal,
  };

  return (
    <GoalsContext.Provider value={goalsContextValue}>
      <ModalContext.Provider value={{ openModal }}>
        <Modal modalRef={modalRef} />
        <Header onNewGoal={openModal} />
        <main className="px-4 py-8">{children}</main>
      </ModalContext.Provider>
    </GoalsContext.Provider>
  );
};

export default PageLayout;
