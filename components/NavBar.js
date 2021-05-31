import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="hidden md:flex md:items-center md:w-auto">
      <Button>Collections</Button>
      <Button>Artists</Button>
      <Button>Forge</Button>
      <button className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none">
        Connect Wallet
      </button>
    </nav>
  );
};

export default NavBar;
