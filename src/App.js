import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StudentSignUp from "./pages/StudentSignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SchoolSignUp from "./pages/SchoolSignUp";
import HomeDash from "./admindashboard/AdminHome";
import AdminHome from "./admindashboard/AdminHome";
import AdminSchoolReg from "./admindashboard/AdminSchoolReg";
import AdminSchoolMng from "./admindashboard/AdminSchoolMng";
import AdminProfileSetting from "./admindashboard/AdminProfileSetting";
import AdminSchoolEdit from "./admindashboard/AdminSchoolEdit";
// import AdminBatchMng from "./admindashboard/AdminBatchMng";
import AdminBatchEdit from "./admindashboard/AdminBatchEdit";
import { useSelector } from "react-redux";
import Teacherbatch from "./teacherpanel/Teacherbatch";
import Teacherlevel from "./teacherpanel/Teacherlevel";
import Teachersession from "./teacherpanel/Teachersession";
import AdminBatchCreate from "./admindashboard/AdminBatchCreate";
import StudentSession from "./StudentPanel/StudentSession";
import StudentBatch from "./StudentPanel/StudentBatch";
import StudentData from "./teacherpanel/StudentData";
import CreateSession from "./teacherpanel/CreateSession";
import NotFound from "./pages/NotFound";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const Admin = useSelector((state) => state.auth.admin);
  const Student = useSelector((state) => state.auth.student);
  const Teacher = useSelector((state) => state.auth.teacher);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/studentsignup-up":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studentsignup" element={<StudentSignUp />} />
      <Route path="/adminhome" element={Admin ? <AdminHome /> : <SignIn />} />
      <Route path="/adminschoolregistration" element={<AdminSchoolReg />} />
      <Route path="/adminschoolmanage" element={<AdminSchoolMng />} />
      <Route path="/adminbatchcreate" element={<AdminBatchCreate />} />
      <Route path="/createSession/:batchid" element={<CreateSession />} />
      <Route path="/studentdata" element={<StudentData />} />
      <Route path="/adminprofilesetting" element={<AdminProfileSetting />} />
      <Route path="/adminschooledit/:id" element={<AdminSchoolEdit />} />
      <Route path="/adminbatchedit" element={<AdminBatchEdit />} />
      <Route path="/teachersession/:batchid" element={<Teachersession />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/signin" element={Admin ? <AdminHome /> : <SignIn />} />
      <Route path="/signin" element={Student ? <StudentBatch /> : <SignIn />} />
      <Route path="/signin" element={Teacher ? <Teacherlevel /> : <SignIn />} />
      <Route
        path="/studentbatch"
        element={Student ? <StudentBatch /> : <SignIn />}
      />

      <Route
        path="/teacherbatch/:levelid"
        element={Teacher ? <Teacherbatch /> : <SignIn />}
      />
      <Route
        path="/studentsession"
        element={Student ? <StudentSession /> : <SignIn />}
      />
      <Route
        path="/teacherlevel"
        element={Teacher ? <Teacherlevel /> : <SignIn />}
      />
    </Routes>
  );
}
export default App;
