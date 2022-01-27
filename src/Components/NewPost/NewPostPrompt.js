import React from "react";

const NewPostPrompt = () => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="purple"
      data-mdb-ripple-duration="1000ms"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalLg"
      className="bg-white rounded-lg p-5 grid grid-cols-4 w-full mb-5 leading-tight transition duration-150 ease-in-out"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-pencil"
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
      </div>
      <div className="col-span-3 text-left">New Post</div>
    </button>
  );
};

export default NewPostPrompt;
