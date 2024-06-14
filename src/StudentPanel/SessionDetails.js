import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import instance from "../Instance";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";

const StudentDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [uploads, setUploads] = useState([]);
  const Student = useSelector((state) => state.auth.student);
  const Teacher = useSelector((state) => state.auth.teacher);

  const getAllSession = async () => {
    setLoading(true);
    try {
      const res = await instance({
        url: `session/details/${id}`,
        method: "GET",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setUploads(res.data.data);
    } catch (error) {
      console.error("Error fetching session details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSession();
  }, [id]);

  return (
    <div className="overflow-hidden">
      <Header highlight={Student ? "studpanel" : Teacher ? "tchrpnl" : ""} />
      <BreadCrumb
        crumbData={[
          { name: "Session", path: "/studentsession/${batchid}" },
          { name: "Details", path: null },
        ]}
      />
      <div className="px-8">
        <div className="flex flex-row justify-end items-end pb-7">
          <button
            className={`text-violet-900
                     rounded-full border-2 border-violet-900 px-6 py-2  transition-colors hover:bg-violet-500 hover:text-white`}
          >
            <a href={`/assignmentInfo/${id}`}>Upload Files</a>
          </button>
        </div>
        {loading && (
          <div className="text-center mt-10">
            <p>Loading...</p>
          </div>
        )}
        {!loading && uploads.length === 0 && (
          <div className="text-center mt-10">
            <p>No uploads found.</p>
          </div>
        )}
        {!loading &&
          uploads.map((ele) => (
            <div
              key={ele.id}
              className={`chat-item p-4 mb-4 rounded-lg ${
                ele.type === "assignment" ? "bg-green-100" : "bg-blue-100"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{ele.sessionNumber}</span>
                <span className="text-sm text-gray-500">
                  {moment(ele.timestamp).fromNow()}
                </span>
              </div>
              <div>
                <p className="text-gray-800">
                  {ele.type === "assignment"
                    ? "Student Files:"
                    : "Teacher Files:"}
                </p>
                <p className="text-gray-800">{ele.studentFiles.type}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentDetails;
