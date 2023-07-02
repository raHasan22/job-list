import Link from "next/link";
import React from "react";
import { FaBookmark, FaSearch } from 'react-icons/fa';

export default function Banner(){
    
    return (
        <div>
            <div className="card max-w-screen-2xl bg-base-100 shadow-xl my-2 mx-2 lg:my-5 image-full">
        <figure ><img src='./banner.jpg' alt="bg" className="w-100"/></figure>
        
        <div className="card-body items-center text-center my-0 lg:my-32">
            <h2 className="text-4xl lg:text-7xl font-serif text-white mb-0 lg:mb-4">1020+ <span className='text-cyan-500'>Category</span> Job’s Here</h2>
            <p className='font-mono text-white'>Jobs are available on your skills, perfect jobs  <br className="hidden lg:block" /> to make bright future & get your choose jobs become a strong.</p>
            <div className="card-actions flex-col  text-center items-center">
            <div className="form-control hidden lg:block rounded-2xl">
                <div className="input-group">
                    <input type="text" placeholder="Jobs you are looking for?" className="input input-bordered text-white" />
                    <select className="select select-bordered text-white ">
                        <option disabled selected>category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>UI/UX Design</option>
                        <option>Data Analyst</option>
                        <option>Development</option>
                        <option>Programming</option>
                    </select>
                    <button className="btn btn-square text-cyan-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <p className="font-mono text-center text-white">
                <FaBookmark className="text-cyan-500 inline-block"></FaBookmark>
                Suggested Tag: &nbsp;
                <Link className="hover:text-cyan-600" href='/'>Engineering</Link>, &nbsp;
                <Link className="hover:text-cyan-600" href='/'>Marketing</Link>, &nbsp;
                <Link className="hover:text-cyan-600" href='/'>UI/UX Design</Link>, &nbsp; 
                <br className="hidden lg:block" />
                <Link className="hover:text-cyan-600" href='/'>Data Analyst</Link>, &nbsp;
                <Link className="hover:text-cyan-600" href='/'>Development</Link>
                
            </p>
            </div>
        </div>
        </div>

        </div>
    );
};

