import Link from "next/link";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function TopRecruiters() {
    const scrollLeft = () => {
        const content = document.getElementById(
            'content'
          );
        if(content){
            content.scrollLeft -= 400;
        }
      };
      const scrollRight = () => {
        const content = document.getElementById(
            'content'
          );
        if(content){
            content.scrollLeft += 400;
        }
      };
  return (
    <div className="px-2 py-8">
      
      <div className="relative px-2 py-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">
          <span className="text-cyan-500">Top</span> Recruiters
        </h1>
        <p className="font-mono">Our trusted Top Recruiters</p>
      </div>
      <div className="absolute right-0 top-14 ">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 text-[#0d9295] text-2xl">
           <BsBoxArrowInLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 text-[#0d9295] text-2xl">
          <BsBoxArrowInRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
        <div>
          <div className="card bg-[#001618] w-[400px] px-5 py-5 m-2 rounded-lg">
            <div className="flex justify-normal items-center">
                <div className="w-[20%]">
                    <img className="rounded-full w-16 h-16" src="assets/Logo/company-01.png" alt="" />
                </div>
                <div className="text-left pl-3 w-[80%]">
              <h3 className="text-xl font-bold font-sans hover:text-[#0ba8ab] hover:cursor-pointer">
              Germaine Company
              </h3>
              <p>
                <CiLocationOn className="inline-block text-sm text-[#0ba8ab]" />{" "}
                New-York, USA
              </p>
            </div>
            </div>
            <div className="flex justify-between mt-4 items-center mx-4">
                <h6>Open jobs: <span className="font-bold">14</span></h6>
                <p>
                    <Link className="text-[#0d9295]" href='/'> <BsBoxArrowInRight className="inline-block mr-2" /> View details</Link>
                </p>
            </div>

          </div>
        </div>
     
        
     
        
      </div>
    </div>
    </div>
  );
}
