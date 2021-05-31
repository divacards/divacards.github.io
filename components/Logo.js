const Logo = (props) => {
  return (
    <button className="focus:outline-none p-4">
      <h1 className="flex items-center no-underline">
        <span className="text-4xl text-lightpink font-bold tracking-tight font-cursive">
          {props.name}
        </span>
      </h1>
    </button>
  );
};

export default Logo;
