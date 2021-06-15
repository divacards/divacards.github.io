const Button = ({ children, onClick, onTouchStart }) => {
  return (
    <button
      className="btn block py-4 no-underline mx-auto md:mt-0
                 font-medium text-pink-400 hover:text-pink-500 focus:outline-none"
      onClick={onClick}
      onTouchStart={onTouchStart}
    >
      {children}
    </button>
  );
};

export default Button;
