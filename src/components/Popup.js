import React from "react";

const Popup = ({ openPopUp, closePopUp, data }) => {
  const handlelosePopUp = (e) => {
    // if (e.target.id === "ModelContainer") {
      closePopUp();
    // }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
    //   onClick={handlelosePopUp} 
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">
            {/* -------------template here----------------- */}
{/* 
            <div class="bg-gray-100 h-fit">
              <div class="bg-white p-6  md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  class="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div class="text-center">
                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Registration Success!
                  </h3>
                  <p class="text-gray-600 my-2">
                    Thank you for completing your school registration.
                  </p>

                  <div class="py-10 text-center">
                    <button
                      onClick={handlelosePopUp}
                      class="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
                    >
                      GO BACK
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            {data}

            {/* -------------template here----------------- */}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
