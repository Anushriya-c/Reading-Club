import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import Popup from "../components/Popup";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import instance from "../Instance";
import Cookies from "js-cookie";

const Teachersession = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [allSession, setAllSession] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setstatus] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  let { batchid } = useParams();
  console.log("batchid", batchid);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileUpload(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };
  const handleUpload = () => {
    if (fileUpload) {
      // Perform the upload or process the file here
      console.log("Uploading:", fileUpload);

      // Example: Using FormData to send the file to a server
      const formData = new FormData();
      formData.append("file", fileUpload);

      // Replace with your upload logic
      fetch("/upload-endpoint", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("File uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      alert("No file selected. Please select a PDF file to upload.");
    }
  };
  const getAllSession = async () => {
    setLoading(true);
    const res = await instance({
      url: `session/all/${batchid}`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    setAllSession(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getAllSession();
  }, []);
  return (
    <div className="overflow-hidden">
      <Header highlight={"tchrpnl"} />
      <BreadCrumb
        crumbData={[
          { name: "Batch", path: "/teacherbatch" },
          { name: "Sessions", path: null },
        ]}
      />
      <div className="overflow-hidden px-8">
        <div className="flex flex-row justify-end items-end pb-5">
          <button
            className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
          >
            <a href={`/createSession/${batchid}`}>Create Sessions</a>
          </button>
        </div>
        <table className="w-full border-2 border-violet-600 rounded-md">
          <thead>
            <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">Session No.</th>
              <th className="px-5 py-3">Session Date</th>
              <th className="px-5 py-3">Maximum Student Files</th>
              <th className="px-5 py-3">File Allowed</th>
              <th className="px-5 py-3">Sessions</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {allSession.map(function (ele) {
              return (
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{ele.sessionNumber}</p>
                  </td>
                  <Link
                    to={`/sessiondetails/${ele._id}`}
                    className="items-center justify-center border-b border-gray-200"
                  >
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center mt-3">
                        <p className="whitespace-no-wrap">{ele.date}</p>
                      </div>
                    </td>
                  </Link>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <p className="whitespace-no-wrap">
                        {ele.studentMaxFiles}
                      </p>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <p className="whitespace-no-wrap">
                        {ele.areFilesAllowed}
                      </p>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                    <button
                      className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                    >
                      <a href="https://meet.google.com/znk-suhu-vhn?authuser=1">
                        Class Link
                      </a>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Popup
        // openPopUp={openPopup}
        // closePopUp={HandleRemovePopUp}
        // data={
        //   <div className="bg-gray-100 h-fit">
        //     <div className="bg-white p-6  md:mx-auto">
        //       {status == true ? (
        //         <ImCross className="text-red-600 w-16 h-16 mx-auto my-6" />
        //       ) : (
        //         <TiTick className="text-green-600 w-16 h-16 mx-auto my-6" />
        //       )}

        //       <div className="text-center">
        //         <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
        //           {status == true
        //             ? "Are You Sure You Want To Cancel?"
        //             : "Are You Sure You Want To Activate? "}
        //         </h3>
        //         <div className="py-10 mx-7 text-center">
        //           <button
        //             // onClick={HandleRemovePopUp}
        //             className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 mx-10"
        //           >
        //             GO BACK
        //           </button>
        //           <button
        //             // onClick={HandleConfirmPopUp}
        //             className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
        //           >
        //             CONFIRM
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // }
        />
      </div>
    </div>
  );
};

export default Teachersession;
