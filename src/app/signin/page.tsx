"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseConfig";

import Image from "../../../component/Image";
import UserInput from "../../../component/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  const handleData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("Login successful!");
      console.log("User UID:", user.uid);
      router.push("/Mainlayout"); 
    } catch (error: any) {
      console.error("Error during sign-in:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/RegiterBackground.jpg')] bg-[var(--Red)] bg-blend-multiply">
      <div className="bg-white flex justify-between gap-7 flex-wrap rounded-sm m-4">
        <div className="m-5 w-45% h-[450px] overflow-y-auto">
          <form onSubmit={handleData}>
            <h1 className="font-bold text-[36px] text-[var(--DarkBlack)]">Sign In</h1>

            <UserInput
              type="email"
              placeholder="Enter Email"
              icon="email.png"
              Name="email"
              required
            />
            <UserInput
              type="password"
              placeholder="Enter Password"
              icon="password.png"
              Name="password"
              required
            />

            <div className="flex gap-3 mt-5">
              <Checkbox className="accent-purple-600" />
              <p>Remember Me</p>
            </div>

            <div className="flex justify-start my-3">
              <Button className="bg-[#FF9090]">Login</Button>
            </div>
          </form>

          <div className="flex gap-6">
            <p>or, Login with</p>
            <div className="flex gap-2">
              <Image image="FB.png" className="w-[27px] h-[27px]" />
              <Image image="GOOGLE.png" className="w-[27px] h-[27px]" />
              <Image image="X.png" className="w-[27px] h-[27px]" />
            </div>
          </div>

          <p>
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-10 w-45%">
          <Image image="Secondimage.png" className="w-[433px] h-[452px]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
