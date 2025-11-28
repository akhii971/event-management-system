import React from "react";
import DarkVeil from "@/components/DarkVeil";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      location: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      phonenumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      location: Yup.string().required("Location is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      alert("Signup Successful!");
      navigate("/signin");
    },
  });

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <DarkVeil />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[480px] bg-black/50 border-2 border-purple-500/20 backdrop-blur-xl p-8 rounded-2xl">

          <h2 className="text-2xl font-bold text-purple-400 text-center mb-8">
            Create Account
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-5 text-white">

            {/* Full Name */}
            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs">{formik.errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm">Phone Number</label>
              <input
                type="tel"
                name="phonenumber"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="10 digit number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phonenumber}
              />
              {formik.touched.phonenumber && formik.errors.phonenumber && (
                <p className="text-red-500 text-xs">{formik.errors.phonenumber}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="text-sm">Location</label>
              <input
                type="text"
                name="location"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="City, State"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location && (
                <p className="text-red-500 text-xs">{formik.errors.location}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm">Confirm Password</label>
              <input
                type="password"
                name="ConfirmPassword"
                className="w-full mt-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg focus:border-purple-400 outline-none"
                placeholder="Re-enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ConfirmPassword}
              />
              {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword && (
                <p className="text-red-500 text-xs">{formik.errors.ConfirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 rounded-lg py-2 font-semibold transition"
            >
              Sign Up
            </button>

            <p className="text-gray-400 text-sm text-center mt-1">
              Already have an account?{" "}
              <a href="/signin" className="text-purple-400 hover:underline">
                Sign In
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
