import React from "react";

const MakeAdmin = () => {
  return (
    <div className="bg-white rounded-lg p-5 m-5">
      {/* Modal */}
      <div>
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Please Confirm
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                Adding <span className="font-semibold">Kakku</span> as an{" "}
                <span className="text-purple-500 font-semibold">Admin</span>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-floating mb-10 w-full">
        <input
          type="email"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="floatingFilter"
          placeholder="name@example.com"
        />
        <label className="text-gray-700">Enter email to filter</label>
      </div>

      <table className="table-fixed w-full divide-y divide-dashed">
        <thead className="divide-y divide-dashed">
          <tr className="divide-x divide-dashed">
            <th className="p-2">User ID</th> <th className="p-2">Name</th>
            <th className="p-2">Email</th> <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dashed">
          {/* Repeat Start */}
          <tr className="divide-x divide-dashed">
            <td className="p-2">12345678910</td> <td className="p-2">Kakku</td>
            <td className="p-2">kakku@gmail.com</td>
            <td className="p-2">
              <div className="flex items-center justify-center">
                <>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="green"
                    data-mdb-ripple-duration="1000ms"
                    className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                  >
                    <p className="font-medium text-sm">User</p>
                  </button>
                </>
                <>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="purple"
                    data-mdb-ripple-duration="1000ms"
                    className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                  >
                    <p className="font-medium text-sm">Admin</p>
                  </button>
                </>
              </div>
            </td>
            <td className="p-2">
              <div className="flex justify-center items-center">
                <>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="purple"
                    data-mdb-ripple-duration="1000ms"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-purple-100"
                  >
                    <p className="font-medium text-sm">Make Admin</p>
                  </button>
                </>
                <>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="red"
                    data-mdb-ripple-duration="1000ms"
                    className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-red-100"
                  >
                    <p className="font-medium text-sm">Remove Admin</p>
                  </button>
                </>
              </div>
            </td>
          </tr>
          {/* Repeat End */}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
