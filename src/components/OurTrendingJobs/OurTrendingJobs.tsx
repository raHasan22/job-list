import Link from "next/link";
import { BsBookmark, BsBoxArrowInRight } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { GoDot } from "react-icons/go";

export default function OurTrendingJobs() {
  return (
    <div className="px-2 py-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">
            Our <span className="text-cyan-500">Trending</span> Jobs
          </h1>
          <p className="font-mono">
            To choose your trending job dream & to make future bright.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xl font-mono hover:text-[#0ba8ab] hover:cursor-pointer">
            Exlpore All Jobs <BsBoxArrowInRight className="inline-block ml-3" />
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 my-10">
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-01.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
                Manager-Account & Finance
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Elite.co Ltd
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $80K-$90K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 1.5-3 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">06 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-02.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
                Python Developer
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Elite.co Ltd
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $30K-$55K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 3.5-5 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">05 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-03.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
                Mern Stack Developer
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Elite.co Ltd
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $80K-$90K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 1.5-3 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">15 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-04.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
                WordPress Developer
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Bistro Tech Ltd
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $30K-$55K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 3.5-5 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">02 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-05.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
                Assistant Manager
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Gangster.Hide
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $20K-$35K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 2.5-3 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">03 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#001618] py-8 px-4 rounded-md ">
          <div className=" w-[10%]">
            <img
              className="rounded-full h-10 w-10"
              src="assets/Logo/company-06.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <div className="text-left mb-5">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Medical Nurse
              </h3>
              <p>
                <MdWorkOutline className="inline-block mr-2 text-sm text-[#0ba8ab]" />{" "}
                Marko Company
              </p>
              <p className="text-xs mt-3">
                <span className="text-[#c9e5fd]">(Full-Time)</span> &nbsp;
                &nbsp; &nbsp;
                <span className="text-[#b4f3c4]">(Remote)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Salary: $15K-$20K / Per Month
              </p>
              <p className="text-white font-mono font-semibold">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                Experience: 1.5-2 Years
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-gray-400">Dhaka,Bangladesh</span>
              </p>
              <p className="text-white font-mono">
                <GoDot className="text-[#0ba8ab] mr-2 inline-block" />
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-gray-400">09 August, 2023</span>
              </p>
            </div>
            <Link
              className="text-lg text-[#0ba8ab] hover:font-semibold font-mono"
              href="/">
              Browse Job <BsBoxArrowInRight className="inline-block ml-3" />
            </Link>
          </div>
          <div className="w-[7%]">
            <p className="text-[#0ba8ab] border border-[#0ba8ab] rounded-full flex justify-center items-center hover:text-white hover:bg-[#0ba8ab] hover:cursor-pointer h-8 w-8">
              <BsBookmark />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
