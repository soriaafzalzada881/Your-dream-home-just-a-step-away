import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <img
              src="https://framerusercontent.com/images/uqOqjhGMi4m1U97lTIFNIw6rBaU.svg?width=126&height=41"
              alt=""
            />
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base transition-colors ${
                  isActive
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white  hover:bg-gray-800 transition-transform duration-300 hover:scale-110"
          >
            Contact us
          </Link>

          <Link
            to="/submit-property"
            className="rounded-full border border-black px-6 py-3 text-sm font-medium text-black  hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
          >
            Submit property
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
