import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-stone-900">
          Movie App
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-stone-500">
          <NavLink to="/" className="hover:text-red-500">
            Home
          </NavLink>
          <NavLink to="/favorites" className="hover:text-red-500">
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
