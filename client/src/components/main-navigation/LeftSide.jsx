import { NavBtn } from "./nav-btn/NavBtn";
import { NavLink } from "./nav-link/NavLink";
import { toggleNavbar } from "../helperFn/toggleNavbar";
import { NavLinkIcon } from "../helperFn/navLinkIcon";

function LeftSide() {
  return (
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <NavLink
        href="https://google.com"
        linkStyle="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
      >
        Radosevic Dejan
      </NavLink>
      {/* Mobile view, hamburger menu below */}
      <NavBtn
        btnStyle="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        btnType="button"
        handleFn={(e) => toggleNavbar(e)}
      >
        <i className="text-white">
          <NavLinkIcon iconType='bars' />
        </i>
      </NavBtn>
    </div>
  );
}

export { LeftSide };
