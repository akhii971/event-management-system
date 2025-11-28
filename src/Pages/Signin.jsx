import React from "react";
import DarkVeil from "@/components/DarkVeil";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "@/redux/Loginslice";


function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        dispatch(login(storedUser));
        navigate("/");
      } else {
        alert("Invalid Email or Password!");
      }
    },
  });

  return (
    <div className="relative w-full min-h-screen bg-black flex justify-center items-center overflow-hidden">
      <DarkVeil />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[420px] min-h-[500px] bg-black/50 border-2 border-purple-500/60 
                        backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Welcome Back
          </h2>

          <form className="space-y-6 text-white" onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 bg-black/60 border border-purple-500/40 
                           rounded-lg focus:outline-none focus:border-purple-400"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 mt-1 bg-black/60 border border-purple-500/40 
                           rounded-lg focus:outline-none focus:border-purple-400"
                placeholder="Enter password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold 
                         py-2 rounded-lg transition duration-300"
            >
              Sign In
            </button>

            <p className="text-gray-400 text-sm text-center mt-2">
              Don’t have an account?{" "}
              <a href="/signup" className="text-purple-400 hover:underline">
                Sign Up
              </a>
            </p>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Signin;

