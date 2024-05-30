import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import instance from "../Instance";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { authActions } from "../Store/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const dispatch = useDispatch();

  const setValues = (value, field) => {
    switch (field) {
      case "email":
        setEmail(value);
        validateEmail(email);
        break;
      case "password":
        setPassword(value);
        validatePassword(password);
        break;
      default:
    }
  };
  const validatePassword = (password) => {
    const minLength = 10;
    setIsPasswordValid(password.length >= minLength);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };
  useEffect(() => {
    if (email) validateEmail(email);
    if (password) validatePassword(password);
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(authActions.logout());

    if (email.trim().length === 0 || password.trim().length === 0) {
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }

    setLoading(true);
    try {
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
      if (res.status == 200) {
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
      }
    } catch (error) {
      toast.error("Incorrect email or password");
    }
    setLoading(false);
  };

  return (
    <div className="lg:m-10">
      <ToastContainer />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

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
          <p style={{ color: isEmailValid ? "black" : "red" }}>
            {isEmailValid ? "" : "Please write a valid email."}
          </p>
        </div>
        <div>
          <label className=""> Password </label>
          <input
            onChange={(e) => setValues(e.target.value, "password")}
            value={password}
            type="password"
            placeholder="Must have atleast 10 characters."
            className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 border-2 ${
              hasBlank ? (password.length == 0 ? "border-red-500" : "") : ""
            }`}
          />
          <p style={{ color: isPasswordValid ? "black" : "red" }}>
            {isPasswordValid
              ? ""
              : "Password must be at least 10 characters long."}
          </p>
        </div>
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
