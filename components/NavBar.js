import Link from "next/link";

import Button from "./Button";

const BigButton = (props) => {
  return (
    <button className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none">
      {props.text}
    </button>
  );
};

const NavBar = () => {
  return (
    <nav className="flex flex-col lg:flex-row">
      <Button>
        <Link href="/collections">Collections</Link>
      </Button>
      <Button>
        <Link href="/artists">Artists</Link>
      </Button>
      <Button>
        <Link href="/forge">Forge</Link>
      </Button>
      <BigButton text="Connect Wallet"></BigButton>
    </nav>
  );
};

export default NavBar;
