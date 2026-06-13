import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "filter";
};

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button
      className={
        type === "primary"
          ? "bg-[#ff5722] rounded-full px-5 py-3 text-[#101010]"
          : "bg-[#3c3b40] rounded-full w-full py-3 text-white"
      }
    >
      {children}
    </button>
  );
};

export default Button;
