import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#ff5722] rounded-full px-5 py-3 text-[#101010]">
      {children}
    </button>
  );
};

export default Button;
