"use client";
import { useRef } from "react";
import Image from "next/image";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

const Header = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onNewGoal = () => {
    modalRef.current?.showModal();
  };

  return (
    <header className="flex items-center justify-between h-18 border-b-gray-500 border-b">
      <div className="flex items-center gap-3 ml-4">
        <Image
          src="/logo-small.svg"
          alt="Savings Tracker Logo"
          width={32}
          height={32}
        />
        <h1 className="text-preset-3 font-heading">Savings Tracker</h1>
      </div>
      <div className="mr-4">
        <Button type="primary" onClick={onNewGoal}>
          + New goal
        </Button>
      </div>
      <Modal modalRef={modalRef} />
    </header>
  );
};

export default Header;
