import { useRef, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import InputnameCopy from "./InputnameCopy";
import instance from "../Instance";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { authActions } from "../Store/auth";
import Snackbars from "./Snackbar";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const snackbarRef = useRef();

  const setValues = (value, field) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
      // code block
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(authActions.logout());

    try {
      if (email.trim().length === 0 || password.trim().length === 0) {
        setHasBlank(true);
        return;
        // snackbarRef.current.openSnackbar();
      } else {
        setHasBlank(false);
      }

      setLoading(true);

      const res = await instance({
        url: "auth/login",
        method: "post",
        data: {
          email: email,
          password: password,
        },
      });

      Cookies.remove("teacher");
      Cookies.remove("student");
      Cookies.remove("admin");
      Cookies.remove("token");

      if (res?.data?.data?.token && res?.data?.data?.user?.role) {
        if (res.data.data.user.role === "admin") {
          Cookies.set(
            "admin",
            `id: ${res.data.data.user._id}, accessToken: ${res.data.data.token}`
          );
          Cookies.set("token", `${res.data.data.token}`);
          dispatch(authActions.adminLogin());
        }

        if (res.data.data.user.role === "teacher") {
          Cookies.set(
            "teacher",
            `id: ${res.data.data.user._id}, accessToken: ${res.data.data.token}`
          );
          Cookies.set("token", `${res.data.data.token}`);
          dispatch(authActions.teacherLogin());
        }

        if (res.data.data.user.role === "student") {
          Cookies.set(
            "student",
            `id: ${res.data.data.user._id}, accessToken: ${res.data.data.token}`
          );
          Cookies.set("token", `${res.data.data.token}`);
          dispatch(authActions.studentLogin());
        }
      }

      setLoading(false);
    } catch (e) {
      alert(error);
    }
  };

  return (
    <div className="lg:m-10">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbars
        snackbarErrStatus={true}
        ref={snackbarRef}
        errMessage={errMessage}
      />
      <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">SignIn</h1>

        <div>
          <label className=""> Email Address </label>
          <input
            onChange={(e) => setValues(e.target.value, "email")}
            value={email}
            type="email"
            placeholder="Info@example.com"
            className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 border-2 ${
              hasBlank ? (email.length == 0 ? "border-red-500" : "") : ""
            }`}
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            onChange={(e) => setValues(e.target.value, "password")}
            value={password}
            type="password"
            placeholder="******"
            className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 border-2 ${
              hasBlank ? (password.length == 0 ? "border-red-500" : "") : ""
            }`}
          />
        </div>

        {/* <div className="checkbox">
          <input type="checkbox" id="chekcbox1" checked="" />
          <label for="checkbox1">
            I agree to the{" "}
            <a href="#" target="_blank" className="text-blue-600">
              {" "}
              Terms and Conditions{" "}
            </a>{" "}
          </label>
        </div> */}

        <div>
          <button
            onClick={handleLogin}
            type="button"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
