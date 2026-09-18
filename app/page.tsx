"use client";
import { useRef, useState } from "react";
import DepositCard from "@/components/DepositCard/DepositCard";
import EmptyGoalsCards from "@/components/EmptyGoalsCard/EmptyGoalsCard";
import GoalCard from "@/components/GoalCard/GoalCard";
import Header from "@/components/Header/Header";
import ListControls from "@/components/ListControls/ListControls";
import MetricCard from "@/components/MetricCard/MetricCard";
import Modal from "@/components/Modal/Modal";
import type { Goal } from "@/types/goals";

export default function Home() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (newGoal: Goal) => {
    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div>
      <Modal addGoal={addGoal} modalRef={modalRef} />
      <Header onNewGoal={openModal} />
      <main className="px-4 py-8">
        <section>
          <MetricCard title="Total savings" value="£11,249.00" />
          <MetricCard title="Active goals" value="7" />
          <MetricCard title="Goals completed" value="2" />
          <DepositCard />
        </section>
        <section>
          <div className="mb-5">
            <h1 className="text-preset-2">Your goals</h1>
            <ListControls />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.length === 0 ? (
              <EmptyGoalsCards onNewGoal={openModal} />
            ) : (
              goals.map((goal) => {
                return (
                  <GoalCard
                    key={goal.id}
                    title={goal.name}
                    progress={76}
                    amount="£1,900 of £2,499"
                    dueDate={goal.deadline}
                  />
                );
              })
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
