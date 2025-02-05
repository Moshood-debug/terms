"use client";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import apiCall from "@/config/request_handler";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAction } from "@/lib/reducer/authReducer";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/reducer/userReducer";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Form submission handler
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);

      const response = await apiCall({
        url: "/auth/login",
        method: "POST",
        data: {
          email: values.email,
          password: values.password,
        },
      });

      if (response.token) {
        sessionStorage.setItem("authToken", response.data.token);
      }

      if (response.success) {
        dispatch(
          loginAction({ user: response.data.user, token: response.data.token })
        );

        notification.success({
          message: "Success",
          description: response.message,
          duration: 3,
        });

        setTimeout(() => {
          router.push("/createTerms"); // Use router.push() instead of window.location.href
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Login Failed",
        description: error?.response?.data?.message || "Something went wrong",
        duration: 3,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-14">
      <div className="bg-[url('/img/image.jpg')] bg-cover bg-center p-10 w-full">
        <div className="grid grid-cols-2 items-center h-full">
          <div className=""></div>
          <div className="bg-white p-14 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Log in
            </h2>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: "", password: "", remember: false }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <Field
                      type="email"
                      name="email"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="password"
                      name="password"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name="remember"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </button>
                </Form>
              )}
            </Formik>

            <hr className="my-8 border-gray-300" />

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Not new? Sign in to your account
              </span>
            </div>

            <div className="mt-4">
              <Link href="/auth/signUp">
                <button
                  type="button"
                  className="w-full border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-xl hover:bg-blue-50"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
