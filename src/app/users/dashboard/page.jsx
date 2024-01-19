import React from "react";
import { authUserSession } from "@/services/auth.services";
import Link from "next/link";
import Image from "next/image";
import Collection from "@/app/users/dashboard/Collection";

const Page = async () => {
  const user = await authUserSession();

  const Dashboard = () => {
    return (
      <div className="p-6 px-8 bg-slate-100">
        <div className="container flex flex-col gap-y-5 mx-auto w-full">
          <div className="text-center">
            <h1 className="text-xl text-gray-900 font-medium">
              Hi
              <span className="text-blue-900 font-semibold"> {user.name}</span>!
              Welcome to your dashboard.
            </h1>
          </div>
          <div id="content" className="flex w-full  justify-center">
            <div className="w-fit flex flex-col gap-y-2 bg-white rounded-xl shadow-xl border border-gray-400 py-4 px-8">
              <div className="p-2 flex justify-center">
                <Image
                  src={user.image}
                  width={150}
                  height={150}
                  className="rounded-full border-2 border-gray-800 object-cover"
                />
              </div>
              <div className="text-center">
                <h1>Users Name : {user.name}</h1>
                <h1>User Email : {user.email}</h1>
              </div>
              <div className="flex flex-row bg-white md:my-2">
                <div className="h-[2px] flex-1 bg-[#D1D5DC] rounded mx-4"></div>
              </div>
              <div className="flex justify-center">
                <Link
                  href={"/api/auth/signout"}
                  className="px-3 py-2 bg-gray-50 hover:bg-white hover:-translate-y-[2px] transition-all border border-gray-400 text-gray-800 rounded-lg shadow-lg"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NotLogin = () => {
    return (
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col gap-y-3 justify-center text-center bg-white rounded-xl shadow-xl border border-gray-400 px-6 py-10">
          <h1 className="text-red-600 font-medium text-2xl">
            You are not logged in! Please login to access this page.
          </h1>
          <h2 className="text-blue-500 font-medium text-lg">
            Back to{" "}
            <Link
              href={"/"}
              className="text-blue-600 underline hover:text-blue-800 transition-all"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              href={"/api/auth/signin"}
              className="text-blue-600 underline hover:text-blue-800 transition-all"
            >
              Login
            </Link>{" "}
            ...
          </h2>
        </div>
      </div>
    );
  };

  return (
    <>
      {!user ? (
        <NotLogin />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Dashboard />
          <div className="flex flex-row  md:my-2">
            <div className="h-[2px] flex-1 bg-[#c4c6cb] rounded mx-10"></div>
          </div>
          <Collection />
        </div>
      )}
    </>
  );
};

export default Page;
