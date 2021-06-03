import React from "react";

import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto p-4 md:p-6">
      <Logo name="diva.cards"></Logo>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
