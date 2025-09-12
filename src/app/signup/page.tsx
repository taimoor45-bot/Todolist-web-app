"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "@/lib/firebase/firebaseConfig"
import Image from "../../../component/Image";
import UserInput from "../../../component/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

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
    const agree = formData.get("terms");

if (!agree) {
  alert("You must agree to the terms");
  return;
}

    if (password !== Repassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
       await setDoc(doc(db, "users", user.uid), {
        FirstName,
        LastName,
        username,
        email,
        createdAt: new Date()
      });
       alert("User registered successfully!");
        router.push("/signin");
       
      console.log("User UID:", user.uid);

    } catch (error: any) {
  console.error("Error during sign-up:", error.message);
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

            <UserInput
              type="text"
              placeholder="Enter First Name"
              icon="name.png"
              Name="FirstName"
              required
            />
            <UserInput
              type="text"
              placeholder="Enter Last Name"
              icon="Lastname.png"
              Name="Lastname"
              required
            />
            <UserInput
              type="email"
              placeholder="Enter Email"
              icon="email.png"
              Name="email"
              required
            />
            <UserInput
              type="text"
              placeholder="Enter your username"
              icon="username.png"
              Name="username"
              required
            />
            <UserInput
              type="password"
              placeholder="Enter Password"
              icon="password.png"
              Name="password"
              required
            />
            <UserInput
              type="password"
              placeholder="Confirm Password"
              icon="Re-Password.png"
              Name="Repassword"
              required
            />

            <div className="flex gap-3 mt-5">
             <input type="checkbox" name="terms" required className="accent-purple-600" />
<p>I agree to all terms</p>
            </div>

            <div className=" flex justify-start my-3">
              
              <Button className="bg-[#FF9090]">Register</Button>
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
