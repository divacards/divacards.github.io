const Button = (props) => {
  return (
    <button className="block py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-pink-400 hover:text-pink-500 transition duration-150 ease-in-out focus:outline-none">
      {props.children}
    </button>
  );
};

export default Button;
