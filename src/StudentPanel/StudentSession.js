import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

const StudentSession = () => {
  const [fileUpload, setFileUpload] = useState(null);

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
  return (
    <div>
      <Header highlight={"studpanel"} />
      <BreadCrumb
        crumbData={[
          { name: "Batch", path: "/studentbatch" },
          { name: "Sessions", path: null },
        ]}
      />
      <div className="overflow-x-auto p-8 ">
        <table className="w-full border-2 border-violet-600 rounded-md">
          <thead>
            <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">Session Id</th>
              <th className="px-5 py-3">Session Date/Time</th>
              <th className="px-5 py-3">Updated Question Paper</th>
              <th className="px-5 py-3">Upload Button</th>
              <th className="px-5 py-3">URL Link</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {/* First Session */}
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap">31212</p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap">
                    25th May 2024/16:00 to 18:00
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  {/* <button
                    className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    <a
                      href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Ques paper
                    </a>
                  </button> */}
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <label class="flex flex-col justify-center items-center cursor-pointer">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={handleUpload}
                    className={`text-violet-900 justify-center text-center flex flex-col font-bold
                   px-1 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    {" "}
                  </button>
                  {/* {fileUpload && (
                    <div>
                      <p>PDF File Upload: {fileUpload.name}</p>
                    </div>
                  )}
                  <button
                    onClick={handleRemove}
                    className="text-red-500 flex flex-col justify-start"
                  >
                    Remove
                  </button> */}
                </label>
              </td>
              <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                <button
                  className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}
                >
                  <a
                    href="https://meet.google.com/kzb-arrt-zjn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Class Link
                  </a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSession;
