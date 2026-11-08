"use client";
import Image from "next/image";
import type { ReactNode, RefObject } from "react";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
  description?: string;
  modalRef: RefObject<HTMLDialogElement | null>;
  title: string;
};

const Modal = ({
  children,
  closeModal,
  description,
  modalRef,
  title,
}: ModalProps) => {
  return (
    <dialog
      ref={modalRef}
      className="fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-140 rounded-2xl border border-[#3c3b40] bg-[#1f1f1f] p-6 text-white"
    >
      <div className="flex justify-between mb-2">
        <h2 className="text-preset-4">{title}</h2>
        <button
          type="button"
          className="hover:cursor-pointer"
          onClick={closeModal}
        >
          <Image src="/icon-cross.svg" height={20} width={20} alt="Close" />
        </button>
      </div>
      <p>{description}</p>
      <hr className="my-6 w-full border-[#3c3b40]" />
      {children}
    </dialog>
  );
};

export default Modal;
