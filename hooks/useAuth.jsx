import { checkSession } from "../services/auth.service";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user.slice";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log("useAuth");

  useEffect(() => {
    console.log("useEffect");
    (async () => {
      console.log("useEffect async");
      try {
        // check for token in local storage
        const token = localStorage.getItem("token");
        if (token) {
          if (
            router.pathname === "/startup-login" ||
            router.pathname === "/student-login"
          ) {
            if (localStorage.getItem("userType") === "startup") {
              router.replace("/startup/icServices");
              message.success("Welcome back");
            } else if (localStorage.getItem("userType") === "student") {
              router.replace("/student");
              message.success("Welcome back");
            } else if (localStorage.getItem("userType") === "admin") {
              router.replace("/admin");
            }
          }
          // restrict access to student and admin routes for startup
          if (
            router.pathname.includes("/student") ||
            router.pathname.includes("/admin")
          ) {
            if (localStorage.getItem("userType") === "startup") {
              router.replace("/startup/icServices");
              message.error("Unauthorized access");
            }
          }
          // restrict access to startup and admin routes for student
          if (
            router.pathname.includes("/startup") ||
            router.pathname.includes("/admin")
          ) {
            if (localStorage.getItem("userType") === "student") {
              router.replace("/student");
              message.error("Unauthorized access");
            }
          }
          // restrict access to startup and student routes for admin
          if (
            router.pathname.includes("/startup") ||
            router.pathname.includes("/student")
          ) {
            if (localStorage.getItem("userType") === "admin") {
              router.replace("/admin");
              message.error("Unauthorized access");
            }
          }
        }
      } catch (error) {
        router.replace("/");
        message.error("Please login again");
        console.log(error);
      }
    })();
  }, [router]);

  return {};
};

export default useAuth;
