"use client";
import React from "react";
import Image from "next/image";
import loginImage from "@/public/login_page.jpg";
import logo from "@/public/c4clogo_transparent.png";
import Button from "@/components/button/Button";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SOCIAL_LOGIN_BUTTONS = [
  { icon: <FaGoogle />, label: "Login with Google" },
  { icon: <FaFacebook />, label: "Login with Facebook" },
  { icon: <FaApple />, label: "Login with Apple" },
];

function Login() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const router = useRouter();
  return (
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      onClick={()=>{router.push('/')}}
    >
      <div
        className="relative flex flex-col md:flex-row bg-white rounded-2xl max-w-[900px] max-h-[520px] w-full h-auto p-5 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-black hover:bg-white text-white hover:text-black border border-black w-8 h-8 rounded-lg"
          onClick={()=>{router.push('/')}}
          aria-label="Close"
        >
          X
        </button>

        {/* Login Content */}
        <div className="flex flex-col w-full md:w-1/2">
          <Image className="max-w-[200px] mx-auto mb-5" src={logo} alt="logo" />
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col justify-center items-center gap-3 w-[90%] mx-auto">
              <FormInput
                label="Username"
                id="username"
                name="username"
                type="text"
                required
              />
              <FormInput
                label="Enter Password"
                id="pass"
                name="pass"
                type="password"
                required
              />
              <Button variant="cyan" size="block" type="submit">
                Login
              </Button>
            </div>
          </form>

          {/* Social Login Section */}
          <div className="flex flex-col items-center gap-3 w-[90%] mx-auto mt-5">
            <p className="text-sm">
              Doesn't have an account?{" "}
              <Link href={"/"}>
                <span className="text-cyan-500 hover:text-cyan-300">
                  Sign In
                </span>
              </Link>
            </p>
            {SOCIAL_LOGIN_BUTTONS.map(({ icon, label }, index) => (
              <Button key={index} variant="black" size="block">
                <div className="flex justify-center items-center gap-2 w-full h-8 px-2 cursor-pointer">
                  {icon}
                  {label}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Login Image */}
        <div className="hidden md:block w-1/2">
          <Image
            className="rounded-r-2xl object-cover w-full h-full"
            src={loginImage}
            alt="login_image"
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Form Input Component
const FormInput = ({ label, id, name, type, required }) => (
  <div className="flex flex-col w-full">
    <label className="text-sm font-normal mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full h-8 px-2 border border-gray-300 rounded-md"
      type={type}
      id={id}
      name={name}
      required={required}
    />
  </div>
);

export default Login;
