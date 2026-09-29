import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "filter" | "sort";
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({ type, children, fullWidth = false, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 justify-center hover:cursor-pointer
        ${fullWidth ? "w-full" : ""}
        ${
          type === "primary"
            ? "bg-[#ff5722] rounded-full px-5 py-3 text-[#101010]"
            : "bg-[#1F1F1F] border-2 border-[#3C3B40] rounded-full w-full py-3 text-white"
        }`}
        onClick={onClick}
    >
      {type === "filter" && (
        <img src="/icon-filter.svg" alt="Filter" className="h-5 w-5" />
      )}
      {type === "sort" && (
        <img src="/icon-sort.svg" alt="Sort" className="h-5 w-5" />
      )}
      {children}
    </button>
  );
};

export default Button;
