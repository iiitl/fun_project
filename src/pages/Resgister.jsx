import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./Resgister.module.css"

function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "", username: ""});
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
      console.log(data)
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center  -z-10">
      <h2 className="text-white font-semibold text-3xl pt-8 pb-4">Register Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="py-2">
          <label htmlFor="email" className='inline-block md-1 pl-1'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="py-2">
          <label htmlFor="username" className='inline-block md-1 pl-1'>username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className=" px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="py-2">
          <label htmlFor="password" className='inline-block md-1 pl-1'>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className=" px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit" className="w-full bg-gray-300 hover:bg-gray-500 my-8">Submit</button>
        <span className="text-white text-base ">
          Already have an account ?<Link to="/login" className="text-blue-500"> Login</Link>
        </span>
      </form>
      <div className="text-sm text-white absolute bottom-20 right-20">
        <ToastContainer className={" h-32 w-36"}/>
      </div>
    </div>
  );
}

export default Register;
