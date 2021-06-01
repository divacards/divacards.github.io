import Link from "next/link";

const Logo = (props) => {
  return (
    <button className="focus:outline-none p-4">
      <h1 className="flex items-center no-underline">
        <span className="text-4xl text-lightpink font-bold tracking-tight font-cursive">
          <Link href="/">{props.name}</Link>
        </span>
      </h1>
    </button>
  );
};

export default Logo;
