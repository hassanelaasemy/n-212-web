import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../../config";
import { toggleTheme } from "../../redux/ThemeSlice";
import { logout } from "../../redux/authSlice";
import { Link, useNavigation } from "react-router-dom";
import { fetchUser } from "../../redux/userSlice";
import SightingLink from "./SightingLink";
import { faBullseye, faCircleCheck, faCircleInfo, faCircleQuestion, faFileLines, faHeadphones, faHeart, faNewspaper, faRightFromBracket, faSchool, faShield, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.theme);
  const navigate = useNavigation;
  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#user-menu-button") &&
        !event.target.closest("#user-menu")
      ) {
        setIsProfileOpen(false);
      }
      if (
        !event.target.closest("#mobile-menu-button") &&
        !event.target.closest("#mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
      console.log(user);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={theme === "dark" ? "/logolight.png" : "/logodark.png"}
                alt="N-212"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Reels
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Courses
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-10 rounded-full"
                    src={BASE_URL + `/storage/avatars/${user?.avatar}`}
                    alt={user?.firstName}
                  />
                </button>
              </div>
              {/* Profile dropdown menu */}
              {isProfileOpen && (
                <div
                  id="user-menu"
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >

                  <SightingLink title={'Profile'} linkId={'profile'} Icon={faUser} />
                  <SightingLink title={'Favorit'} linkId={'favorit'} Icon={faHeart} />
                  <SightingLink title={'Password and security'} linkId={'password'} Icon={faShield} />
                  <SightingLink title={'My courses'} linkId={'courses'} Icon={faSchool} />
                  <SightingLink title={'Completed courses'} linkId={'complete_courses'} Icon={faCircleCheck} />
                  <SightingLink title={'My topics'} linkId={'topics'} Icon={faNewspaper} />
                  <SightingLink title={'My goals'} linkId={'goals'} Icon={faBullseye} />
                  <SightingLink title={'My Complaints'} linkId={'complaints'} Icon={faFileLines} />
                  <SightingLink title={'About Us'} linkId={'About'} Icon={faCircleInfo} />
                  <SightingLink title={'Help and Support'} linkId={'support'} Icon={faHeadphones} />
                  <SightingLink title={'FAQ'} linkId={'faq'} Icon={faCircleQuestion} />
                  <SightingLink title={'Sign out'} linkId={'logout'} methode={handleLogout} Icon={faRightFromBracket} />
                </div>
              )}
            </div>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse p-2">
            <button
              onClick={handleToggle}
              className={`p-2 rounded-full focus:outline-none transition ${theme === "dark"
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
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Reels
          </a>
          <Link
            to="/content"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
