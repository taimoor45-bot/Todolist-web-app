"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "../../../component/Image";
import Userinput from "../../../component/input";
import { Checkbox } from "@/components/ui/checkbox";
import Custombutton from "../../../component/custombutton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firbaseConfig";
import { FormEvent } from "react";

const Page = () => {
  const router = useRouter();

  const handleData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const FirstName = formData.get("FirstName") as string;
    const LastName = formData.get("Lastname") as string;
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const Repassword = formData.get("Repassword") as string;

    if (password !== Repassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Account created:", userCredential.user);
      router.push("/signin");
    } catch (error: any) {
      console.error("Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/RegiterBackground.jpg')] bg-[var(--Red)] bg-blend-multiply">
      <div className=" bg-white flex justify-between gap-7 flex-wrap rounded-sm">
        <div className=" mt-10 w-45%">
          <Image image="Firstimage.png" className=" w-[433px] h-[452px] " />
        </div>
        <div className="m-5 w-45% h-[450px] overflow-y-auto">
          <form onSubmit={handleData}>
            <h1 className="font-bold text-[36px] text-[var(--DarkBlack)]">
              Sign Up
            </h1>

            <Userinput
              type="text"
              placeholder="Enter First Name"
              icon="name.png"
              Name="FirstName"
              required
            />
            <Userinput
              type="text"
              placeholder="Enter Last Name"
              icon="Lastname.png"
              Name="Lastname"
              required
            />
            <Userinput
              type="email"
              placeholder="Enter Email"
              icon="email.png"
              Name="email"
              required
            />
            <Userinput
              type="text"
              placeholder="Enter your username"
              icon="username.png"
              Name="username"
              required
            />
            <Userinput
              type="password"
              placeholder="Enter Password"
              icon="password.png"
              Name="password"
              required
            />
            <Userinput
              type="password"
              placeholder="Confirm Password"
              icon="Re-Password.png"
              Name="Repassword"
              required
            />

            <div className="flex gap-3 mt-5">
              <Checkbox className="accent-purple-600" />
              <p>I agree to all terms</p>
            </div>

            <div className=" flex justify-start my-3">
              <Custombutton className="bg-[#FF9090]" text="Register" />
            </div>

            <p>
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
