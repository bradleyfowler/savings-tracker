import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "delete";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
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
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center gap-2 hover:cursor-pointer ${fullWidth ? "w-full" : ""} ${variantClasses[variant]} disabled:cursor-not-allowed disabled:border-2 disabled:border-[#3C3B40] disabled:bg-[#1F1F1F] disabled:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
