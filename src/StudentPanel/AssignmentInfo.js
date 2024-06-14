import React, { useState } from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import { Backdrop, CircularProgress } from "@mui/material";
import Popup from "../components/Popup";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AssignmentInfo = () => {
  const [remarks, setRemarks] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [fileUpload, setFileUpload] = useState([]);
  const [fileId, setFileId] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reloadForm, setReloadForm] = useState(1);
  const { batchid } = useParams();
  const Student = useSelector((state) => state.auth.student);
  const Teacher = useSelector((state) => state.auth.teacher);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.type === "application/pdf");

    if (validFiles.length !== files.length) {
      alert("Please upload only PDF files.");
    }

    setFileUpload(validFiles);
  };

  const HandleRemovePopUp = () => {
    setReloadForm(Math.random());
    setOpenPopup(false);
  };

  const setValues = (value, field) => {
    switch (field) {
      case "fileId":
        setFileId(value);
        break;
      case "remarks":
        setRemarks(value);
        break;
      default:
    }
  };

  const addFile = async (fileId) => {
    setLoading(true);
    try {
      const res = await instance({
        url: `/session/addFiles/${batchid}`,
        method: "PUT",
        data: {
          fileId: fileId,
          remarks: remarks,
        },
        headers: {
          Authorization: Cookies.get("token"),
        },
      });

      if (res.status === 200) {
        setFileId("");
        setRemarks("");
        setOpenPopup(true);
      } else {
        setError("Failed to update session files.");
      }
    } catch (error) {
      console.error("Error updating session files:", error);
      setError("An error occurred while updating session files.");
    } finally {
      setLoading(false);
    }
  };

  const uploadFiles = async (e) => {
    e.preventDefault();

    if (fileUpload.length === 0) {
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }

    const formData = new FormData();
    fileUpload.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("type", "assignments");

    setLoading(true);
    try {
      const res = await instance({
        url: `/file/uploadFiles`,
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("token"),
        },
      });

      if (res.status >= 200 && res.status < 400) {
        const fileIds = res.data.data?.map((file) => file._id);
        setFileId(fileIds);
        for (const file of fileIds) {
          await addFile(file);
        }
      } else {
        setError("Uploading of file failed.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setError("An error occurred while uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Header highlight={Student ? "studpanel" : Teacher ? "tchrpnl" : ""} />
      <div className="flex">
        <div className="w-full bg-gray-300">
          <BreadCrumb
            crumbData={[{ name: "Uploading Assignments", path: null }]}
          />
          <div className="lg:m-10" key={reloadForm}>
            <form
              className="relative border space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
              onSubmit={uploadFiles}
            >
              <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
                Upload Files
              </h1>
              <div className="flex flex-col gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label>Select Files</label>
                    <label className="flex flex-col justify-center items-center cursor-pointer mt-5">
                      <input
                        type="file"
                        accept="application/pdf"
                        multiple
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="">Remarks</label>
                  <input
                    value={remarks}
                    onChange={(e) => {
                      setValues(e.target.value, "remarks");
                    }}
                    type="text"
                    placeholder="Write your Remarks"
                    className={`mt-2 h-12 w-full border-2 ${
                      hasBlank && !remarks ? "border-red-500" : ""
                    } rounded-md bg-gray-100 px-3`}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={uploadFiles}
                    className="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Popup
        openPopUp={openPopup}
        closePopUp={HandleRemovePopUp}
        data={
          <div className="bg-gray-100 h-fit">
            <div className="bg-white p-6 md:mx-auto">
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                  File Upload Successfully!
                </h3>
                <div className="py-10 text-center">
                  <button
                    onClick={HandleRemovePopUp}
                    className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
                  >
                    GO BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AssignmentInfo;
