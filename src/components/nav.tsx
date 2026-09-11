import logo from "../assets/logo-text.png";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <a className="text-[#E72276] font-semibold bg-transparent hover:bg-transparent">
          Home
        </a>
      </li>
      <li>
        <a className="text-gray-500 hover:text-[#E72276] font-medium bg-transparent hover:bg-transparent">
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
      <nav className="navbar max-w-7xl mx-auto px-8 py-3">
        <div className="navbar-start w-1/4">
          <a href="#" className="cursor-pointer">
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-9 object-contain"
            />
          </a>
        </div>

        <div className="navbar-center flex-1 flex justify-center">
          <ul className="menu menu-horizontal px-1 space-x-2 text-base">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end w-1/4 flex gap-4 items-center justify-end">
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-[#E72276] transition-colors text-base cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-[#E72276] hover:bg-[#d11a68] text-white rounded-full px-5 py-2.5 font-medium transition-colors text-base cursor-pointer shadow-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
