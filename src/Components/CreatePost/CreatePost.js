import React from "react";
import Header from "../Header/Header";

const CreatePost = () => {
  return (
    <>
      <Header></Header>

      <div className="flex justify-center">
        <div className="bg-white rounded-lg p-5 m-5 w-fit">
          {/* Title */}
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-gray-700">
              Title
            </label>
            <input
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="title"
              placeholder="Title"
            />
          </div>
          {/* Description */}
          <div className="mb-3 w-full">
            <label class="form-label inline-block mb-2 text-gray-700">
              Description
            </label>
            <textarea
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="floatingInput postDescription"
              placeholder="Description"
              rows="3"
            />
          </div>
          {/* Location */}
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-gray-700">
              Location
            </label>
            <input
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="location"
              placeholder="Location"
            />
          </div>
          {/* Cost */}
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-gray-700">
              Cost
            </label>
            <input
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="cost"
              placeholder="Cost"
            />
          </div>
          {/* Rating */}
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-gray-700">
              Rating
            </label>
            <input
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="rating"
              placeholder="Rating"
            />
          </div>
          {/* File Upload */}
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-gray-700">
              Upload an Image
            </label>
            <input
              type="file"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
