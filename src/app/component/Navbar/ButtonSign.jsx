import Link from "next/link";
import React from "react";
import Image from "next/image";
import { authUserSession } from "@/services/auth.services"

const ButtonSign = async () => {
  const user = await authUserSession();

  return (
    <div>
      {!user ? (
        <Link
          href={"/api/auth/signin"}
          className="border text-sm rounded-xl hover:rounded-lg text-gray-300 block w-full md:p-2.5 p-2 bg-gray-700 border-gray-600 hover:scale-105 transition-all duration-200"
        >
          Sign In
        </Link>
      ) : (
        <Link href={"/users/dashboard"} className="border text-sm rounded-3xl text-gray-300 block w-full md:p-2 p-1 bg-gray-700 border-gray-600 hover:scale-105 transition-all duration-200">
          <Image
            src={user.image}
            alt=".."
            width={36}
            height={36}
            className="rounded-3xl"
          />
        </Link>
      )}
    </div>
  );
};

export default ButtonSign;
