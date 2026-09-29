import { createContext, useContext } from "react";

type ModalContextType = {
  openModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModal(): ModalContextType {
  return useContext(ModalContext) as ModalContextType;
}

