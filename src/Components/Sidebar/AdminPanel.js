import React from "react";
import useAuth from "../../Hooks/useAuth";

const AdminPanel = () => {
  const { setAdminView } = useAuth();
  return (
    <div className="p-5 sticky top-16">
      <div className="bg-white p-5 mt-5 rounded-lg divide-y divide-dashed">
        <button
          onClick={() => {
            setAdminView("posts");
          }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="purple"
          data-mdb-ripple-duration="1000ms"
          className="w-full text-left p-2.5 leading-tight transition duration-150 ease-in-out"
        >
          <p className="font-medium text-sm">All Posts</p>
        </button>
        <button
          onClick={() => {
            setAdminView("admin");
          }}
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
