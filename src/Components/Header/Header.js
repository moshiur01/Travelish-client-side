import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "./logo.png";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="shadow-sm bg-white flex p-2 justify-around items-center z-10 sticky top-0">
      <div>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className=" w-11" src={logo} alt="" />
          <p className="text-2xl px-5 font-medium hidden md:block">Travelish</p>
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="transition ease-in-out duration-500 p-2 mx-2 rounded-full hover:bg-purple-300 md:hover:text-purple-400 md:hover:bg-white"
        >
          {/* Home Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home md:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <p className="hidden md:block font-medium">Home</p>
        </Link>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLg"
          className="transition ease-in-out duration-500 p-2 mx-2 rounded-full hover:bg-purple-300 md:hover:text-purple-400 md:hover:bg-white"
        >
          {/* New Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil md:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
          <p className="hidden md:block font-medium">New Post</p>
        </button>

        <Link
          to="/dashboard"
          className="transition ease-in-out duration-500 p-2 mx-2 rounded-full hover:bg-purple-300 md:hover:text-purple-400 md:hover:bg-white"
        >
          {/* Dashboard Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-hash md:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="9" x2="19" y2="9" />
            <line x1="5" y1="15" x2="19" y2="15" />
            <line x1="11" y1="4" x2="7" y2="20" />
            <line x1="17" y1="4" x2="13" y2="20" />
          </svg>
          <p className="hidden md:block font-medium">Dashboard</p>
        </Link>

        {user.email ? (
          <>
            <div className="flex items-center justify-center">
              <p className=" hidden md:block font-medium mr-3">
                Hello: {user?.displayName}
              </p>
              <img
                className="rounded-full w-12 "
                src="https://img-os-static.hoyolab.com/communityWeb/upload/af335b6e68883e7e40237040aa020cf1.png"
                alt=""
              />
            </div>
            {/* Logout Icon */}
            <button
              onClick={logout}
              className="transition ease-in-out duration-500 p-2 mx-2 rounded-full hover:bg-purple-300 md:hover:text-purple-400 md:hover:bg-white"
              title="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-logout md:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              <p className="hidden md:block font-medium">Log Out</p>
            </button>
          </>
        ) : (
          <>
            {/* Login Icon */}
            <Link
              to="/login"
              className="transition ease-in-out duration-500 p-2 mx-2 rounded-full hover:bg-purple-300 md:hover:text-purple-400 md:hover:bg-white"
              title="Login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-login md:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
              </svg>
              <p className="hidden md:block font-medium">LogIn</p>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
