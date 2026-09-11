import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <a className="text-[#E72276] font-semibold bg-transparent hover:bg-transparent">
          Home
        </a>
      </li>
      <li>
        <a
          href="#technologies"
          className="text-gray-500 hover:text-[#E72276] font-medium bg-transparent hover:bg-transparent"
        >
          Technologies
        </a>
      </li>
      <li>
        <a className="text-gray-500 hover:text-[#E72276] font-medium bg-transparent hover:bg-transparent">
          Projects
        </a>
      </li>
      <li>
        <a className="text-gray-500 hover:text-[#E72276] font-medium bg-transparent hover:bg-transparent">
          About
        </a>
      </li>
      <li>
        <a className="text-gray-500 hover:text-[#E72276] font-medium bg-transparent hover:bg-transparent">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost pl-0 pr-2">
              <img src={hamburgerIcon} alt="Menu" className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-gray-100"
            >
              {navLinks}
            </ul>
          </div>

          <a href="#" className="cursor-pointer hidden lg:flex">
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-9 object-contain"
            />
          </a>
        </div>

        <div className="navbar-center">
          <a href="#" className="cursor-pointer lg:hidden flex items-center">
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-7 object-contain"
            />
          </a>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 text-base">
              {navLinks}
            </ul>
          </div>
        </div>

        <div className="navbar-end flex gap-2 lg:gap-4 items-center">
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-[#E72276] transition-colors text-sm lg:text-base cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-[#E72276] hover:bg-[#d11a68] text-white rounded-full px-4 py-2 lg:px-5 lg:py-2.5 font-medium transition-colors text-sm lg:text-base cursor-pointer shadow-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
