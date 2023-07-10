import Footer from "@/components/Footer/Footer";
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import App from './_app';
import { MdWorkOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Document() {
  return (
    <Html data-theme="luxury" lang="en">
      <Head />

      <body>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar justify-between bg-gradient-to-b from-gray-950 to-transparent">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className=" text-2xl font-serif font-bold px-2 mx-2">
                <Link href="/">
                  Job &nbsp;<span className="drop-shadow">List</span>
                </Link>
              </div>
              <div className="flex-1 hidden lg:block">
                <ul className="menu menu-horizontal flex items-center justify-evenly w-full">
                  <li>
                    <a className="rounded">Home</a>
                  </li>
                  <li>
                    <a className="rounded">Onsite</a>
                  </li>
                  <li>
                    <a className="rounded">Remote</a>
                  </li>
                  <li>
                    <a className="rounded">Field Work</a>
                  </li>
                  <li>
                    <a className="rounded">Blog</a>
                  </li>
                  <li>
                    <a className="rounded">Contact</a>
                  </li>
                  <li>
                  <button className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer ">
              <IoNotificationsOutline />
            </button>
                  </li>
                  <li>
                    <button className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-10"><RiAccountCircleLine /> Sign In</button>
                  </li>
                  <li>
                    <button className="ml-3 rounded-full flex justify-center items-center text-white bg-[#0ba8ab] hover:cursor-pointer h-10"><MdWorkOutline /> Post Jobs</button>
                  </li>
                </ul>
              </div>
            </div>
            <section>
              <Main />
              <Footer />
            </section>
            <NextScript />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-gradient-to-r from-gray-500 to-transparent">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Onsite</a>
              </li>
              <li>
                <a>Remote</a>
              </li>
              <li>
                <a>Field Work</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </Html>
  );
}
