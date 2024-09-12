import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../variables";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="relative flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width z-20 flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex w-full max-sm:hidden">
          <div className="flex flex-1 justify-center">
            {navLists.map((nav) => (
              <div
                key={nav}
                className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
              >
                {nav}
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-7">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </div>

        {/* mobile nav toggler */}
        <div className="flex flex-1 justify-end sm:hidden">
          <button
            className="text-xl transition-all duration-300"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            {isMobileNavOpen ? <FaXmark /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* mobile nav setup */}
      <div
        className={`absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center
          justify-around bg-black transition-all duration-300
          ${isMobileNavOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="cursor-pointer text-xl text-gray transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-baseline gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
