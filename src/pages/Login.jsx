import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      console.log(data)
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg text-white rounded-xl p-10 border border-black/10`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-white">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/register"
            className="font-medium text-blue-500 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-8">
          <div className="space-y-5">
            <div className="flex flex-col">
            <label className="inline-block md-1 pl-1" htmlFor="email">
              Email :
            </label>
            <input
              name="email"
              placeholder="Enter your email"
              type="email"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            </div>
            <div className="flex flex-col">
            <label className="inline-block md-1 pl-1" htmlFor="password">
              Password :
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-300 text-black text-xl font-semibold hover:bg-gray-400"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm text-white absolute bottom-20 right-20">
          <ToastContainer className={" h-32 w-36"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
