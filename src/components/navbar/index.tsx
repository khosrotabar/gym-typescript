import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100";

  return (
    <nav
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 ${
        !isMenuToggled && "drop-shadow"
      }`}
    >
      <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
        {/* Left Side */}
        <img alt="logo" src={Logo} />

        {/* Right Side */}
        <div className={`${flexBetween} w-full links`}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a Member
            </ActionButton>
          </div>
        </div>
        <button
          className="rounded-full bg-secondary-500 p-2 links-mobile"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>
      {/* Mobile Modal */}
      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl mobile-modal">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
