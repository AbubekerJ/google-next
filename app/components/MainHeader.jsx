
import All_Image from "./All_Image"
import Image from "next/image";
import Link from "next/link";

import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import MainHeaderInput from "./MainHeaderInput";


export default function MainHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          />
        </Link>
        <div className="flex-1">
          <MainHeaderInput/>
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md  hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
     <All_Image/>
    </header>
  );
}