import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ crumbData }) => {
  return (
    <div>
      <div className="py-1 font-extrabold">
        <nav>
          <ul className="flex m-0 items-center p-0 ">
            {crumbData.map((e) => {
              return (
                <li className="flex items-center text-left font">
                  <svg
                    className="block h-5 w-5 align-middle text-gray-950 font-extrabold"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                  </svg>

                  <Link
                    to={e.path}
                    href="#"
                    title=""
                    className="cursor-pointer text-sm leading-5 hover:text-gray-950 font-bold text-purple-700"
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumb;
