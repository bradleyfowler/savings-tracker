import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "delete";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#ff5722] rounded-full px-5 py-3 text-[#101010]",
  secondary:
    "bg-[#1F1F1F] rounded-full px-5 py-3 border-2 border-[#3C3B40] text-white",
  delete: "bg-[#ef4444] rounded-full px-5 py-3 text-[#101010]",
};

const Button = ({
  variant = "primary",
  children,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 justify-center hover:cursor-pointer
        ${fullWidth ? "w-full" : ""}
        ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
