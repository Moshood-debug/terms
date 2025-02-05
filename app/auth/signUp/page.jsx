"use client";

import Link from "next/link";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import apiCall from "@/config/request_handler";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    // firstName: Yup.string().required("First Name is required"),
    // lastName: Yup.string().required("Last Name is required"),
    company: Yup.string().required("Company name is required"),
    region: Yup.string().required("Region is required"),
    industry: Yup.string().required("Industry is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{11}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Initial form values
  const initialValues = {
    // firstName: "",
    // lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    region: "",
    industry: "",
  };

  // Form submission handler
  const onSubmit = async (values) => {
    try {
      const response = await apiCall({
        url: "/auth/register",
        method: "POST",
        data: {
          company: values.company,
          region: values.region,
          industry: values.industry,
          email: values.email,
          phone: values.phone,
          password: values.password,
        },
      });
      console.log(response);
      if (response.success === true) {
        toast.success(response.message);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto py-14">
      <div className="bg-[url('/img/image.jpg')] bg-cover bg-center p-10 w-full">
        <div className="grid grid-cols-2 items-center h-full">
          <div className=""></div>
          <div className="bg-white p-14 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sign Up
            </h2>

            {/* Formik Component */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  {/* <div className="mb-4">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div> */}

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="region"
                      placeholder="Region"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="region"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="industry"
                      placeholder="Industry"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="industry"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>

            <hr className="my-8 border-gray-300" />

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">Not new? </span>
              <Link href="" className="text-sm text-gray-600">
                Sign in to your account
              </Link>
            </div>

            <div className="mt-4">
              <Link href="/">
                <button
                  type="button"
                  className="w-full border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-xl hover:bg-blue-50"
                >
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
