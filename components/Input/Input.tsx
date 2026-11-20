type InputProps = {
  defaultValue?: string | number;
  isRequired?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  type?: "email" | "password";
};

export default function Input({
  defaultValue,
  isRequired,
  label,
  name,
  placeholder,
  type,
}: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="rounded-md border border-[#3c3b40] bg-[#2d2b31] px-4 py-3 text-white outline-none"
        name={name}
        defaultValue={defaultValue}
        required={isRequired}
        placeholder={placeholder}
        type={type}
        id={name}
      />
    </>
  );
}
