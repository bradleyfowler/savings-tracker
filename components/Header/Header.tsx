import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="/logo-small.svg"
        alt="Savings Tracker Logo"
        width={32}
        height={32}
      />
      <h1>Savings Tracker</h1>
      <button>+ New Goal</button>
    </header>
  );
};

export default Header;
