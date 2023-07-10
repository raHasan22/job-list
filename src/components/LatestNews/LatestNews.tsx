import Link from "next/link";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

export default function LatestNews() {
  return (
    <div className="px-2 py-8 bg-[#030f11]">
      <div className="mb-5">
        <h1 className="text-4xl lg:text-5xl font-serif text-white my-4 text-center">
          <span className="text-cyan-500">Latest</span> News & Articles
        </h1>
        <p className="font-mono text-center">Check Latest news on job market</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-3 my-4">
        <div>
          <div className="mb-2  relative">
            <img
              height="100%"
              width="100%"
              className="rounded-lg"
              src="assets/News/blog-img-61.png"
              alt=""
            />
            <div className="text-[#0ba8ab] border border-[#0ba8ab] rounded-lg flex flex-col justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-16 w-14 absolute bottom-3 right-3">
              <h6 className="mb-0 text-xl">04</h6>
              <p>July</p>
            </div>
          </div>
          <div className="flex justify-between text-left mx-3 mb-3">
            <p className="hover:text-[#0fa89d] font-mono">
              <MdOutlineManageAccounts className="inline-block mr-1 text-[#0fa89d]" />{" "}
              Mr. Jack frank
            </p>
            <p className="hover:text-[#0fa89d] font-mono">
              <FaRegCommentDots className="inline-block mr-1 text-[#0fa89d]" />{" "}
              O3 Comments
            </p>
          </div>
          <div>
            <h3 className="text-2xl mx-2 mb-3 font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              To Be Continue Redesign & Build Up Your Career Opportunity.
            </h3>
            <Link className="text-[#0d9295] font-mono text-lg mx-2" href="/">
              {" "}
              Explore More <BsBoxArrowInRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-2  relative">
            <img
              height="100%"
              width="100%"
              className="rounded-lg"
              src="assets/News/blog-img-62.png"
              alt=""
            />
            <div className="text-[#0ba8ab] border border-[#0ba8ab] rounded-lg flex flex-col justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-16 w-14 absolute bottom-3 right-3">
              <h6 className="mb-0 text-xl">05</h6>
              <p>July</p>
            </div>
          </div>
          <div className="flex justify-between text-left mx-3 mb-3">
            <p className="hover:text-[#0fa89d] font-mono">
              <MdOutlineManageAccounts className="inline-block mr-1 text-[#0fa89d]" />{" "}
              Mr. Marco Jack
            </p>
            <p className="hover:text-[#0fa89d] font-mono">
              <FaRegCommentDots className="inline-block mr-1 text-[#0fa89d]" />{" "}
              11 Comments
            </p>
          </div>
          <div>
            <h3 className="text-2xl mx-2 mb-3 font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Be Confident Your Dream & Struggle About Your Bright Dream
            </h3>
            <Link className="text-[#0d9295] font-mono text-lg mx-2" href="/">
              {" "}
              Explore More <BsBoxArrowInRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-2  relative">
            <img
              height="100%"
              width="100%"
              className="rounded-lg"
              src="assets/News/blog-img-63.png"
              alt=""
            />
            <div className="text-[#0ba8ab] border border-[#0ba8ab] rounded-lg flex flex-col justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-16 w-14 absolute bottom-3 right-3">
              <h6 className="mb-0 text-xl">07</h6>
              <p>July</p>
            </div>
          </div>
          <div className="flex justify-between text-left mx-3 mb-3">
            <p className="hover:text-[#0fa89d] font-mono">
              <MdOutlineManageAccounts className="inline-block mr-1 text-[#0fa89d]" />{" "}
              Srikanto Frank
            </p>
            <p className="hover:text-[#0fa89d] font-mono">
              <FaRegCommentDots className="inline-block mr-1 text-[#0fa89d]" />{" "}
              O2 Comments
            </p>
          </div>
          <div>
            <h3 className="text-2xl mx-2 mb-3 font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              If You Are A talented People, Make Sure Your Technology Part.
            </h3>
            <Link className="text-[#0d9295] font-mono text-lg mx-2" href="/">
              {" "}
              Explore More <BsBoxArrowInRight className="inline-block ml-2" /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
