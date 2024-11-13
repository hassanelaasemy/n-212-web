import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/ThemeSlice";
import { Home, Film, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border-b ${
        theme === "dark"
          ? "bg-gray-900 border-gray-600"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={
              theme === "dark" ? "../../logolight.png" : "../../logodark.png"
            }
            className="h-8"
            alt="N-212 Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleToggle}
            className={`p-2 rounded-full focus:outline-none transition ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {theme === "light" ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m14.14-6.86l-.7.7M6.34 17.66l-.7.7M21 12a9 9 0 11-9-9 9 9 0 019 9z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                ></path>
              </svg>
            )}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg ${
              theme === "dark"
                ? "border-gray-700 bg-gray-800 md:bg-gray-900"
                : "border-gray-100 bg-gray-50 md:bg-white"
            } md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0`}
          >
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-3 rounded ${
                  theme === "dark"
                    ? "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                aria-current="Home"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-3 rounded ${
                  theme === "dark"
                    ? "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
              >
                <Film className="w-4 h-4 mr-2" />
                Reels
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-3 rounded ${
                  theme === "dark"
                    ? "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Courses
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className={`flex items-center py-2 px-3 rounded ${
                  theme === "dark"
                    ? "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
