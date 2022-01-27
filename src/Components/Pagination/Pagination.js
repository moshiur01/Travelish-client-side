import React from "react";

const Pagination = () => {
  let lol = 0;
  return (
    <>
      {/* Pagination */}
      <div className="flex justify-center col-span-4 mt-4 mb-10">
        <nav>
          <button className="py-1.5 px-3 hover:bg-amber-200 transition-all duration-300 rounded-full text-gray-800 font-medium">
            &laquo;
          </button>
          {/* Repeat Start */}
          <button
            className="py-1.5 px-3 hover:bg-amber-200 transition-all duration-300 rounded-full text-gray-800 font-medium"
            style={lol === 0 ? { backgroundColor: "rgb(251 191 36)" } : ""}
          >
            0
          </button>
          {/* Repeat End */}
          <button className="py-1.5 px-3 hover:bg-amber-200 transition-all duration-300 rounded-full text-gray-800 font-medium">
            &raquo;
          </button>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
