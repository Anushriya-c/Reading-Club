import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({crumbData}) => {
  return (
    <div>
      <div class=" py-1">
        <nav>
          <ul class="flex m-0 items-center p-0">
            {crumbData.map((e) => {
              return (
                <li class="flex items-center text-left">
                  <svg
                    class="block h-5 w-5 align-middle text-gray-950"
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
                    class="cursor-pointer text-sm font-normal leading-5 text-gray-600 hover:text-gray-950"
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
