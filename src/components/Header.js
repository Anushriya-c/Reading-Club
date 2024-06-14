import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authActions } from "../Store/auth";
import { useState, useEffect } from "react";

const Header = ({ name, highlight }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState("");

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const pathRoute = () => {
    switch (name) {
      case "Register":
        navigate("/studentsignup");
        break;
      case "Login":
        navigate("/signin");
        break;
      case "student":
        navigate("/studentbatch");
        break;
      case "teacher":
        navigate("/teacherlevel");
        break;
      case "admin":
        navigate("/adminhome");
        break;
      default:
      // code block
    }
  };

  const handleLogout = () => {
    Cookies.remove("teacher");
    Cookies.remove("student");
    Cookies.remove("admin");
    Cookies.remove("token");

    dispatch(authActions.logout());
    setUserRole("");
    navigate("/");
  };

  useEffect(() => {
    if (Cookies.get("student")) {
      setUserRole("student");
    } else if (Cookies.get("teacher")) {
      setUserRole("teacher");
    } else if (Cookies.get("admin")) {
      setUserRole("admin");
    }
  }, []);

  return (
    <div className="">
      <header className="bg-violet-100 relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-violet-900 md:mx-auto md:flex-row md:items-center">
        <img
          className="h-[60.5px] w-[180px] relative object-cover"
          loading="lazy"
          alt=""
          src="/readingeupheuslogo-1@2x.png"
        />
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li
              className={`${highlight === "home" ? "font-bold" : ""} md:mr-12`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                highlight === "studreg" ? "font-bold" : ""
              } md:mr-12`}
            >
              <Link to="/studentsignup">Student Registration</Link>
            </li>
            {userRole === "student" && (
              <li
                className={`${
                  highlight === "studpanel" ? "font-bold" : ""
                } md:mr-12`}
              >
                <Link to="/studentbatch">Student Panel</Link>
              </li>
            )}
            {userRole === "teacher" && (
              <li
                className={`${
                  highlight === "tchrpnl" ? "font-bold" : ""
                } md:mr-12`}
              >
                <Link to="/teacherlevel">Teacher Panel</Link>
              </li>
            )}
            {userRole === "admin" && (
              <li
                className={`${
                  highlight === "admin" ? "font-bold" : ""
                } md:mr-12`}
              >
                <Link to="/adminhome">Admin Dashboard</Link>
              </li>
            )}
            {userRole ? (
              <li className="md:mr-12">
                <button
                  onClick={handleLogout}
                  className={`text-violet-900 rounded-full border-2 border-violet-900 px-6 py-3 transition-colors hover:bg-violet-500 hover:text-white`}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="md:mr-12">
                <Link to="/signin">
                  <button
                    className={`${
                      highlight === "login"
                        ? "bg-violet-500 text-white"
                        : "text-violet-900"
                    } rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
