import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/donation-campaigns"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        Donation Campaigns
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        How to Help?
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        About
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary' : 'btn btn-ghost'
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );


  return (
    <div className='bg-white sticky top-0 z-50 shadow-md'>
      <div className="navbar max-w-[1440px] mx-auto px-4">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2
            onClick={() => navigate("/")}
            className="text-xl md:text-2xl font-bold cursor-pointer"
          >
            WinterSoul
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'btn btn-secondary' : 'btn btn-ghost'
            }
          >
            {user ? user.displayName || user.email : 'Register'}
          </NavLink>
          <NavLink
            to="/login"
            // onClick={user ? handleLogin : null}
            className={({ isActive }) =>
              isActive ? 'btn btn-secondary' : 'btn btn-ghost'
            }
          >
            {user ? (
              <div className="text-center rounded-md flex flex-col justify-center items-center gap-2">
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="w-10 h-10 object-cover rounded-full border-2 border-red-500"
                />
              </div>
            ) : (
              'Login'
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
