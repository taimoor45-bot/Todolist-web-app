import { Check } from "lucide-react";
import Image from "../../../component/Image";
import UserInput from "../../../component/input"
import { Checkbox } from "@/components/ui/checkbox";
import CustomButton from "../../../component/CustomButton";

import Link from "next/link";
const page = () => {
  const handleData = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as String;
    const password = formData.get("password") as String;
    console.log(email, password);
  };
  return (
    <>
      <div className="min-h-screen flex  justify-center items-center bg-[url('/RegiterBackground.jpg')] bg-[var(--Red)] bg-blend-multiply">
        <div className=" bg-white flex justify-between gap-7 flex-wrap rounded-sm m-4">
          <div className="m-5 w-45% h-[450px] overflow-y-auto">
            <form action={handleData}>
              <h1 className="font-bold text-[36px] text-[var(--DarkBlack)]">
                Sign In
              </h1>

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
                <div className="">
                  <Checkbox className="accent-purple-600" />
                </div>
                <div className="">
                  <p>Remember Me</p>
                </div>
              </div>
              <div className=" flex justify-start my-3">
                <CustomButton className="bg-[#FF9090]" text="Login" />
              </div>
            </form>
            <div className="flex gap-6">
              <div className="">
                <p>or,Login with</p>
              </div>
              <div className="flex gap-2">
                <div className="">
                  <Image image="FB.png" className=" w-[27px] h-[27px] " />
                </div>
                <div className="">
                  <Image image="GOOGLE.png" className=" w-[27px] h-[27px] " />
                </div>
                <div className="">
                  <Image image="X.png" className=" w-[27px] h-[27px] " />
                </div>
              </div>
            </div>
            <div className="">
              <p>
                Don’t have an account? Create One
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className=" mt-10 w-45%">
            <Image image="Secondimage.png" className=" w-[433px] h-[452px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
