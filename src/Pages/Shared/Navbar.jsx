import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(err => console.log(err));
  };
  const navOptions = (
    <>
      {' '}
      <li>
        <Link to="/">Home</Link>{' '}
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>{' '}
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>{' '}
      </li>
      <li>
        <Link to="/secret">Secret</Link>{' '}
      </li>
      <li>
        <Link to="/">
          <button className="p-2 flex gap-2 -mt-2 m-0">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-secondary">+0</div>
          </button>
        </Link>{' '}
      </li>
      <li>
        {user ? (
          <button onClick={handleLogout} className="btn  btn-secondary btn-sm">
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">
            daisyUI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
