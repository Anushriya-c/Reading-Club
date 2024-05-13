import React from "react";
// import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";

const AdminProfileSetting = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <>
      <Header highlight={"admin"} />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminprofilesetn"} />}

        <div className="w-full !bg-gray-300">
          <div className=" px-8 py-5  h-full">
            <div class="bg-gray-100 my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
              <div class="flex flex-col border-b py-4 sm:flex-row sm:items-start">
                <div class="shrink-0 mr-auto sm:py-3">
                  <p class="font-medium">Account Details</p>
                  <p class="text-sm text-gray-600">Edit your account details</p>
                </div>
                {/* <button class="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
                  Cancel
                </button> */}
                <button class="hidden rounded-lg border-2 border-transparent bg-violet-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-violet-700">
                  Save
                </button>
              </div>
              <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Name</p>
                <input
                  placeholder="First Name"
                  class="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
                />
                <input
                  placeholder="Last Name"
                  class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                />
              </div>
              <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Email</p>
                <input
                  placeholder="your.email@domain.com"
                  class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                />
              </div>
              <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Old Password</p>
                <input
                  type="password"
                  placeholder="Your Old Password"
                  class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                />
              </div>
              <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">New Password</p>
                <input
                  type="password"
                  placeholder="Your New Password"
                  class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                />
              </div>
              <div class="flex flex-col gap-4 py-4  lg:flex-row">
                <div class="shrink-0 w-32  sm:py-4">
                  <p class="mb-auto font-medium">Avatar</p>
                  <p class="text-sm text-gray-600">Change your avatar</p>
                </div>
                <div class="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    class="h-16 w-16 rounded-full"
                  />
                  <p class="text-sm text-gray-600">
                    Drop your desired image file here to start the upload
                  </p>
                  <input
                    type="file"
                    class="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                  />
                </div>
              </div>
              <div class="flex justify-end py-4 sm:hidden">
                <button class="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
                  Cancel
                </button>
                <button class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfileSetting;
