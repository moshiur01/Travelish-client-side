import React from "react";
import Profile from "./Profile";

const AdminPanel = () => {
  return (
    <div className="p-5 sticky top-16">
      <Profile></Profile>
      <div className="bg-white p-5 mt-5 rounded-lg divide-y divide-dashed">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="purple"
          data-mdb-ripple-duration="1000ms"
          className="w-full text-left p-2.5 leading-tight transition duration-150 ease-in-out"
        >
          <p className="font-medium text-sm">All Posts</p>
        </button>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="purple"
          data-mdb-ripple-duration="1000ms"
          className="w-full text-left p-2.5 leading-tight transition duration-150 ease-in-out"
        >
          <p className="font-medium text-sm">Make Admin</p>
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
