"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

const EmptyGoalsCard = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onNewGoal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div className="rounded-2xl bg-[#101010] border border-dashed border-[#3C3B40]">
      <div className="flex flex-col items-center p-4">
        <Image
          src="/icon-target.svg"
          alt={isAuthenticated ? "Add Goal" : "Signed out"}
          width={40}
          height={40}
          className="mb-5"
        />
        <h1 className="text-preset-2 mb-5">
          {isAuthenticated ? "No goals yet" : "You're signed out"}
        </h1>
        <p className="text-preset-5 text-center mb-5 text-[#b7b7b7]">
          {isAuthenticated
            ? "Start saving for something that matters. Create your first goal and track your progress."
            : "Sign in to view and manage your savings goals."}
        </p>
        {isAuthenticated ? (
          <>
            <Button type="primary" onClick={onNewGoal}>
              + Create your first goal
            </Button>
            <Modal modalRef={modalRef} />
          </>
        ) : (
          process.env.NODE_ENV === "development" && (
            <Link href="/dev-login" className="text-[#ff5722] underline">
              Sign in
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default EmptyGoalsCard;
