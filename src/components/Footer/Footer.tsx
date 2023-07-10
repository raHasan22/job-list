import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer(){
    return(
        <div className="py-8 px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-4">
            <div className="text-center mb-5 lg:mb-0 lg:text-left flex flex-col">
                <h4 className="mb-3 text-xl font-bold font-sans">About Company</h4>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Contact Us <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Terms & Condition <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Privacy & Policy <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Candidate Listing <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
            </div>
            <div className="text-center mb-5 lg:mb-0 lg:text-left flex flex-col">
                <h4 className="mb-3 text-xl font-bold font-sans">For Candidate’s</h4>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Create Resume <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Browse Categories <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Save Jobs List <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Browse Jobs <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Candidate Dashboard <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
            </div>
            <div className="text-center mb-5 lg:mb-0 lg:text-left flex flex-col">
                <h4 className="mb-3 text-xl font-bold font-sans">For Employer’s</h4>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Post A Job <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Browse Candidates <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Job Packages <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Jobs Featured <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
                <Link className="group text-gray-500 hover:text-[#0aa8ab] text-lg mb-1" href='/'>Employer Dashboard <FiArrowUpRight className="inline-block text-bold invisible group-hover:visible" /> </Link>
            </div>
            <div>
            <h4 className="mb-3 text-xl font-bold font-sans mx-auto text-center">Download App</h4>
                <Link className="my-2 block" href='/'>
                    <img className="w-full h-20" src="assets/Download/apple-app.svg" alt="" />
                </Link>
                <Link className="my-2 block" href='/'>
                    <img className="w-full h-20" src="assets/Download/google-play.svg" alt="" />
                </Link>

            </div>
        </div>
    );
}