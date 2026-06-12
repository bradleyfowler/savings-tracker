import Image from "next/image";
import Button from "@/components/Button/Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-18 border-b-gray-500 border-b">
      <div className="flex items-center gap-3 ml-4">
        <Image
          src="/logo-small.svg"
          alt="Savings Tracker Logo"
          width={32}
          height={32}
        />
        <h1 className="text-xl tracking-[0.3px] font-bold">Savings Tracker</h1>
      </div>
      <div className="mr-4">
        <Button>+ New goal</Button>
      </div>
    </header>
  );
};

export default Header;
