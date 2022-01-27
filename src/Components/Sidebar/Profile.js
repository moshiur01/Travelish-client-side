import React from "react";

const Profile = () => {
  return (
    <div className="bg-white rounded-lg p-5 mb-5">
      <div className="grid grid-cols-3 gap-5 items-center">
        <div className="col-span-2">
          <p className="font-medium text-3xl">Kuddus Ali</p>
          <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded-full">
            Admin
          </span>
        </div>
        <div className="rounded-lg">
          <img
            className="w-full"
            src="https://img-os-static.hoyolab.com/communityWeb/upload/af335b6e68883e7e40237040aa020cf1.png"
            alt=""
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">100</p>
            <p className="font-medium text-gray-400">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">100</p>
            <p className="font-medium text-gray-400">Following</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="#fcd34d"
            data-mdb-ripple-duration="1000ms"
            className="bg-slate-100 2xl:px-6 px-2.5 py-2.5 font-medium text-xs leading-tight uppercase rounded-lg 2xl:rounded transition duration-150 ease-in-out"
          >
            {/* Add Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-plus 2xl:hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 11h6m-3 -3v6" />
            </svg>
            <p className="hidden 2xl:block">Follow</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
