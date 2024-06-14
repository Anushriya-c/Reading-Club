import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import instance from "../Instance";
import Cookies from "js-cookie";
import { Link, useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import AssignmentInfo from "./AssignmentInfo";
import { IoClose } from "react-icons/io5";

const StudentSession = () => {
  const [open, setOpen] = useState(false);
  const [allSession, setAllSession] = useState([]);
  const [loading, setLoading] = useState(false);
  let { batchid } = useParams();

  const handleSubject = () => {
    setOpen(false);
  };
  const token = Cookies.get("token");
  console.log("Token:", token);

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
      <Header highlight={"studpanel"} />
      <BreadCrumb
        crumbData={[
          { name: "Batch", path: "/studentbatch" },
          { name: "Sessions", path: null },
        ]}
      />
      <div className="px-8">
        <table className="w-full border-2 border-violet-600 rounded-md">
          <thead>
            <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">Session No.</th>
              <th className="px-5 py-3">Session Date</th>
              <th className="px-5 py-3">Maximum Student Files</th>
              <th className="px-5 py-3">Sessions</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {allSession.map((ele) => (
              <tr key={ele.sessionNumber}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">{ele.sessionNumber}</p>
                </td>
                <Link
                  to={`/sessiondetails/${ele._id}`}
                  className="items-center justify-center border-b border-gray-200"
                >
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex mt-3">
                      <p className="whitespace-no-wrap">{ele.date}</p>
                    </div>
                  </td>
                </Link>
                <Dialog
                  PaperProps={{
                    sx: {
                      width: "29rem",
                    },
                  }}
                  open={open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  // TransitionComponent={Transition}
                >
                  <AssignmentInfo className={"relative"} closeform={setOpen} />
                  <IoClose
                    className="absolute bottom-[95%] left-[90%] cursor-pointer"
                    onClick={handleSubject}
                  />
                </Dialog>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <p className="whitespace-no-wrap">{ele.studentMaxFiles}</p>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button
                    className={`text-violet-900 rounded-full border-2 border-violet-900 px-6 py-1 transition-colors hover:bg-violet-500 hover:text-white`}
                  >
                    <a
                      href="https://meet.google.com/kzb-arrt-zjn"
                      rel="noreferrer"
                      target="_blank" // Open link in a new tab
                    >
                      Class Link
                    </a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSession;
