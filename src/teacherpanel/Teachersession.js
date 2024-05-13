import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Teachersession = () => {
  return (
    <div>
      <Header highlight={"tchrpnl"} />
      <BreadCrumb
        crumbData={[
          { name: "Level", path: "/teacherlevel" },
          { name: "Batch", path: "/teacherbatch" },
          { name: "Sessions", path: null },
        ]}
      />
      <div className="overflow-x-auto p-8 ">
        <table className="w-full border-2 border-violet-600 rounded-md">
          <thead>
            <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">Batch Id</th>
              <th className="px-5 py-3">Session Date</th>
              <th className="px-5 py-3">Are Files Allowed</th>
              <th className="px-5 py-3">Files Upload Allowed</th>
              <th className="px-5 py-3">No. of File Allowed</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">31212</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">
                    Golden Hills Preparatory School
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">B 8/65, Rohini, Delhi</p>
              </td>

              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <select name="number" id="number" className="p-1">
                  <option value="default" disabled selected hidden className="">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">732323</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">Maplewood Middle School</p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Jain Temple Road, Mumbai</p>
              </td>

              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked={false}
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <select name="number" id="number" className="p-1">
                  <option value="default" disabled selected hidden className="">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">1232323</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">Pinecrest High School</p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
              </td>

              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked={false}
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <select name="number" id="number" className="p-1">
                  <option value="default" disabled selected hidden className="">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="bg-white px-5 py-5 text-sm border-b">
                <p className="whitespace-no-wrap">663232</p>
              </td>
              <td className="bg-white px-5 py-5 text-sm border-b">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">Meadowview Academy</p>
                </div>
              </td>
              <td className="bg-white px-5 py-5 text-sm border-b">
                <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
              </td>

              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked={false}
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>

              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <select name="number" id="number" className="p-1">
                  <option value="default" disabled selected hidden className="">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">123434</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">
                    Emerald Valley High School
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
              </td>

              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked={false}
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </td>
              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <select name="number" id="number" className="p-1">
                  <option value="default" disabled selected hidden className="">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachersession;
