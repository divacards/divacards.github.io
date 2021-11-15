import React from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { Transition, Popover } from "@headlessui/react";
import {
  MenuIcon,
  SwitchHorizontalIcon,
  XIcon,
} from "@heroicons/react/outline";

import { useEagerConnect, useInactiveListener } from "../../web3/hooks";
import { injected } from "../../web3/connectors";
import PageLinker from "../../boxes/PageLinker";
import Avatar from "../Widget/Avatar";
import { Wallet, MobileWallet } from "../Widget/Wallet";

const Logo = ({ name }) => {
  return (
    <span className="logo-text">
      <Link href="/">{name}</Link>
    </span>
  );
};

const BigButton = () => {
  const { activate, active } = useWeb3React();
  // className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 text-white focus:outline-none"
  return (
    <button
      className="btn-popover-open"
      onTouchStart={() => {
        console.log("touch");
        if (!active) activate(injected);
      }}
      onClick={() => {
        if (!active) activate(injected);
      }}
    >
      <span className="sr-only">Close menu when ready</span>
      <SwitchHorizontalIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

const AccountMenu = ({ active }) => {
  return !active ? <BigButton /> : <Wallet />;
};

const MobileAccountMenu = ({ active }) => {
  return !active ? (
    <BigButton />
  ) : (
    <Popover.Button className="btn-popover-open">
      <span className="sr-only">Open wallet</span>
      <Avatar className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  );
};

const PopoverCover = ({ open, children }) => {
  return (
    <Transition
      show={open}
      as={Popover.Panel}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      //@ts-expect-error
      focus
      static
      className="fixed bottom-0 inset-x-0 transition transform origin-bottom lg:hidden z-20"
    >
      <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5 h-screen"></div>
      </div>
      <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div />
            <div className="-mr-2">
              <Popover.Button className="btn-popover-close">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        {children}
      </div>
    </Transition>
  );
};

const MobileMenuPopover = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="btn-popover-open">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>

          <PopoverCover open={open}>
            <div className="pt-5 pb-6 px-5">
              <nav className="flex flex-col mt-6 gap-2">
                <PageLinker mobile />
              </nav>
            </div>
          </PopoverCover>
        </>
      )}
    </Popover>
  );
};

const MobileWalletPopover = ({ active }) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <MobileAccountMenu active={active} />
          <PopoverCover open={open}>
            <div className="relative px-4 mx-auto w-full inline-block py-2 text-left">
              <MobileWallet />
            </div>
          </PopoverCover>
        </>
      )}
    </Popover>
  );
};

const Header = () => {
  const { active } = useWeb3React();
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <header className="flex flex-row header-bar bg-white md:space-x-10 justify-between bg-cod-gray border-b-4 border-claret">
      <Logo name="TOKYO.CARDS" />

      <section className="flex -mr-2 space-x-2 md:space-x-3 lg:hidden">
        <MobileMenuPopover />
        <MobileWalletPopover active={active} />
      </section>

      <nav className="container hidden h-auto lg:flex lg:justify-center">
        <span className="sr-only">Page links</span>
        <PageLinker />
      </nav>
      <nav className="container hidden lg:flex lg:justify-end lg:w-2/12">
        <span className="sr-only">Open wallet</span>
        <AccountMenu active={active} />
      </nav>
    </header>
  );
};

export default Header;
