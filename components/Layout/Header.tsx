import React from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { Popover } from "@headlessui/react";
import PopoverCover from "../Custom/CustomPopover";
import { MenuIcon, SwitchHorizontalIcon, } from "@heroicons/react/outline";

import { useEagerConnect, useInactiveListener } from "../../web3/hooks";
import { injected } from "../../web3/connectors";
import PageLinker from "../../boxes/PageLinker";
import Avatar from "../Widget/Avatar";
import { Wallet, MobileWallet } from "../Widget/Wallet";
import { LogoIcon } from "../Custom/CustomIcons";

const Logo = ({ name }) => {
  return (
    <span className="logo-text">
      <Link href="/">{name}</Link>
    </span>
  );
};

const BigButton = () => {
  const { activate, active } = useWeb3React();
  return (
    <button
      className="btn-popover-open"
      onTouchStart={() => {
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

  const { library, chainId, account } = useWeb3React();
  return !active ? (
    <BigButton />
  ) : (
    <Popover.Button className="btn-popover-open">
      <span className="sr-only">Open wallet</span>
      <Avatar className="h-6 w-6" aria-hidden="true" value={account} />
    </Popover.Button>
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
              <nav className="flex flex-wrap justify-around gap-2">
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
    <>
      <header className="flex flex-row header-bar md:space-x-10 justify-between bg-cod-gray">
        <Logo name="TOKYO.CARDS" />
        <LogoIcon height="50px" width="50px" style="h-8 w-8 lg:h-20 lg:w-20 inline m-1 text-diablo-dark-gold" />
        <section className="flex -mr-2 space-x-2 md:space-x-3 lg:hidden">
          <MobileMenuPopover />
          <MobileWalletPopover active={active} />
        </section>

        <nav className="container hidden h-full lg:flex lg:justify-center gap-2">
          <span className="sr-only">Page links</span>
          <PageLinker />
        </nav>
        <nav className="container hidden lg:flex lg:justify-end lg:w-2/12">
          <span className="sr-only">Open wallet</span>
          <AccountMenu active={active} />
        </nav>
      </header>
      <div className="fixed w-full h-1 top-18 mx-0 p-0 bg-gradient-to-r from-razzmatazz to-blue-500 left-0 z-30"></div>
    </>
  );
};

export default Header;