import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
// import path from "path";

const StudentData = () => {
  return (
    <div>
      <Header highlight={"tchrpnl"} />
      <BreadCrumb
        crumbData={[
          { name: "Batch", path: "/teacherbatch" },
          { name: "Sessions", path: null },
        ]}
      />
      <div className="overflow-x-auto p-8 ">
        <table className="w-full border-2 border-violet-600 rounded-md">
          <thead>
            <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">Student Name</th>
              <th className="px-5 py-3">Assignment Subject/Name</th>
              <th className="px-5 py-3">Session Date/Time</th>
              <th className="px-5 py-3">Updated Assignments</th>
              <th className="px-5 py-3">FeedBack/Remarks</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {/* First Session */}
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Anushriya Chatterjee</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">English Story</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">
                    25th May 2024/16:00 to 18:00
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label className="inline-flex items-center cursor-pointer">
                  <button
                    className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    <a href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf">
                      View Assignments
                    </a>
                  </button>
                </label>
              </td>
              <td className="p-4 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <input
                  type="text"
                  placeholder="Remarks"
                  className={`mt-2 h-12 w-full p-3`}
                />
              </td>
            </tr>
            {/* Second Session */}
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Riya Maheshwari </p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Hindi Story</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">
                    28th May 2024/16:00 to 18:00
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label className="inline-flex items-center cursor-pointer">
                  <button
                    className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    <a href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf">
                      View Assignments
                    </a>
                  </button>
                </label>
              </td>
              <td className="p-4 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <input
                  type="text"
                  placeholder="Remarks"
                  className={`mt-2 h-12 w-full p-3`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;
