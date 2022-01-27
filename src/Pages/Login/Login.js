import React, { useState } from "react";
import Header from "../../Components/Header/Header";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  console.log(newUser);
  return (
    <div>
      <Header></Header>
      {newUser ? (
        <div className="mt-10">
          <p className="text-3xl font-medium text-center mb-5 text-gray-700">
            Please Register
          </p>
          <div className="flex justify-center">
            <div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput name"
                  placeholder="name"
                />
                <label className="text-gray-700">Name</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput email"
                  placeholder="name@example.com"
                />
                <label className="text-gray-700">Email address</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingPassword password"
                  placeholder="Password"
                />
                <label className="text-gray-700">Password</label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
              </svg>
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              Register
            </button>
          </div>
          <div className="text-center mt-5">
            Have an account?{" "}
            <span
              onClick={() => {
                setNewUser(false);
              }}
              className="cursor-pointer underline hover:text-amber-600 decoration-amber-600 hover:decoration-amber-800 font-medium"
            >
              Login here!
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-3xl font-medium text-center mb-5 text-gray-700">
            Please Login
          </p>
          <div className="flex justify-center">
            <div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput email"
                  placeholder="name@example.com"
                />
                <label className="text-gray-700">Email address</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingPassword password"
                  placeholder="Password"
                />
                <label className="text-gray-700">Password</label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
              </svg>
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-5">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setNewUser(true);
              }}
              className="cursor-pointer underline hover:text-amber-600 decoration-amber-600 hover:decoration-amber-800 font-medium"
            >
              Create now!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
